/* eslint-disable react/prop-types */


const OrderComp = ({myOrder}) => {
    
    const { customerMail, serviceName, date, status, area } = myOrder;
    return (

        <div className="grid grid-cols-5 mt-4">
            <h4 className="mx-auto">{customerMail}</h4>
            <h4 className="mx-auto">{serviceName}</h4>
            <h4 className="mx-auto">{date}</h4>
            <h4 className="mx-auto">{area}</h4>
            <h4 className="mx-auto bg-red-600 text-white rounded-sm px-3 py-1">{status}</h4>

        </div>
    );
};

export default OrderComp;

