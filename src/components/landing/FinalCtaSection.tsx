import { ArrowRight } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section
      id="contato"
      className="relative bg-[#042d1f] text-[#f1ead4] py-32 md:py-40 overflow-hidden border-t border-[#f1ead4]/10"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
      />
      <div className="absolute -right-40 top-1/3 w-[600px] h-[600px] bg-[#f1ead4]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border-b border-[#f1ead4]/10 pb-8 mb-16 flex justify-between items-end">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/60">
            [ Vamos conversar / 2026 ]
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40">
            Booking next quarter
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h2
              className="text-[12vw] lg:text-[9vw] leading-[0.85] tracking-tighter text-[#f1ead4] italic uppercase"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let&apos;s build<br />
              <span className="not-italic">something</span><br />
              <span className="underline decoration-1 underline-offset-[14px]">extraordinary.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-lg md:text-xl text-[#f1ead4]/75 leading-relaxed max-w-md">
              Tell us about your business. We&apos;ll architect the perception that makes you the obvious choice — long before the first conversation.
            </p>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full border-b border-[#f1ead4]/20 bg-transparent py-4 text-sm uppercase tracking-[0.2em] text-[#f1ead4] placeholder:text-[#f1ead4]/40 focus:outline-none focus:border-[#f1ead4] transition-colors"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full border-b border-[#f1ead4]/20 bg-transparent py-4 text-sm uppercase tracking-[0.2em] text-[#f1ead4] placeholder:text-[#f1ead4]/40 focus:outline-none focus:border-[#f1ead4] transition-colors"
              />
              <textarea
                rows={2}
                placeholder="TELL US ABOUT YOUR PROJECT"
                className="w-full border-b border-[#f1ead4]/20 bg-transparent py-4 text-sm uppercase tracking-[0.2em] text-[#f1ead4] placeholder:text-[#f1ead4]/40 focus:outline-none focus:border-[#f1ead4] transition-colors resize-none"
              />
              <button
                type="submit"
                className="group mt-6 w-full px-10 py-6 bg-[#f1ead4] text-[#042d1f] text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors flex items-center justify-between"
              >
                Send message
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
