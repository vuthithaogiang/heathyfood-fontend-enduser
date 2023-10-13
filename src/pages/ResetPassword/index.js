import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ResetPassword() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate('/create-new-password');
    };
    return (
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
                    <div className={cx('auth-message')}>We have e-mailed your password reset link!</div>
                    <form onSubmit={handleSubmit} action="" className={cx('auth-form')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-text-input')}>
                                <input type="email" name="email" placeholder="Email" className={cx('form-input')} />
                                <img alt="" src={images.messageIcon} />
                            </div>
                            <p className={cx('form-error')}>Email not true form.</p>
                        </div>
                        <div className={cx('btn-group')}>
                            <button type="submit" className={cx('submit-btn')}>
                                Reset Password
                            </button>
                        </div>
                    </form>
                    <p className={cx('auth-text')} onClick={() => navigate('/login')}>
                        <span className={cx('auth-text-link')}>Back to Log in</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ResetPassword;
