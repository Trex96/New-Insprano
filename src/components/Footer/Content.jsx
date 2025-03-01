export default function Content() {
  return (
    <div className='bg-white py-8 px-12 h-full w-full flex flex-col justify-between text-gray-800'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10 font-playfair italic'>Insprano</h1>
            <p className='font-playfair italic'>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-gray-600 font-playfair'>About</h3>
                <p className='hover:text-black transition-colors'>Home</p>
                <p className='hover:text-black transition-colors'>Projects</p>
                <p className='hover:text-black transition-colors'>Our Mission</p>
                <p className='hover:text-black transition-colors'>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-gray-600 font-playfair'>Education</h3>
                <p className='hover:text-black transition-colors'>News</p>
                <p className='hover:text-black transition-colors'>Learn</p>
                <p className='hover:text-black transition-colors'>Certification</p>
                <p className='hover:text-black transition-colors'>Publications</p>
            </div>
        </div>
    )
}