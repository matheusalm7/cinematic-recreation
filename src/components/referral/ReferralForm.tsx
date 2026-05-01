import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["form"];
  id?: string;
}

const phoneRegex = /^[\d\s()+\-]{8,}$/;

// Dark, transparent, single-bottom-border inputs to match the original site
const inputClass =
  "w-full bg-transparent border-0 border-b border-[hsl(var(--referral-border))] focus:border-[hsl(var(--mint))] focus:outline-none focus:ring-0 text-white placeholder:text-white/30 px-0 py-3 text-base rounded-none transition-colors";

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
      console.log("[ReferralForm] validation failed", errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      console.log("[ReferralForm] submitting", { ...result.data });
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setData(initial);
    } catch (err) {
      console.log("[ReferralForm] error", err);
      setStatus("error");
    }
  };

  const fieldError = (k: string) =>
    errors[k] ? (
      <p className="text-xs text-destructive mt-1">{errors[k]}</p>
    ) : null;

  return (
    <section id={id} className="pb-24">
      <div className="container max-w-2xl">
        <div className="rounded-2xl border border-[hsl(var(--referral-border))] bg-[hsl(var(--referral-card))]/60 backdrop-blur-sm p-6 md:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-10 gap-4">
              <CheckCircle2 className="h-14 w-14 text-[hsl(var(--mint))]" />
              <p className="text-lg font-semibold text-white">
                {content.success}
              </p>
              <Button
                variant="outline"
                onClick={() => setStatus("idle")}
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                ↺
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <Label
                  htmlFor="companyName"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.companyName}
                </Label>
                <input
                  id="companyName"
                  className={inputClass}
                  placeholder={f.companyNamePlaceholder}
                  value={data.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  maxLength={120}
                />
                {fieldError("companyName")}
              </div>

              <div>
                <Label
                  htmlFor="contactPerson"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.contactPerson}
                </Label>
                <input
                  id="contactPerson"
                  className={inputClass}
                  placeholder={f.contactPersonPlaceholder}
                  value={data.contactPerson}
                  onChange={(e) => update("contactPerson", e.target.value)}
                  maxLength={120}
                />
                {fieldError("contactPerson")}
              </div>

              <div>
                <Label
                  htmlFor="referredPhone"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.referredPhone}
                </Label>
                <input
                  id="referredPhone"
                  className={inputClass}
                  placeholder={f.referredPhonePlaceholder}
                  value={data.referredPhone}
                  onChange={(e) => update("referredPhone", e.target.value)}
                  maxLength={30}
                />
                {fieldError("referredPhone")}
              </div>

              <div>
                <Label
                  htmlFor="instagramOrSite"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.instagramOrSite}
                </Label>
                <input
                  id="instagramOrSite"
                  className={inputClass}
                  placeholder={f.instagramOrSitePlaceholder}
                  value={data.instagramOrSite}
                  onChange={(e) => update("instagramOrSite", e.target.value)}
                  maxLength={200}
                />
              </div>

              <div>
                <Label
                  htmlFor="talkedAbout"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.talkedAbout}
                </Label>
                <select
                  id="talkedAbout"
                  value={data.talkedAbout}
                  onChange={(e) =>
                    update("talkedAbout", e.target.value as "yes" | "no" | "")
                  }
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-opacity='0.5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0 center",
                    paddingRight: "1.5rem",
                  }}
                >
                  <option value="" className="bg-[hsl(var(--referral-card))]">
                    {f.talkedAboutPlaceholder}
                  </option>
                  <option value="yes" className="bg-[hsl(var(--referral-card))]">
                    {f.yes}
                  </option>
                  <option value="no" className="bg-[hsl(var(--referral-card))]">
                    {f.no}
                  </option>
                </select>
                {fieldError("talkedAbout")}
              </div>

              <div>
                <Label
                  htmlFor="yourName"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.yourName}
                </Label>
                <input
                  id="yourName"
                  className={inputClass}
                  placeholder={f.yourNamePlaceholder}
                  value={data.yourName}
                  onChange={(e) => update("yourName", e.target.value)}
                  maxLength={120}
                />
                {fieldError("yourName")}
              </div>

              <div>
                <Label
                  htmlFor="yourWhatsapp"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.yourWhatsapp}
                </Label>
                <input
                  id="yourWhatsapp"
                  className={inputClass}
                  placeholder={f.yourWhatsappPlaceholder}
                  value={data.yourWhatsapp}
                  onChange={(e) => update("yourWhatsapp", e.target.value)}
                  maxLength={30}
                />
                {fieldError("yourWhatsapp")}
              </div>

              <div>
                <Label
                  htmlFor="pixKey"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.pixKey}
                </Label>
                <input
                  id="pixKey"
                  className={inputClass}
                  placeholder={f.pixKeyPlaceholder}
                  value={data.pixKey}
                  onChange={(e) => update("pixKey", e.target.value)}
                  maxLength={150}
                />
                {fieldError("pixKey")}
              </div>

              <div>
                <Label
                  htmlFor="comment"
                  className="text-white/90 text-sm font-medium"
                >
                  {f.comment}
                </Label>
                <textarea
                  id="comment"
                  className={`${inputClass} resize-none`}
                  placeholder={f.commentPlaceholder}
                  value={data.comment}
                  onChange={(e) => update("comment", e.target.value)}
                  maxLength={1000}
                  rows={3}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {content.error}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                size="lg"
                className="mt-2 h-12 w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] gap-2"
              >
                {status === "loading" ? content.submitting : content.submit}
                {status !== "loading" && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
