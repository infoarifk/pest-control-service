/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const UpdateService = () => {

    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, serviceName, serviceImg, description, price, area } = service;
    if (!user) {

        return <p className="text-center">Loading...</p>;
    }

    
    const handleUpdateProduct =(e)=>{
        e.preventDefault();

        const form = e.target;
        const serviceName = form.name.value;
        const serviceImg = form.photoURL.value;
        const description = form.description.value;
        const price = form.price.value;
        const area = form.area.value;

        const updatedService = {serviceName, serviceImg, description, price, area};
        //console.log(updatedService);
        

        fetch(`https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/services/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedService),


        })
            .then(res => res.json())
            .then(data => {

                //console.log(data);

                if(data.modifiedCount>0){
                    toast.success('Successfully updated');
                }
            });
     
    } 

    return (
        <div>
            <section className="mt-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Edit Your Service</h3>
                <div className="w-[70%] flex justify-center mx-auto px-2 py-8 lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">

                            <form onSubmit={handleUpdateProduct} className="w-full space-y-4 md:space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name:</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={serviceName} required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image:</label>
                                    <input type="text" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={serviceImg} required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name:</label>
                                    <input type="text" name="provider" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={user.displayName || ""} readOnly />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email:</label>
                                    <input type="email" name="providerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={user.email || ""} readOnly />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Description:</label>
                                    <textarea rows="5" type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={description} required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price:</label>
                                    <input type="text" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={price} required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Area:</label>
                                    <input type="text" name="area" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#a02013] focus:border-[#a02013] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" defaultValue={area} required />
                                </div>



                                <button type="submit" className="text-white bg-[#a02013] hover:bg-rose-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ">Update</button>
                                <Toaster></Toaster>



                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateService;
