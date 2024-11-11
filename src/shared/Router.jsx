import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";
import ContextLayout from "../pages/ContextLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        element: <ContextLayout />,
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