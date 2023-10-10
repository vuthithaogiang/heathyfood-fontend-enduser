import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import images from '~/assets/images';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
    const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const navigate = useNavigate();

    const emailRef = useRef();
    const [success, setSuccess] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

    const toggleSeePassword = () => {
        setSeePassword(!seePassword);
    };

    const toggleSeeConfirmPassword = () => {
        setSeeConfirmPassword(!seeConfirmPassword);
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

    useEffect(() => {
        const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //test again
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(password);

        if (!v1 || !v2) {
            return;
        }

        try {
            setSuccess(true);
            setEmail('');
            setPassword('');
            setMatchPassword('');
            alert('Sign Up sucessfully!');
            navigate('/login');
        } catch (error) {
            console.log(error);
            email.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <div>SignUp successfullly!</div>
            ) : (
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
                            <h1 className={cx('auth-heading')}>Sign Up</h1>
                            <p className={cx('auth-desc')}>
                                Let’s create your account and Shop like a pro and save money.
                            </p>
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                        <img alt="" src={images.messageIcon} className={cx('form-input-icon')} />
                                    </div>
                                    <p
                                        id="uidnote"
                                        className={
                                            emailFocus && email && !validEmail ? cx('instructions') : cx('offscreen')
                                        }
                                    >
                                        Email is invalid.
                                    </p>
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
                                            autoComplete="off"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onFocus={() => setPasswordFocus(true)}
                                            onBlur={() => setPasswordFocus(false)}
                                        />
                                        <img
                                            alt=""
                                            src={images.clockIcon}
                                            className={cx('form-input-icon')}
                                            onClick={toggleSeePassword}
                                        />
                                    </div>
                                    <p
                                        id="uidnote"
                                        className={
                                            passwordFocus && password && !validPassword
                                                ? cx('instructions')
                                                : cx('offscreen')
                                        }
                                    >
                                        Must min 8 characters - contain lower&upper case, number and special character.
                                    </p>
                                </div>
                                <div className={cx('form-group')}>
                                    <div className={cx('form-text-input')}>
                                        <input
                                            type={seeConfirmPassword === false && 'password'}
                                            required
                                            placeholder="Confirm Password"
                                            className={cx('form-input')}
                                            id="confirm-password"
                                            name="confirm-password"
                                            autoComplete="off"
                                            value={matchPassword}
                                            onChange={(e) => setMatchPassword(e.target.value)}
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />
                                        <img
                                            alt=""
                                            src={images.clockIcon}
                                            className={cx('form-input-icon')}
                                            onClick={toggleSeeConfirmPassword}
                                        />
                                    </div>
                                    <p
                                        id="uidnote"
                                        className={
                                            matchFocus && matchPassword && !validMatch
                                                ? cx('instructions')
                                                : cx('offscreen')
                                        }
                                    >
                                        Password is not match.
                                    </p>
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
                                    <button
                                        type="submit"
                                        className={cx('btn', 'btn-outline')}
                                        disabled={!validEmail || !validPassword || !validMatch ? true : false}
                                    >
                                        <img alt="" src={images.gmailIcon} className={cx('btn-icon', 'icon')} />
                                        Sign in with Gmail
                                    </button>
                                </div>
                            </form>
                            <p className={cx('auth-text')}>
                                You have an account yet?
                                <a href="/login" className={cx('auth-link')}>
                                    Log in
                                </a>
                            </p>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}

export default SignUp;
