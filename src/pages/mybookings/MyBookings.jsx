/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import BookingsComp from "../../components/BookingsComp";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const bookings = useLoaderData();

    if (!user) {

        return <p className="text-center">Loading...</p>;
    }

    const filteredBookings = bookings.filter(booking=>{
       return  booking.customerMail===user.email
    })

    if(filteredBookings<1){
        return <h3 className="text-center text-3xl text-gray-400 font-bold mt-10">You have no Booking yet</h3>
    }

    


    return (
        <div>
            <div className="border max-w-[1240px] mx-auto my-8 py-5">

                <div className="grid grid-cols-3">
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Service Name</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Date</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Status</h4>

                </div>
                <hr />

                
                {
                    filteredBookings.map(myBooking => <BookingsComp key={myBooking._id} myBooking={myBooking}></BookingsComp>)
                }
                

            </div>
        </div>
    );
};

export default MyBookings;
