import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import UserLogo from "../../user/UserLogo";


const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>

            <nav className="bg-slate-300 border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/">
                        <div href="" className="flex items-center">
                            <img src="https://i.ibb.co/Pm47NvF/logo.png" className="h-8 mr-3" alt="" />
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-black ">PEST<span className="text-[#a02013]">solution</span></span>
                        </div>
                    </Link>

                    {
                        user ?
                            <div className="flex items-center gap-2 relative">
                                <p className="mr-6 text-sm  text-[#a02013] font-bold">(+880) 412-1234</p>
                                <UserLogo></UserLogo>
                            </div>
                            :
                            <div className="flex items-center gap-1 md:gap-3">

                                <p className="mr-6 text-sm  text-[#a02013] font-bold">(+880) 412-1234</p>
                                <Link to="/Register" className="text-sm  text-white border bg-[#a02013] px-2 md:px-3 py-1 md:py-2 rounded-sm font-semibold ">Register</Link>
                                <Link to="/SignIn" className="text-sm  text-white border bg-[#a02013] px-2 md:px-3 py-1 md:py-2 rounded-sm font-semibold ">Sign in</Link>

                            </div>
                    }
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#a02013] font-bold" : ""
                                }
                            >
                                Home
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/services"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#a02013] font-bold" : ""
                                }
                            >
                                Services
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/team"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#a02013] font-bold" : ""
                                }
                            >
                                Our Team
                            </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;