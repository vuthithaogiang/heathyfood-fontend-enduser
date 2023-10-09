import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <main className={cx('auth')}>
            <div className={cx('auth-intro')}>
                <img alt="" src={images.intro} className={cx('auth-intro-img')} />
                <p className={cx('auth-intro-text')}>
                    The best of luxury brand values, high quality products, and innovative services
                </p>
            </div>
            <div className={cx('auth-content')}>
                <div className={cx('auth-content-inner')}>
                    <div className={cx('logo-box')}>
                        <a href="/" className={cx('logo')}>
                            <img className={cx('logo-img')} src={images.logo} alt="Heealthy Food" />
                            <h1 className={cx('logo-title')}>healthyfood</h1>
                        </a>
                    </div>
                    <h1 className={cx('auth-heading')}>Sign Up</h1>
                    <p className={cx('auth-desc')}>Let’s create your account and Shop like a pro and save money.</p>
                    <form action="" className={cx('auth-form')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-text-input')}>
                                <input type="email" placeholder="Email" className={cx('form-input')} />
                                <img alt="" src={images.messageIcon} className={cx('form-input-icon')} />
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('form-text-input')}>
                                <input type="password" placeholder="Password" className={cx('form-input')} />
                                <img alt="" src={images.clockIcon} className={cx('form-input-icon')} />
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('form-text-input')}>
                                <input type="password" placeholder="Confirm Password" className={cx('form-input')} />
                                <img alt="" src={images.clockIcon} className={cx('form-input-icon')} />
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
                            <button className={cx('btn', 'btn-outline')}>
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
    );
}

export default SignUp;
