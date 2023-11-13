import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/Signin";
import Register from "../pages/register/Register";
import Addservices from "../pages/addservices/Addservices";
import Services from "../pages/services/Services";
import Team from "../pages/team/Team";
import ManageServices from "../pages/manage/ManageServices";
import Schedule from "../pages/schedule/Schedule";




const router = createBrowserRouter([

{
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/services')
        },
        {
            path: "/addservices",
            element: <Addservices></Addservices>
        },

        {
            path: "/services",
            element: <Services></Services>,
            loader: ()=> fetch('http://localhost:5000/services')
        },
        {
            path: "/team",
            element: <Team></Team>
        },
        {
            path: "/manage",
            element: <ManageServices></ManageServices>
        },
        {
            path: "/schedule",
            element: <Schedule></Schedule>
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
}


])

export default router;