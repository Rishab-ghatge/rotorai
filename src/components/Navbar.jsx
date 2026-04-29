import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="relative flex items-center px-[40px] h-[80px] bg-[#f5f5f5]">
      <div className="flex items-center"></div>

      <ul className="flex items-center gap-[40px] absolute left-1/2 -translate-x-1/2">
        <li><a href="#" className="text-[15px] text-gray-700 font-normal transition-opacity duration-200 hover:opacity-60">Product</a></li>
        <li><a href="#" className="text-[15px] text-gray-700 font-normal transition-opacity duration-200 hover:opacity-60">Solutions</a></li>
        <li><a href="#" className="text-[15px] text-gray-700 font-normal transition-opacity duration-200 hover:opacity-60"> Resources</a></li>
        <li><a href="#" className="text-[15px] text-gray-700 font-normal transition-opacity duration-200 hover:opacity-60"> Pricing</a></li>
      </ul>
      
      <button className="ml-auto flex items-center gap-[8px] bg-[#00e96a] text-black rounded-full px-[24px] py-[12px] text-[15px] font-medium transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,233,106,0.4)]">
        Book a demo <ArrowUpRight size={18} />
      </button>

    </nav>
  );
}