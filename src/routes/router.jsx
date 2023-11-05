import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/Signin";
import Register from "../pages/register/Register";




const router = createBrowserRouter([

{
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
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