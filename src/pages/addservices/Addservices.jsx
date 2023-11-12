import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Addservices = () => {

    const { user } = useContext(AuthContext);

    if (!user) {
        
        return <p className="text-center">Loading...</p>;
    }
    const providerID = user.uid;
    console.log(providerID);

    return (
        <div>
            <section className="mt-10">
                <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto  lg:py-0">
                    
                    <h3 className="text-2xl font-bold mb-6">Add Your Service</h3>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                           
                            <form  className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name:</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="name your service" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image:</label>
                                    <input type="text" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="image url" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name:</label>
                                    <input type="text" name="provider" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" value={user.displayName || ""}  readOnly />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email:</label>
                                    <input type="email" name="provider" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" value={user.email || ""} readOnly/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Description:</label>
                                    <textarea rows="5" type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="description" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price:</label>
                                    <input type="text" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="price tk." required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Area:</label>
                                    <input type="text" name="area" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="your service area" required />
                                </div>
                                
                                
        
                                <button type="submit" className="text-white bg-[#a02013] hover:bg-[#a02013] focus:ring-4 focus:outline-none focus:ring-[#a02013] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-[#a02013] dark:hover:bg-[#a02013] dark:focus:ring-[#a02013]">Add Service</button>
                              

                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Addservices;