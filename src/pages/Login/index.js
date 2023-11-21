import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useOnClickOutside from '~/hooks/useOnclickOutside';
import { InfinitySpin } from 'react-loader-spinner';
import useAuth from '~/hooks/useAuth';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
    });

    const { setAuth } = useAuth();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const emailRef = useRef();
    const [seePassword, setSeePassword] = useState(false);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const toggleSeePassword = () => {
        setSeePassword(!seePassword);
    };

    //Modal
    const refModal = useRef();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    useOnClickOutside(refModal, toggleModal);

    //End Modal

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await http.post('/api/auth/login', {
                email: email,
                password: password,
            });
            console.log(response.data);
            const access_token = response?.data?.access_token;
            const data = {
                access_token: access_token,
                role: 'USER',
            };
            setAuth(data);

            const existToken = localStorage.getItem('access_token') !== null;

            if (existToken) {
                localStorage.removeItem('access_token');
            }

            localStorage.setItem('access_token', access_token);

            setError('');
            setModal(true);
            setSuccess(true);
            setEmail('');
            setPassword('');
        } catch (error) {
            setLoading(false);
            setSuccess(false);

            if (error.response?.status === 403) {
                setError('Email or Password not true');
            } else if (error.response?.status === 400) {
                setError('Your email not activate. Please check again.');
            } else {
                setError('Log in Failed!');
            }
        }
    };

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        function initJsToggle() {
            $$('.js-toggle').forEach((button) => {
                const target = button.getAttribute('toggle-target');
                if (!target) {
                    document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
                }
                button.onclick = () => {
                    if (!$(target)) {
                        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
                    }
                    const isHidden = $(target).classList.contains('hide');

                    requestAnimationFrame(() => {
                        $(target).classList.toggle('hide', !isHidden);
                        $(target).classList.toggle('show', isHidden);
                    });
                };
            });

            const links = $$('.js-dropdown-list > li > a');

            links.forEach((link) => {
                link.onclick = () => {
                    if (window.innerWidth > 991) return;
                    const item = link.closest('li');
                    item.classList.toggle('navbar-item--active');
                };
            });
        }

        initJsToggle();
    }, []);

    useEffect(() => {
        emailRef.current.focus();
    }, []);
    return (
        <>
            <main className={cx('auth')}>
                <div className={cx('auth-intro')}>
                    <div className={cx('logo-box', 'auth-intro-logo', 'd-none', 'd-md-block')}>
                        <a href="/" className={cx('logo')}>
                            <img className={cx('logo-img')} src={images.logo} alt="Heealthy Food" />
                            <h1 className={cx('logo-title')}>healthyfood</h1>
                        </a>
                    </div>
                    <img alt="" src={images.intro} className={cx('auth-intro-img')} />
                    <p className={cx('auth-intro-text')}>
                        The best of luxury brand values, high quality products, and innovative services
                    </p>
                    <button
                        className={cx('auth-intro-next', 'd-none', 'd-md-block', 'js-toggle')}
                        toggle-target="#auth"
                    >
                        <img alt="" src={images.introArrow} />
                    </button>
                </div>
                <div id="auth" className={cx('auth-content', 'hide')}>
                    <div className={cx('auth-content-inner')}>
                        <div className={cx('logo-box')}>
                            <a href="/" className={cx('logo')}>
                                <img className={cx('logo-img')} src={images.logo} alt="Heealthy Food" />
                                <h1 className={cx('logo-title')}>healthyfood</h1>
                            </a>
                        </div>
                        <h1 className={cx('auth-heading')}>Hello Again</h1>
                        <p className={cx('auth-desc')}>Let’s create your account and Shop like a pro and save money.</p>

                        {error !== '' && <p className={cx('error')}>{error}</p>}
                        <form onSubmit={handleSubmit} action="" className={cx('auth-form')}>
                            <div className={cx('form-group')}>
                                <div className={cx('form-text-input')}>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        required
                                        placeholder="Email"
                                        className={cx('form-input')}
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <img alt="" src={images.messageIcon} className={cx('form-input-icon')} />
                                </div>
                            </div>
                            <div className={cx('form-group')}>
                                <div className={cx('form-text-input')}>
                                    <input
                                        type={seePassword === false && 'password'}
                                        placeholder="Password"
                                        required
                                        className={cx('form-input')}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <img
                                        alt=""
                                        src={images.clockIcon}
                                        className={cx('form-input-icon')}
                                        onClick={toggleSeePassword}
                                    />
                                </div>
                            </div>

                            <div className={cx('form-group', 'inline')}>
                                <label className={cx('form-checkbox')}>
                                    <input type="checkbox" className={cx('form-checkbox-input')} />
                                    <span className={cx('form-checkbox-label')}>Set as default card</span>
                                </label>
                                <span
                                    onClick={() => navigate('/forgot-password')}
                                    href="#!"
                                    className={cx('auth-link', 'pull-right')}
                                >
                                    Forgot Password
                                </span>
                            </div>
                            <div className={cx('form-group', 'auth-btn-group')}>
                                <button type="submit" className={cx('btn', 'btn-primary')}>
                                    Log In
                                </button>
                                <button className={cx('btn', 'btn-outline')}>
                                    <img alt="" src={images.gmailIcon} className={cx('btn-icon', 'icon')} />
                                    Sign in with Gmail
                                </button>
                            </div>
                        </form>
                        <p className={cx('auth-text')}>
                            Don’t have an account yet?
                            <span onClick={() => navigate('/sign-up')} className={cx('auth-link')}>
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
            </main>

            {loading && (
                <div className={cx('modal')}>
                    <div className={cx('overlay')}></div>
                    <div className={cx('wrap-loading')}>
                        <InfinitySpin width="160" color="#fff" />
                    </div>
                </div>
            )}

            {modal && success && (
                <div className={cx('modal')}>
                    <div className={cx('overlay')} onClick={toggleModal}></div>
                    <div className={cx('modal-content')}>
                        <div className={cx('modal-content-inner')}>
                            <header>
                                <h2 className={cx('modal-heading')}>Login Successfully</h2>
                                <span className={cx('icon')} onClick={toggleModal}>
                                    x
                                </span>
                            </header>
                            <p className={cx('modal-desc')}>You're welcome for Login with our system.</p>
                            <button className={cx('modal-btn')} onClick={() => navigate(from, { replace: true })}>
                                Go To Home Page
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
