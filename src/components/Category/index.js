import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ data }) {
    return (
        <div className={cx('item')}>
            <div className={cx('group-icon')}>
                <img src={data.icon1} alt="" />
                <img src={data.icon2} alt="" className={cx('icon')} />
            </div>
            <span>{data.title}</span>
        </div>
    );
}

export default Category;
