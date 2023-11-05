import { Outlet } from "react-router-dom";
import MiniNavbar from "../components/header/MiniNavbar";
import Footer from "../components/footer/Footer";


const GeneralLayout = () => {
    return (
        <div>
            <MiniNavbar></MiniNavbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default GeneralLayout;