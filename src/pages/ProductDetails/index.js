import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import images from '~/assets/images';

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
        <div className={cx('wraper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <div className={cx('inner-header')}>
                        <h4>Glocery</h4>
                        <img className={cx('')} alt="" src={images.arrowRight} />
                        <h4>Category</h4>
                        <img className={cx('')} alt="" src={images.arrowRight} />
                        <h4>{PRODUC_DATA.brand}</h4>
                        <img className={cx('')} alt="" src={images.arrowRight} />
                        <h4>{PRODUC_DATA.name}</h4>
                    </div>
                </header>

                <div className={cx('product-desc')}>
                    <div className={cx('left')}></div>
                    <div className={cx('right')}></div>
                </div>
                <div className={cx('more-info')}></div>
            </div>
        </div>
    );
}

export default ProductDetails;
