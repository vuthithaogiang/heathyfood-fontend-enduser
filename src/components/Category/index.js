import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ data, active }) {
    return (
        <div className={active ? cx('item', 'active') : cx('item')}>
            <span>{data.title}</span>
        </div>
    );
}

export default Category;
