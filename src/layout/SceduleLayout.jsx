import { Outlet } from "react-router-dom";
import Schedulenav from "../components/Schedulenav";
import Footer from "../components/footer/Footer";


const SceduleLayout = () => {
    return (
        <div>
            <Schedulenav></Schedulenav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SceduleLayout;