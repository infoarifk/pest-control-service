/* eslint-disable react/prop-types */


const BookingsComp = ({ myBooking }) => {

    const { serviceName, date, status } = myBooking;
    return (

        <div className="grid grid-cols-3 mt-4">
            <h4 className="mx-auto">{serviceName}</h4>
            <h4 className="mx-auto">{date}</h4>
            <h4 className="mx-auto bg-red-600 text-white rounded-sm px-3 py-1">{status}</h4>

        </div>
    );
};

export default BookingsComp;