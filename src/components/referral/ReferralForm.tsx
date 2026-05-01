import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, AlertCircle } from "lucide-react";
import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["form"];
  id?: string;
}

const phoneRegex = /^[\d\s()+\-]{8,}$/;

export const ReferralForm = ({ content, id }: Props) => {
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    errors[k] ? <p className="text-xs text-destructive mt-1">{errors[k]}</p> : null;

  return (
    <section id={id} className="bg-light-soft py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 md:p-10 border border-border">
          <h2 className="font-[Sora] text-2xl md:text-3xl font-bold text-foreground">
            {content.title}
          </h2>
          <p className="text-muted-foreground mt-2">{content.subtitle}</p>

          {status === "success" ? (
            <div className="mt-8 flex flex-col items-center text-center py-10 gap-4">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <p className="text-lg font-semibold text-foreground">{content.success}</p>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                ↺
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <Label htmlFor="companyName">{content.fields.companyName} *</Label>
                <Input
                  id="companyName"
                  value={data.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  maxLength={120}
                />
                {fieldError("companyName")}
              </div>

              <div>
                <Label htmlFor="contactPerson">{content.fields.contactPerson} *</Label>
                <Input
                  id="contactPerson"
                  value={data.contactPerson}
                  onChange={(e) => update("contactPerson", e.target.value)}
                  maxLength={120}
                />
                {fieldError("contactPerson")}
              </div>

              <div>
                <Label htmlFor="referredPhone">{content.fields.referredPhone} *</Label>
                <Input
                  id="referredPhone"
                  value={data.referredPhone}
                  onChange={(e) => update("referredPhone", e.target.value)}
                  maxLength={30}
                />
                {fieldError("referredPhone")}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="instagramOrSite">{content.fields.instagramOrSite}</Label>
                <Input
                  id="instagramOrSite"
                  value={data.instagramOrSite}
                  onChange={(e) => update("instagramOrSite", e.target.value)}
                  maxLength={200}
                />
              </div>

              <div className="md:col-span-2">
                <Label>{content.fields.talkedAbout} *</Label>
                <RadioGroup
                  value={data.talkedAbout}
                  onValueChange={(v) => update("talkedAbout", v as "yes" | "no")}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="talked-yes" />
                    <Label htmlFor="talked-yes" className="cursor-pointer">
                      {content.fields.yes}
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="talked-no" />
                    <Label htmlFor="talked-no" className="cursor-pointer">
                      {content.fields.no}
                    </Label>
                  </div>
                </RadioGroup>
                {fieldError("talkedAbout")}
              </div>

              <div>
                <Label htmlFor="yourName">{content.fields.yourName} *</Label>
                <Input
                  id="yourName"
                  value={data.yourName}
                  onChange={(e) => update("yourName", e.target.value)}
                  maxLength={120}
                />
                {fieldError("yourName")}
              </div>

              <div>
                <Label htmlFor="yourWhatsapp">{content.fields.yourWhatsapp} *</Label>
                <Input
                  id="yourWhatsapp"
                  value={data.yourWhatsapp}
                  onChange={(e) => update("yourWhatsapp", e.target.value)}
                  maxLength={30}
                />
                {fieldError("yourWhatsapp")}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="pixKey">{content.fields.pixKey} *</Label>
                <Input
                  id="pixKey"
                  value={data.pixKey}
                  onChange={(e) => update("pixKey", e.target.value)}
                  maxLength={150}
                />
                {fieldError("pixKey")}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="comment">{content.fields.comment}</Label>
                <Textarea
                  id="comment"
                  value={data.comment}
                  onChange={(e) => update("comment", e.target.value)}
                  maxLength={1000}
                  rows={4}
                />
              </div>

              {status === "error" && (
                <div className="md:col-span-2 flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {content.error}
                </div>
              )}

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  size="lg"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  {status === "loading" ? content.submitting : content.submit}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
