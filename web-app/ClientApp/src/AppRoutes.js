import Login from "./components/Login";
import Reg from "./components/Reg";
import Account from "./components/Account";
import Test from "./components/Test";

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
    },
    {
        path: '/Test',
        element: <Test />
    }
];

export default AppRoutes;