import classNames from 'classnames/bind';
import styles from './Introdction.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Introdction() {
    const LIST_FEATURES = [
        {
            title: 'Tool Calulators',
            description:
                "No matter what you weight or health goals are, we've got the solution to help you reach them.",
            to: '/bmi',
        },
        {
            title: 'Nutrition',
            description: 'You are what you eat! Tell us what you eat and we will tel you what you are.',
            to: '',
        },
        {
            title: 'Campaigns',
            description:
                'Join us we make information nutritions meals everyday for people suffering from food insecurity.',
            to: '/campaigns',
        },
        {
            title: 'Products',
            description:
                'Join us we make information nutritions meals everyday for people suffering from food insecurity.',
            to: '/products',
        },
    ];

    const navigate = useNavigate();

    return (
        <div className={cx('container')}>
            <div className={cx('introduction')}>
                <div className={cx('intro-features')}>
                    <div className={cx('left')}>
                        <div className={cx('left-inner')}>
                            {LIST_FEATURES.map((item, index) => (
                                <div key={index} className={cx('feature-component')}>
                                    <div className={cx('group')}>
                                        <p className={cx('feature-title')}>{item.title}</p>
                                        <button className={cx('explore-now')} onClick={() => navigate(item.to)}>
                                            Go to
                                            <img src={images.arrowIconRight} alt="" className={cx('icon')} />
                                        </button>
                                    </div>
                                    <p className={cx('feature-desc')}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <img
                            alt=""
                            src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1658910217548-QY30LS3OLXCGGX03VAFH/75+In+Summer%2C+I+Cook+What+My+Garden+Gives+Me+16.jpg?format=1500w"
                            className={cx('intro-thumbnail')}
                        />
                        <img
                            alt=""
                            src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1605696119572-HFMTO0JN4YE262I06PNC/Horse-Chestnut%2BOintment%2BHer%2B86m2%2Bby%2BThuy%2BDao%2B29.jpg?format=500w"
                            className={cx('intro-thumbnail', 'd-md-none')}
                        />
                        <img alt="" src={images.slideShow3} className={cx('intro-thumbnail', 'd-xl-none')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introdction;
