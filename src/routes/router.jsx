import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/Signin";
import Register from "../pages/register/Register";
import Addservices from "../pages/addservices/Addservices";
import Services from "../pages/services/Services";
import Team from "../pages/team/Team";
import ManageServices from "../pages/manage/ManageServices";

import UpdateService from "../pages/updateservice/UpdateService";
import Details from "../pages/detailspage/Details";
import MyBookings from "../pages/mybookings/MyBookings";
import Orders from "../pages/orders/Orders";
import SceduleLayout from "../layout/SceduleLayout";
import PrivateRouter from "./PrivateRouter";




const router = createBrowserRouter([

    {
        path: "/",
        element: <GeneralLayout></GeneralLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/services')
            },
            {
                path: "/addservices",
                element: <Addservices></Addservices>
            },

            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/services')
            },
            {
                path: "/team",
                element: <Team></Team>
            },
            {
                path: "/manage",
                element: <ManageServices></ManageServices>,
                loader: () => fetch('https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/services')
            },

            {
                path: "/update/:id",
                element: <UpdateService></UpdateService>,
                loader: ({ params }) => fetch(`https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/services/${params.id}`)

            },
            {
                path: "/details/:id",
                element: <PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({ params }) => fetch(`https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/services/${params.id}`)
            }

        ]

    },
    {
        path: "/SignIn",
        element: <SignIn></SignIn>,
    },
    {
        path: "/Register",
        element: <Register></Register>,
    },
    {
        path: "/schedule",
        element: <SceduleLayout></SceduleLayout>,
        children: [

            {
                path: "/schedule",
                element: <MyBookings></MyBookings>,
                loader: ()=> fetch('https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/bookings')
                
            },
            {
                path: "/schedule/orders",
                element: <Orders></Orders>,
                loader: ()=> fetch('https://pest-control-server-mfmow33o2-infoarifs-projects.vercel.app/bookings')
            }

        ]
    }


])

export default router;
