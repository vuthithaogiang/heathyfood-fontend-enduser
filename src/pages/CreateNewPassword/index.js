import classNames from 'classnames/bind';
import styles from './CreateNewPassword.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CreateNewPassword() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate('/login');
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
                    <h1 className={cx('auth-heading')}>Create your new Password.</h1>
                    <p className={cx('auth-desc')}>
                        You password must min 8 characters: contain lower and upper case, number and special character.
                    </p>
                    <div className={cx('auth-message')}>We have e-mailed your password reset link!</div>
                    <form onSubmit={handleSubmit} action="" className={cx('auth-form')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-text-input')}>
                                <input
                                    type={'password'}
                                    placeholder="New Password"
                                    required
                                    className={cx('form-input')}
                                    id="password"
                                    name="password"
                                    autoComplete="off"
                                />
                                <img alt="" src={images.clockIcon} className={cx('form-input-icon')} />
                            </div>

                            <div className={cx('form-text-input')}>
                                <input
                                    type={'password'}
                                    required
                                    placeholder="Confirm New Password"
                                    className={cx('form-input')}
                                    id="confirm-password"
                                    name="confirm-password"
                                    autoComplete="off"
                                />
                                <img alt="" src={images.clockIcon} className={cx('form-input-icon')} />
                            </div>

                            <p className={cx('form-error')}>Password not true form.</p>
                        </div>
                        <div className={cx('btn-group')}>
                            <button type="submit" className={cx('submit-btn')}>
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CreateNewPassword;
