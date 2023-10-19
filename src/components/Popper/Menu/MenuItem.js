import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import useAxios from '~/hooks/useAxios';

const cx = classNames.bind(styles);

function MenuItem({ className, item, onClick }) {
    const [theme, setTheme] = useState('bright');
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const axios = useAxios();

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'bright');
        }
    }, []);

    useEffect(() => {
        const html = window.document.documentElement;
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('bright');
        }
    }, [theme]);

    const classes = cx('menu-item', {
        [className]: className,
        separate: item.separate,
    });

    const handleLogout = async () => {
        try {
            const response = await axios.post('/api/auth/logout');
            console.log(response.data);

            if (response.data) {
                setAuth({});
                localStorage.removeItem('access_token');

                navigate('/');
            }
        } catch (error) {
            if (error?.response?.data && error.response.data.message === 'Token has expired') {
                // refresh token
                console.log(error.response.data.message);
                // setAuth({});
                // localStorage.removeItem('access_token');
            }
            console.log(error);
        }
    };

    const handleDarkModeSwitch = () => {
        if (localStorage.getItem('theme') === 'bright') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('bright');
            localStorage.setItem('theme', 'bright');
        }
    };

    return (
        <>
            {item.separate && (
                <Button className={classes} leftIcon={item.icon} to={item.to} onClick={handleLogout}>
                    {item.title}
                </Button>
            )}

            {item.title === 'Switch Theme' && (
                <Button className={classes} leftIcon={item.icon} to={item.to} onClick={handleDarkModeSwitch}>
                    {item.title}
                </Button>
            )}

            {!item.separate && item.title !== 'Switch Theme' && item.title !== 'English' && (
                <Button className={classes} leftIcon={item.icon} to={item.to} onClick={() => navigate(item.to)}>
                    {item.title}
                </Button>
            )}

            {item.title === 'English' && (
                <Button className={classes} leftIcon={item.icon} to={item.to} onClick={onClick}>
                    {item.title}
                </Button>
            )}
        </>
    );
}

export default MenuItem;
