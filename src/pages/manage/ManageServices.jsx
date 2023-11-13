/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ManageServiceComp from "../../components/ManageServiceComp";


const ManageServices = () => {

    const services = useLoaderData();
    const {user} = useContext(AuthContext);


    
    return (
        <div>
            <div className="my-8 grid grid-cols-1 lg:grid-cols-4 max-w-[1280px] mx-auto gap-4">

{
    services.map(service => <ManageServiceComp
        key={service._id} service={service}></ManageServiceComp>)
}
</div>
        </div>
    );
};

export default ManageServices;