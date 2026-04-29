import { ArrowUpRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="px-6 py-10">
      <div className="relative overflow-hidden px-14 py-16 grid grid-cols-[1fr_auto] gap-10 items-center
                      bg-[#00e676] rounded-[28px]
                      before:absolute before:top-0 before:right-0 before:w-[190px] before:h-[90px]
                      before:bg-gray-200 before:rounded-bl-[18px]
                      after:absolute after:bottom-0 after:left-0 after:w-[120px] after:h-[120px]">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]" />
        </div>

        <div className="flex flex-col gap-4 relative z-10">
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-medium leading-[1.15] text-black">
            Take control of your productivity<br />
            with a GPT-4 chatbot now
          </h2>

          <p className="text-[14px] text-[rgba(0,0,0,0.6)] leading-[1.7]">
            Transform your Customer Service with Rotar's AI and<br />
            GPT-4 Powered Chatbot Solution. Try it free now.
          </p>
        </div>

        <div className="flex gap-[14px] shrink-0 relative z-10">
          <button className="flex items-center gap-2 bg-black text-white rounded-full px-[26px] py-[14px] text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-[2px]">
            Book a Demo <ArrowUpRight size={16} />
          </button>

          <button className="flex items-center gap-2 bg-transparent text-black border-2 border-black rounded-full px-[26px] py-[14px] text-[15px] font-semibold transition-colors duration-200 hover:bg-[rgba(0,0,0,0.08)]">
            Contact Us <Phone size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}