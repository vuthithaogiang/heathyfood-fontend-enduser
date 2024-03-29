import classNames from 'classnames/bind';
import styles from './CampaignDonationDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useAxios from '~/hooks/useAxios';
import { InfinitySpin } from 'react-loader-spinner';
import BackToTop from '~/components/BackToTop';
import images from '~/assets/images';
import HTMLRendered from '~/components/HTMLRendered';
import useOnClickOutside from '~/hooks/useOnclickOutside';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const BASE_URL_IMAGE = 'http://127.0.0.1:8000/uploads/';
function CampaignDonationDetails() {
    const params = useParams();
    const axios = useAxios();
    const navigate = useNavigate();

    const LIST_BREAD = [
        {
            id: 1,
            title: 'Overview',
        },
        {
            id: 2,
            title: 'Timeline of Budget',
        },
        {
            id: 3,
            title: 'Community',
        },
        {
            id: 4,
            title: 'Update',
        },
    ];

    const FAKE_TIMELINE_BUDGET = [
        {
            id: 1,
            amount: 10,
            description: 'Will Provide a Pack of Sanitary towwels to The girls',
        },
        {
            id: 2,
            amount: 20,
            description: 'This will be purchase tow package towel to these grils for use during their menses',
        },
        {
            id: 3,
            amount: 50,
            description:
                'Can provide Learning materials for one girl for a month enough to help her acquine enough skill at the safe house',
        },
        {
            id: 4,
            amount: 100,
            description: 'Will be able to provide Learning materials for one girl at the safe house center',
        },
        {
            id: 5,
            amount: 500,
            description:
                'Will be able to pay for the trainers for a whole month to train the girls on the any of the income generating avtivities to make the them self sufficient in futere',
        },
        {
            id: 6,
            amount: 1200,
            description: 'Will provide for the provision of meals for all the girls at thr safe house center',
        },
        {
            id: 7,
            amount: 3000,
            description:
                'Will catter for the training and nutrition for the whole month at the girls safe house center',
        },
        {
            id: 8,
            amount: 5000,
            description:
                'Will be able to Equip the Girls Safe House center with the much needed equipments fir the Training of these girls to be self reliant',
        },
    ];

    const FAKE_UPDATE = [
        {
            id: 1,
            title: 'How to building a career in data science',
            creator: 'thaogiang',
            createdAt: 'November 17, 2023',
        },
        {
            id: 2,
            title: 'How to building a career in data science',
            creator: 'thaogiang',
            createdAt: 'November 17, 2023',
        },
        {
            id: 3,
            title: 'How to building a career in data science',
            creator: 'thaogiang',
            createdAt: 'November 17, 2023',
        },
        {
            id: 4,
            title: 'How to building a career in data science',
            creator: 'thaogiang',
            createdAt: 'November 17, 2023',
        },
        {
            id: 5,
            title: 'How to building a career in data science',
            creator: 'thaogiang',
            createdAt: 'November 17, 2023',
        },
    ];

    const LIAT_AMOUNT = [
        {
            id: 1,
            amountValue: 10,
        },
        {
            id: 2,
            amountValue: 20,
        },
        {
            id: 3,
            amountValue: 30,
        },
        {
            id: 4,
            amountValue: 40,
        },
        {
            id: 5,
            amountValue: 50,
        },
        {
            id: 6,
            amountValue: 60,
        },
        {
            id: 7,
            amountValue: 70,
        },
        {
            id: 8,
            amountValue: 80,
        },
        {
            id: 9,
            amountValue: 90,
        },
        {
            id: 10,
            amountValue: 100,
        },
    ];

    const [loading, setLoading] = useState(false);
    const [campaignInfo, setCampaignInfo] = useState(null);
    const [listDonor, setListDonor] = useState([]);
    const [breadItemActive, setBreadItemActive] = useState(LIST_BREAD[0]);
    const [width, setWidth] = useState(0);

    const [recommends, setRecommends] = useState(null);

    const [stepDonate, setStepDonate] = useState(1);
    const [amountDonate, setAmountDonate] = useState(null);
    const [nameDonor, setNameDonor] = useState(null);
    const [emailDobor, setEmailDonor] = useState(null);
    const [messageDonor, setMessageDonor] = useState('');
    const [user, setUser] = useState(null);

    const [nextCursor, setNextCursor] = useState(null);

    const refPopperAmount = useRef();
    const [showPopperAmount, setshowPopperAmount] = useState(false);

    const [fetchShowMoreDonors, setFetchshowMoreDonors] = useState(false);

    const toggleShowPopperAmount = () => {
        setshowPopperAmount(!showPopperAmount);
    };

    const hiddenPopperAmount = () => {
        setshowPopperAmount(false);
    };

    useOnClickOutside(refPopperAmount, hiddenPopperAmount);

    useEffect(() => {
        fetInfoCampaign(); // eslint-disable-next-line
        fetUser(); // eslint-disable-next-line
    }, [params.slugCampaignDonation]);

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        function initJsToggle() {
            $$('.js-toggle').forEach((button) => {
                const target = button.getAttribute('toggle-target');
                if (!target) {
                    document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
                }
                button.onclick = () => {
                    if (!$(target)) {
                        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
                    }
                    const isHidden = $(target).classList.contains('hide');

                    requestAnimationFrame(() => {
                        $(target).classList.toggle('hide', !isHidden);
                        $(target).classList.toggle('show', isHidden);

                        // $(target).classList.toggle('hide', setErrorMessageEdit(null));
                        // $(target).classList.toggle('hide', setSuccessMessageEdit(null));
                    });
                };
            });
        }

        initJsToggle();
    }, [params.slugCampaignDonation, loading]);

    useEffect(() => {
        if (campaignInfo === null) {
            return;
        }
        fetchItemRecommend(campaignInfo.id); // eslint-disable-next-line
    }, [campaignInfo]);

    const fetInfoCampaign = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/campaign/slug=${params.slugCampaignDonation}`, {
                withCredentials: true,
            });

            console.log(response.data);

            if (response.data.data) {
                setCampaignInfo(response.data.data);

                const width = (response.data.data.amount_donate_current / response.data.data.goal_donate) * 100;
                console.log(width);
                setWidth(width);

                fetchListDonor(response.data.data.id);
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    const fetchListDonor = async (campaignId) => {
        if (!campaignId) {
            return;
        }

        try {
            const response = await axios.get(`api/donation/pagination/${campaignId}`, {
                withCredentials: true,
            });

            console.log(response.data);

            setListDonor(response.data.data);
            setNextCursor(response.data.next_cursor);
        } catch (err) {
            console.log(err);
        }
    };

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

    const calculateDaysToPresent = (dateString) => {
        const dateObject = new Date(dateString);

        const today = new Date();

        const timeDifference = dateObject - today;

        const numberOfDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return numberOfDays;
    };

    const fetUser = async () => {
        try {
            const response = await axios.get('/api/auth/profile');
            console.log(response.data);

            if (response.data) {
                setUser(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const checkValidFormInProcessStep1 = () => {
        if (amountDonate === null) {
            return;
        }

        console.log(amountDonate);

        setStepDonate(2);
    };

    const handlePrepareStatementDonor = () => {
        if (user !== null) {
            setNameDonor(user.name);
            setEmailDonor(user.email);

            return;
        }

        setNameDonor('');
        setEmailDonor('');
    };

    const storeDonationDetails = async (campaignId, details) => {
        console.log(campaignId);
        console.log(details);
        setLoading(true);

        const formData = new FormData();
        formData.append('campaignId', campaignId);

        if (emailDobor !== null && emailDobor.trim() !== '') {
            formData.append('email', emailDobor);
        }
        formData.append('message', messageDonor);

        if (details.status === 'COMPLETED') {
            formData.append('amount', details.amount.value);
            formData.append('paymentMethod', 'Paypal');
            formData.append('status', 1);
            try {
                const response = await axios.post(`/api/donation/store`, formData, {
                    withCredentials: true,
                });

                console.log(response.data);

                fetInfoCampaign();
                setNameDonor(null);
                setEmailDonor(null);
                setAmountDonate(null);
                setMessageDonor('');
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    };

    const handleFetchMoreDonors = async () => {
        if (nextCursor === null) {
            return;
        }

        setFetchshowMoreDonors(true);

        try {
            const response = await axios.get(`/api/donation/pagination/${campaignInfo.id}/${nextCursor}`, {
                withCredentials: true,
            });

            console.log(response.data);

            const nextDonors = response.data.data;

            setListDonor((prev) => [...prev, ...nextDonors]);
            setNextCursor(response.data.next_cursor);
            setFetchshowMoreDonors(false);
        } catch (error) {
            console.log(error);
            setFetchshowMoreDonors(false);
        }
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
                                    <div className={cx('content-camp')}>
                                        <div className={cx('camp-thumbnail')}>
                                            <img
                                                className={cx('thumb')}
                                                alt=""
                                                src={`${BASE_URL_IMAGE}${campaignInfo.thumbnails[0].path}`}
                                            />
                                        </div>

                                        <div className={cx('bread')}>
                                            <div className={cx('list-bread')}>
                                                {LIST_BREAD.map((item) => (
                                                    <div
                                                        onClick={() => setBreadItemActive(item)}
                                                        key={item.id}
                                                        className={
                                                            breadItemActive.id === item.id
                                                                ? cx('bread-item', 'active')
                                                                : cx('bread-item')
                                                        }
                                                    >
                                                        <span>{item.title}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={cx('content')}>
                                            {/* Overview */}
                                            {breadItemActive.title === 'Overview' && (
                                                <div className={cx('inner-content')}>
                                                    <HTMLRendered htmlString={campaignInfo.description} />
                                                </div>
                                            )}

                                            {/* Timeline */}

                                            {breadItemActive.title === 'Timeline of Budget' && (
                                                <>
                                                    <div className={cx('inner-content', 'timeline-budget')}>
                                                        <div className={cx('head')}>
                                                            <img
                                                                className={cx('icon-small')}
                                                                alt=""
                                                                src={images.heartDecoIcon}
                                                            />
                                                            <p className={cx('title')}>Timelie Budget Daily</p>
                                                        </div>
                                                        <div className={cx('description')}>
                                                            <p className={cx('desc')}>
                                                                Use this template to track the status of day-to-day
                                                                design tasks. Tasks are assigned to one or more people
                                                                and can include priority and due date.
                                                            </p>
                                                            <p className={cx('desc')}>
                                                                Looking for a way to track tasks in context of a larger
                                                                product roadmap? Check out the Roadmap template.{' '}
                                                            </p>
                                                        </div>

                                                        {/* Timeline */}
                                                        <div className={cx('wrap-timeline')}>
                                                            {FAKE_TIMELINE_BUDGET !== null &&
                                                            FAKE_TIMELINE_BUDGET.length > 0 ? (
                                                                <>
                                                                    {FAKE_TIMELINE_BUDGET.map((item) => (
                                                                        <div
                                                                            key={item.id}
                                                                            className={cx('group-activity')}
                                                                        >
                                                                            <div className={cx('decoration')}>
                                                                                <div>
                                                                                    <img
                                                                                        className={cx('icon')}
                                                                                        alt=""
                                                                                        src={images.decorationIcon}
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    className={cx('line-column')}
                                                                                ></div>
                                                                            </div>
                                                                            <div className={cx('activities')}>
                                                                                <div className={cx('schedule')}>
                                                                                    <button>
                                                                                        <span>${item.amount}</span>
                                                                                    </button>
                                                                                </div>

                                                                                <div className={cx('multi-activity')}>
                                                                                    <div
                                                                                        className={cx('activity-item')}
                                                                                    >
                                                                                        <div>
                                                                                            <p>{item.description}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {breadItemActive.title === 'Community' && (
                                                <div className={cx('inner-content', 'community')}>
                                                    <div className={cx('message')}>
                                                        <img
                                                            className={cx('icon', 'icon-small')}
                                                            alt=""
                                                            src={images.automationIcon}
                                                        />
                                                        This post is for backers only If you’re a backer of this
                                                        project, please log in to read this post
                                                    </div>
                                                </div>
                                            )}

                                            {breadItemActive.title === 'Update' && (
                                                <div className={cx('inner-content', 'update')}>
                                                    <div className={cx('wrap-updates')}>
                                                        {FAKE_UPDATE !== null && FAKE_UPDATE.length > 0 ? (
                                                            <>
                                                                {FAKE_UPDATE.map((item) => (
                                                                    <div key={item.id} className={cx('update-item')}>
                                                                        <div className={cx('update-sequense')}>
                                                                            <span>#UPDATE {item.id}</span>
                                                                            <span className={cx('tag')}>
                                                                                Backers only
                                                                            </span>
                                                                        </div>
                                                                        <p className={cx('title-update')}>
                                                                            {item.title}
                                                                        </p>
                                                                        <div className={cx('update-creator')}>
                                                                            <span>{item.creator}</span>
                                                                            <span
                                                                                className={cx('update-separate')}
                                                                            ></span>
                                                                            <span>{item.createdAt}</span>
                                                                        </div>

                                                                        <div className={cx('update-label')}>
                                                                            <div className={cx('div-1')}></div>
                                                                            <div className={cx('div-2')}></div>
                                                                        </div>

                                                                        <div className={cx('message')}>
                                                                            <img
                                                                                className={cx('icon', 'icon-small')}
                                                                                alt=""
                                                                                src={images.automationIcon}
                                                                            />
                                                                            This post is for backers only If you’re a
                                                                            backer of this project, please log in to
                                                                            read this post
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
                                                {width === 0 && (
                                                    <div style={{ left: `${width}%` }} className={cx('alert')}>
                                                        ${campaignInfo.amount_donate_current}
                                                    </div>
                                                )}
                                                {width >= 100 && (
                                                    <div className={cx('alert')} style={{ right: '0' }}>
                                                        ${campaignInfo.amount_donate_current}
                                                    </div>
                                                )}
                                                {width > 0 && width < 100 && (
                                                    <div
                                                        className={cx('alert')}
                                                        style={{ left: `${width}%`, transform: 'translateX(-50%)' }}
                                                    >
                                                        ${campaignInfo.amount_donate_current}
                                                    </div>
                                                )}

                                                <div className={cx('scroll')}></div>
                                            </div>
                                            <div className={cx('desc-goal')}>
                                                <span>Start</span>
                                                <span>
                                                    Goal US{' '}
                                                    {campaignInfo.goal_donate !== null && campaignInfo.goal_donate}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('stats-details')}>
                                            <div className={cx('item-details')}>
                                                <p>
                                                    US {campaignInfo.goal_donate - campaignInfo.amount_donate_current}
                                                </p>
                                                <span>Founded</span>
                                            </div>
                                            <div className={cx('item-details')}>
                                                <p>{listDonor.length}</p>
                                                <span>Doners</span>
                                            </div>
                                            <div className={cx('item-details')}>
                                                <p>{calculateDaysToPresent(campaignInfo.end_date)}</p>
                                                <span>Days to go</span>
                                            </div>
                                        </div>
                                        <div className={cx('group-btns')}>
                                            <button
                                                className={cx('js-toggle')}
                                                toggle-target="#popper-donation"
                                                onClick={handlePrepareStatementDonor}
                                            >
                                                Donate Now
                                            </button>
                                            <button>
                                                <img className={cx('icon')} alt="" src={images.followingIcon} />
                                                Save for later
                                            </button>
                                        </div>

                                        {/* <div className={cx('separate')}></div> */}
                                        {/* List Supporters */}

                                        <div className={cx('list-supporters')}>
                                            <div className={cx('head')}>
                                                <p className={cx('title')}>Supporters</p>
                                                <p className={cx('count')}>
                                                    COUNT <span className={cx('count-value')}>{listDonor.length}</span>
                                                </p>
                                            </div>
                                            {listDonor !== null && listDonor.length > 0 ? (
                                                <>
                                                    {listDonor.map((item) => (
                                                        <div className={cx('item-donate')} key={item.id}>
                                                            <figure className={cx('wrap-avatar')}>
                                                                {item.user !== null && item.user.avatar !== null ? (
                                                                    <img alt="" src={item.avatar} />
                                                                ) : (
                                                                    <span className={cx('anonymous')}>
                                                                        {item.user !== null && item.user.name !== null
                                                                            ? item.user.name.charAt(0)
                                                                            : 'A'}
                                                                    </span>
                                                                )}
                                                            </figure>

                                                            <div className={cx('left-item')}>
                                                                <p className={cx('group')}>
                                                                    by{' '}
                                                                    {item.user !== null && item.user.name !== null ? (
                                                                        <span className={cx('name')}>
                                                                            {item.user.name}
                                                                        </span>
                                                                    ) : (
                                                                        <span className={cx('name')}>Anonymous</span>
                                                                    )}{' '}
                                                                    <span className={cx('group-separate')}></span>
                                                                    {formatDateFromBackend(item.created_at)}
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

                                                    {nextCursor !== null && (
                                                        <>
                                                            <button
                                                                onClick={handleFetchMoreDonors}
                                                                className={cx('btn-show-more')}
                                                            >
                                                                Show more
                                                                {fetchShowMoreDonors && (
                                                                    <img
                                                                        className={cx('icon', 'icon-small')}
                                                                        alt=""
                                                                        src={images.spinnerIcon}
                                                                    />
                                                                )}
                                                            </button>
                                                        </>
                                                    )}
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>

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
                                                <img className={cx('icon')} alt="" src={images.arrowIconRight} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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

            {/* Form Donation */}
            <div id="popper-donation" className={cx('popper-donation', 'hide')}>
                <div className={cx('wrap-content')}>
                    {stepDonate !== 3 ? (
                        <>
                            <div className={cx('head-content')}>
                                <div className={cx('name')}>
                                    <div className={cx('form-edit')}>
                                        <p className={cx('value')}>{campaignInfo !== null && campaignInfo.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('form-row')}>
                                <div className={cx('form-label', 'label-schedule')}>
                                    <div className={cx('label')}>Make a Donation:</div>
                                </div>
                            </div>
                            <div className={cx('separate')}>
                                <span className={cx('first')}></span>
                                <span className={stepDonate === 2 || stepDonate === 3 ? cx('active') : cx('')}></span>
                                <span className={stepDonate === 3 ? cx('active') : cx('')}></span>
                                <span className={cx('small')}></span>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}

                    <div className={cx('process-donate')}>
                        {/* Step 1: Amount */}
                        {stepDonate === 1 ? (
                            <>
                                <div className={cx('form-row')}>
                                    <div className={cx('form-group')}>
                                        <div className={cx('form-label')}>
                                            <label>Amount*</label>
                                        </div>

                                        <div ref={refPopperAmount} className={cx('filter-select-wrap')}>
                                            <div onClick={toggleShowPopperAmount} className={cx('main')}>
                                                <span>
                                                    {amountDonate !== null
                                                        ? `$${amountDonate.amountValue}`
                                                        : 'Choose value'}
                                                </span>
                                                <img className={cx('icon')} alt="" src={images.plusIcon} />
                                            </div>
                                            <div
                                                className={
                                                    showPopperAmount === true
                                                        ? cx('wrap-list')
                                                        : cx('wrap-list', 'none')
                                                }
                                            >
                                                <div className={cx('popper-list')}>
                                                    {LIAT_AMOUNT.map((item) => (
                                                        <div
                                                            onClick={() => setAmountDonate(item)}
                                                            key={item.id}
                                                            className={
                                                                amountDonate !== null &&
                                                                item.amountValue === amountDonate.amountValue
                                                                    ? cx('popper-item', 'active')
                                                                    : cx('popper-item')
                                                            }
                                                        >
                                                            <span>$ {item.amountValue}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('form-row')}>
                                    <div className={cx('form-group')}>
                                        <div className={cx('form-label')}>
                                            <label>Name</label>
                                        </div>

                                        <div className={cx('form-control')}>
                                            <input
                                                name="name"
                                                type="text"
                                                className={cx('form-input')}
                                                value={nameDonor}
                                                onChange={(e) => setNameDonor(e.target.value)}
                                                placeholder="user name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-row')}>
                                    <div className={cx('form-group')}>
                                        <div className={cx('form-label')}>
                                            <label>Email</label>
                                        </div>

                                        <div className={cx('form-control')}>
                                            <input
                                                name="email"
                                                type="email"
                                                className={cx('form-input')}
                                                value={emailDobor}
                                                onChange={(e) => setEmailDonor(e.target.value)}
                                                placeholder="abc@gmail.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-row')}>
                                    <div className={cx('form-group')}>
                                        <div className={cx('form-label')}>
                                            <label>Message</label>
                                        </div>

                                        <div className={cx('form-control')}>
                                            <input
                                                type="text"
                                                className={cx('form-input')}
                                                placeholder="message..."
                                                value={messageDonor}
                                                onChange={(e) => setMessageDonor(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('bottom-btns')}>
                                    <button className={cx('back-btn', 'js-toggle')} toggle-target="#popper-donation">
                                        Back
                                    </button>

                                    <button onClick={checkValidFormInProcessStep1} className={cx('next-btn')}>
                                        Next
                                        <img className={cx('icon')} alt="" src={images.nextIcon} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        {stepDonate === 2 ? (
                            <>
                                <div className={cx('form-row', 'pay')}>
                                    <div className={cx('form-group')}>
                                        <div className={cx('form-label')}>
                                            <label>Available Payment method</label>
                                        </div>

                                        <div className={cx('wrap-pay')}>
                                            <PayPalScriptProvider
                                                options={{
                                                    'client-id':
                                                        'ARO2YIjmmRbeeaIIjklrVE5Qdnoza3_UQhOp-DffG5tw3ulIRStZq2VpQ_hwVxMtIwLRdRd43L_d46TD',
                                                }}
                                            >
                                                <PayPalButtons
                                                    createOrder={(data, actions) => {
                                                        return actions.order.create({
                                                            purchase_units: [
                                                                {
                                                                    amount: {
                                                                        value: amountDonate.amountValue,
                                                                    },
                                                                },
                                                            ],
                                                        });
                                                    }}
                                                    onApprove={async (data, actions) => {
                                                        const order = await actions.order.capture();
                                                        console.log(order);

                                                        console.log(order.purchase_units[0]);

                                                        const donateDetails = {
                                                            id: order.id,
                                                            order_date: order.create_time,

                                                            customer_name:
                                                                order.purchase_units[0].shipping.name.full_name,
                                                            email_adress: order.payer.email_address,

                                                            status: order.status,
                                                            amount: order.purchase_units[0].amount,
                                                        };

                                                        console.log(donateDetails);

                                                        storeDonationDetails(campaignInfo.id, donateDetails);
                                                        setStepDonate(3);
                                                    }}
                                                    onCancel={() => {
                                                        alert('Cancel');
                                                    }}
                                                    onError={(err) => {
                                                        alert(err);
                                                        console.error('Paypal checkout on Error!', err);
                                                    }}
                                                />
                                            </PayPalScriptProvider>
                                        </div>

                                        <div className={cx('bottom-btns')}>
                                            <button
                                                onClick={() => {
                                                    setAmountDonate(null);
                                                    setStepDonate(1);
                                                }}
                                                className={cx('back-btn')}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        {stepDonate === 3 ? (
                            <>
                                <div className={cx('notification-success')}>
                                    <figure>
                                        <img className={cx('thumb-success')} alt="" src={images.donateImg} />
                                    </figure>

                                    <div className={cx('message')}>Donate success. Thank for supporting!</div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={cx('popper-overlay-donation', 'js-toggle')}
                toggle-target="#popper-donation"
                onClick={() => setStepDonate(1)}
            ></div>
            {/* End */}
        </>
    );
}

export default CampaignDonationDetails;
