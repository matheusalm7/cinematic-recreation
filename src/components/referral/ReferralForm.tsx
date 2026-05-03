import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import type { ReferralContent } from "@/content/referralContent";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  content: ReferralContent["form"];
  id?: string;
  locale?: "pt" | "en";
  page?: string;
}

const phoneRegex = /^[\d\s()+\-]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ReferralForm = ({ content, id, locale = "pt", page = "/" }: Props) => {
  const f = content.fields;
  const hasEmail = !!f.yourEmail;
  const hasPayoutSelect = (f.payoutOptions?.length ?? 0) > 0;

  const schemaShape: Record<string, z.ZodTypeAny> = {
    companyName: z.string().trim().min(1, content.required).max(120),
    contactPerson: z.string().trim().min(1, content.required).max(120),
    referredPhone: z
      .string()
      .trim()
      .min(1, content.required)
      .regex(phoneRegex, content.invalidPhone)
      .max(30),
    instagramOrSite: z.string().trim().max(200).optional().or(z.literal("")),
    talkedAbout: z.enum(["yes", "no"], { message: content.required }),
    yourName: z.string().trim().min(1, content.required).max(120),
    yourPhone: z
      .string()
      .trim()
      .min(1, content.required)
      .regex(phoneRegex, content.invalidPhone)
      .max(30),
    payout: z.string().trim().min(1, content.required).max(150),
    comment: z.string().trim().max(1000).optional().or(z.literal("")),
  };
  if (hasEmail) {
    schemaShape.yourEmail = z
      .string()
      .trim()
      .min(1, content.required)
      .regex(emailRegex, content.invalidEmail)
      .max(150);
  }
  const schema = z.object(schemaShape);

  type FormState = {
    companyName: string;
    contactPerson: string;
    referredPhone: string;
    instagramOrSite: string;
    talkedAbout: "yes" | "no" | "";
    yourName: string;
    yourPhone: string;
    yourEmail: string;
    payout: string;
    comment: string;
  };

  const initial: FormState = {
    companyName: "",
    contactPerson: "",
    referredPhone: "",
    instagramOrSite: "",
    talkedAbout: "",
    yourName: "",
    yourPhone: "",
    yourEmail: "",
    payout: "",
    comment: "",
  };

  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((p) => ({ ...p, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: Record<string, unknown> = { ...data };
    if (!hasEmail) delete payload.yourEmail;
    const result = schema.safeParse(payload);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      console.log("[AgnusReferralRefinement] validation failed", errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      console.log("[AgnusReferralForm] submitting referral", { locale, page });
      const cleanData: Record<string, string> = {};
      Object.entries(data).forEach(([k, v]) => {
        if (v && String(v).trim() !== "") {
          if (k === "talkedAbout") {
            cleanData[k] = v === "yes" ? f.yes : f.no;
          } else {
            cleanData[k] = String(v);
          }
        }
      });

      const { data: resData, error } = await supabase.functions.invoke(
        "send-referral",
        { body: { locale, page, data: cleanData } },
      );
      if (error) throw error;
      console.log("[AgnusReferralForm] send-referral ok", resData);

      // WhatsApp fallback: open wa.me with prefilled message in a new tab
      try {
        const lines: string[] = [];
        const title =
          locale === "en"
            ? "New referral submitted to Agnus"
            : "Nova indicação recebida pela Agnus";
        lines.push(title, "", `${locale === "en" ? "Page" : "Página"}: ${page}`);
        const labels: Record<string, string> =
          locale === "en"
            ? {
                companyName: "Referred business name",
                contactPerson: "Business contact name",
                referredPhone: "Business phone number",
                instagramOrSite: "Website/Instagram",
                talkedAbout: "Spoken with Agnus before",
                yourName: "Your full name",
                yourPhone: "Your phone number",
                yourEmail: "Your email",
                payout: "Preferred payout method",
                comment: "Notes",
              }
            : {
                companyName: "Negócio indicado",
                contactPerson: "Pessoa de contato",
                referredPhone: "Telefone do indicado",
                instagramOrSite: "Site/Instagram",
                talkedAbout: "Já conversou com a Agnus",
                yourName: "Seu nome",
                yourPhone: "Seu WhatsApp",
                yourEmail: "Seu email",
                payout: "Chave PIX",
                comment: "Comentário",
              };
        Object.entries(cleanData).forEach(([k, v]) => {
          lines.push(`${labels[k] ?? k}: ${v}`);
        });
        const msg = encodeURIComponent(lines.join("\n"));
        // Open one wa.me link (browsers block multiple popups). The other number
        // also receives the email notification, ensuring no data loss.
        const waUrl = `https://wa.me/5527992688011?text=${msg}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (waErr) {
        console.log("[AgnusReferralForm] wa.me fallback skipped", waErr);
      }

      setStatus("success");
      setData(initial);
    } catch (err) {
      console.log("[AgnusReferralForm] error", err);
      setStatus("error");
    }
  };

  const fieldError = (k: string) =>
    errors[k] ? (
      <p className="text-xs mt-1.5" style={{ color: "#FFB4A2" }}>
        {errors[k]}
      </p>
    ) : null;

  const Field = ({
    name,
    label,
    children,
  }: {
    name: string;
    label: string;
    children: React.ReactNode;
  }) => (
    <div>
      <label htmlFor={name} className="ag-label">
        {label}
      </label>
      {children}
      {fieldError(name)}
    </div>
  );

  return (
    <section id={id} className="pb-24 md:pb-28">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:pt-4">
            <span className="ag-badge">{content.badge}</span>
            <h2 className="mt-5 font-[Sora] text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight">
              {content.sideHeadline}
            </h2>
            <p
              className="mt-5 text-base md:text-lg leading-relaxed"
              style={{ color: "var(--ag-text-soft)" }}
            >
              {content.sideSubheadline}
            </p>
          </div>

          {/* Right column - Form card */}
          <div className="ag-form-card">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <CheckCircle2 className="h-14 w-14 ag-accent" />
                <p className="text-lg font-semibold">{content.success}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="ag-btn-secondary h-10 px-5 text-sm"
                >
                  ↺
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-[Sora] text-2xl md:text-[28px] font-semibold tracking-tight">
                    {content.title}
                  </h3>
                  <p
                    className="mt-2 text-sm md:text-base"
                    style={{ color: "var(--ag-text-soft)" }}
                  >
                    {content.subtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field name="companyName" label={f.companyName}>
                    <input
                      id="companyName"
                      className="ag-input"
                      placeholder={f.companyNamePlaceholder}
                      value={data.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      maxLength={120}
                    />
                  </Field>
                  <Field name="contactPerson" label={f.contactPerson}>
                    <input
                      id="contactPerson"
                      className="ag-input"
                      placeholder={f.contactPersonPlaceholder}
                      value={data.contactPerson}
                      onChange={(e) => update("contactPerson", e.target.value)}
                      maxLength={120}
                    />
                  </Field>
                  <Field name="referredPhone" label={f.referredPhone}>
                    <input
                      id="referredPhone"
                      className="ag-input"
                      placeholder={f.referredPhonePlaceholder}
                      value={data.referredPhone}
                      onChange={(e) => update("referredPhone", e.target.value)}
                      maxLength={30}
                    />
                  </Field>
                  <Field name="instagramOrSite" label={f.instagramOrSite}>
                    <input
                      id="instagramOrSite"
                      className="ag-input"
                      placeholder={f.instagramOrSitePlaceholder}
                      value={data.instagramOrSite}
                      onChange={(e) => update("instagramOrSite", e.target.value)}
                      maxLength={200}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field name="talkedAbout" label={f.talkedAbout}>
                      <select
                        id="talkedAbout"
                        value={data.talkedAbout}
                        onChange={(e) =>
                          update(
                            "talkedAbout",
                            e.target.value as "yes" | "no" | "",
                          )
                        }
                        className="ag-input"
                      >
                        <option value="">{f.talkedAboutPlaceholder}</option>
                        <option value="yes">{f.yes}</option>
                        <option value="no">{f.no}</option>
                      </select>
                    </Field>
                  </div>
                  <Field name="yourName" label={f.yourName}>
                    <input
                      id="yourName"
                      className="ag-input"
                      placeholder={f.yourNamePlaceholder}
                      value={data.yourName}
                      onChange={(e) => update("yourName", e.target.value)}
                      maxLength={120}
                    />
                  </Field>
                  <Field name="yourPhone" label={f.yourPhone}>
                    <input
                      id="yourPhone"
                      className="ag-input"
                      placeholder={f.yourPhonePlaceholder}
                      value={data.yourPhone}
                      onChange={(e) => update("yourPhone", e.target.value)}
                      maxLength={30}
                    />
                  </Field>
                  {hasEmail && (
                    <div className="sm:col-span-2">
                      <Field name="yourEmail" label={f.yourEmail}>
                        <input
                          id="yourEmail"
                          type="email"
                          className="ag-input"
                          placeholder={f.yourEmailPlaceholder}
                          value={data.yourEmail}
                          onChange={(e) => update("yourEmail", e.target.value)}
                          maxLength={150}
                        />
                      </Field>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <Field name="payout" label={f.payout}>
                      {hasPayoutSelect ? (
                        <select
                          id="payout"
                          value={data.payout}
                          onChange={(e) => update("payout", e.target.value)}
                          className="ag-input"
                        >
                          <option value="">{f.payoutPlaceholder}</option>
                          {f.payoutOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id="payout"
                          className="ag-input"
                          placeholder={f.payoutPlaceholder}
                          value={data.payout}
                          onChange={(e) => update("payout", e.target.value)}
                          maxLength={150}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field name="comment" label={f.comment}>
                      <textarea
                        id="comment"
                        className="ag-input"
                        placeholder={f.commentPlaceholder}
                        value={data.comment}
                        onChange={(e) => update("comment", e.target.value)}
                        maxLength={1000}
                        rows={4}
                      />
                    </Field>
                  </div>

                  {status === "error" && (
                    <div
                      className="sm:col-span-2 flex items-center gap-2 text-sm"
                      style={{ color: "#FFB4A2" }}
                    >
                      <AlertCircle className="h-4 w-4" />
                      {content.error}
                    </div>
                  )}

                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="ag-btn-primary h-12 w-full inline-flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === "loading" ? content.submitting : content.submit}
                      {status !== "loading" && <ArrowRight className="h-4 w-4" />}
                    </button>
                    <p
                      className="text-center text-xs mt-3"
                      style={{ color: "var(--ag-text-mute)" }}
                    >
                      {content.microcopy}
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
