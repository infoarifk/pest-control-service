/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import BookingsComp from "../../components/BookingsComp";


const MyBookings = () => {

    const bookings = useLoaderData();


    return (
        <div>
            <div className="border max-w-[1240px] mx-auto my-8 py-5">

                <div className="grid grid-cols-3">
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Service Name</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Date</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Status</h4>

                </div>
                <hr />


                <BookingsComp></BookingsComp>
                <BookingsComp></BookingsComp>
                <BookingsComp></BookingsComp>

            </div>
        </div>
    );
};

export default MyBookings;
