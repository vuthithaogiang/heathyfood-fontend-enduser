import classNames from 'classnames/bind';
import styles from './Upcoming.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function UpcomingEvent() {
    const LIST_EVENTS = [
        {
            id: 1,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723465873-850G5DM2SB5UH3LOFAWA/DJI_0111.jpg?format=1500w',
            date: '🔥 15 April',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
        {
            id: 2,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723529325-4Y2AO3H1QV7NNT9GEN0U/_R3O4133.jpg?format=1500w',
            date: '📘 05 May',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
        {
            id: 3,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723647222-G1F451GHWWZ37XYHSHR1/_R3O3866.jpg?format=1500w',
            date: '🚀 25 October',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
        {
            id: 4,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail:
                'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669732048332-5IE6FFXOSTVYPKT5MWPC/_R3O4618.jpg?format=1500w',
            date: '✍️ 18 August',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
    ];
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <header>
                    <p>Shedule Of Event</p>
                    <h2>Upcoming Events</h2>
                </header>

                <div className={cx('list-event')}>
                    {LIST_EVENTS.map((item) => (
                        <div key={item.id} className={cx('event')}>
                            <img className={cx('thumb-event')} src={item.thumbnail} alt={item.nameEvent} />
                            <div className={cx('info-event')}>
                                <div className={cx('date-in')}>{item.date} </div>
                                <h4>{item.nameEvent}</h4>
                                <div className={cx('time-and-location')}>
                                    <div className={cx('time')}>
                                        <img src={images.clockIcon1} alt="icon" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className={cx('location')}>
                                        <img src={images.locationIcon} alt="icon" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <img className={cx('img-decor')} src={images.decoration1} alt="decoration" />
                </div>

                <div className={cx('btn')}>
                    <span>More Events</span>
                    <img src={images.arrowIconRight} alt="icon" className={cx('icon')} />
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvent;
