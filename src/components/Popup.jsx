/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({ isOpen, onClose, userMail, providerMail, serviceName, price, area }) => {

  
    const customerMail = userMail;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const instruction = form.instruction.value;
        const date = form.date.value;
        const status = "pending";

        const confirmBooking = {customerMail, providerMail, serviceName, price, area, date, instruction, status }

        //console.log(confirmBooking);


        fetch('https://pest-control-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(confirmBooking),


        })
            .then(res => res.json())
            .then(data => {

                //console.log(data);

                if(data.insertedId){
                    toast.success('Your Booking is confirmed');
                }
            });

            form.reset();
        
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

                            <AiOutlineClose className="text-lg"></AiOutlineClose>

                        </button>
                    </div>

                    <div className="p-4 md:p-5">

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Service Name</label>
                                <input type="text" name="serviceName" value={serviceName} className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Provider Email</label>
                                <input type="email" name="providerMail" value={providerMail} className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Your Email</label>
                                <input type="email" name="userMail" value={userMail} className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Date</label>
                                <input type="date" name="date" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Special instruction</label>
                                <textarea type="text" name="instruction" className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-normal text-white">Price</label>
                                <input type="text" name="price" value={price} className=" text-gray-900 focus:border-rose-500 focus:ring-rose-500 text-sm rounded-sm block w-full p-2.5" readOnly />
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

