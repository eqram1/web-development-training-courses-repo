import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Admissions from "../../Pages/Home/Admission/Admissions";

import Blog from "../../Pages/Home/Blog/Blog";
import Faq from "../../Pages/Home/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import LearningCards from "../../Pages/Home/LearningCards/LearningCards";
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
                path: '/tutorial',
                element: <LearningCards></LearningCards>
            },
            {
                path: '/admission',
                element: <Admissions></Admissions>
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