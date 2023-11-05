import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>

            <nav className="bg-slate-300 border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="" className="flex items-center">
                        <img src="/src/assets/logo/logo.png" className="h-8 mr-3" alt="" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-black ">PEST<span className="text-[#a02013]">solution</span></span>
                    </a>
                    <div className="flex items-center gap-4">
                        <a href="" className="mr-6 text-sm  text-[#a02013] font-bold">(+880) 412-1234</a>
                        <Link to="Register" className="text-sm  text-white border bg-[#a02013] px-3 py-2 rounded-md font-semibold ">Register</Link>
                        <Link to="/SignIn" className="text-sm  text-white border bg-[#a02013] px-3 py-2 rounded-md font-semibold ">Sign in</Link>
                        
                        
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;