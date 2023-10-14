import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

const cx = classNames.bind(styles);

function ResetPassword() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false); // send email success
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [type, setType] = useState('fill-email');
    const [changeComplete, setChangeComplete] = useState(false);

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    const [OTP, setOTP] = useState('');
    const [otpValid, setOtpValid] = useState(false);
    const [otpFocus, setOtpFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

    const http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await http.post('/api/auth/create-otp', {
                email: email,
            });

            console.log(response.data);

            setSuccess(true);
            setError('');
            setLoading(false);
            setType('fill-otp');
        } catch (error) {
            setLoading(false);
            setSuccess(false);
            if (error?.response?.status === 400) {
                setError('Email is not activate');
            } else if (error?.response?.status === 403) {
                setError('Email unauthorized!');
            } else {
                setError('Define request!');
            }
        }
    };

    const handleSubmitOTP = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await http.post('/api/auth/check-otp', {
                otp: OTP,
            });

            if (response.data) {
                setLoading(false);
                setError('');
                setType('fill-new-password');
            }
        } catch (error) {
            setLoading(false);
            setError('Not True OTP Code.');
        }
    };

    const handleSubmitChangePassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await http.post('/api/auth/reset-password', {
                email: email,
                otp: OTP,
                new_password: password,
                new_password_confirmation: matchPassword,
            });

            if (response.data) {
                setError('');
                setChangeComplete(true);
                setLoading(false);
                setPassword('');
                setMatchPassword('');
            }
        } catch (error) {
            setLoading(false);
            setError('Change password not suported!');
        }
    };

    const toggleSeePassword = () => {
        setSeePassword(!seePassword);
    };

    const toggleSeeConfirmPassword = () => {
        setSeeConfirmPassword(!seeConfirmPassword);
    };

    useEffect(() => {
        const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const result = EMAIL_REGEX.test(email);
        setEmailValid(result);
    }, [email]);

    useEffect(() => {
        const otpNumber = parseInt(OTP, 10);
        if (!isNaN(otpNumber) && /^\d{4}$/.test(OTP)) {
            setOtpValid(true);
        }
    }, [OTP]);

    useEffect(() => {
        const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    return (
        <>
            <main className={cx('auth')}>
                <div className={cx('auth-intro', 'd-md-none')}>
                    <img src={images.forgotPasswordThumb} alt="" style={{ width: '424px' }} />
                </div>
                <div className={cx('auth-content')}>
                    <div className={cx('auth-content-inner')}>
                        <div className={cx('logo-box', 'auth-intro-logo')}>
                            <a href="/" className={cx('logo')}>
                                <img className={cx('logo-img')} src={images.logo} alt="Heealthy Food" />
                                <h1 className={cx('logo-title')}>healthyfood</h1>
                            </a>
                        </div>
                        <h1 className={cx('auth-heading')}>Forgot your password?</h1>

                        <p className={cx('auth-desc')}>
                            Enter your email and we'll send you a link to reset your password.
                        </p>

                        {error !== '' && <div className={cx('auth-message', 'error')}>{error}</div>}

                        {success && type === 'fill-email' && (
                            <div className={cx('auth-message', 'success')}>
                                We have e-mailed your password reset link!
                            </div>
                        )}

                        {changeComplete && (
                            <div className={cx('auth-message', 'success')}>Change password successfully!</div>
                        )}

                        {!success && type === 'fill-email' && (
                            <form onSubmit={handleSubmit} action="" className={cx('auth-form')}>
                                <div className={cx('form-group')}>
                                    <div className={cx('form-text-input')}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className={cx('form-input')}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                        <img alt="" src={images.messageIcon} />
                                    </div>
                                    {email && emailFocus && !emailValid && (
                                        <p className={cx('form-error')}>Email not true form.</p>
                                    )}
                                </div>
                                <div className={cx('btn-group')}>
                                    <button type="submit" className={cx('submit-btn')}>
                                        Send OTP
                                    </button>
                                </div>
                            </form>
                        )}

                        {success && type === 'fill-otp' && (
                            <form onSubmit={handleSubmitOTP} className={cx('auth-form')}>
                                <div className={cx('form-group')}>
                                    <div className={cx('form-text-input')}>
                                        <input
                                            type="text"
                                            name="otp"
                                            placeholder="OTP"
                                            className={cx('form-input')}
                                            value={OTP}
                                            onChange={(e) => setOTP(e.target.value)}
                                            onFocus={() => setOtpFocus(true)}
                                            onBlur={() => setOtpFocus(false)}
                                        />
                                        <img alt="" src={images.messageIcon} />
                                    </div>
                                    {OTP && otpFocus && !otpValid && (
                                        <p className={cx('form-error')}>OTP must is number 4 digits.</p>
                                    )}
                                </div>
                                <div className={cx('btn-group')}>
                                    <button
                                        disabled={!otpValid ? true : false}
                                        type="submit"
                                        className={cx('submit-btn')}
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        )}

                        {type === 'fill-new-password' && (
                            <form onSubmit={handleSubmitChangePassword} className={cx('auth-form')}>
                                <div className={cx('form-group')}>
                                    <div className={cx('form-text-input')}>
                                        <input
                                            type={seePassword === false && 'password'}
                                            placeholder="New Password"
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
                                            placeholder="Confirm New Password"
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

                                <div className={cx('btn-group')}>
                                    <button
                                        type="submit"
                                        className={cx('submit-btn')}
                                        disabled={!validPassword || !validMatch ? true : false}
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        )}

                        <p className={cx('auth-text')} onClick={() => navigate('/login')}>
                            <span className={cx('auth-text-link')}> Login</span>
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
        </>
    );
}

export default ResetPassword;
