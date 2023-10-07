import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const NAVBAR_lIST = [
        {
            title: 'Nutrition',
        },
        {
            title: 'Grocery',
        },
        {
            title: 'Event',
        },
        {
            title: 'Campain',
        },
    ];

    const navigate = useNavigate();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top-bar')}>
                    {/* More */}
                    <button className={cx('top-bar-more')}>
                        <img className={cx('icon', 'more-icon')} alt="" src={images.moreIcon} />
                    </button>
                    {/* Logo */}
                    <div className={cx('logo')} onClick={() => navigate('/')}>
                        <img src={images.logo} alt="Healthy Food" className={cx('logo-img')} />
                        <h2 className={cx('logo-title')}>healthyfood</h2>
                    </div>

                    {/* Navbar */}
                    <nav className={cx('navbar')}>
                        <ul className={cx('list')}>
                            {NAVBAR_lIST.map((item, index) => (
                                <li key={index}>
                                    <a href="#!" className={cx('navbar-link')}>
                                        <span>{item.title}</span>
                                        <img className={cx('arrow-icon', 'icon')} alt="" src={images.arrowIcon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Actions */}
                    <div className={cx('top-action')}>
                        <div className={cx('top-action-group')}>
                            <button className={cx('btn')}>
                                <img src={images.searchIcon} alt="" className={cx('action-icon', 'icon')} />
                            </button>
                        </div>
                        <div className={cx('top-action-group')}>
                            <button className={cx('btn')}>
                                <img src={images.heartIcon} alt="" className={cx('action-icon', 'icon')} />
                                <span className={cx('action-title')}>03</span>
                            </button>
                            <div className={cx('separate')}></div>
                            <button className={cx('btn')}>
                                <img src={images.cartIcon} alt="" className={cx('action-icon', 'icon')} />
                                <span className={cx('action-title')}>$65.42</span>
                            </button>
                        </div>
                        <div className={cx('top-action-user')}>
                            <img src={images.avatar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
