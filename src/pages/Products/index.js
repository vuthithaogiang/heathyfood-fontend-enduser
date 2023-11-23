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
    const MAX = 150;

    const TYPE_ODERS = [
        {
            id: 1,
            title: 'Price Low to High',
        },
        {
            id: 2,
            title: 'Price High to Low',
        },
        {
            id: 3,
            title: 'Name a-z',
        },
        {
            id: 4,
            title: 'Name z-a',
        },
    ];

    const STATUS = [
        {
            id: 2,
            title: 'Upcoming',
        },
        {
            id: 3,
            title: 'New Arrival',
        },
        {
            id: 5,
            title: 'Best Seller',
        },
    ];

    const [showFlter, setShowFilter] = useState(false);
    const refFilter = useRef();
    const refOptionTypeOrder = useRef();
    const refOptionUnit = useRef();
    const navigate = useNavigate();
    const [values, setValues] = useState([MIN, MAX]);
    const [statusFilter, setStatusFilter] = useState(null);
    const [valueSearchBrand, setValueSearchBrand] = useState('');
    const [typeOrder, setTypeOrder] = useState(null);
    const [showOptionTypeOrder, setshowOptionTypeOrder] = useState(false);
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

            const array = response.data.filter((item) => item.products.length > 0);
            setListCategoryProducts(array);

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

    const toggleShowOptionTypeOrder = () => {
        setshowOptionTypeOrder(!showOptionTypeOrder);
    };

    const toggleShowOptionUnit = () => {
        setshowOptionUnit(!showOptionUnit);
    };

    const hiddenFilter = () => {
        setShowFilter(false);
    };

    const hiddenOptionTypeOrder = () => {
        setshowOptionTypeOrder(false);
    };

    const hiddenOptionUnit = () => {
        setshowOptionUnit(false);
    };

    useOnClickOutside(refFilter, hiddenFilter);

    useOnClickOutside(refOptionTypeOrder, hiddenOptionTypeOrder);

    useOnClickOutside(refOptionUnit, hiddenOptionUnit);

    const handleSubmitFilter = async (e) => {
        e.preventDefault();

        console.log('Min', values[0]);
        console.log('Max', values[1]);
        console.log('Type order', typeOrder);
        console.log('Status: ', statusFilter);

        const formData = new FormData();

        formData.append('min', values[0]);
        formData.append('max', values[1]);

        if (statusFilter !== null) {
            formData.append('status', statusFilter.id);
        }

        if (typeOrder !== null) {
            if (typeOrder.title === 'Price Low to High') {
                formData.append('orderBy', 'price');
                formData.append('orderType', 'asc');
            } else if (typeOrder.title === 'Price High to Low') {
                formData.append('orderBy', 'price');
                formData.append('orderType', 'desc');
            } else if (typeOrder.title === 'Name a-z') {
                formData.append('orderBy', 'name');
                formData.append('orderType', 'asc');
            } else if (typeOrder.title === 'Name z-a') {
                formData.append('orderBy', 'name');
                formData.append('orderType', 'desc');
            }
        }
        setLoading(true);
        try {
            const response = await axios.post('/api/product/get-filter', formData, {
                withCredentials: true,
            });

            console.log(response.data);

            setListProduct(response.data.data);
            setNextCursor(null);
        } catch (error) {
            console.log(error);
        } finally {
            hiddenFilter();
            setLoading(false);
        }
    };

    const clearFilter = () => {
        setValues([MIN, MAX]);
        setTypeOrder(null);
        setStatusFilter(null);
        setValueSearchBrand('');

        hiddenFilter();
        fetchListProduct();
    };

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
                                <form method="post" onSubmit={handleSubmitFilter} className={cx('filter-form')}>
                                    <div className={cx('filter-row')}>
                                        {/* Column 1 */}
                                        <div className={cx('filter-col')}>
                                            <label className={cx('filter-form-label')}>Price</label>
                                            <div className={cx('filter-form-group')}>
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
                                            <label className={cx('filter-form-label')}>Group by</label>
                                            <div className={cx('filter-form-group')}>
                                                <div className={cx('filter-select-wrap')}>
                                                    <div
                                                        onClick={toggleShowOptionTypeOrder}
                                                        ref={refOptionTypeOrder}
                                                        className={cx('filter-select', 'select-quantities')}
                                                    >
                                                        {typeOrder === null ? 'Select' : typeOrder.title}
                                                        <img
                                                            className={
                                                                showOptionTypeOrder === true
                                                                    ? cx('icon', 'icon-rotate')
                                                                    : cx('icon')
                                                            }
                                                            alt=""
                                                            src={images.arrowIcon}
                                                        />
                                                        <div
                                                            className={
                                                                showOptionTypeOrder === true
                                                                    ? cx('wrap-options')
                                                                    : cx('wrap-options', 'none')
                                                            }
                                                        >
                                                            {TYPE_ODERS.map((item, index) => {
                                                                return (
                                                                    <div key={index} className={cx('list-options')}>
                                                                        <div
                                                                            onClick={() => setTypeOrder(item)}
                                                                            className={
                                                                                typeOrder !== null &&
                                                                                item.id === typeOrder.id
                                                                                    ? cx('option', 'active')
                                                                                    : cx('option')
                                                                            }
                                                                        >
                                                                            <span>{item.title}</span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div
                                                        ref={refOptionUnit}
                                                        onClick={toggleShowOptionUnit}
                                                        className={cx('filter-select', 'select-units')}
                                                    >
                                                        {statusFilter === null ? 'Status' : statusFilter.title}
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
                                                            {STATUS.map((item) => (
                                                                <div
                                                                    onClick={() => setStatusFilter(item)}
                                                                    key={item.id}
                                                                    className={
                                                                        statusFilter !== null &&
                                                                        item.id === statusFilter.id
                                                                            ? cx('option', 'active')
                                                                            : cx('option')
                                                                    }
                                                                >
                                                                    <span>{item.title}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('filter-form-group')}>
                                                <div className={cx('filter-form-tags')}>
                                                    <span
                                                        className={cx('filter-form-tag')}
                                                        onClick={() => setStatusFilter(STATUS[2])}
                                                    >
                                                        Best Seller
                                                    </span>
                                                    <span
                                                        className={cx('filter-form-tag')}
                                                        onClick={() => setStatusFilter(STATUS[1])}
                                                    >
                                                        New Arrival
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={cx('filter-separate')}></div>

                                        {/* Column 3 */}
                                        <div className={cx('filter-col')}>
                                            <label className={cx('filter-form-label')}>Brand</label>
                                            <div className={cx('filter-form-group')}>
                                                <div className={cx('filter-form-text')}>
                                                    <input
                                                        value={valueSearchBrand}
                                                        onChange={(e) => setValueSearchBrand(e.target.value)}
                                                        type="text"
                                                        placeholder="Search brand name"
                                                    />
                                                    <img className={cx('icon')} alt="" src={images.searchIcon} />
                                                </div>
                                            </div>
                                            <div className={cx('filter-form-group')}>
                                                <div className={cx('filter-form-tags')}>
                                                    <span
                                                        onClick={() => setValueSearchBrand('Fresh Garden')}
                                                        className={cx('filter-form-tag')}
                                                    >
                                                        Fresh Garden
                                                    </span>
                                                    <span
                                                        onClick={() => setValueSearchBrand('Tropical Fruits')}
                                                        className={cx('filter-form-tag')}
                                                    >
                                                        Tropical Fruits
                                                    </span>
                                                    <span
                                                        onClick={() => setValueSearchBrand('Jasmire Rice')}
                                                        className={cx('filter-form-tag')}
                                                    >
                                                        Jasmine Rice
                                                    </span>
                                                </div>
                                            </div>

                                            <div className={cx('filter-form-group')}>
                                                <div className={cx('btn-group')}>
                                                    <span onClick={clearFilter}>Cancel</span>
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
