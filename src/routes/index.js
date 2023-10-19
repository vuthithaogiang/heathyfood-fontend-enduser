import Home from '~/pages/Home';
import SignUp from '~/pages/SignUp';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import ResetPassword from '~/pages/ResetPassword';
import CreateNewPassword from '~/pages/CreateNewPassword';
import BMICalculator from '~/pages/BMICalculator';
import Cart from '~/pages/Cart';
import FavouriteList from '~/pages/FavouriteList';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/forgot-password', component: ResetPassword, layout: null },
    { path: '/create-new-password', component: CreateNewPassword, layout: null },
    { path: '/bmi', component: BMICalculator },
];

const privateRoute = [
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/favourite-list', component: FavouriteList },
];

export { publicRoutes, privateRoute };
