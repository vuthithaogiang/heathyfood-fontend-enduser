import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    small,
    round,
    large,
    outline,
    className,
    leftIcon,
    rightIcon,
    disabled,
    text,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        round,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <img alt="" src={leftIcon} className={cx('icon', 'btn-icon')} />}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <img alt="" src={rightIcon} className={cx('icon', 'btn-icon')} />}
        </Comp>
    );
}

export default Button;
