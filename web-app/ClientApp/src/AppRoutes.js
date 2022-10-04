import Login from "./components/Login";
import Reg from "./components/Reg";
import Account from "./components/Account";
import Test from "./components/Test";
import Home from "./components/Home";

const AppRoutes = [
    {
        path: '/',
        element: <Home />
    },
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