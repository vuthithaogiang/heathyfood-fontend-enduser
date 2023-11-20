import classNames from 'classnames/bind';
import styles from './CampaignsDetails.module.scss';
import { useParams } from 'react-router-dom';
import useAxios from '~/hooks/useAxios';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import BackToTop from '~/components/BackToTop';
import images from '~/assets/images';
import HTMLRendered from '~/components/HTMLRendered';
import { useNavigate } from 'react-router-dom';

const BASE_URL_IMAGE = 'http://127.0.0.1:8000/uploads/';
const cx = classNames.bind(styles);

function CampaignsDetails() {
    const params = useParams();
    const axios = useAxios();
    const navigate = useNavigate();

    const NAV_LINKS = [
        {
            id: 1,
            title: 'Introduction',
        },
        {
            id: 2,
            title: 'Schedule',
        },
        {
            id: 3,
            title: 'Update',
        },
        {
            id: 4,
            title: 'Community',
        },
    ];

    const USERS_ATTENDING = [
        {
            id: 1,
            avartar: images.userAttending1,
        },
        {
            id: 2,
            avartar: images.userAttending2,
        },
        {
            id: 3,
            avartar: images.userAttedning3,
        },
        {
            id: 4,
            avartar: images.userAttedning4,
        },
        {
            id: 5,
            avartar: images.useAttending5,
        },
    ];

    const [campaignInfo, setCampaignInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    const [recommends, setRecommends] = useState(null);

    const [navbarActive, setNavbarActive] = useState(NAV_LINKS[0]);

    const fetchItemRecommend = async (id) => {
        if (!id) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(`/api/campaign/recommends/${id}`, {
                withCredentials: true,
            });

            console.log(response.data);

            if (response.data.data) {
                setRecommends(response.data.data);
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetchInfoCampaign = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/campaign/slug=${params.slugCampaign}`, {
                withCredentials: true,
            });

            console.log(response.data);
            setCampaignInfo(response.data.data);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfoCampaign(); // eslint-disable-next-line
    }, [params.slugCampaign]);

    useEffect(() => {
        if (campaignInfo === null) {
            return;
        }
        fetchItemRecommend(campaignInfo.id); // eslint-disable-next-line
    }, [campaignInfo]);

    const formatDateFromBackend = (dateString) => {
        const dateObject = new Date(dateString);
        const months = [
            'Januarry',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'Augest',
            'Septemer',
            'Octorber',
            'November',
            'December',
        ];

        const day = dateObject.getDate(); // Get the day (1-31)
        const month = months[dateObject.getMonth()]; // Get the month as a string
        const year = dateObject.getFullYear(); // Get the year (e.g., 2023)

        const formattedDate = ` ${month} ${day}, ${year} `; // Combine day, month, and year
        return formattedDate;
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {campaignInfo !== null && (
                    <>
                        <header className={cx('header')}>
                            <div className={cx('bread-bg')}></div>

                            <div className={cx('container')}>
                                <figure className={cx('thumnail-img')}>
                                    <img alt="" src={`${BASE_URL_IMAGE}${campaignInfo.thumbnails[0].path}`} />
                                </figure>
                            </div>
                        </header>

                        <div className={cx('container')}>
                            <div className={cx('content')}>
                                <div className={cx('info', 'inline')}>
                                    <div className={cx('big-content')}>
                                        <h3 className={cx('camp-name')}>{campaignInfo.name}</h3>
                                        <div className={cx('camp-schedule')}>
                                            <span className={cx('from')}>
                                                {formatDateFromBackend(campaignInfo.start_date)}
                                            </span>
                                            <span className={cx('camp-separate')}></span>
                                            <div className={cx('to')}>
                                                {formatDateFromBackend(campaignInfo.end_date)}
                                            </div>
                                        </div>

                                        <p className={cx('camp-objective')}>{campaignInfo.objective}</p>
                                    </div>
                                    <div className={cx('group-btn')}>
                                        <button data-text="Like">
                                            <img className={cx('icon')} alt="" src={images.saveIcon} />
                                        </button>

                                        <button data-text="Save">
                                            <img className={cx('icon')} alt="" src={images.followingIcon} />
                                        </button>
                                    </div>
                                </div>

                                <div className={cx('detail-content')}>
                                    <div className={cx('info', 'inline')}>
                                        <div className={cx('big-content')}>
                                            {/* Navbar*/}
                                            <div className={cx('nav-links')}>
                                                {NAV_LINKS.map((item) => (
                                                    <div
                                                        onClick={() => setNavbarActive(item)}
                                                        key={item.id}
                                                        className={
                                                            item.title === navbarActive.title
                                                                ? cx('nav-item', 'active')
                                                                : cx('nav-item')
                                                        }
                                                    >
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </div>

                                            {navbarActive.title === 'Introduction' && (
                                                <>
                                                    <div className={cx('')}>
                                                        <HTMLRendered htmlString={campaignInfo.description} />
                                                    </div>
                                                </>
                                            )}

                                            {navbarActive.title === 'Schedule' && (
                                                <>
                                                    <div className={cx('')}>Description Schedule</div>
                                                </>
                                            )}

                                            {navbarActive.title === 'Update' && (
                                                <>
                                                    <div className={cx('')}>Description Update</div>
                                                </>
                                            )}

                                            {navbarActive.title === 'Community' && (
                                                <>
                                                    <div className={cx('')}>Community Description</div>
                                                </>
                                            )}
                                        </div>
                                        <div className={cx('stats')}>
                                            <div className={cx('stats-head')}>
                                                <p>Get the Campaign</p>
                                            </div>

                                            <div className={cx('group-attending')}>
                                                <div className={cx('list-avatar')}>
                                                    {USERS_ATTENDING.map((user) => (
                                                        <span key={user.id}>
                                                            <img alt="" src={user.avartar} />
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className={cx('count-attending')}>From 48 users attending</div>
                                            </div>
                                            <div className={cx('btn-attending')}>
                                                <button>Attending Now</button>
                                            </div>

                                            <div className={cx('stats-separate')}></div>

                                            <div className={cx('stats-details')}>
                                                <div className={cx('item-stats-details')}>
                                                    <span className={cx('wrap-icon')}>
                                                        <img
                                                            className={cx('icon')}
                                                            alt=""
                                                            src={images.statsClockIcon}
                                                        />
                                                    </span>
                                                    <div>
                                                        <span>Duration: </span>
                                                        <span>2 months</span>
                                                    </div>
                                                </div>
                                                <div className={cx('item-stats-details')}>
                                                    <span className={cx('wrap-icon')}>
                                                        <img className={cx('icon')} alt="" src={images.statsPlayIcon} />
                                                    </span>
                                                    <div>
                                                        <span>Activities: </span>
                                                        <span>5</span>
                                                    </div>
                                                </div>
                                                <div className={cx('item-stats-details')}>
                                                    <span className={cx('wrap-icon')}>
                                                        <img
                                                            className={cx('icon')}
                                                            alt=""
                                                            src={images.statsMedalIcon}
                                                        />
                                                    </span>
                                                    <div>
                                                        <span>Lifetime Access</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recommend */}

                        {recommends !== null && recommends.length > 0 && (
                            <>
                                <div className={cx('container')}>
                                    <div className={cx('list-recommends')}>
                                        <h4>Recommend others Campaign for you</h4>
                                        <div className={cx('grid-wrapper-masonry')}>
                                            {recommends.map((item, index) => (
                                                <div className={cx(`masonry-${index}`)} key={item.id}>
                                                    <figure>
                                                        <img
                                                            className={cx('masonry-img')}
                                                            alt=""
                                                            src={`${BASE_URL_IMAGE}${item.thumbnails[0].path}`}
                                                        />
                                                    </figure>
                                                    <p className={cx('name')}>{item.name}</p>
                                                    <button
                                                        onClick={() => {
                                                            if (item.type_of_campaign.name === 'Humanitarian Relief') {
                                                                navigate(`/details-campaign-donation/${item.slug}`);
                                                            } else {
                                                                navigate(`/details-campaign/${item.slug}`);
                                                            }
                                                        }}
                                                        className={cx('button')}
                                                    >
                                                        Read more
                                                        <img
                                                            className={cx('icon')}
                                                            alt=""
                                                            src={images.arrowIconRight}
                                                        />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
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

export default CampaignsDetails;
