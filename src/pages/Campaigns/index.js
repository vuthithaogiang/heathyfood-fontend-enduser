import classNames from 'classnames/bind';
import styles from './Campaigns.module.scss';
import images from '~/assets/images';
import { useState, useEffect, useRef } from 'react';
import useAxios from '~/hooks/useAxios';
import { InfinitySpin } from 'react-loader-spinner';
import useOnClickOutside from '~/hooks/useOnclickOutside';
import BackToTop from '~/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const BASE_URL_IMAGE = 'http://127.0.0.1:8000/uploads/';
function Campaigns() {
    const axios = useAxios();
    const navigate = useNavigate();

    const TYPE_OF_FILTERS = [
        {
            id: 1,
            title: 'Popular',
        },
        {
            id: 2,
            title: 'Following',
        },
    ];

    const TYPE_OF_TIME_FRANE = [
        {
            id: 1,
            title: 'This past week',
        },
        {
            id: 2,
            title: 'This past month',
        },
        {
            id: 3,
            title: 'All time',
        },
        {
            id: 4,
            title: 'New',
        },
    ];

    const [typeOfFilter, setTypeOfFilter] = useState('Popular');
    const [typeOfTimeFrame, setTypeOfTimeFrame] = useState(null);

    const [listTypeCampaign, setListTypeCampaign] = useState(null);

    const [listCampaign, setListCampaign] = useState(null);

    const [loading, setLoading] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    const [typeCampaignActive, setTypeCampaignActive] = useState(null);

    const refPopperTypeFilter = useRef();
    const refPopperTypeTimeFrame = useRef();
    const [showPopperTypeFilter, setShowPopperTypeFilter] = useState(false);
    const [showPopperTypeOfTimeFrame, setshowPopperTypeOfTimeFrame] = useState(false);

    const [resultFilter, setResultFilter] = useState([]);
    const [fetchSearchForm, setFetchSarchForm] = useState(false);
    const [fetchFilterSuccess, setFetchFilterSuccess] = useState(false);

    const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

    const scrollToSection = (index) => {
        if (sectionRefs[index].current) {
            sectionRefs[index].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    const toggleShowPopperTypeOfTimeFrame = () => {
        setshowPopperTypeOfTimeFrame(!showPopperTypeOfTimeFrame);
    };

    const hiddenPopperTypeOfTimeFrame = () => {
        setshowPopperTypeOfTimeFrame(false);
    };

    const toggleShowPopperTypeFilter = () => {
        setShowPopperTypeFilter(!showPopperTypeFilter);
    };

    const hiddenPopperTypeFilter = () => {
        setShowPopperTypeFilter(false);
    };

    useOnClickOutside(refPopperTypeFilter, hiddenPopperTypeFilter);
    useOnClickOutside(refPopperTypeTimeFrame, hiddenPopperTypeOfTimeFrame);

    const fetchListTypeCampaign = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/types-of-campaign/getAll', {
                withCredentials: true,
            });

            console.log(response.data);

            if (response.data) {
                const array = response.data;

                const arrayFilter = array.filter((i) => i.campaigns.length > 0);

                console.log(arrayFilter);

                setListTypeCampaign(arrayFilter);
            }
            // setListTypeCampaign(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetchAllCampaign = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/campaign/getAll', {
                withCredentials: true,
            });

            console.log(response.data);
            setListCampaign(response.data);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListTypeCampaign(); // eslint-disable-next-line
        fetchAllCampaign(); // eslint-disable-next-line
    }, []);

    const formatDateFromBackend = (dateString) => {
        const dateObject = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const day = dateObject.getDate(); // Get the day (1-31)
        const month = months[dateObject.getMonth()]; // Get the month as a string
        const year = dateObject.getFullYear(); // Get the year (e.g., 2023)

        const formattedDate = ` ${month} ${day}, ${year} `; // Combine day, month, and year
        return formattedDate;
    };

    const handleSubmitFormSearch = async (e) => {
        e.preventDefault();

        if (searchValue.trim() === '') {
            return;
        }

        setFetchSarchForm(true);

        try {
            const response = await axios.post(
                '/api/campaign/filter',
                {
                    key: searchValue,
                },
                {
                    withCredentials: true,
                },
            );

            console.log(response.data);

            if (response.data.data) {
                setResultFilter(response.data.data);
                setFetchFilterSuccess(true);
            }
            setFetchSarchForm(false);
        } catch (error) {
            console.log(error);
            setFetchSarchForm(false);
            setFetchFilterSuccess(false);
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {/* Serach Bar*/}
                <div className={cx('search-bar')}>
                    <div className={cx('background-bar')}></div>
                    <div className={cx('search-result-details')}>
                        <div className={cx('form-search')}>
                            <form method="post" onSubmit={handleSubmitFormSearch}>
                                <button type="submit">
                                    <img className={cx('icon')} alt="" src={images.searchIcon} />
                                </button>

                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search Campaign"
                                />

                                {!fetchSearchForm && (
                                    <img
                                        className={cx('icon', 'icon-small', 'close-icon')}
                                        alt=""
                                        src={images.closeIcon}
                                        onClick={() => {
                                            setResultFilter([]);
                                            setSearchValue('');
                                            setFetchFilterSuccess(false);
                                        }}
                                    />
                                )}

                                {fetchSearchForm && (
                                    <img
                                        className={cx('icon', 'icon-small', 'spinner-icon')}
                                        alt=""
                                        src={images.spinnerIcon}
                                    />
                                )}
                            </form>
                        </div>
                        <div className={fetchFilterSuccess ? cx('result', 'show') : cx('result')}>
                            <div>
                                <p className={cx('text-alert')}>
                                    {resultFilter.length} result for '{searchValue}'
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter*/}
                <div className={cx('filter-group')}>
                    <div className={cx('row-filter')}>
                        <div className={cx('filter-left')}>
                            <div ref={refPopperTypeFilter} className={cx('filter-select-wrap')}>
                                <div onClick={toggleShowPopperTypeFilter} className={cx('main')}>
                                    {typeOfFilter}
                                    <img
                                        className={
                                            showPopperTypeFilter === true ? cx('icon', 'icon-rotate') : cx('icon')
                                        }
                                        alt=""
                                        src={images.arrowDownIcon}
                                    />
                                </div>
                                <div
                                    className={
                                        showPopperTypeFilter === true ? cx('wrap-list') : cx('wrap-list', 'none')
                                    }
                                >
                                    <div className={cx('popper-list')}>
                                        {TYPE_OF_FILTERS.map((item) => (
                                            <div
                                                onClick={() => {
                                                    setTypeOfFilter(item.title);
                                                }}
                                                className={
                                                    item.title === typeOfFilter
                                                        ? cx('popper-item', 'active')
                                                        : cx('popper-item')
                                                }
                                                key={item.id}
                                            >
                                                <span>{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {listTypeCampaign !== null && listTypeCampaign.length > 0 ? (
                            <>
                                <div className={cx('filter-center')}>
                                    {listTypeCampaign.map((item, index) => (
                                        <div
                                            onClick={() => {
                                                setTypeCampaignActive(item);
                                                scrollToSection(index);
                                            }}
                                            className={cx('filter-select-wrap')}
                                            key={item.id}
                                        >
                                            <div
                                                className={
                                                    typeCampaignActive !== null && typeCampaignActive.id === item.id
                                                        ? cx('main', 'text', 'active')
                                                        : cx('main', 'text')
                                                }
                                            >
                                                {item.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        <div className={cx('filter-right')}>
                            <div ref={refPopperTypeTimeFrame} className={cx('filter-select-wrap')}>
                                <div onClick={toggleShowPopperTypeOfTimeFrame} className={cx('main', 'timeframe')}>
                                    {typeOfTimeFrame === null ? 'Timeframe' : typeOfTimeFrame}
                                    <img
                                        className={
                                            showPopperTypeOfTimeFrame === true ? cx('icon', 'icon-rotate') : cx('icon')
                                        }
                                        alt=""
                                        src={images.arrowDownIcon}
                                    />
                                </div>
                                <div
                                    className={
                                        showPopperTypeOfTimeFrame === true
                                            ? cx('wrap-list', 'timeframe')
                                            : cx('wrap-list', 'time-frame', 'none')
                                    }
                                >
                                    <div className={cx('popper-list')}>
                                        {TYPE_OF_TIME_FRANE.map((item) => (
                                            <div
                                                onClick={() => setTypeOfTimeFrame(item.title)}
                                                className={
                                                    item.title === typeOfTimeFrame
                                                        ? cx('popper-item', 'active')
                                                        : cx('popper-item')
                                                }
                                                key={item.id}
                                            >
                                                <span>{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {resultFilter.length === 0 && listCampaign !== null && listCampaign.length > 0 ? (
                    <>
                        <div className={cx('list-campaign')}>
                            <div className={cx('container')}>
                                {listTypeCampaign.map((typeCam, index) => (
                                    <div
                                        ref={sectionRefs[index]}
                                        key={typeCam.name}
                                        className={cx('wrap-campaign-by-type')}
                                    >
                                        <div className={cx('head')}>
                                            <h4>{typeCam.name}</h4>
                                        </div>

                                        {listCampaign !== null && listCampaign.length > 0 ? (
                                            <>
                                                <div className={cx('grid-campaigns')}>
                                                    {listCampaign
                                                        .filter((i) => i.type_of_campaign.id === typeCam.id)
                                                        .map((cam) => (
                                                            <div key={cam.name}>
                                                                <div className={cx('thumbnail-base')}>
                                                                    <figure>
                                                                        <img
                                                                            className={cx('thumb')}
                                                                            alt=""
                                                                            src={`${BASE_URL_IMAGE}${cam.thumbnails[0].path}`}
                                                                        />
                                                                        <div className={cx('actions')}>
                                                                            <button>
                                                                                <img
                                                                                    className={cx('icon')}
                                                                                    alt=""
                                                                                    src={images.followingIcon}
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </figure>
                                                                </div>
                                                                <div className={cx('camp-desc')}>
                                                                    <p
                                                                        onClick={() => {
                                                                            if (cam.type_of_campaign.id === 8) {
                                                                                navigate(
                                                                                    `/details-campaign-donation/${cam.slug}`,
                                                                                );
                                                                            } else {
                                                                                navigate(
                                                                                    `/details-campaign/${cam.slug}`,
                                                                                );
                                                                            }
                                                                        }}
                                                                        className={cx('camp-name')}
                                                                    >
                                                                        {cam.name}
                                                                    </p>
                                                                    <div className={cx('camp-schedule')}>
                                                                        <span className={cx('from')}>
                                                                            {formatDateFromBackend(cam.start_date)}
                                                                        </span>
                                                                        <span className={cx('separate')}></span>
                                                                        <span className={cx('to')}>
                                                                            {formatDateFromBackend(cam.end_date)}
                                                                        </span>

                                                                        {cam.status === 0 && (
                                                                            <span className={cx('status-new')}>
                                                                                New
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <p className={cx('camp-objective')}>
                                                                        {cam.objective}
                                                                    </p>
                                                                    <button className={cx('camp-read-more')}>
                                                                        Read more
                                                                        <img
                                                                            className={cx('icon')}
                                                                            alt=""
                                                                            src={images.arrowIconRight}
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}

                {resultFilter.length > 0 && (
                    <div className={cx('list-campaign')}>
                        <div className={cx('container')}>
                            <div className={cx('grid-campaigns')}>
                                {resultFilter.map((cam) => (
                                    <div key={cam.name}>
                                        <div className={cx('thumbnail-base')}>
                                            <figure>
                                                <img
                                                    className={cx('thumb')}
                                                    alt=""
                                                    src={`${BASE_URL_IMAGE}${cam.thumbnails[0].path}`}
                                                />
                                                <div className={cx('actions')}>
                                                    <button>
                                                        <img className={cx('icon')} alt="" src={images.followingIcon} />
                                                    </button>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className={cx('camp-desc')}>
                                            <p
                                                onClick={() => {
                                                    if (cam.type_of_campaign.id === 8) {
                                                        navigate(`/details-campaign-donation/${cam.slug}`);
                                                    } else {
                                                        navigate(`/details-campaign/${cam.slug}`);
                                                    }
                                                }}
                                                className={cx('camp-name')}
                                            >
                                                {cam.name}
                                            </p>
                                            <div className={cx('camp-schedule')}>
                                                <span className={cx('from')}>
                                                    {formatDateFromBackend(cam.start_date)}
                                                </span>
                                                <span className={cx('separate')}></span>
                                                <span className={cx('to')}>{formatDateFromBackend(cam.end_date)}</span>

                                                {cam.status === 0 && <span className={cx('status-new')}>New</span>}
                                            </div>
                                            <p className={cx('camp-objective')}>{cam.objective}</p>
                                            <button className={cx('camp-read-more')}>
                                                Read more
                                                <img className={cx('icon')} alt="" src={images.arrowIconRight} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <BackToTop />

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

export default Campaigns;
