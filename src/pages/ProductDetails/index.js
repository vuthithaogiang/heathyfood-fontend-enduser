import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import images from '~/assets/images';
import BackToTop from '~/components/BackToTop';

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
                    <div className={cx('row')}>
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
                                    <div className={cx('row')}>
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
                <div className={cx('more-info')}></div>
            </div>
            <BackToTop />
        </div>
    );
}

export default ProductDetails;
