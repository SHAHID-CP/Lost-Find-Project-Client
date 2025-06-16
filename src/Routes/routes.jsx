import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Component/Home/Home";
import Allitems from "../Pages/Allitems";
import Additems from "../Pages/Additems";
import PostDetails from "../Pages/PostDetails";
import MyItem from "../Pages/MyItem";
import UpdateItems from "../Pages/UpdateItems";
import AllRecovered from "../Pages/AllRecovered";

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
                element: <PostDetails></PostDetails>,
            },
            {
                path: '/addItems',
                element: <Additems></Additems>,
            },
            {
                path: '/allrecovered',
                element: <AllRecovered></AllRecovered>,
            },
            {
                path: '/myItems',
                element: <MyItem></MyItem>,
            },
            {
                path: '/updateItems/:id',
                element: <UpdateItems></UpdateItems>,
            },
        ]
    },
])

export default router