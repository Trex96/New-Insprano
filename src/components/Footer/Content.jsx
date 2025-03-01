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
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0">
      <h1 className="leading-[0.8] mt-10 font-playfair italic text-center md:text-left">
        <span className="text-[4rem] md:text-[8rem] lg:text-[14rem] block md:inline py-2">Insprano</span>
        <span className="text-xl md:text-3xl py-2">X udaan</span>
      </h1>
      <p className="font-playfair italic">©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row shrink-0 gap-8 md:gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-600 font-playfair">About</h3>
        <p className="hover:text-black transition-colors">Home</p>
        <p className="hover:text-black transition-colors">Projects</p>
        <p className="hover:text-black transition-colors">Our Mission</p>
        <p className="hover:text-black transition-colors">Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-600 font-playfair">Education</h3>
        <p className="hover:text-black transition-colors">News</p>
        <p className="hover:text-black transition-colors">Learn</p>
        <p className="hover:text-black transition-colors">Certification</p>
        <p className="hover:text-black transition-colors">Publications</p>
      </div>
    </div>
  );
};
