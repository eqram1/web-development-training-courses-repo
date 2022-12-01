import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Admission from "../../Pages/Home/Admission/Admission";
import Blog from "../../Pages/Home/Blog/Blog";
import Faq from "../../Pages/Home/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;