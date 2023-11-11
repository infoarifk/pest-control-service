import { useState } from 'react';
import { useAuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';

const UserLogo = () => {
    const { user,logOut } = useAuthContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex items-center md:order-2">
            <button
                onClick={toggleDropdown}
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 border-2 border-white"
                aria-expanded={isDropdownOpen}
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
            >
                <img className="w-9 h-9 rounded-full" src={user.photoURL} alt="user photo" />
            </button>

            {isDropdownOpen && (
                <div onClick={toggleDropdown} className="z-50 absolute top-8  lg:left-18 md:left-9 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-[160px]">
                    <div className="px-4 py-3">
                        <p className="block text-sm text-gray-900 dark:text-white">{user.displayName}</p>
                        <p className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</p>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <Link to="/addservices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Add services</Link>
                        </li>
                        <li>
                            <Link to="/manage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Manage services</Link>
                        </li>
                        <li>
                            <Link to="/myschedule" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My schedule</Link>
                        </li>
                        <li>
                            <button onClick={logOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover.bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full">Sign out</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserLogo;
