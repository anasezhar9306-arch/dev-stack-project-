import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import FooterLOgo from '../assets/logo-text.png'

const Footer = () => {
    return (
        // Parent div 
        <div className='flex justify-between max-w-6xl mx-auto px-4 mt-28 mb-10'>
            {/* Chaild div 1 */}
            <div className="flex flex-col items-center md:items-start">
                <img src={FooterLOgo} alt="" />
                <p className='font-light mt-2.5 text-center md:text-start'>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <ul className='mt-2.5 flex gap-5'>
                    <li>
                        <a
                            href="https://github.com/anasezhar9306-arch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5">
                            <FaGithub />
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/anas-izhar-33a8ab423/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5">
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-1.5"
                        >
                            <FaTwitter />
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
            {/* Chaild div 2 */}
            <div className='hidden md:block'>
                <h2 className='font-semibold'>PRODUCT</h2>
                <ul className='font-light flex flex-col gap-0.5'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Technologies</li>
                </ul>
            </div>
            {/* Chaild div 3 */}
            <div className='hidden md:block'>
                <h2 className='font-semibold'>COMPANY</h2>
                <ul className='font-light flex flex-col gap-0.5'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </div>
            {/* Chaild div 4 */}
            <div className='hidden md:block'>
                <h2 className='font-semibold'>LEGAL</h2>
                <ul className='font-light flex flex-col gap-0.5'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>


        </div>

    );
};

export default Footer;