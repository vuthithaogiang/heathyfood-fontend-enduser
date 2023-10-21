import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';
import images from '~/assets/images';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper')}>
            <button
                onClick={scrollToTop}
                className={isVisible === true ? cx('back-to-top-button', 'visible') : cx('back-to-top-button')}
            >
                <img className={cx('icon')} alt="" src={images.backtoTopIcon} />
            </button>
        </div>
    );
}

export default BackToTop;
