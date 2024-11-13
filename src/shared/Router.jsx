import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";
import SelectionContextLayout from "../context/SelectionContextLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        element: <SelectionContextLayout />,
        children: [

            {
                path: '/dex',
                element: <Dex />,
            },
            {
                path: '/details/:pokemonId',
                element: <Details />,
            },
        ]
    },
]);

export default router;