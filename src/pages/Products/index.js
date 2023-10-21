import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Category from '~/components/Category';
import images from '~/assets/images';
import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '~/hooks/useOnclickOutside';
import ReactSlider from 'react-slider';
import { useNavigate } from 'react-router-dom';
import BackToTop from '~/components/BackToTop';

const cx = classNames.bind(styles);

function Products() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const LIST_CATEGORY = [
        {
            id: 1,
            title: 'Snacks',
            icon1: images.cateFruit1,
            icon2: images.category22,
        },
        {
            id: 2,
            title: 'Fresh Produce',

            icon1: images.cateVegetable1,
            icon2: images.cateFruit2,
        },
        {
            id: 3,
            title: 'Frozen',
            icon1: images.cateRootVegetable1,
            icon2: images.category23,
        },
        {
            id: 4,
            title: 'Candy',
            icon1: images.category21,
            icon2: images.category24,
        },
        {
            id: 5,
            title: 'Bakery & Bread',
            icon1: images.cate13,
            icon2: images.cate26,
        },
        {
            id: 6,
            title: 'Benerages',
            icon1: images.cate14,
            icon2: images.cate27,
        },
        {
            id: 7,
            title: 'Cooktails & Coffee',
            icon1: images.cate15,
            icon2: images.cate28,
        },
        {
            id: 8,
            title: 'Special Food',
            icon1: images.cate16,
            icon2: images.cate29,
        },
    ];

    const PRODUCTS = [
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
        {
            id: 1,
            thumbnail: images.slideShow1,
            name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
            price: 23.0,
            brand: 'Lavazza',
            rating: 4.3,
            saved: true,
        },
        {
            id: 2,
            thumbnail: images.slideShow2,
            name: 'Lavazza Coffee Blends - Try the Italian Espresso',
            price: 49.8,
            brand: 'welikecoffee',
            rating: 4.3,
            saved: false,
        },
        {
            id: 3,
            thumbnail: images.slideShow3,
            name: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
            price: 70.0,
            brand: 'Lavazza',
            rating: 4.3,
            saved: false,
        },
        {
            id: 4,
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723579293-JYNY9OE6ZE6FATJX51V5/_R3O4127.jpg?format=1500w',
            name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
            price: 50.0,
            brand: 'welikecoffee',
            rating: 4.3,
            saved: true,
        },
        {
            id: 5,
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1690734197920-S8F15GMCB7J0SN5ZWYXB/_7IV0224.jpg?format=1500w',
            name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
            price: 70.0,
            brand: 'Lavazza',
            rating: 4.3,
            saved: false,
        },
    ];
    const MIN = 0;
    const MAX = 150;

    const QUANTITIES = [
        {
            type: 'Gram',
            list: [100, 200, 400, 500],
        },
        {
            type: 'Kilogram',
            list: [1, 2, 3],
        },
        {
            type: 'Mililit',
            list: [100, 200, 300, 500],
        },
        {
            type: 'Lit',
            list: [1, 2, 3, 5, 6],
        },
    ];

    const UNITS = ['Gram', 'Kilogram', 'Mililit', 'Lit'];

    const [showFlter, setShowFilter] = useState(false);
    const refFilter = useRef();
    const refOptionQuantty = useRef();
    const refOptionUnit = useRef();
    const navigate = useNavigate();
    const [values, setValues] = useState([MIN, MAX]);
    const [unit, setUnit] = useState(UNITS[0]);
    const [quantity, setQuantity] = useState('100 gram');
    const [showOptionQuantity, setshowOptionQuantity] = useState(false);
    const [showOptionUnit, setshowOptionUnit] = useState(false);

    const toggleShowFilter = () => {
        setShowFilter((pre) => !pre);
    };

    const toggleShowOptionQuantity = () => {
        setshowOptionQuantity((prev) => !prev);
    };

    const toggleShowOptionUnit = () => {
        setshowOptionUnit((prev) => !prev);
    };

    const hiddenFilter = () => {
        setShowFilter(false);
    };

    const hiddenOptionQuantity = () => {
        setshowOptionQuantity(false);
    };

    const hiddenOptionUnit = () => {
        setshowOptionUnit(false);
    };

    useOnClickOutside(refFilter, hiddenFilter);

    useOnClickOutside(refOptionQuantty, hiddenOptionQuantity);

    useOnClickOutside(refOptionUnit, hiddenOptionUnit);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('carousel-categories')}>
                    <h3>Category Browser</h3>
                    <Carousel responsive={responsive} showDots={false} containerClass={cx('carousel-container')}>
                        {LIST_CATEGORY.map((data) => (
                            <Category key={data.id} data={data} />
                        ))}
                    </Carousel>
                </div>

                <div className={cx('filter-products')}>
                    <h3>List Products</h3>
                    <div className={cx('filter-wrap')}>
                        <button onClick={toggleShowFilter}>
                            Filter
                            <img className={cx('icon')} alt="" src={images.filterIcon} />
                        </button>

                        <div ref={refFilter} className={showFlter === true ? cx('filter') : cx('filter', 'none')}>
                            <img className={cx('filter-arrow')} alt="" src={images.arrowUpIcon} />
                            <h3 className={cx('filter-heading')}>Filter</h3>
                            <form method="post" onSubmit={(e) => e.preventDefault()} className={cx('filter-form')}>
                                <div className={cx('filter-row')}>
                                    {/* Column 1 */}
                                    <div className={cx('filter-col')}>
                                        <label className={cx('filter-form-label')}>Price</label>
                                        <div className={cx('filter-form-group')}>
                                            {/* <div
                                                style={{ '--min-value': 10 + '%', '--max-value': 60 + '%' }}
                                                className={cx('filter-form-slider')}
                                            ></div> */}

                                            <ReactSlider
                                                min={MIN}
                                                max={MAX}
                                                value={values}
                                                onChange={setValues}
                                                className={'slider-filter-price'}
                                            ></ReactSlider>
                                        </div>
                                        <div className={cx('filter-form-group', 'hornizonal')}>
                                            <div>
                                                <label className={cx('filter-form-label', 'small')}>Minimun</label>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className={cx('filter-form-input')}
                                                    value={values[0]}
                                                />
                                            </div>
                                            <div>
                                                <label className={cx('filter-form-label', 'small')}>Maximum</label>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className={cx('filter-form-input')}
                                                    value={values[1]}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('filter-separate')}></div>

                                    {/* Column 2 */}
                                    <div className={cx('filter-col')}>
                                        <label className={cx('filter-form-label')}>Size/Weight</label>
                                        <div className={cx('filter-form-group')}>
                                            <div className={cx('filter-select-wrap')}>
                                                <div
                                                    onClick={toggleShowOptionQuantity}
                                                    className={cx('filter-select', 'select-quantities')}
                                                >
                                                    {quantity}
                                                    <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                                    <div
                                                        className={
                                                            showOptionQuantity === true
                                                                ? cx('wrap-options')
                                                                : cx('wrap-options', 'none')
                                                        }
                                                        ref={refOptionQuantty}
                                                    >
                                                        {QUANTITIES.map((item, index) => {
                                                            if (item.type === unit) {
                                                                return (
                                                                    <div key={index} className={cx('list-options')}>
                                                                        {item.list.map((option) => (
                                                                            <div
                                                                                onClick={() =>
                                                                                    setQuantity(
                                                                                        `${option} ${unit.toLowerCase()}`,
                                                                                    )
                                                                                }
                                                                                className={cx('option')}
                                                                                key={option}
                                                                            >
                                                                                <span>
                                                                                    {option} {unit.toLowerCase()}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                );
                                                            } else {
                                                                return <></>;
                                                            }
                                                        })}
                                                    </div>
                                                </div>
                                                <div
                                                    onClick={toggleShowOptionUnit}
                                                    className={cx('filter-select', 'select-units')}
                                                >
                                                    {unit}
                                                    <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                                    <div
                                                        ref={refOptionUnit}
                                                        className={
                                                            showOptionUnit === true
                                                                ? cx('wrap-options')
                                                                : cx('wrap-options', 'none')
                                                        }
                                                    >
                                                        {UNITS.map((item) => (
                                                            <div
                                                                onClick={() => setUnit(item)}
                                                                key={item}
                                                                className={cx('option')}
                                                            >
                                                                <span>{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
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

                                    <div className={cx('filter-separate')}></div>

                                    {/* Column 3 */}
                                    <div className={cx('filter-col')}>
                                        <label className={cx('filter-form-label')}>Brand</label>
                                        <div className={cx('filter-form-group')}>
                                            <div className={cx('filter-form-text')}>
                                                <input type="text" placeholder="Search brand name" />
                                                <img className={cx('icon')} alt="" src={images.searchIcon} />
                                            </div>
                                        </div>
                                        <div className={cx('filter-form-group')}>
                                            <div className={cx('filter-form-tags')}>
                                                <button className={cx('filter-form-tag')}>Lavazza</button>
                                                <button className={cx('filter-form-tag')}>Nescafe</button>
                                                <button className={cx('filter-form-tag')}>Starbcks</button>
                                            </div>
                                        </div>

                                        <div className={cx('filter-form-group')}>
                                            <div className={cx('btn-group')}>
                                                <button>Cancel</button>
                                                <button type="submit">Show Result</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={cx('list-products')}>
                    {PRODUCTS.map((product) => (
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
                                        <img className={cx('icon')} alt="" src={images.heartIcon} />
                                    ) : (
                                        <img className={cx('saved')} alt="" src={images.heartColor} />
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

            <BackToTop />
        </div>
    );
}

export default Products;
