import { ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: 'Engage',
    desc: 'Reach out to visitors proactively using personalized chatbot greetings. Turn website visits into sales opportunities.',
    highlight: true,
  },
  {
    title: 'Nurture',
    desc: 'Lead customers to a sale through recommended purchases and tailored offerings.',
  },
  {
    title: 'Qualify',
    desc: 'Generate and qualify prospects automatically. Transfer high-intent leads to your sales reps in real time to shorten the sales cycle.',
  },
];

export default function Redefining() {
  return (
    <section className="px-6 pb-10">
      
      <div className="bg-white rounded-t-[28px] px-12 pt-12 pb-10 grid grid-cols-[1fr_1.6fr] gap-10 items-center mb-[2px]">
        
        <div className="flex flex-col gap-7">
          <p className="text-[14px] text-[#777777] leading-[1.7]">
            Throughout your customer's entire buying<br />
            journey, Rotar AI allow you to delight them<br />
            at every step of the way, from their first<br />
            visit to the final purchase.
          </p>

          <button className="flex items-center gap-[10px] bg-black text-white rounded-full px-7 py-[14px] text-[15px] font-semibold w-fit transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
            Get Started <ArrowUpRight size={16} />
          </button>
        </div>

        <div>
          <h2 className="text-[clamp(28px,3vw,42px)] font-medium leading-[1.3]">
            <span className="bg-[#bcfdce] rounded-[10px] px-2 py-[2px]">
              Redefining
            </span>{' '}
            Conversations<br />
            and{' '}
            <span className="bg-[#bcfdce] rounded-[10px] px-2 py-[2px]">
              Enhancing
            </span>{' '}
            User<br />
            experience{' '}
            <span className="inline-flex items-center align-middle">
              <span className="flex items-center gap-[6px] border-2 border-black rounded-full px-4 py-[6px]">
                <span className="text-[20px]">◎</span>
                <span className="text-[18px] font-bold">→</span>
              </span>
            </span>
          </h2>
        </div>

      </div>

      
      <div className="bg-white rounded-b-[28px] p-12 grid grid-cols-[1fr_1.4fr] gap-10 items-center">
        
        <div className="flex flex-col gap-7">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-5 px-6 rounded-[16px] transition-colors ${
                f.highlight ? 'bg-[#fff6cc]' : ''
              }`}
            >
              <h4 className="text-[16px] font-bold mb-2">{f.title}</h4>
              <p className="text-[13px] text-[#777777] leading-[1.7]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

       
        <div className="flex items-center justify-center">
          <div className="bg-[#C8F5DC] rounded-[24px] p-8 w-full min-h-[360px] relative flex items-end justify-center">
            
            <div className="relative w-[280px] z-[2]">
              <div className="w-[280px] h-[180px] bg-[#111] rounded-t-[12px] border-[6px] border-[#333]" />
              <div className="w-full h-[14px] bg-[#222] rounded-b-[6px]" />
              <div className="text-center text-[10px] text-[#555] mt-[2px]">
                MacBook
              </div>
            </div>

            <div className="absolute left-[28px] bottom-[24px] z-[3] w-[90px] h-[180px] bg-[#111] rounded-[16px] border-[4px] border-[#333] flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[12px]" />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}