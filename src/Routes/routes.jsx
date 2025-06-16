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
import PrivateRoute from "../Private/PrivateRoute";
import LoadingEle from "../Component/LoadingEle";

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
                hydrateFallbackElement: <LoadingEle></LoadingEle> ,
                loader: ()=> fetch('http://localhost:3000/item'),
                element: <Allitems></Allitems>,
            },
            {
                path: '/items/:id',
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
            },
            {
                path: '/addItems',
                element: <PrivateRoute><Additems></Additems></PrivateRoute>,
            },
            {
                path: '/allrecovered',
                element: <PrivateRoute><AllRecovered></AllRecovered></PrivateRoute>,
            },
            {
                path: '/myItems',
                element: <PrivateRoute><MyItem></MyItem></PrivateRoute>,
            },
            {
                path: '/updateItems/:id',
                element: <PrivateRoute><UpdateItems></UpdateItems></PrivateRoute>,
            },
        ]
    },
])

export default router