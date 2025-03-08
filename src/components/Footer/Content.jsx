import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

export default function Content() {
  return (
    <div className="bg-white py-4 md:py-8 px-4 md:px-12 h-full w-full flex flex-col justify-between text-gray-800">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="mt-4 md:mt-0">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0 mt-8 md:mt-10">
      <h1 className="leading-[0.8] mt-10 font-playfair italic text-center md:text-left">
        <span className="text-[4rem] md:text-[8rem] lg:text-[14rem] block md:inline py-2">Insprano</span>
        <span className="text-xl md:text-3xl py-2">X udaan</span>
      </h1>
      <p className="font-playfair italic">GCEK KILOBOTS©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row shrink-0 gap-8 md:gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-600 font-playfair">Contact</h3>
        <a href="http://instagram.com/gcek.insprano/" className="hover:text-black transition-colors">Instagram</a>
        <p className="hover:text-black transition-colors">Email: kilobots@gcekbpatna.ac.in</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-600 font-playfair">Quick Links</h3>
        <p className="hover:text-black transition-colors"><Link href="/">Home</Link></p>
        <p className="hover:text-black transition-colors"><Link href="/competitions">Competitions</Link></p>
        <p className="hover:text-black transition-colors"><Link href="/timeline">Timeline</Link></p>
        <p className="hover:text-black transition-colors"><Link href="/merchandise">Merchandise</Link></p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-600 font-playfair">Website Developer</h3>
        <p className="hover:text-black transition-colors flex items-center gap-2">
          Bikash Marandi - 
          <a 
            href="https://github.com/Trex96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-800"
          >
            Trex <FaGithub className="text-xl hover:scale-110 transition-transform" />
          </a>
        </p>
        <p className="hover:text-black transition-colors flex items-center gap-2">
          Santosh Ku Pati - 
          <a 
            href="https://github.com/Santosh9009" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-800"
          >
            Pati <FaGithub className="text-xl hover:scale-110 transition-transform" />
          </a>
        </p>
      </div>
    </div>
  );
};
