import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-[24px] pb-[40px]">
      <div className="bg-white rounded-[32px] p-[48px] grid grid-cols-2 gap-[40px]">

        
        <div className="flex flex-col justify-around">

          
          <div>
            <h1 className="text-[56px] leading-[1.2] font-medium text-black">
              Website Development <br />
              & Designing for{' '}
              <span className="bg-[#bcfdce] px-[10px] py-[6px] rounded-[18px] inline-block">
                Business Growth
              </span>
              <span className="inline-flex ml-[12px] align-middle">
                <span className="w-[42px] h-[42px] bg-black rounded-full"></span>
                <span className="w-[42px] h-[42px] border-2 border-black rounded-full ml-[-14px]"></span>
              </span>
            </h1>

            <p className="text-[15px] text-gray-600 mt-[44px] max-w-[420px] leading-[1.7]">
              Embrace AI chatbot technology in a GPT-4-supported communication tool to help your customers, empower your team, and reduce your workload.
            </p>
          </div>

          
          <div className="bg-[#ffe9b2] rounded-[28px] px-[28px] py-[26px] w-[420px] mt-[40px]">
            <h3 className="text-[20px] font-semibold leading-[1.4] mb-[10px]">
              Guide: The Rotar AI <br /> Tutorial Hand Book
            </h3>
            <p className="text-[14px] text-gray-600 leading-[1.6]">
              Everything you need to know about the first steps in chatbots.
            </p>
          </div>

        </div>

        
        <div className="flex flex-col gap-[20px]">

          
          <div className="bg-[#fdfdfd] border-[14px] border-[#ffe9b2] rounded-[28px] p-[28px]">
            <p className="font-semibold text-[18px] mb-[20px] text-black">
              You can start with just one click.
            </p>

            <div className="flex flex-col gap-[16px]">

              <div>
                <label className="text-[14px] text-gray-700 mb-[6px] block">Name</label>
                <input className="w-full rounded-[12px] px-[16px] py-[12px]  border border-gray-300 text-[14px]" placeholder="Name" />
              </div>

              <div className="grid grid-cols-2 gap-[12px]">
                <div>
                  <label className="text-[14px] text-gray-700 mb-[6px] block">Email</label>
                  <input className="w-full rounded-[12px] px-[16px] py-[12px]  border border-gray-300 text-[14px]" placeholder="Email" />
                </div>

                <div>
                  <label className="text-[14px] text-gray-700 mb-[6px] block">Phone No</label>
                  <input className="w-full rounded-[12px] px-[16px] py-[12px]  border border-gray-300 text-[14px]" placeholder="Phone No" />
                </div>
              </div>

              <div>
                <label className="text-[14px] text-gray-700 mb-[6px] block">Service</label>
                <div className="relative">
                  <select className="w-full rounded-[12px] px-[16px] py-[12px]  border border-gray-300 text-[14px] appearance-none">
                    <option>Service</option>
                  </select>
                  <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              <div className="flex justify-end mt-[10px]">
                <button className="flex items-center gap-[8px] bg-[#00e96a] text-black px-[24px] py-[12px] rounded-full text-[15px] font-medium">
                  Submit <ArrowUpRight size={18} />
                </button>
              </div>

            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-[16px]">

            <div className="bg-[#bcfdce] rounded-[24px] p-[20px]">
              <div className="text-[45px] font-medium">+ 500</div>
              <p className="text-[14px] mt-[6px] font-light">
                Big companies use Rotar AI for their services
              </p>
            </div>

            <div className="bg-gradient-to-r from-black to-[#222] rounded-[24px] p-[20px] text-white">
              <div className="text-[32px] tracking-[4px]">✦ ✦ ✦</div>
              <p className="text-[22px] font-medium leading-[1.3]">
                AI-driven <br /> customer service
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Company logos bar */}
        <div className="flex items-center justify-around pt-10 pb-1 px-6">
          <span className="text-xl font-medium text-[#909090]">Company</span>
          <span className="text-xl font-medium text-[#909090]">Company</span>
          <span className="text-xl font-medium text-[#909090]">Company</span>
          <span className="text-xl font-medium text-[#909090]">Company</span>
          <span className="text-xl font-medium text-[#909090]">Company</span>
          <span className="text-xl font-medium text-[#909090]">Company</span>
        </div>
    </section>
  );
}