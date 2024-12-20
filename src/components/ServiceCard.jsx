/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {


    const { _id, serviceName, serviceImg, providerName, providerImg, description, price, area } = service;

    return (


        <div className="max-w-[340px] mx-auto bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-out-up">

            <img className="rounded-t-sm w-[100%] h-[200px]" src={serviceImg} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 100)}...</p>
                <p className="font-semibold">Service provider:</p>
                <div className="flex items-center my-4 gap-3">
                    <img className="w-9 h-9 rounded-sm" src={providerImg} alt="Provider Img" />
                    <p>{providerName}</p>
                </div>
                <p className="font-medium text-lg mb-4">Price: {price} tk.</p>
                <div className="flex justify-between items-center mb-3">
                        <p className="font-light text-sm">Service area:</p>
                        <p className="font-light text-sm">{area}</p>
                </div>

                <Link to={`/details/${_id}`}><button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#a02013] rounded-sm hover:bg-rose-600">
                    View details
                </button></Link>
            </div>
        </div>

    );
};

export default ServiceCard;
