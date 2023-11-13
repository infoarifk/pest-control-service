import { useLoaderData } from "react-router-dom";

const UpdateService = () => {
    
    const service = useLoaderData();
    const {_id, serviceName, serviceImg, description, price, area } = service;
    


    return (
        <div>
            <h1>name: {serviceName}</h1>
        </div>
    );
};

export default UpdateService;
