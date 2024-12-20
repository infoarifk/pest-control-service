import { BsFillPersonLinesFill, BsFillTelephoneFill, BsFillHouseGearFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

const UserContact = () => {

    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const contactForm = { name, phone, address };


        fetch('https://pest-control-server.vercel.app/contacts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactForm),


        })
            .then(res => res.json())
            .then(data => {

                //console.log(data);

                if(data.insertedId){
                    toast.success('Successfully send');
                }
            });
     
        form.reset();

    }

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">

            <div className="max-w-[980px] mx-auto bg-[#a02013] py-10 px-10 rounded-sm">
                <h2 className="text-center text-xl font-bold text-white mb-5">We will contact you</h2>
                <form onSubmit={handleContact} className="flex flex-col md:flex-row justify-center gap-5 items-center">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <BsFillPersonLinesFill></BsFillPersonLinesFill>
                            </span>
                            <input type="text" name="name" className="rounded-r-sm bg-gray-50 border text-gray-900 focus:ring-[#a02013] focus:border-[#a02013] block flex-1 min-w-0 w-full text-sm border-gray-300 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="Your name"/>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Phone</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                            </span>
                            <input type="text" name="phone" className="rounded-r-sm bg-gray-50 border text-gray-900 focus:ring-[#a02013] focus:border-[#a02013] block flex-1 min-w-0 w-full text-sm border-gray-300 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="Your phone" required />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Address</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <BsFillHouseGearFill></BsFillHouseGearFill>
                            </span>
                            <input type="text" name="address" className="rounded-r-sm bg-gray-50 border text-gray-900 focus:ring-[#a02013] focus:border-[#a02013] block flex-1 min-w-0 w-full text-sm border-gray-300 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#a02013] dark:focus:border-[#a02013]" placeholder="Home address" />
                        </div>

                    </div>

                    <input type="submit" value="Send Us" className="py-4 px-6 text-[#a02013] font-semibold bg-white mt-[28px] rounded-sm" />
                    <Toaster></Toaster>



                </form>

            </div>
        </div>
    );
};

export default UserContact;