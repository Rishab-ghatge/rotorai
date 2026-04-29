export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] rounded-[32px] mt-[40px] mx-[24px] pt-[64px] px-[64px] pb-[36px] text-white">
      
      
      <div className="grid grid-cols-[1fr_auto] gap-[80px] mb-[48px]">
        
        
        <div className="grid grid-cols-[repeat(3,180px)] gap-[60px]">
          
          <div>
            <h5 className="text-xl font-semibold mb-[22px] text-white">
              Company
            </h5>
            <ul className="flex flex-col gap-[16px]">
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">About Rotar AI</a></li>
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Demo</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-[22px] text-white">
              Recources
            </h5>
            <ul className="flex flex-col gap-[16px]">
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Events</a></li>
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Tool Library</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-[22px] text-white">
              Legal
            </h5>
            <ul className="flex flex-col gap-[16px]">
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="text-[15px] text-white/70 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        
        <div className="max-w-[360px]">
          <p className="text-[15px] font-light text-white leading-[1.8]">
            We are at the forefront of AI chatbot development,
            revolutionizing the way businesses engage with their
            customers.
          </p>
        </div>

      </div>

      <div className="h-[1px] w-full bg-white/10 mb-[32px]" />

      <div className="flex items-center gap-[24px]">

        <div className="flex gap-[14px]">
          <button className="border border-white rounded-full px-5 py-1.5 text-[14px] text-white hover:text-white hover:border-white transition">
            Instagram
          </button>

          <button className="border border-white rounded-full px-5 py-1.5 text-[14px] text-white hover:text-white hover:border-white transition">
            LinkedIn
          </button>

          <button className="border border-white rounded-full px-5 py-1.5 text-[14px] text-white hover:text-white hover:border-white transition">
            Twitter
          </button>

          <button className="border border-white rounded-full px-5 py-1.5 text-[14px] text-white hover:text-white hover:border-white transition">
            Github
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center gap-[10px] border border-white rounded-full px-[28px] py-2 text-[14px] text-white">
          <span className="text-white">◉</span>
          <span>Rotar AI. All Rights Reserved</span>
        </div>

      </div>
    </footer>
  );
}