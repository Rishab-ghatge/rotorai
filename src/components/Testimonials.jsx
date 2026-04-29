import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Mbida Messi',
    role: 'Founder ERC Music Market Store',
    quote:
      'I was amazed by the level of assistance I received from the AI Chatbot provided by ROTAR AI. It quickly understood my questions and provided accurate and helpful responses.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    quote:
      'Rotar AI completely transformed how we handle customer inquiries. Our response time dropped by 80% and customer satisfaction scores went through the roof.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'Head of Operations, RetailMax',
    quote:
      'The integration was seamless and the results were immediate. We saw a 40% reduction in support tickets within the first month. Incredible product.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Amara Osei',
    role: 'Marketing Director, GrowthLab',
    quote:
      'GPT-4 powered chatbots from Rotar AI have given us a serious competitive edge. Our lead conversion rate doubled after deploying the solution.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="px-10 py-16 bg-[#f7f7f7]">
      
      <div className="bg-[#efefef] rounded-[40px] p-10 flex flex-col gap-10">

        
        <div className="grid grid-cols-2 gap-10 items-start">
          <h2 className="text-[clamp(36px,4vw,56px)] font-medium leading-[1.1]">
            What top-tier companies
            <br />
            tell about our product
          </h2>

          <p className="text-[15px] text-[#555] leading-[1.7] max-w-[360px]">
            Join the growing number of businesses and companies that have
            experienced the transformative impact of our chatbot services.
          </p>
        </div>

        
        <div className="grid grid-cols-[380px_1fr] gap-10 items-stretch">

          
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: '40px 120px 40px 40px',
            }}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 text-[#00e676]">
              <p className="text-[22px] font-semibold">{t.name}</p>
              <p className="text-[14px] opacity-90">{t.role}</p>
            </div>
          </div>

          
          <div className="flex flex-col justify-between">

            
            <div
              className="bg-[#00e676] p-10 flex flex-col gap-6"
              style={{
                borderRadius: '40px 120px 40px 40px',
              }}
            >
              <div className="flex items-center gap-2 border border-black/30 rounded-full px-4 py-2 text-[13px] w-fit bg-white/20">
                <span className="text-lg">“</span>
                Client Testimonial
              </div>

              <p className="text-[22px] leading-[1.6] max-w-[600px]">
                {t.quote}
              </p>
            </div>

            
            <div className="flex items-center justify-between mt-6">

              
              <div className="flex items-center gap-3">

                <button
                  onClick={prev}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-black/70 text-[14px] hover:bg-black hover:text-white transition"
                >
                  ←
                </button>

                <div className="border border-black/70 rounded-full px-4 py-1.5 text-[13px]">
                  {current + 1} / {testimonials.length}
                </div>

                <button
                  onClick={next}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-black/70 text-[14px] hover:bg-black hover:text-white transition"
                >
                  →
                </button>

              </div>

              
              <button className="flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-[14px] hover:opacity-90 transition">
                See more testimonials <ArrowUpRight size={16} />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}