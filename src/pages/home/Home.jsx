import Aboutus from "../../components/Aboutus";
import CustomerReview from "../../components/CustomerReview";
import UserContact from "../../components/UserContact";
import Banner from "../../components/header/navbar/Banner";



const Home = () => {
    return (
        <div className="space-y-16">
            <Banner></Banner>
            <UserContact></UserContact>
            <Aboutus></Aboutus>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;