import classNames from 'classnames/bind';
import styles from './CampaignDonationDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxios from '~/hooks/useAxios';
import { InfinitySpin } from 'react-loader-spinner';
import BackToTop from '~/components/BackToTop';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const BASE_URL_IMAGE = 'http://127.0.0.1:8000/uploads/';
function CampaignDonationDetails() {
    const params = useParams();
    const axios = useAxios();
    const [loading, setLoading] = useState(false);
    const [campaignInfo, setCampaignInfo] = useState(null);

    const width = 55;

    const FAKE_DONATIONS = [
        {
            id: 1,
            avatar: images.fakeAvatar1,
            name: 'Lwish Koe',
            message: 'Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            amount: 24,
            donateAt: '1 day ago',
        },
        {
            id: 2,
            avatar: null,
            name: null,
            message: 'Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            amount: 58,
            donateAt: '3 day ago',
        },
        {
            id: 3,
            avatar: images.fakeAvatar2,
            name: 'Ponny Joy',
            message: '',
            amount: 112,
            donateAt: '1 month ago',
        },
        {
            id: 4,
            avatar: null,
            name: null,
            message: 'Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            amount: 58,
            donateAt: '1 month ago',
        },
    ];

    useEffect(() => {
        fetInfoCampaign(); // eslint-disable-next-line
    }, [params.slugCampaignDonation]);

    const fetInfoCampaign = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/campaign/slug=${params.slugCampaignDonation}`, {
                withCredentials: true,
            });

            console.log(response.data);

            if (response.data.data) {
                setCampaignInfo(response.data.data);
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
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
                <div className={cx('container')}>
                    {campaignInfo !== null ? (
                        <>
                            <div className={cx('inner-container')}>
                                {/* CONTENT IN LEFT */}
                                <div className={cx('larger')}>
                                    <div className={cx('content-camp')}>dfdg</div>
                                </div>

                                {/* DONATE IN RIGHT */}
                                <div className={cx('smaller')}>
                                    <div className={cx('inner-smaller')}>
                                        <div className={cx('info')}>
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
                                        <div className={cx('stats-amount')}>
                                            <div className={cx('goal')}>
                                                <div
                                                    style={{ width: `${width}%` }}
                                                    className={cx('scroll-value')}
                                                ></div>
                                                <div style={{ left: `${width}%` }} className={cx('alert')}>
                                                    US $565766
                                                </div>
                                                <div className={cx('scroll')}></div>
                                            </div>
                                            <div className={cx('desc-goal')}>
                                                <span>Start</span>
                                                <span>Goal US 4000</span>
                                            </div>
                                        </div>
                                        <div className={cx('stats-details')}>
                                            <div className={cx('item-details')}>
                                                <p>US 22424</p>
                                                <span>Founded</span>
                                            </div>
                                            <div className={cx('item-details')}>
                                                <p>204</p>
                                                <span>Doners</span>
                                            </div>
                                            <div className={cx('item-details')}>
                                                <p>29</p>
                                                <span>Days to go</span>
                                            </div>
                                        </div>
                                        <div className={cx('group-btns')}>
                                            <button>Donate Now</button>
                                            <button>
                                                <img className={cx('icon')} alt="" src={images.followingIcon} />
                                                Save for later
                                            </button>
                                        </div>

                                        <div className={cx('separate')}></div>
                                        {/* List Supporters */}
                                        <div className={cx('list-supporters')}>
                                            <p className={cx('title')}>Supporters</p>
                                            {FAKE_DONATIONS !== null && FAKE_DONATIONS.length > 0 ? (
                                                <>
                                                    {FAKE_DONATIONS.map((item) => (
                                                        <div className={cx('item-donate')} key={item.id}>
                                                            <figure className={cx('wrap-avatar')}>
                                                                {item.avatar !== null ? (
                                                                    <img alt="" src={item.avatar} />
                                                                ) : (
                                                                    <span className={cx('anonymous')}>A</span>
                                                                )}
                                                            </figure>

                                                            <div className={cx('left-item')}>
                                                                <p className={cx('group')}>
                                                                    by{' '}
                                                                    {item.name !== null && item.name !== '' ? (
                                                                        <span className={cx('name')}>{item.name}</span>
                                                                    ) : (
                                                                        <span className={cx('name')}>Anonymous</span>
                                                                    )}{' '}
                                                                    / {item.donateAt}
                                                                </p>
                                                                {item.message !== null && item.message !== '' ? (
                                                                    <p className={cx('message')}>{item.message}</p>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                <p className={cx('amount')}>${item.amount}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : (
                                                <></>
                                            )}

                                            <button className={cx('btn-show-more')}>Show more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
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

export default CampaignDonationDetails;
