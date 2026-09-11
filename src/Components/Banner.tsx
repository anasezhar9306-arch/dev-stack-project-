import BannerIMG from '../assets/banner-stack.png'
const Banner = () => {
    return (

        <div className='bg-white flex flex-col md:flex-row justify-between items-center px-4 max-w-6xl mx-auto gap-7 md:gap-11 mt-10 md:mt-4'>


            <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 gap-6 md:gap-11'>


                {/* Banner Text */}
                <div className='flex flex-col gap-y-5 text-center md:text-left'>
                    <h2 className='text-3xl md:text-6xl font-bold md:mb-3'>Build Your Ideal<br />
                        <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent leading-tight'>Development Stack</span>
                    </h2>

                    <p>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>

                {/* Banner Button */}
                <div className='flex gap-2.5 justify-center md:justify-start'>

                    <button className='rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] py-1.5 px-2 text-white'>Explore Technologies</button>

                    <button className='border rounded-md py-1.5 px-6 md:px-10'>Learn More</button>

                </div>

            </div>

            {/* Banner IMG */}
            <div className='w-full max-w-md md:max-w-lg flex justify-center md:justify-end'>
                <img src={BannerIMG} alt="Banner img" className='max-w-md md:max-w-xl w-full' />
            </div>
        </div>
    );
};

export default Banner;