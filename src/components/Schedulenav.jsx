import { NavLink } from "react-router-dom";



const Schedulenav = () => {

    return (
        <div>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex justify-center gap-5">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <NavLink
                                    to="/schedule"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#a02013] font-bold" : ""
                                    }
                                >
                                    My Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/schedule/orders"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#a02013] font-bold" : ""
                                    }
                                >
                                   Orders 
                                </NavLink>
                            </li>
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

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Schedulenav;