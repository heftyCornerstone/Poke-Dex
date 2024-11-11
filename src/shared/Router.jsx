import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/dex',
        element: <Dex />
    },
    {
        path: '/details/:pokemonId',
        element: <Details />
    },
])

export default router;