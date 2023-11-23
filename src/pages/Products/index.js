import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import images from '~/assets/images';
import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '~/hooks/useOnclickOutside';
import ReactSlider from 'react-slider';
import { useNavigate } from 'react-router-dom';
import BackToTop from '~/components/BackToTop';
import useAxios from '~/hooks/useAxios';
import { InfinitySpin } from 'react-loader-spinner';

const cx = classNames.bind(styles);

const BASE_URL_IMAGE = 'http://127.0.0.1:8000/uploads/';
function Products() {
    const axios = useAxios();

    const MIN = 0;
    const MAX = 300;

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
    const [quantity, setQuantity] = useState(null);
    const [showOptionQuantity, setshowOptionQuantity] = useState(false);
    const [showOptionUnit, setshowOptionUnit] = useState(false);

    const [listCategoryProduct, setListCategoryProducts] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [filterCategory, setFilterCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [nextCursor, setNextCursor] = useState(null);

    const [fetchingMoreProduct, setFetchingMoreProduct] = useState(false);

    const [showPopperListCategory, setShowPopperListCategory] = useState(false);
    const refPopperListCategory = useRef();

    const toggleShowPopperListCategory = () => {
        setShowPopperListCategory(!showPopperListCategory);
    };

    const hiddenPopperListCategory = () => {
        setShowPopperListCategory(false);
    };

    useOnClickOutside(refPopperListCategory, hiddenPopperListCategory);

    useEffect(() => {
        fetchListCategory();
        fetchListProduct();
        window.scrollTo(0, 0); // eslint-disable-next-line
    }, []);

    const fetchListCategory = async () => {
        setLoading(true);

        try {
            const response = await axios.get('/api/category-product/get', {
                withCredentials: true,
            });

            console.log(response.data);
            setListCategoryProducts(response.data);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetchListProduct = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/product/pagination', {
                withCredentials: true,
            });

            console.log(response.data);

            setListProduct(response.data.data);

            if (response.data.next_cursor) {
                setNextCursor(response.data.next_cursor);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleLoadMoreProduct = async () => {
        if (nextCursor === null) {
            return;
        }

        setFetchingMoreProduct(true);

        try {
            const response = await axios.get(`/api/product/pagination/${nextCursor}`, {
                withCredentials: true,
            });

            const nextData = response.data.data;
            setListProduct((prev) => [...prev, ...nextData]);
            setNextCursor(response.data.next_cursor);
            setFetchingMoreProduct(false);
        } catch (error) {
            console.log(error);
            setFetchingMoreProduct(false);
        }
    };

    const toggleShowFilter = () => {
        setShowFilter(!showFlter);
    };

    const toggleShowOptionQuantity = () => {
        setshowOptionQuantity(!showOptionQuantity);
    };

    const toggleShowOptionUnit = () => {
        setshowOptionUnit(!showOptionUnit);
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

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('filter-suggest')}>
                        <header>
                            <h3>Glocery</h3>
                            <img src={images.arrowRight} alt="" />
                            <div ref={refPopperListCategory} className={cx('filter-select-wrap-bread')}>
                                <div onClick={toggleShowPopperListCategory} className={cx('main')}>
                                    {filterCategory === null ? 'All Category' : filterCategory.name}
                                    <img
                                        className={showPopperListCategory ? cx('icon', 'icon-rotate') : cx('icon')}
                                        alt=""
                                        src={images.arrowDownIcon}
                                    />
                                </div>
                                <div className={showPopperListCategory ? cx('wrap-list') : cx('wrap-list', 'none')}>
                                    <div className={cx('popper-list')}>
                                        <div className={cx('popper-item')}>
                                            <span onClick={() => setFilterCategory(null)}>All Category</span>
                                        </div>

                                        {listCategoryProduct.length > 0 &&
                                            listCategoryProduct !== null &&
                                            listCategoryProduct.map((item) => (
                                                <div
                                                    onClick={() => setFilterCategory(item)}
                                                    key={item.id}
                                                    className={
                                                        filterCategory !== null && filterCategory.id === item.id
                                                            ? cx('popper-item', 'active')
                                                            : cx('popper-item')
                                                    }
                                                >
                                                    <span>
                                                        {item.name} ({item.products.length})
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className={cx('filter-products')}>
                        <h3>List Products</h3>
                        <div ref={refFilter} className={cx('filter-wrap')}>
                            <button onClick={toggleShowFilter}>
                                Filter
                                <img className={cx('icon')} alt="" src={images.filterIcon} />
                            </button>

                            <div className={showFlter === true ? cx('filter') : cx('filter', 'none')}>
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
                                                        ref={refOptionQuantty}
                                                        className={cx('filter-select', 'select-quantities')}
                                                    >
                                                        {quantity === null ? 'Select' : quantity}
                                                        <img
                                                            className={
                                                                showOptionQuantity === true
                                                                    ? cx('icon', 'icon-rotate')
                                                                    : cx('icon')
                                                            }
                                                            alt=""
                                                            src={images.arrowIcon}
                                                        />
                                                        <div
                                                            className={
                                                                showOptionQuantity === true
                                                                    ? cx('wrap-options')
                                                                    : cx('wrap-options', 'none')
                                                            }
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
                                                        ref={refOptionUnit}
                                                        onClick={toggleShowOptionUnit}
                                                        className={cx('filter-select', 'select-units')}
                                                    >
                                                        {unit}
                                                        <img
                                                            className={
                                                                showOptionUnit === true
                                                                    ? cx('icon', 'icon-rotate')
                                                                    : cx('icon')
                                                            }
                                                            alt=""
                                                            src={images.arrowIcon}
                                                        />
                                                        <div
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
                        {listProduct.length > 0 &&
                            listProduct.map((product) => (
                                <div className={cx('wrap-product')} key={product.id}>
                                    <figure className={cx('thumb')}>
                                        <img
                                            onClick={() => navigate(`/product-detail/${product.slug}`)}
                                            className={cx('thumb-img')}
                                            alt=""
                                            src={`${BASE_URL_IMAGE}${product.thumbnails[0].path}`}
                                        />
                                        <div>
                                            <img className={cx('icon')} alt="" src={images.heartIcon} />
                                            {/* <img className={cx('saved')} alt="" src={images.heartColor} /> */}
                                        </div>
                                    </figure>
                                    <h3
                                        className={cx('name-product')}
                                        onClick={() => navigate(`/product-detail/${product.slug}`)}
                                    >
                                        {product.name}
                                    </h3>
                                    <p className={cx('brand')}>{product.brand}</p>
                                    <div className={cx('row')}>
                                        <span>${product.price}</span>
                                        <span>
                                            <img className={cx('star')} alt="" src={images.starIcon} />4
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {nextCursor !== null && fetchingMoreProduct === false && (
                        <button onClick={handleLoadMoreProduct} className={cx('btn-load-more')}>
                            Load more
                            <img className={cx('icon')} alt="" src={images.arrowIconRight} />
                        </button>
                    )}

                    {nextCursor !== null && fetchingMoreProduct === true && (
                        <button className={cx('btn-load-more')}>
                            <img className={cx('icon', 'spinner-icon')} alt="" src={images.spinnerIcon} />
                            Loading
                        </button>
                    )}
                </div>

                <BackToTop />
            </div>

            {loading && (
                <div className={cx('modal-infinity')}>
                    <div className={cx('overlay-infinity')}></div>
                    <div className={cx('wrap-loading-infinity')}>
                        <InfinitySpin width="160" color="#fff" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Products;
