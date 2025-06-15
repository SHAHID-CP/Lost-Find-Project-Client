import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Component/Home/Home";
import Allitems from "../Pages/Allitems";
import Additems from "../Pages/Additems";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/allItems',
                element: <Allitems></Allitems>,
            },
            {
                path: '/items/:id',
                element: <p>Exact one item details</p>
            },
            {
                path: '/addItems',
                element: <Additems></Additems>,
            },
            {
                path: '/allrecovered',
                element: <p>all recoverde item</p>,
            },
            {
                path: '/manageitem',
                element: <p>manage my item</p>,
            },
        ]
    },
])

export default router