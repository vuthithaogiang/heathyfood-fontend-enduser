import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer')}>
                    <div className={cx('footer-inner')}>
                        <div className={cx('footer-row')}>
                            {/* Column 1 */}
                            <div className={cx('footer-col')}>
                                <div className={cx('footer-logo-box')}>
                                    <a href="/" className={cx('logo')}>
                                        <img className={cx('logo-img')} src={images.logo} alt="Heealthy Food" />
                                        <h1 className={cx('logo-title')}>healthyfood</h1>
                                    </a>
                                </div>
                                <p className={cx('footer-desc')}>
                                    Decription about System Healthy Food, With this code, the height of the scrollable
                                    element will be displayed in real-time.
                                </p>
                                <p className={cx('footer-help-text')}>Receive product news and update .</p>
                                <form action="" className={cx('footer-form')}>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Enter email"
                                        className={cx('footer-input')}
                                    />
                                    <button className={cx('btn-primary')}>SUBCRIBE</button>
                                </form>
                            </div>
                            {/* Column 2 */}
                            <div className={cx('footer-col')}>
                                <h3 className={cx('footer-heading')}>Shop</h3>
                                <ul className={cx('footer-list')}>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            All Departments
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Brands
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Fruits
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Rice
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Snacks
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Column 3 */}
                            <div className={cx('footer-col')}>
                                <h3 className={cx('footer-heading')}>Support</h3>
                                <ul className={cx('footer-list')}>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Store Locations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Order Status
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 4 */}
                            <div className={cx('footer-col')}>
                                <h3 className={cx('footer-heading')}>Company</h3>
                                <ul className={cx('footer-list')}>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Customer Servives
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Term Of Use
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            CA Supply Chains Act
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Sustainability
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Affilates
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className={cx('footer-link')}>
                                            Recall Info
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 5 */}
                            <div className={cx('footer-col')}>
                                <h3 className={cx('footer-heading')}>Contact</h3>
                                <ul className={cx('footer-list')}>
                                    <li>
                                        <p className={cx('footer-label')}>Email</p>
                                        <a href="mailto:vuthithaogiang050400@gmail.com" className={cx('footer-link')}>
                                            vuthithaogiang050400@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <p className={cx('footer-label')}>Telephone</p>
                                        <a href="tel:0968026981" className={cx('footer-link')}>
                                            0968026981
                                        </a>
                                    </li>
                                    <li>
                                        <p className={cx('footer-label')}>Address</p>
                                        <p className={cx('footer-text')}>1588 South Coast Dr Costa Mona, CA 92628</p>
                                    </li>
                                    <li>
                                        <p className={cx('footer-label')}>Hours</p>
                                        <p className={cx('footer-text')}>M - F 6:00am - 8:00pm PST</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('footer-bottom')}>
                            <p className={cx('copyright')}>© 2018 - 2023 Healthy Food. All right reserved.</p>

                            <div className={cx('footer-socials')}>
                                <a href="#!" className={cx('footer-social-link', 'facebook')}>
                                    <img className={cx('footer-social-icon')} alt="" src={images.facebookIcon} />
                                </a>
                                <a href="#!" className={cx('footer-social-link', 'twitter')}>
                                    <img className={cx('footer-social-icon')} alt="" src={images.twitterIcon} />
                                </a>
                                <a href="#!" className={cx('footer-social-link', 'tiktok')}>
                                    <img className={cx('footer-social-icon')} alt="" src={images.tiktokIcon} />
                                </a>
                                <a href="#!" className={cx('footer-social-link', 'youtube')}>
                                    <img className={cx('footer-social-icon')} alt="" src={images.youtubeIcon} />
                                </a>
                                <a href="#!" className={cx('footer-social-link', 'linkedin')}>
                                    <img className={cx('footer-social-icon')} alt="" src={images.linkedIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
