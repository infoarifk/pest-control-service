/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ManageServiceComp from "../../components/ManageServiceComp";
import { Toaster } from "react-hot-toast";

const ManageServices = () => {
    const services = useLoaderData();
    const { user } = useContext(AuthContext);
    const [filterServices, setServices] = useState([]);
    


      useEffect(() => {
        // const filtered = services.filter((service) => service.providerID === user.uid);
        // setServices(filtered);
        
        if (user && user.uid) {
            const filtered = services.filter((service) => service.providerID === user.uid);
            setServices(filtered);
        }
      }, [services, user]);



    return (
        <div>
            <div className="my-8 grid grid-cols-1 lg:grid-cols-4 max-w-[1280px] mx-auto gap-4">
                {filterServices.map((service) => (
                    <ManageServiceComp key={service._id} service={service}></ManageServiceComp>
                ))}
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default ManageServices;
