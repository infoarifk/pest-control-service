import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-20">
                <hr className="border-2" />
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <img className="w-[180px] mx-auto" src="/src/assets/logo/logo.png" alt="" />
                            <h3 className="text-center text-2xl font-bold  text-black ">PEST<span className="text-[#a02013]">solution</span></h3>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:text-[#a02013]">Home</Link>
                                </li>
                                <li className="mb-4">
                                <Link to="/services" className="hover:text-[#a02013]">Services</Link>
                                </li>
                                <li className="mb-4">
                                <Link to="/team" className="hover:text-[#a02013]">Our Team</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-[#a02013]">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:text-[#a02013]">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:text-[#a02013]">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-[#a02013]">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:text-[#a02013]">Android</a>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-[#cbd5e1] md:flex md:items-center md:justify-between">
                        <span className="text-sm text-black dark:text-gray-300 sm:text-center">© 2023 <Link to="/">PESTsolution</Link>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                            <FaFacebookSquare></FaFacebookSquare>
                            <FaInstagram></FaInstagram>
                            <IoLogoYoutube></IoLogoYoutube>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;