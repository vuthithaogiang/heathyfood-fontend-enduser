import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Profile() {
    const SUB_MENU = [
        {
            title: 'Manage Account',
            children: [
                {
                    title: 'Personal Info',
                    icon: images.userIcon,
                },
                {
                    title: 'Address',
                    icon: images.addressIcon,
                },
                {
                    title: 'Communications & privacy',
                    icon: images.messageIcon,
                },
            ],
        },
        {
            title: 'My Items',
            children: [
                {
                    title: 'Reoder',
                    icon: images.reorderIcon,
                },
                {
                    title: 'Lists',
                    icon: images.heartIcon,
                },
                {
                    title: 'Registrics',
                    icon: images.giftIcon,
                },
            ],
        },
        {
            title: 'Subscriptions & plans',
            children: [
                {
                    title: 'Protection plans',
                    icon: images.protectionIcon,
                },
            ],
        },
        {
            title: 'Customer Service',
            children: [
                {
                    title: 'Help',
                    icon: images.helpIcon,
                },
                {
                    title: 'Terms of Use',
                    icon: images.termOfUserIcon,
                },
            ],
        },
    ];

    const [mainContent, setMainContent] = useState('default');

    const handleSubmitFormAddCard = async (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('sidebar')}>
                    <figure>
                        <img className={cx('thumb')} alt="" src={images.bgAvatarDefault} />
                    </figure>
                    <div className={cx('avatar-group')}>
                        <div className={cx('wrap-avatar')}>
                            <img className={cx('avatar')} src={images.avatarDefault} alt="" />
                        </div>
                        <h2>Imran Khan</h2>
                        <p>Registered: 17th May 2022</p>
                    </div>

                    <div className={cx('menu')}>
                        {SUB_MENU.map((item, index) => (
                            <div className={cx('group-menu')} key={index}>
                                <h2 className={cx('menu-heading')}>{item.title}</h2>

                                {item.children.map((subItem, index) => (
                                    <div
                                        className={cx('sub-item')}
                                        key={index}
                                        onClick={() => {
                                            if (subItem.title === 'Personal Info') {
                                                setMainContent('personal-info');
                                            }
                                        }}
                                    >
                                        <img className={cx('icon')} alt="" src={subItem.icon} />
                                        <span className={cx('menu-title')}>{subItem.title}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Common */}

                <>
                    {mainContent === 'default' && (
                        <div className={cx('main-content')}>
                            {/* Part 1 */}
                            <div className={cx('part-content')}>
                                <h2 className={cx('content-heading')}>My Wallet</h2>
                                <p className={cx('content-desc')}>Payment method</p>

                                <div className={cx('list-wallet')}>
                                    <div className={cx('wallet-item')}>
                                        <img alt="" src={images.card1} />
                                    </div>
                                    <div className={cx('wallet-item')}>
                                        <img alt="" src={images.card2} />
                                    </div>

                                    <div className={cx('wallet-item')} onClick={() => setMainContent('form-add-card')}>
                                        <img className={cx('icon-card')} alt="" src={images.plusIcon} />
                                        <span>Add New Card</span>
                                    </div>
                                </div>
                            </div>

                            {/* Part 2 */}
                            <div className={cx('part-content')}>
                                <h2 className={cx('content-heading')}>Account info</h2>
                                <p className={cx('content-desc')}>Addresses, contact information and password</p>

                                <div className={cx('list-info')}>
                                    <div className={cx('row')}>
                                        <div className={cx('column')}>
                                            <div className={cx('wrap-icon')}>
                                                <img className={cx('icon')} alt="" src={images.messageIcon} />
                                            </div>
                                            <div className={cx('info')}>
                                                <p className={cx('info-heading')}>Email Address</p>
                                                <p className={cx('info-desc')}>vuthithaogiang@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className={cx('column')}>
                                            <div className={cx('wrap-icon')}>
                                                <img className={cx('icon')} alt="" src={images.phoneIcon} />
                                            </div>
                                            <div className={cx('info')}>
                                                <p className={cx('info-heading')}>Phone Number</p>
                                                <p className={cx('info-desc')}>+000 11122 2345 657</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('row')}>
                                        <div className={cx('column')}>
                                            <div className={cx('wrap-icon')}>
                                                <img className={cx('icon')} alt="" src={images.addressIcon} />
                                            </div>
                                            <div className={cx('info')}>
                                                <p className={cx('info-heading')}>Add an address</p>
                                                <p className={cx('info-desc')}>
                                                    Bangladesh Embassy, Washington, DC 20008
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Part 3 */}
                            <div className={cx('part-content')}>
                                <h2 className={cx('content-heading')}>Lists</h2>
                                <p className={cx('content-desc')}>2 items</p>

                                <div className={cx('product-list')}>
                                    <div className={cx('row')}>
                                        <img className={cx('thumbnail')} alt="" src={images.slideShow1} />
                                        <div>
                                            <p className={cx('product-name')}>
                                                Coffee Beans - Espresso Arabica and Robusta Beans
                                            </p>
                                            <div className={cx('group')}>
                                                <span className={cx('product-price')}>$47.00 </span>
                                                <button className={cx('btn-add')}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('row')}>
                                        <img className={cx('thumbnail')} alt="" src={images.slideShow2} />
                                        <div>
                                            <p className={cx('product-name')}>
                                                Lavazza Coffee Blends - Try the Italian Espresso
                                            </p>
                                            <div className={cx('group')}>
                                                <span className={cx('product-price')}>$50.80</span>
                                                <button className={cx('btn-add')}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {mainContent === 'form-add-card' && (
                        <div className={cx('main-content')}>
                            <header className={cx('form-header')}>
                                <img
                                    onClick={() => setMainContent('default')}
                                    className={cx('icon')}
                                    src={images.arrowLeftIcon}
                                    alt=""
                                />
                                <h2 className={cx('form-heading')}>Add credit or debit card</h2>
                            </header>

                            <form onSubmit={handleSubmitFormAddCard} method="post" className={cx('form')}>
                                <div className={cx('inner-form')}>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="firsName">
                                            First Name
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="Imran"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Khan"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="cardNumber">
                                            Card Information
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="cardNumber"
                                            id="cardNumber"
                                            placeholder="Card Number"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="exprationDate">
                                            Expiration Date
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="expirationDate"
                                            id="exprationDate"
                                            placeholder="YY/MM"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="cvv">
                                            CVV
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            id="cvv"
                                            type="text"
                                            name="cvv"
                                            placeholder="123"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="phone">
                                            Phone
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="phone"
                                            placeholder="017"
                                            id="phone"
                                        />
                                    </div>
                                </div>
                                <div className={cx('btn-group')}>
                                    <button>Cancel</button>
                                    <button type="submit">Save Card</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {mainContent === 'personal-info' && (
                        <div className={cx('main-content')}>
                            <header className={cx('form-header')}>
                                <img
                                    onClick={() => setMainContent('default')}
                                    className={cx('icon')}
                                    src={images.arrowLeftIcon}
                                    alt=""
                                />
                                <h2 className={cx('form-heading')}>Personal Information</h2>
                            </header>

                            <form onSubmit={handleSubmitFormAddCard} method="post" className={cx('form')}>
                                <div className={cx('inner-form')}>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="fullname">
                                            Full Name
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            placeholder="Imran Kahn"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="abcd@gmail.com"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="phoneNumber">
                                            Phone Number
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="text"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            placeholder="02365272"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="121323"
                                        />
                                    </div>
                                </div>
                                <div className={cx('btn-group')}>
                                    <button>Cancel</button>
                                    <button type="submit">Save Card</button>
                                </div>
                            </form>
                        </div>
                    )}
                </>
            </div>
        </div>
    );
}

export default Profile;
