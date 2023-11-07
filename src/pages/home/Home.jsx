import UserContact from "../../components/UserContact";
import Banner from "../../components/header/navbar/Banner";



const Home = () => {
    return (
        <div className="space-y-16">
            <Banner></Banner>
            <UserContact></UserContact>
        </div>
    );
};

export default Home;