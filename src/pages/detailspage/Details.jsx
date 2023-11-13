/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    const service = useLoaderData();
    const { _id, providerName, providerImg, serviceName, serviceImg, description, price, area } = service;
    return (
        <div className="max-w-[60%] mt-8 mx-auto bg-white rounded-sm">

            <img className="rounded-t-sm w-[100%] h-[450px]" src={serviceImg} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <p className="font-semibold text-center mt-8">Service provider:</p>
                <div className="flex items-center my-4 gap-3 justify-center">
                    <img className="w-9 h-9 rounded-sm" src={providerImg} alt="Provider Img" />
                    <p>{providerName}</p>
                </div>
                <p className="font-medium text-lg mb-4 text-center">Price: {price} tk.</p>
                <div className="flex justify-center items-center mb-3 gap-6">
                    <p className="font-light text-sm">Service area:</p>
                    <p className="font-light text-sm">{area}</p>
                </div>

                <button className="px-3 py-2 text-sm font-medium text-center text-white bg-[#a02013] rounded-sm hover:bg-rose-600 w-[30%] flex justify-center mx-auto mt-8">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Details;

