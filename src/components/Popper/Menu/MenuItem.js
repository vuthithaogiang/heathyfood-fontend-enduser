import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ className, item, onClick }) {
    const [theme, setTheme] = useState('bright');

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

    const handleLogout = () => {
        console.log('log out');
        window.location.reload();
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

            {!item.separate && item.title !== 'Switch Theme' && (
                <Button className={classes} leftIcon={item.icon} to={item.to} onClick={onClick}>
                    {item.title}
                </Button>
            )}
        </>
    );
}

export default MenuItem;
