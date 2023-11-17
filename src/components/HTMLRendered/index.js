import classNames from 'classnames/bind';
import styles from './HTMLRendered.module.scss';

const cx = classNames.bind(styles);

function HTMLRendered({ htmlString }) {
    return (
        <div className={cx('text-value')}>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
    );
}

export default HTMLRendered;
