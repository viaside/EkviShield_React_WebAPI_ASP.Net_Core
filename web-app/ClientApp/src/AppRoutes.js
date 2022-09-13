import Login from "./components/Login";
import Reg from "./components/Reg";

const AppRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/Reg',
        element: <Reg />
    }
];

export default AppRoutes;