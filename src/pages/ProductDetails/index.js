import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import images from '~/assets/images';
import BackToTop from '~/components/BackToTop';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductDetails() {
    const PRODUC_DATA = {
        id: 1,
        thumbnail:
            'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1690734197920-S8F15GMCB7J0SN5ZWYXB/_7IV0224.jpg?format=1500w',
        name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
        price: 70.0,
        brand: 'Lavazza',
        rating: 4.3,
        saved: false,
        moreImages: [
            {
                url: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723579293-JYNY9OE6ZE6FATJX51V5/_R3O4127.jpg?format=1500w',
            },
            {
                url: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1689258526521-DKKEQPO5IZG4ZJD6VG1L/Summer+Cooking+-+Her86m2+41.jpg?format=1500w',
            },
            {
                url: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1681323739922-WL5L12RJ42FWY92GZDAJ/Small+Bites+Brunch+Buffet+Ideas+for+your+next+party+-+Her86m2+_1.171.1.jpg?format=1500w',
            },
        ],
    };

    const PRODUCTS_SUGGEST = [
        {
            id: 6,
            brand: 'sddsfdg',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1658910220043-YPFMH9RGY6YXQMG5XIU1/75+In+Summer%2C+I+Cook+What+My+Garden+Gives+Me+20.jpg?format=1500w',

            name: 'Raindrop Cake',
            price: 21,
            saved: false,
            rating: 5,
        },
        {
            id: 7,

            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1689264374858-OXQEW3UTZ48OPOFXAB15/Summer+Cooking+-+Her86m2_1.117.1.jpg?format=1500w',

            name: 'Bubble Tea',
            price: 50,
            brand: 'Wonder Bread',
            rating: 3.8,
            saved: false,
        },
        {
            id: 8,

            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1670249967692-5ZKGHBUHXNAHK2VYGLVX/Vegetable+Garden+2022+-+Her86m2+-+413.jpg?format=1500w',

            name: 'Tomato',
            price: 20,
            brand: 'Fresh Garden',
            reting: 4.2,
            saved: true,
        },
        {
            id: 9,

            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1670249665894-9VZY77JHHC9EKVQJX383/Everything+About+Growing+Tomatoes+-+Her86m2+_1.177.1.jpg?format=1500w',

            name: 'Spanish',
            price: 20,
            brand: 'Fresh Garden',
            rating: 4.5,
            saved: false,
        },
        {
            id: 10,
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1624481236729-MNKBXLJCV6JN22OTXV1Y/6+Strawberry+Recipes+for+Hot+Summer+-+Her+86m2+_R3O0936.JPG?format=1500w',

            name: 'Strawberries Sweet',
            price: 30,
            brand: 'Fresh Garden',
            rating: 3.9,
            saved: false,
        },
        {
            id: 11,

            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1660752377787-N1L0S4T4OU9BKKURCFUJ/_R3O5168-2.jpg?format=1500w',

            name: 'Leaf Green',
            price: 30,
            brand: 'Fresh Garden',
            rating: 5,
            saved: false,
        },
        {
            id: 12,

            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1681323739922-WL5L12RJ42FWY92GZDAJ/Small+Bites+Brunch+Buffet+Ideas+for+your+next+party+-+Her86m2+_1.171.1.jpg?format=1500w',

            name: 'Bites Brunch',
            price: 34,
            brand: 'Brunches',
            rating: 4.7,
            saved: true,
        },
        {
            id: 13,

            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1689258526521-DKKEQPO5IZG4ZJD6VG1L/Summer+Cooking+-+Her86m2+41.jpg?format=1500w',

            name: 'Lemon Curd Cookies',
            price: 20,
            brand: 'Curd Cookies',
            rating: 4,
            saved: false,
        },
    ];

    const [productTab, setProductTab] = useState('Similar');

    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <div className={cx('inner-header')}>
                        <h4>Glocery</h4>
                        <img className={cx('')} alt="" src={images.arrowRight} />
                        <h4>Category</h4>
                        <img className={cx('')} alt="" src={images.arrowRight} />
                        <h4>{PRODUC_DATA.brand}</h4>
                        <img className={cx('')} alt="" src={images.arrowRight} />
                        <h4 className={cx('active')}>{PRODUC_DATA.name}</h4>
                    </div>
                </header>

                <div className={cx('product-desc')}>
                    <div className="row">
                        <div className={cx('col-5', 'left')}>
                            <div className={cx('product-preview')}>
                                <div className={cx('product-preview-list')}>
                                    {/* item */}
                                    <div className={cx('product-preview-item')}>
                                        <img alt="" className={cx('product-preview-img')} src={PRODUC_DATA.thumbnail} />
                                    </div>
                                    {/* other items */}
                                    {PRODUC_DATA.moreImages.map((item, index) => (
                                        <div key={index} className={cx('product-preview-item')}>
                                            <img alt="" className={cx('product-preview-img')} src={item.url} />
                                        </div>
                                    ))}
                                </div>

                                {/* sub image */}
                                <div className={cx('product-preview-thumbs')}>
                                    <img
                                        alt=""
                                        className={cx('product-thumb-img', 'current')}
                                        src={PRODUC_DATA.thumbnail}
                                    />
                                    {PRODUC_DATA.moreImages.map((item, index) => (
                                        <img key={index} alt="" className={cx('product-thumb-img')} src={item.url} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-7', 'right')}>
                            <form method="post" onSubmit={(e) => e.preventDefault()}>
                                <section className={cx('product-info')}>
                                    <h1 className={cx('product-info-heading')}>{PRODUC_DATA.name}</h1>
                                    <div className="row">
                                        <div className={cx('col-6', 'left-product-info')}>
                                            <div className={cx('product-property')}>
                                                <img
                                                    className={cx('product-property-icon')}
                                                    alt=""
                                                    src={images.starIcon}
                                                />
                                                <h4 className={cx('product-property-title')}>
                                                    {PRODUC_DATA.rating} ( 1100 reviews )
                                                </h4>
                                            </div>
                                            {/* Column 2 */}
                                            <div className={cx('filter-col')}>
                                                <label className={cx('filter-form-label')}>Size/Weight</label>
                                                <div className={cx('filter-form-group')}>
                                                    <div className={cx('filter-select-wrap')}>
                                                        <div className={cx('filter-select')}>
                                                            500g
                                                            <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                                        </div>
                                                        <div className={cx('filter-select')}>
                                                            Gram
                                                            <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('filter-form-group')}>
                                                    <div className={cx('filter-form-tags')}>
                                                        <button className={cx('filter-form-tag')}>Small</button>
                                                        <button className={cx('filter-form-tag')}>Medium</button>
                                                        <button className={cx('filter-form-tag')}>Large</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('col-6')}>
                                            <div className={cx('product-property')}>
                                                <img
                                                    className={cx('product-property-icon', 'icon')}
                                                    alt=""
                                                    src={images.compareIcon}
                                                />
                                                <h4 className={cx('product-property-title')}>Compare</h4>
                                            </div>
                                            <div className={cx('product-property')}>
                                                <img
                                                    className={cx('product-property-icon', 'icon')}
                                                    alt=""
                                                    src={images.cartIcon}
                                                />
                                                <div>
                                                    <h4 className={cx('product-property-title')}>Delivery</h4>
                                                    <p className={cx('product-property-desc')}>From $6 for 1-3 days</p>
                                                </div>
                                            </div>
                                            <div className={cx('product-property')}>
                                                <img
                                                    className={cx('product-property-icon', 'icon')}
                                                    alt=""
                                                    src={images.pickupIcon}
                                                />
                                                <div>
                                                    <h4 className={cx('product-property-title')}>Pickup</h4>
                                                    <p className={cx('product-property-desc')}>Out of 2 store, today</p>
                                                </div>
                                            </div>

                                            <div className={cx('product-info-cart')}>
                                                <div className={cx('product-info-row')}>
                                                    <span className={cx('product-info-price')}>
                                                        ${PRODUC_DATA.price}
                                                    </span>
                                                    <span className={cx('product-info-tax')}>10%</span>
                                                </div>
                                                <p className={cx('product-info-total-price')}>$77.00</p>
                                                <div className={cx('product-info-row', 'buttons')}>
                                                    <button type="submit">Add to cart</button>
                                                    <button>
                                                        <img className={cx('icon')} alt="" src={images.saveIcon} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={cx('more-info')}>
                    <div className={cx('prod-tab')}>
                        <ul className={cx('prod-tab-list')}>
                            <li
                                onClick={() => setProductTab('Description')}
                                className={
                                    productTab === 'Description' ? cx('prod-tab-item', 'current') : cx('prod-tab-item')
                                }
                            >
                                Description
                            </li>
                            <li
                                onClick={() => setProductTab('Features')}
                                className={
                                    productTab === 'Features' ? cx('prod-tab-item', 'current') : cx('prod-tab-item')
                                }
                            >
                                Features
                            </li>
                            <li
                                onClick={() => setProductTab('Review')}
                                className={
                                    productTab === 'Review' ? cx('prod-tab-item', 'current') : cx('prod-tab-item')
                                }
                            >
                                Review (1100)
                            </li>
                            <li
                                onClick={() => setProductTab('Similar')}
                                className={
                                    productTab === 'Similar' ? cx('prod-tab-item', 'current') : cx('prod-tab-item')
                                }
                            >
                                Similar
                            </li>
                        </ul>
                        <div className={cx('prod-tab-contents')}>
                            {productTab === 'Description' && (
                                <div className={cx('product-tab-content')}>Content Description</div>
                            )}
                            {productTab === 'Features' && (
                                <div className={cx('product-tab-content')}>Content Features</div>
                            )}
                            {productTab === 'Review' && (
                                <>
                                    <div className={cx('product-tab-content')}>
                                        <h2 className={cx('product-content-heading')}>What our customers are saying</h2>
                                        <div className="row row-cols-3">
                                            {/* column 1 */}
                                            <div className={cx('col')}>
                                                <div className={cx('review-card')}>
                                                    <div className={cx('review-card-content')}>
                                                        <img
                                                            alt=""
                                                            src={images.avatar}
                                                            className={cx('review-card-avatar')}
                                                        />
                                                        <div className={cx('review-card-info')}>
                                                            <h4 className={cx('review-card-title')}>Jakir Hussen</h4>
                                                            <p className={cx('review-card-desc')}>
                                                                Great product, I love this Coffee Beans{' '}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('review-card-rating')}>
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starHalfIocn}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starEmptyIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <span className={cx('review-card-rating-title')}>
                                                            (3.5) Review
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* column 2 */}
                                            <div className={cx('col')}>
                                                <div className={cx('review-card')}>
                                                    <div className={cx('review-card-content')}>
                                                        <img
                                                            alt=""
                                                            src={images.avatarDefault}
                                                            className={cx('review-card-avatar')}
                                                        />
                                                        <div className={cx('review-card-info')}>
                                                            <h4 className={cx('review-card-title')}>Jakir Hussen</h4>
                                                            <p className={cx('review-card-desc')}>
                                                                Great product, I love this Coffee Beans{' '}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('review-card-rating')}>
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starEmptyIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starEmptyIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <span className={cx('review-card-rating-title')}>
                                                            (3.5) Review
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* column 3 */}
                                            <div className={cx('col')}>
                                                <div className={cx('review-card')}>
                                                    <div className={cx('review-card-content')}>
                                                        <img
                                                            alt=""
                                                            src={images.avatarDefault}
                                                            className={cx('review-card-avatar')}
                                                        />
                                                        <div className={cx('review-card-info')}>
                                                            <h4 className={cx('review-card-title')}>Jakir Hussen</h4>
                                                            <p className={cx('review-card-desc')}>
                                                                Great product, I love this Coffee Beans{' '}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('review-card-rating')}>
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starHalfIocn}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <img
                                                            alt=""
                                                            src={images.starEmptyIcon}
                                                            className={cx('review-card-star')}
                                                        />
                                                        <span className={cx('review-card-rating-title')}>
                                                            (3.5) Review
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {productTab === 'Similar' && (
                                <>
                                    <div className={cx('product-tab-content')}>
                                        <h2 className={cx('product-content-heading')}>
                                            Similar items that you might like
                                        </h2>

                                        <div className={cx('list-products-suggest')}>
                                            {PRODUCTS_SUGGEST.map((product) => (
                                                <div className={cx('wrap-product')} key={product.id}>
                                                    <figure className={cx('thumb')}>
                                                        <img
                                                            onClick={() => navigate(`/product-detail/${product.name}`)}
                                                            className={cx('thumb-img')}
                                                            alt=""
                                                            src={product.thumbnail}
                                                        />
                                                        <div>
                                                            {product.saved === false ? (
                                                                <img
                                                                    className={cx('icon')}
                                                                    alt=""
                                                                    src={images.heartIcon}
                                                                />
                                                            ) : (
                                                                <img
                                                                    className={cx('saved')}
                                                                    alt=""
                                                                    src={images.heartColor}
                                                                />
                                                            )}
                                                        </div>
                                                    </figure>
                                                    <h3
                                                        className={cx('name-product')}
                                                        onClick={() => navigate(`/product-detail/${product.name}`)}
                                                    >
                                                        {[product.name]}
                                                    </h3>
                                                    <p className={cx('brand')}>{product.brand}</p>
                                                    <div className={cx('row')}>
                                                        <span>${product.price}</span>
                                                        <span>
                                                            <img className={cx('star')} alt="" src={images.starIcon} />
                                                            {product.rating}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop />
        </div>
    );
}

export default ProductDetails;
