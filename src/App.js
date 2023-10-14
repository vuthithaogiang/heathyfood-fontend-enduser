import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, useEffect } from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {
        const http = axios.create({
            baseURL: 'http://localhost:8000',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true,
        });

        const getCsrf = async () => {
            const csrf = await http.get('/sanctum/csrf-cookie');
            console.log(csrf);

            // const login = await http.post('/api/auth/login', {
            //     email: 'giangvttth2209086@fpt.edu.vn',
            //     password: 'new_password',
            // });

            // console.log('User', login.data);
        };

        getCsrf();
    }, []);

    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const PageElement = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <PageElement />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
