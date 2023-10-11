import classNames from 'classnames/bind';
import styles from './Introdction.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Introdction() {
    const LIST_FEATURES = [
        {
            title: 'Tool Calulators',
            description:
                "No matter what you weight or health goals are, we've got the solution to help you reach them.",
        },
        {
            title: 'Nutrition',
            description: 'You are what you eat! Tell us what you eat and we will tel you what you are.',
        },
        {
            title: 'Events',
            description:
                'Join us we make information nutritions meals everyday for people suffering from food insecurity.',
        },
    ];
    return (
        <div className={cx('introduction')}>
            <div className={cx('intro-head')}>
                <h2 className={cx('head-title')}>From the big picture to every tiny detail, we got you covered.</h2>
                <button className={cx('intro-btn')}>
                    Explore Now
                    <img alt="" src={images.arrowIconRight} className={cx('icon')} />
                </button>
            </div>
            <div className={cx('intro-features')}>
                <div className={cx('left')}>
                    <div className={cx('left-inner')}>
                        {LIST_FEATURES.map((item, index) => (
                            <div key={index} className={cx('feature-component')}>
                                <p className={cx('feature-title')}>{item.title}</p>
                                <p className={cx('feature-desc')}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('right')}>
                    <img alt="" src={images.slideShow1} className={cx('intro-thumbnail')} />
                    <img
                        alt=""
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1605696119572-HFMTO0JN4YE262I06PNC/Horse-Chestnut%2BOintment%2BHer%2B86m2%2Bby%2BThuy%2BDao%2B29.jpg?format=500w"
                        className={cx('intro-thumbnail', 'd-md-none')}
                    />
                    <img alt="" src={images.slideShow3} className={cx('intro-thumbnail', 'd-xl-none')} />
                </div>
            </div>
        </div>
    );
}

export default Introdction;
