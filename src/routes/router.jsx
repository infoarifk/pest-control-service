import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/Signin";
import Register from "../pages/register/Register";
import Addservices from "../pages/addservices/Addservices";
import Services from "../pages/services/Services";
import Team from "../pages/team/Team";




const router = createBrowserRouter([

{
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/addservices",
            element: <Addservices></Addservices>
        },

        {
            path: "/services",
            element: <Services></Services>
        },
        {
            path: "/team",
            element: <Team></Team>
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