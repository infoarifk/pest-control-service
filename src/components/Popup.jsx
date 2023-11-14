/* eslint-disable react/no-unknown-property */
import { useState } from "react";


const Popup = ({ isOpen, onClose }) => {

    const [formData, setFormData] = useState({
        // Your form fields here
    });

    const handleInputChange = (e) => {
        // Handle form field changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'} absolute w-[70%] top-10 right-0 mx-auto`}>
            <div className="relative p-4 w-full max-w-md max-h-full">

                <div className="relative bg-[#a02013] rounded-sm ">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-3xl font-light text-white">
                            Confirm your Booking
                        </h3>
                        <button onClick={onClose} type="button" className="end-2.5 text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-rose-600" data-modal-hide="authentication-modal"> 

                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            
                        </button>
                    </div>

                    <div className="p-4 md:p-5">

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Service Name</label>
                                <input type="text" name="" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Provider Email</label>
                                <input type="email" name="" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Your Email</label>
                                <input type="email" name="" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Date</label>
                                <input type="date" name="" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Special instruction</label>
                                <textarea type="text" name="" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Price</label>
                                <input type="text" name="" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly/>
                            </div>
                          
                            <button type="submit" className="w-full text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-sm text-sm px-5 py-2.5 text-center ">Confirm</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;

