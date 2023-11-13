import Aboutus from "../../components/Aboutus";
import CustomerReview from "../../components/CustomerReview";
import UserContact from "../../components/UserContact";
import Banner from "../../components/header/navbar/Banner";
import ServiceCard from "../../components/ServiceCard";
import { useLoaderData } from "react-router-dom";



const Home = () => {

    const services = useLoaderData();
    const displayServices =services.slice(0, 4);

    return (
        <div className="space-y-16">
            <Banner></Banner>
            <UserContact></UserContact>

            <div className="px-4">

                <div className="max-w-[1220px] mx-auto border-l-8 border-[#a02013] mb-6 " data-aos="zoom-in-right">
                    <h1 className="ml-4 text-3xl font-bold">Our Services</h1>
                </div>
                <div className="my-8 grid grid-cols-1 lg:grid-cols-4 max-w-[1280px] mx-auto gap-4">

                    {
                        displayServices.map(service => <ServiceCard
                            key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                


            </div>
            <Aboutus></Aboutus>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;