import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';
import Popper from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <>
            <Tippy
                // visible
                interactive
                delay={[0, 300]}
                render={(attrs) => (
                    <div className={cx('menu-items')} tabIndex={-1} {...attrs}>
                        <Popper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <MenuHeader
                                    title="Language"
                                    onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                                />
                            )}
                            {renderItems()}
                        </Popper>
                    </div>
                )}
                placement="bottom-end"
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;
