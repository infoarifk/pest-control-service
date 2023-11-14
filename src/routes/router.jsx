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




const router = createBrowserRouter([

    {
        path: "/",
        element: <GeneralLayout></GeneralLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: "/addservices",
                element: <Addservices></Addservices>
            },

            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: "/team",
                element: <Team></Team>
            },
            {
                path: "/manage",
                element: <ManageServices></ManageServices>,
                loader: () => fetch('http://localhost:5000/services')
            },

            {
                path: "/update/:id",
                element: <UpdateService></UpdateService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
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
                loader: ()=> fetch('http://localhost:5000/bookings')
                
            },
            {
                path: "/schedule/orders",
                element: <Orders></Orders>,
                loader: ()=> fetch('http://localhost:5000/bookings')
            }

        ]
    }


])

export default router;