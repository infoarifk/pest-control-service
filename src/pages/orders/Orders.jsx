import { useContext } from "react";
import OrderComp from "../../components/OrderComp";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Orders = () => {
    
    const { user } = useContext(AuthContext);
    const orders = useLoaderData();

    if (!user) {

        return <p className="text-center">Loading...</p>;
    }

    const filteredOrders = orders.filter(order=>{
       return  order.providerMail===user.email
    })

    if(filteredOrders<1){
        return <h3 className="text-center text-3xl text-gray-400 font-bold mt-10">You have no Order yet</h3>
    }

    


    return (
        <div>
            <div className="border max-w-[1240px] mx-auto my-8 py-5">

                <div className="grid grid-cols-5">
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Customer Email</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Service Name</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Date</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Area</h4>
                    <h4 className="mx-auto font-semibold text-base text-[#a02013]">Status</h4>

                </div>
                <hr />

                
                {
                    filteredOrders.map(myOrder => <OrderComp key={myOrder._id} myOrder={myOrder}></OrderComp>)
                }
                

            </div>
        </div>
    );
};

export default Orders;