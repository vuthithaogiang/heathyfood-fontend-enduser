import Home from '~/pages/Home';
import SignUp from '~/pages/SignUp';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/login', component: Login, layout: null },
];

const privateRoute = [{ path: '/profile', component: Profile }];

export { publicRoutes, privateRoute };
