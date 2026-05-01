import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["footer"];
}

export const ReferralFooter = ({ content }: Props) => (
  <footer className="border-t border-[hsl(var(--referral-border))]/60 py-6">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-white/60 text-sm">
      <p>{content.copyright}</p>
      <p className="flex items-center gap-1.5">
        {content.madeWith}
        <span aria-hidden className="text-primary">💙</span>
        {content.madeWithSuffix}
      </p>
    </div>
  </footer>
);
