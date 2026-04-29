import { ArrowUpRight } from 'lucide-react';

const categories = [
  'E-Commerce',
  'Education',
  'Health Care',
  'Financial',
  'HR',
  'Tourism',
];

const templates = [
  {
    title: 'Chatbot for Marketing',
    desc: 'Provide recommendations and process transactions in a chat.',
    messages: [
      {
        type: 'bot',
        text:
          "Great! Happy to help you find the right plan 🎉\nWhat are you looking to do with Rotar AI?",
      },
      { type: 'user', text: 'Get more customers on my website page' },
    ],
  },
  {
    title: 'Chatbot for HR',
    desc: 'Find talent and interact with candidates in an innovative way',
    messages: [
      {
        type: 'bot',
        text:
          'You have qualified for the next round of interview, Alvarez! Please let me know your availability 🙌',
      },
      { type: 'user', text: 'Any time between 2 to 5 PM tomorrow' },
    ],
  },
  {
    title: 'Chatbot for E-Commerce',
    desc: 'Optimise e-commerce experience and give personalised support',
    messages: [
      {
        type: 'bot',
        text:
          "Great! Happy to help you find the right plan 🎉\nWhat are you looking to do with Rotar AI?",
      },
      { type: 'user', text: 'Get more customers on my website page' },
    ],
  },
];

export default function Templates() {
  return (
    <section className="px-24 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-center">
        
       
        <div className="flex flex-col gap-8 max-w-[420px]">
            <h2 className="text-[clamp(36px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.5px]">
              <span className="whitespace-nowrap">
                Use{' '}
                <span className="bg-[#bcfdce] rounded-[14px] px-3 py-1 inline-block">
                  templates
                </span>
              </span>
              <br />
              to get started
              <br />
              your project
            </h2>

            <div className="flex flex-wrap gap-3 max-w-[360px]">
              {categories.map((c, i) => (
                <button
                  key={i}
                  className="border border-[#d1d5db] text-[#333] rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 hover:bg-black hover:text-white"
                >
                  {c}
                </button>
              ))}
            </div>
        </div>

        
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-none">
          {templates.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] min-w-[300px] max-w-[320px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex-shrink-0 overflow-hidden flex flex-col"
            >
              
              
              <div className="bg-[#eeeeee] p-5 flex flex-col gap-3 min-h-[220px] rounded-[20px] m-3">
                {t.messages.map((m, j) => (
                  <div
                    key={j}
                    className={
                      m.type === 'user'
                        ? 'bg-[#00e676] rounded-[18px] px-4 py-3 text-[12px] text-black font-medium self-end max-w-[85%]'
                        : 'bg-white rounded-[18px] px-4 py-3 text-[12px] text-[#222] leading-[1.5] max-w-[85%] whitespace-pre-line shadow-sm'
                    }
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              
              <div className="p-5 pt-2 flex flex-col gap-3">
                <h4 className="text-[18px] font-semibold">{t.title}</h4>

                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  {t.desc}
                </p>

                <button className="flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-[14px] font-medium w-fit mt-2 hover:opacity-90 transition">
                  Try template for free
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}