import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/home/home";



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

}


])

export default router;