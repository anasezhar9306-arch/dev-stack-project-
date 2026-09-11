import BannerIMG from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto'>
            
            <div className='flex flex-col justify-center gap-9'>
                {/* Banner Text */}

                <h2 className='text-6xl font-bold'>Build Your Ideal<br/>
                <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
                </h2>

                <p>Explore frontend, backend, database, and tooling options,<br/>
                   compare them side by side, and put together the stack that fits your<br/> 
                   next project.</p>
                
                {/* Banner Button */}
                
                <div className='flex gap-2.5'>

                    <button className='rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] py-1.5 px-2 text-white'>Explore Technologies</button>

                    <button className='border rounded-md py-1.5 px-10'>Learn More</button>

                </div>

            </div>

            {/* Banner IMG */}
            <img src={BannerIMG} alt="Banner img" />
        </div>
    );
};

export default Banner;


        // <div className='flex justify-between max-w-6xl mx-auto'>
            
        //     <div className='flex flex-col justify-center gap-9'>
        //         {/* Banner Text */}

        //         <h2 className='text-6xl font-bold'>Build Your Ideal<br/>
        //         <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
        //         </h2>

        //         <p>Explore frontend, backend, database, and tooling options,<br/>
        //            compare them side by side, and put together the stack that fits your<br/> 
        //            next project.</p>
                
        //         {/* Banner Button */}
                
        //         <div className='flex gap-2.5'>

        //             <button className='rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] py-1.5 px-2 text-white'>Explore Technologies</button>

        //             <button className='border rounded-md py-1.5 px-10'>Learn More</button>

        //         </div>

        //     </div>

        //     {/* Banner IMG */}
        //     <img src={BannerIMG} alt="Banner img" />
        // </div>