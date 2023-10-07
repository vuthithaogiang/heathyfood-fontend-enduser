import Home from '~/pages/Home';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp, layout: null },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
