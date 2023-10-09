import classNames from 'classnames/bind';
import styles from './Slideshow.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Slideshow() {
    return (
        <div className={cx('slideshow')}>
            <div className={cx('slideshow-inner')}>
                <div className={cx('slideshow-item')}>
                    <img className={cx('slideshow-img')} src={images.slideShow2} alt="" />
                </div>
                <div className={cx('slideshow-item')}>
                    <img className={cx('slideshow-img')} src={images.slideShow1} alt="" />
                </div>
                <div className={cx('slideshow-item')}>
                    <img className={cx('slideshow-img')} src={images.slideShow3} alt="" />
                </div>
            </div>
            <div className={cx('slideshow-page')}>
                <span className={cx('slideshow-number')}>1</span>
                <span className={cx('slideshow-slider')}></span>
                <span className={cx('slideshow-number')}>5</span>
            </div>
        </div>
    );
}
export default Slideshow;
