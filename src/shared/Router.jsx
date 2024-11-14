import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";
import { SelectionContextProvider } from "../context/SelectionContext";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        element: <SelectionContextProvider />,
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