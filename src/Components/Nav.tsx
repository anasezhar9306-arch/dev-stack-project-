import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 bg-fuchsia-100 py-1.5 px-1'>
            <div className='flex justify-between items-center max-w-6xl mx-auto mt-1 md:mt-1.5 mb-1'>

                <RxHamburgerMenu className='block md:hidden w-7 h-11' />

                <img src={Logo} alt="Logo" />

                <ul className='hidden md:flex gap-4 font-mono'>
                    <li className='text-[#D91B7E]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-1.5 md:gap-2 font-semibold md:font-normal'>
                    <button className='text-sm md:text-base font-semibold'>Sign in</button>
                    <button className='rounded-3xl bg-[#D91B7E] text-white text-sm md:text-base py-1 md:py-1.5 px-2 md:px-3'>Sign Up</button>
                </div>

            </div>
        </div>
    );
};

export default Nav;