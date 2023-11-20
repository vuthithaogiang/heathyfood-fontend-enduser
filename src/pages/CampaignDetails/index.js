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
import useAuth from '~/hooks/useAuth';

const BASE_URL_IMAGE = 'http://127.0.0.1:8000/uploads/';
const cx = classNames.bind(styles);

function CampaignsDetails() {
    const params = useParams();
    const axios = useAxios();
    const navigate = useNavigate();
    const { auth } = useAuth();

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

    const POSTS = [
        {
            id: 1,
            avatar: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1672565708004-JATOUT408V7YC6ZZWTC9/1+Garmisch+Schloss+Elmau+-+Her86m2+56.jpg?format=750w',
            username: 'Alan King',
            tite: 'And you can define the table name and other details in the generated model file.',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1698742684684-C3DXL8APFU1QU3M7Y0HA/_7IV9166.jpg?format=750w',
            publishAt: '2 day ago',
            likeCounter: 20,
            content: '',
            subDescription:
                "Remember to replace YourModel with the actual name of your model class. If you don't have a model for your table yet, you can create one using the php artisan make:model Artisan command.",
        },
        {
            id: 2,
            avatar: '',
            username: 'Alan King',
            tite: 'And you can define the table name and other details in the generated model file.',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1694693245572-T75GP5P8LNZC4SZVSUK4/_R3O3557-1.jpg?format=750w',
            publishAt: '2 day ago',
            likeCounter: 20,
            content: '',
            subDescription:
                "Remember to replace YourModel with the actual name of your model class. If you don't have a model for your table yet, you can create one using the php artisan make:model Artisan command.",
        },
        {
            id: 3,
            avatar: '',
            username: 'Alan King',
            tite: 'And you can define the table name and other details in the generated model file.',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1698742684684-C3DXL8APFU1QU3M7Y0HA/_7IV9166.jpg?format=750w',
            publishAt: '2 day ago',
            likeCounter: 20,
            content: '',
            subDescription:
                "Remember to replace YourModel with the actual name of your model class. If you don't have a model for your table yet, you can create one using the php artisan make:model Artisan command.",
        },
        {
            id: 4,
            avatar: '',
            username: 'Alan King',
            tite: 'And you can define the table name and other details in the generated model file.',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1698742684684-C3DXL8APFU1QU3M7Y0HA/_7IV9166.jpg?format=750w',
            publishAt: '2 day ago',
            likeCounter: 20,
            content: '',
            subDescription:
                "Remember to replace YourModel with the actual name of your model class. If you don't have a model for your table yet, you can create one using the php artisan make:model Artisan command.",
        },
    ];

    const [campaignInfo, setCampaignInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [recommends, setRecommends] = useState(null);
    const [navbarActive, setNavbarActive] = useState(NAV_LINKS[0]);
    const [schedules, setSchedules] = useState(null);

    const [attended, setAttended] = useState(false);
    const [sendingAttending, setSendingAttending] = useState(false);

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

            if (response.data.data) {
                setCampaignInfo(response.data.data);
                fetSchedule(response.data.data.id);
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetSchedule = async (id) => {
        if (id === null) {
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`api/campaign/get-schedule-activity/${id}`, {
                withCredentials: true,
            });

            console.log(response.data);

            if (response.data.data) {
                setSchedules(response.data.data);
            }

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

    const handleSubmitAttendCampaign = async () => {
        setSendingAttending(true);

        console.log(auth);

        if (!auth.access_token) {
            navigate('/login');
            return;
        }

        setAttended(true);

        try {
        } catch (error) {}
        setSendingAttending(false);
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

                                        <div className={cx('camp-category')}>
                                            <span className={cx('tag')}>Belong to: </span>
                                            <span className={cx('value')}>{campaignInfo.type_of_campaign.name}</span>
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
                                                    <div className={cx('list-activity')}>
                                                        {schedules !== null && schedules.length > 0 && (
                                                            <>
                                                                {schedules.map((item, index) => (
                                                                    <div className={cx('group-activity')} key={index}>
                                                                        <div className={cx('decoration')}>
                                                                            <div>
                                                                                <img
                                                                                    className={cx('icon')}
                                                                                    alt=""
                                                                                    src={images.decorationIcon}
                                                                                />
                                                                            </div>
                                                                            <div className={cx('line-column')}></div>
                                                                        </div>
                                                                        <div className={cx('activities')}>
                                                                            <div className={cx('schedule')}>
                                                                                <span>
                                                                                    {item.start_date ===
                                                                                    item.end_date ? (
                                                                                        <>
                                                                                            On{' '}
                                                                                            {formatDateFromBackend(
                                                                                                item.start_date,
                                                                                            )}
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            Going on{' '}
                                                                                            {formatDateFromBackend(
                                                                                                item.start_date,
                                                                                            )}{' '}
                                                                                            -{' '}
                                                                                            {formatDateFromBackend(
                                                                                                item.end_date,
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </span>
                                                                            </div>
                                                                            <div className={cx('multi-activity')}>
                                                                                {item.activities.length > 0 ? (
                                                                                    <>
                                                                                        {item.activities.map(
                                                                                            (act, index) => (
                                                                                                <div
                                                                                                    key={index}
                                                                                                    className={cx(
                                                                                                        'activity-item',
                                                                                                    )}
                                                                                                >
                                                                                                    <div>
                                                                                                        <p>
                                                                                                            {act.name}
                                                                                                        </p>
                                                                                                        <p>
                                                                                                            Belong to:
                                                                                                            <span>
                                                                                                                {act.type_of_activity_id ===
                                                                                                                3
                                                                                                                    ? 'System-generated Content'
                                                                                                                    : 'User-generated Content'}
                                                                                                            </span>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className={cx(
                                                                                                            'right-item',
                                                                                                        )}
                                                                                                    >
                                                                                                        <div
                                                                                                            className={cx(
                                                                                                                '',
                                                                                                            )}
                                                                                                        >
                                                                                                            <span
                                                                                                                className={cx(
                                                                                                                    `status-${act.status}`,
                                                                                                                    'status',
                                                                                                                )}
                                                                                                            >
                                                                                                                {act.status ===
                                                                                                                    0 &&
                                                                                                                    'New created'}
                                                                                                                {act.status ===
                                                                                                                    1 &&
                                                                                                                    'On going'}
                                                                                                                {act.status ===
                                                                                                                    2 &&
                                                                                                                    'Paused'}
                                                                                                                {act.status ===
                                                                                                                    3 &&
                                                                                                                    'Complete'}
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            ),
                                                                                        )}
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <>
                                                                                            <div
                                                                                                className={cx(
                                                                                                    'activity-item',
                                                                                                    'label',
                                                                                                )}
                                                                                            >
                                                                                                <div
                                                                                                    className={cx(
                                                                                                        'div-1',
                                                                                                    )}
                                                                                                ></div>
                                                                                                <div
                                                                                                    className={cx(
                                                                                                        'div-2',
                                                                                                    )}
                                                                                                ></div>
                                                                                            </div>
                                                                                        </>
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                    </div>
                                                </>
                                            )}

                                            {navbarActive.title === 'Update' && (
                                                <>
                                                    <div className={cx('message')}>
                                                        <img
                                                            className={cx('icon')}
                                                            alt=""
                                                            src={images.automationIcon}
                                                        />
                                                        This post is for backers only If you’re a backer of this
                                                        project, please log in to read this post
                                                    </div>
                                                </>
                                            )}

                                            {navbarActive.title === 'Community' && (
                                                <>
                                                    <div className={cx('list-post')}>
                                                        <div className={cx('head')}>
                                                            <h4>Summary of articles posted on the campaign</h4>

                                                            <button
                                                                onClick={() =>
                                                                    navigate(`/${campaignInfo.slug}/create-post`)
                                                                }
                                                            >
                                                                <img
                                                                    className={cx('icon')}
                                                                    alt=""
                                                                    src={images.penIcon}
                                                                />
                                                            </button>
                                                        </div>

                                                        <div className={cx('wrap-posts')}>
                                                            {POSTS.map((post) => (
                                                                <div className={cx('post-item')} key={post.id}>
                                                                    <>
                                                                        <div className={cx('post-row')}>
                                                                            <div className={cx('user')}>
                                                                                <figure className={cx('wrap-avatar')}>
                                                                                    {post.avatar !== '' &&
                                                                                    post.avatar !== null ? (
                                                                                        <img
                                                                                            className={cx('avatar')}
                                                                                            alt=""
                                                                                            src={post.avatar}
                                                                                        />
                                                                                    ) : (
                                                                                        <span>
                                                                                            {post.username.charAt(0)}
                                                                                        </span>
                                                                                    )}
                                                                                </figure>

                                                                                <span className={cx('username')}>
                                                                                    {post.username}
                                                                                </span>
                                                                            </div>
                                                                            <div className={cx('actions')}>
                                                                                <span>
                                                                                    <img
                                                                                        className={cx(
                                                                                            'icon',
                                                                                            'icon-small',
                                                                                        )}
                                                                                        alt=""
                                                                                        src={images.viewIcon}
                                                                                    />
                                                                                </span>

                                                                                <span className={cx('')}>
                                                                                    <img
                                                                                        className={cx(
                                                                                            'icon',
                                                                                            'icon-small',
                                                                                        )}
                                                                                        alt=" "
                                                                                        src={images.likeIcon}
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </div>

                                                                        <div className={cx('post-row')}>
                                                                            <div className={cx('post-content')}>
                                                                                <p className={cx('post-title')}>
                                                                                    {post.tite}
                                                                                </p>
                                                                                <p className={cx('post-desc')}>
                                                                                    {post.subDescription}
                                                                                </p>
                                                                                <div className={cx('div')}>
                                                                                    <span>
                                                                                        {post.likeCounter} likes
                                                                                    </span>
                                                                                    <span
                                                                                        className={cx('separate')}
                                                                                    ></span>
                                                                                    <span>{post.publishAt}</span>
                                                                                </div>
                                                                            </div>
                                                                            <figure className={cx('wrap-thumb')}>
                                                                                <img
                                                                                    className={cx('post-thumb')}
                                                                                    alt=""
                                                                                    src={post.thumbnail}
                                                                                />
                                                                            </figure>
                                                                        </div>
                                                                    </>
                                                                </div>
                                                            ))}

                                                            <button className={cx('load-more')}>
                                                                Load more
                                                                <img
                                                                    className={cx('icon')}
                                                                    alt=""
                                                                    src={images.arrowIconRight}
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
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
                                                {attended === true ? (
                                                    <>
                                                        <span className={cx('alert')}>
                                                            Attended
                                                            <img
                                                                className={cx('icon', 'icon-small')}
                                                                alt=""
                                                                src={images.checkIcon}
                                                            />
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button onClick={handleSubmitAttendCampaign}>
                                                            Attending Now
                                                            <img
                                                                className={
                                                                    sendingAttending === true
                                                                        ? cx('icon', 'icon-small', 'active')
                                                                        : cx('icon', 'icon-small')
                                                                }
                                                                alt=""
                                                                src={images.spinnerIcon}
                                                            />
                                                        </button>
                                                    </>
                                                )}
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
