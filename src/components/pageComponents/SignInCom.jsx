/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";




const SignInCom = () => {


    const { user, signInWithGoogle, loginWithEmail } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                navigate(location?.state ? location.state : '/');
                toast.success('Login successful!');
            });

    }

    const handleEmailPassLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                toast.success('Login successful!');
            })


    }



    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto md:h-screen lg:py-0">
                    <img className="w-16 h-12 mr-2" src="/src/assets/logo/logo.png" alt="logo" />
                    <h3 className="text-2xl font-bold mb-6">PEST<span className="text-[#a02013]">solution</span></h3>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <button onClick={handleGoogleSignin} className="flex justify-center gap-2 items-center w-full border py-1 rounded-lg font-semibold text-lg">
                                <FcGoogle className="w-8 h-8"></FcGoogle>
                                Sign in with Google</button>
                            <Toaster></Toaster>


                            <form onSubmit={handleEmailPassLogin} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" required />
                                </div>


                                <button type="submit" className="text-white bg-[#a02013] hover:bg-rose-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Sign in</button>
                                <Toaster></Toaster>

                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-900">
                                    Do not have an account yet? <Link to="/Register" className="font-semibold text-[#a02013] dark:text-primary-500">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignInCom;