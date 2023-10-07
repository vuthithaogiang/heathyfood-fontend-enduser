import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('inner')}>
                <div className={cx('container')}>{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
