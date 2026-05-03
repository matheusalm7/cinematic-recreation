import { useEffect } from "react";
import { ReferralHero } from "./ReferralHero";
import { ReferralForm } from "./ReferralForm";
import { HowItWorksSection } from "./HowItWorksSection";
import { ReferralFooter } from "./ReferralFooter";
import { ReferralNavbar } from "./ReferralNavbar";
import { referralContent, type Locale } from "@/content/referralContent";

interface Props {
  locale: Locale;
}

export const ReferralLandingPage = ({ locale }: Props) => {
  const content = referralContent[locale];

  useEffect(() => {
    console.log("[AgnusReferralPages] mounted", { locale });
    document.title = content.meta.title;
    const setMeta = (name: string, value: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    setMeta("description", content.meta.description);
    document.documentElement.lang = locale;
  }, [locale, content.meta.description, content.meta.title]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="agnus-referral min-h-screen overflow-x-hidden">
      <ReferralNavbar
        ctaLabel={content.hero.ctaPrimary}
        onCta={() => scrollTo("referral-form")}
      />
      <ReferralHero
        content={content.hero}
        onPrimary={() => scrollTo("referral-form")}
      />
      <ReferralForm
        content={content.form}
        id="referral-form"
        locale={locale}
        page={locale === "en" ? "/refer-and-earn" : "/indique-e-ganhe"}
      />
      <HowItWorksSection
        content={content.how}
        id="how-it-works"
        onPrimary={() => scrollTo("referral-form")}
      />
      <ReferralFooter content={content.footer} />
    </main>
  );
};
