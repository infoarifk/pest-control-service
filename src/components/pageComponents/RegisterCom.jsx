/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase.config";


const RegisterCom = () => {

    const {signUpWithEmail} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleRegistration = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const registerUser = {name, phone, email, photoURL, password};
        console.log(registerUser);

        signUpWithEmail(email, password)
        .then(result =>{

            //console.log(result);     
            navigate(location?.state ? location.state : '/' );

            updateProfile(auth.currentUser, {

                displayName: name, photoURL: photoURL, phoneNumber: phone

              })
          
        })
        
    }

    return (

        <div>
            <section className="bg-gray-50 dark:bg-gray-900">

                <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto  lg:py-0">

                    <img className="w-16 h-12 mr-2" src="https://i.ibb.co/Pm47NvF/logo.png" alt="logo" />
                    <h3 className="text-2xl font-bold mb-6">PEST<span className="text-[#a02013]">solution</span></h3>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register Here
                            </h1>

                            <form onSubmit={handleRegistration}>

                                <div className="grid gap-6 mb-6 grid-cols-2">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
                                        <input type="text" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="(+880) xxxxxxxxx" required />
                                    </div>

                                </div>
                                <div className="mb-6 w-full">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="john.doe@gmail.com" required />
                                </div>

                                <div className="mb-6 w-full">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input type="text" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="" required />
                                </div>

                                <div className="mb-6 w-full">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="•••••••••" required />
                                </div>

                                <div className="flex items-start mb-6">

                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account?
                                        <Link to="/SignIn" className="text-[#a02013] dark:text-[#a02013] ml-1">Sign in</Link></label>
                                </div>
                                <button type="submit" className="text-white bg-[#a02013] hover:bg-rose-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Register</button>
                                
                            </form>

                        </div>


                    </div>

                </div>

            </section>



        </div>
    );
};

export default RegisterCom;