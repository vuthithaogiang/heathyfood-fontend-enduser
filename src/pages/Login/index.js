import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const emailRef = useRef();
    const [seePassword, setSeePassword] = useState(false);

    const toggleSeePassword = () => {
        setSeePassword(!seePassword);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                <button className={cx('auth-intro-next', 'd-none', 'd-md-block', 'js-toggle')} toggle-target="#auth">
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
                    <form onSubmit={handleSubmit} action="/" className={cx('auth-form')}>
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
                                    autoComplete="off"
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
                            <a href="#!" className={cx('auth-link', 'pull-right')}>
                                Recovery Password
                            </a>
                        </div>
                        <div className={cx('form-group', 'auth-btn-group')}>
                            <button className={cx('btn', 'btn-primary')}>Sign Up</button>
                            <button type="submit" className={cx('btn', 'btn-outline')}>
                                <img alt="" src={images.gmailIcon} className={cx('btn-icon', 'icon')} />
                                Sign in with Gmail
                            </button>
                        </div>
                    </form>
                    <p className={cx('auth-text')}>
                        Don’t have an account yet?
                        <a href="/login" className={cx('auth-link')}>
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Login;
