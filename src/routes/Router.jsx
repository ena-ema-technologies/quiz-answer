import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import FreeTest from "../page/FreeTest/FreeTest";
import TestPage from "../page/TestPage/TestPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminDashBoard from "../page/AdminDashBoard/AdminDashBoard";
import AllResult from "../page/AdminDashBoard/AllResult";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/free-test',
                element: <FreeTest />
            },
           {
            path:"/admin-dashboard",
            element:<PrivateRoute><AdminDashBoard /></PrivateRoute>,
            children:[
                {
                    path:"test-result-check",
                    element: <PrivateRoute><AdminRoute><AllResult /></AdminRoute></PrivateRoute>
                }
            ]
           }
        ]
    },
]);

export default router;