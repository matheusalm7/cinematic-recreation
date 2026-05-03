import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, AlertCircle, ArrowRight, Check } from "lucide-react";
import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["form"];
  id?: string;
}

const phoneRegex = /^[\d\s()+\-]{8,}$/;

export const ReferralForm = ({ content, id }: Props) => {
  const f = content.fields;
  const schema = z.object({
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
    yourWhatsapp: z
      .string()
      .trim()
      .min(1, content.required)
      .regex(phoneRegex, content.invalidPhone)
      .max(30),
    pixKey: z.string().trim().min(1, content.required).max(150),
    comment: z.string().trim().max(1000).optional().or(z.literal("")),
  });

  type FormState = {
    companyName: string;
    contactPerson: string;
    referredPhone: string;
    instagramOrSite: string;
    talkedAbout: "yes" | "no" | "";
    yourName: string;
    yourWhatsapp: string;
    pixKey: string;
    comment: string;
  };

  const initial: FormState = {
    companyName: "",
    contactPerson: "",
    referredPhone: "",
    instagramOrSite: "",
    talkedAbout: "",
    yourName: "",
    yourWhatsapp: "",
    pixKey: "",
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
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      console.log("[AgnusReferralPages] validation failed", errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      console.log("[AgnusReferralPages] submitting referral");
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setData(initial);
    } catch (err) {
      console.log("[AgnusReferralPages] error", err);
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
            <ul className="mt-7 space-y-3">
              {content.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(159,232,112,0.12)",
                      border: "1px solid rgba(200,255,155,0.30)",
                    }}
                  >
                    <Check className="h-3.5 w-3.5 ag-accent" />
                  </span>
                  <span style={{ color: "var(--ag-text)" }}>{b}</span>
                </li>
              ))}
            </ul>
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
                  <Field name="yourWhatsapp" label={f.yourWhatsapp}>
                    <input
                      id="yourWhatsapp"
                      className="ag-input"
                      placeholder={f.yourWhatsappPlaceholder}
                      value={data.yourWhatsapp}
                      onChange={(e) => update("yourWhatsapp", e.target.value)}
                      maxLength={30}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field name="pixKey" label={f.pixKey}>
                      <input
                        id="pixKey"
                        className="ag-input"
                        placeholder={f.pixKeyPlaceholder}
                        value={data.pixKey}
                        onChange={(e) => update("pixKey", e.target.value)}
                        maxLength={150}
                      />
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
