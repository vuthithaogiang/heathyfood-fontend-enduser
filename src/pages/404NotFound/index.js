import classNames from 'classnames/bind';
import styles from './404NotFound.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <h4>404</h4>
                        <p>We’re sorry, the page you requested could not be found Please go back to the homepage</p>
                        <button onClick={() => navigate('/')}>Back to Homepage</button>
                    </div>
                    <div className={cx('right')}>
                        <img className={cx('back-ground')} alt="" src={images.bgNotFounddecor} />
                        <img className={cx('img')} alt="" src={images.notFound} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
