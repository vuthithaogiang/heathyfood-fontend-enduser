import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children, className }) {
    return <div className={cx('wrapper-popper', className)}>{children}</div>;
}

export default Popper;
