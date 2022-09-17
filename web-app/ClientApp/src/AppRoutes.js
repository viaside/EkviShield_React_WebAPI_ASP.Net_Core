import Login from "./components/Login";
import Reg from "./components/Reg";
import Account from "./components/Account";

const AppRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/Reg',
        element: <Reg />
    },
    {
        path: '/Account',
        element: <Account />
    }
];

export default AppRoutes;