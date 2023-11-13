/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import { useState } from "react";


const Services = () => {
    const services = useLoaderData();

    const [filterServices, setServices] = useState(services);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const zone = form.zone.value.toLowerCase();

        const filtered = services.filter((service) =>
            service.area.toLowerCase().includes(zone)
    );

    setServices(filtered);

        form.reset();

    }

return (
    <div className="my-5">
        <div className="px-4">


            <div className="space-y-5">
                <h1 className="text-3xl font-bold  text-center">All Services</h1>
                <form className="flex items-center gap-3 justify-center" onSubmit={handleSearch}>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#a02013] focus:border-[#a02013] block p-2.5  dark:placeholder-gray-400 " type="text" name="zone" placeholder="Search your zone/area" required/>
                    <input className="text-white bg-[#a02013] hover:bg-rose-600 font-normal rounded-sm text-sm px-4 py-2.5 text-center" type="submit" value="Search" />
                </form>
            </div>

            <div className="my-8 grid grid-cols-1 lg:grid-cols-4 max-w-[1280px] mx-auto gap-4">

                {
                    filterServices.map(service => <ServiceCard
                        key={service._id} service={service}></ServiceCard>)
                }
            </div>



        </div>
    </div>
);
};

export default Services;