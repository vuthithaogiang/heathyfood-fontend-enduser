import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';
import { useState, useRef } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BestSeller() {
    const CATEGORIES = ['All', 'Bakery & Bread', 'Fresh Produce', 'Drinks'];

    const LIST_SOCIAL_PRODUCT = [
        {
            id: 1,
            cate: 'Bakery & Bread',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1658910220043-YPFMH9RGY6YXQMG5XIU1/75+In+Summer%2C+I+Cook+What+My+Garden+Gives+Me+20.jpg?format=1500w',
            updateAt: 'October 29, 2022',
            name: 'Raindrop Cake',
            price: 21,
            belongToBrand: 'Wonder Bread',
        },
        {
            id: 2,
            cate: 'Drinks',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1689264374858-OXQEW3UTZ48OPOFXAB15/Summer+Cooking+-+Her86m2_1.117.1.jpg?format=1500w',
            updateAt: 'October 29, 2022',
            name: 'Bubble Tea',
            price: 50,
            belongToBrand: 'Wonder Bread',
        },
        {
            id: 3,
            cate: 'Fresh Produce',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1670249967692-5ZKGHBUHXNAHK2VYGLVX/Vegetable+Garden+2022+-+Her86m2+-+413.jpg?format=1500w',
            updateAt: 'October 29, 2022',
            name: 'Tomato',
            price: 20,
            belongToBrand: 'Fresh Garden',
        },
        {
            id: 4,
            cate: 'Fresh Produce',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1670249665894-9VZY77JHHC9EKVQJX383/Everything+About+Growing+Tomatoes+-+Her86m2+_1.177.1.jpg?format=1500w',
            updateAt: 'October 29, 2022',
            name: 'Spanish',
            price: 20,
            belongToBrand: 'Fresh Garden',
        },
        {
            id: 5,
            cate: 'Drinks',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1624481236729-MNKBXLJCV6JN22OTXV1Y/6+Strawberry+Recipes+for+Hot+Summer+-+Her+86m2+_R3O0936.JPG?format=1500w',
            updateAt: '',
            name: 'Strawberries Sweet',
            price: 30,
            belongToBrand: 'Fresh Garden',
        },
        {
            id: 6,
            cate: 'resh Produce',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1660752377787-N1L0S4T4OU9BKKURCFUJ/_R3O5168-2.jpg?format=1500w',
            updateAt: '',
            name: 'Leaf Green',
            price: 30,
            belongToBrand: 'Fresh Garden',
        },
        {
            id: 7,
            cate: 'Bakery & Bread',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1681323739922-WL5L12RJ42FWY92GZDAJ/Small+Bites+Brunch+Buffet+Ideas+for+your+next+party+-+Her86m2+_1.171.1.jpg?format=1500w',
            updateAt: 'March 29, 2022',
            name: 'Bites Brunch',
            price: 34,
            belongToBrand: 'Brunches',
        },
        {
            id: 8,
            cate: 'Bakery & Bread',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1689258526521-DKKEQPO5IZG4ZJD6VG1L/Summer+Cooking+-+Her86m2+41.jpg?format=1500w',
            updateAt: 'March 29, 2022',
            name: 'Lemon Curd Cookies',
            price: 20,
            belongToBrand: 'Curd Cookies',
        },
    ];

    const [category, setCategory] = useState('All');
    const sliderRef = useRef();
    const [isDragStart, setIsDragStart] = useState(false);
    const [prePageX, setPrePageX] = useState(0);
    const [preScrollLeft, setPreScrollLeft] = useState(0);

    const dragStart = (e) => {
        setIsDragStart(true);
        setPrePageX(e.pageX);
        setPreScrollLeft(sliderRef.current.scrollLeft);
    };

    const dragStop = () => {
        setIsDragStart(false);
    };

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prePageX;
        sliderRef.current.scrollLeft = preScrollLeft - positionDiff;
        // console.log(e.pageX);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <header>
                    <p>New Arrival</p>
                    <h2>Browser Our Bets Accessories</h2>
                </header>
                <div className={cx('category')}>
                    {CATEGORIES.map((c) => (
                        <span
                            key={c}
                            className={
                                c === category
                                    ? cx('type-category', 'active', 'd-lg-none')
                                    : cx('type-category', 'd-lg-none')
                            }
                            onClick={() => setCategory(c)}
                        >
                            {c}
                        </span>
                    ))}
                </div>

                <div className={cx('carousel')}>
                    <div
                        className={cx('list-news')}
                        ref={sliderRef}
                        onMouseDown={dragStart}
                        onMouseMove={dragging}
                        onMouseUp={dragStop}
                    >
                        {category === 'All' ? (
                            <>
                                {LIST_SOCIAL_PRODUCT.map((item) => (
                                    <div className={cx('news-item')} key={item.id}>
                                        <img alt="" className={cx('thumb')} src={item.thumbnail} />
                                        <div className={cx('date-publish')}>
                                            <span className={cx('brand', `${item.cate}`)}>{item.belongToBrand}</span>
                                            <span>{item.updateAt}</span>
                                            <span className={cx('price')}>${item.price}</span>
                                        </div>
                                        <h4>{item.name}</h4>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {LIST_SOCIAL_PRODUCT.filter((i) => i.cate === category).map((item) => (
                                    <div className={cx('news-item')} key={item.id}>
                                        <img alt="" className={cx('thumb')} src={item.thumbnail} />
                                        <div className={cx('date-publish')}>
                                            <span className={cx('brand')}>{item.belongToBrand}</span>
                                            <span>{item.updateAt}</span>
                                            <span className={cx('price')}>${item.price}</span>
                                        </div>
                                        <h4>{item.name}</h4>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className={cx('btn')}>
                    <span>Go to Glocery</span>
                    <img alt="" src={images.arrowIconRight} className={cx('icon')} />
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
