interface Props {
  text: string;
}

export const ReferralFooter = ({ text }: Props) => (
  <footer className="bg-navy-deep text-white/60 py-8">
    <div className="container text-center text-sm">{text}</div>
  </footer>
);
