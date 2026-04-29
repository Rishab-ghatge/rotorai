import bgImage from "../assets/deliver.jpg";

const integrations = [
  { name: "Notion", icon: "📝", bg: "#fff" },
  { name: "Evernote", icon: "🐘", bg: "#fff" },
  { name: "Google Meet", icon: "📹", bg: "#fff" },
  { name: "Teams", icon: "💼", bg: "#fff" },
];

const socialIcons = [
  { icon: "💬", label: "WhatsApp", bg: "#25D366" },
  { icon: "🎯", label: "Custom", bg: "#1a1a1a" },
  { icon: "📸", label: "Instagram", bg: "#E1306C" },
  { icon: "💬", label: "Messenger", bg: "#0084FF" },
];

export default function Features() {
  return (
    <section className="px-6 pb-10">
      <div className="bg-[#f8f8f8] rounded-[32px] p-12 grid grid-cols-2 gap-6">
        
        <div className="flex flex-col justify-between">
          <div>
              <h2 className="text-[clamp(32px,3.5vw,52px)] font-medium leading-[1.1] tracking-[-0.5px]">
              Deliver a high-
              <br />
              quality{" "}
              <span className="bg-[#fdecc8] rounded-[14px] px-[12px] py-[4px]">
                customer
              </span>
              <br />
              <span className="bg-[#fdecc8] rounded-[14px] px-[12px] py-[4px]">
                experience
              </span>{" "}
              <span className="inline-flex items-center relative align-middle ml-2">
                <span className="flex items-center justify-center w-12 h-12 border border-black rounded-full text-[20px] bg-white z-[3]">
                  ↗
                </span>
                <span className="absolute left-5 w-12 h-12 border border-black rounded-full bg-[#e5e5e5] z-[2]" />
                <span className="absolute left-10 w-12 h-12 border border-black rounded-full bg-[#d6d6d6] z-[1]" />
              </span>
            </h2>

            <p className="text-[14px] text-[#6b6b6b] leading-[1.7] mt-8">
              Embrace AI chatbot technology in a GPT-4-supported communication
              tool to help your customers, empower your team, and reduce your
              workload.
            </p>
          </div>

          
          <div className="rounded-[24px] overflow-hidden  border-[#e5e5e5]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                
              />
              <div className="absolute inset-0 bg-[#ededed]/80" />

              <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
                {integrations.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-full w-[56px] h-[56px] flex items-center justify-center text-[22px] shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6 pt-4">
              <h4 className="text-[15px] font-semibold mb-2">
                Automate your workflow with our integrations
              </h4>
              <p className="text-[13px] text-[#777] leading-[1.6]">
                Connect Rotar AI with your customer service, sales, marketing,
                and recruitment tools using our user-friendly API, webhooks, or
                Zapier integration.
              </p>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-6">
          
          
          <div className="flex flex-col gap-5">
            
            <div className="bg-gray-200 border border-[#e6e6e6] rounded-[24px] py-3 px-7 flex flex-col gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 justify-end">
                <div className="w-7 h-7 rounded-full bg-[#d9d9d9]" />
                <span className="text-[13px] font-medium">
                  James Kokolomel
                </span>
              </div>

              <div className="bg-[#00e676] rounded-[18px_18px_6px_18px] px-4 py-2 text-[13px] font-medium self-end max-w-[80%]">
                I've forgotten my password
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[12px]">
                  🤖
                </div>
                <span className="text-[13px] font-semibold">
                  Rotar Robot
                </span>
              </div>

              <div className="bg-[#f8f8f8] border border-[#e6e6e6] rounded-[18px_18px_18px_6px] px-4 py-3 text-[12px] text-[#777] leading-[1.6]">
                No worries, we've all been in a melancholy situation like that. To reset your password, go to the login page and click on Forgot Password? Then, enter the email address and follow it.
              </div>

              
              <div className="">
                <h4 className="text-[18px] font-semibold mb-1.5">
                  Boost conversations
                  <br />
                  96% with AI
                </h4>
                <p className="text-[13px] text-[#777]">
                  Our AI-powered chatbots and automation tools are here to help.
                </p>
              </div>
            </div>

            
            <div className="bg-black text-white rounded-[24px] py-5 px-7">
              <h4 className="text-[18px] font-semibold mb-0.5">
                Centralize Your
                <br />
                Communication
              </h4>
              <p className="text-[13px] text-[#aaa] mb-2">
                Easily respond to chats from all of your channels.
              </p>

              <div className="flex flex-wrap justify-between">
                {socialIcons.map((s, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[18px] shadow-inner"
                    style={{ background: s.bg }}
                  >
                    {s.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="flex flex-col gap-5">
           
            <div className="bg-[#bdf5d7] rounded-[24px] py-4 px-7">
              <h4 className="text-[18px] font-semibold mb-2">
                Always accessible
                <br />
                with our live chat.
              </h4>
              <p className="text-[13px] text-[#3d3d3d] mb-4">
                Enhance Communication with Real-Time Live Chat.
              </p>

              <div className="bg-white rounded-[16px] p-4 space-y-3 shadow-inner">
                <div className="flex gap-2">
                  <div className="h-[10px] flex-1 bg-[#e5e5e5] rounded" />
                  <div className="h-[10px] flex-1 bg-[#e5e5e5] rounded" />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-[#dcdcdc]" />
                  <div className="h-[10px] flex-1 bg-[#e5e5e5] rounded" />
                </div>
              </div>
            </div>

            
            <div className="bg-[#00e676] rounded-[24px] px-7 py-4 flex flex-col gap-6 flex-1 items-center text-center">

              
              <div className="relative w-[180px] h-[180px]">
                <svg viewBox="0 0 120 120" className="w-full h-full rotate-[-90deg]">
                  
                 
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                  />

                  
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#000"
                    strokeWidth="10"
                    strokeDasharray="30 300"
                    
                  />
                </svg>

                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[32px] font-extrabold leading-none">
                    12,5%
                  </span>
                  <span className="text-[10px] font-semibold tracking-[2px] mt-2">
                    CONVERSATION <br /> EMPLOYEE
                  </span>
                </div>
              </div>

              
              <div>
                <h4 className="text-[22px] font-semibold leading-[1.3] text-start">
                  Gain valuable insights from your audience
                </h4>
                <p className="text-[14px] text-[#1f1f1f] leading-[1.4] text-start font-light">
                  Statistics provide valuable insights into how customers interact with Rotar AI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}