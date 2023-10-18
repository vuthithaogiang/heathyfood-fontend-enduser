import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const [idProductSave, setIdProductSave] = useState(null);
    const [save, setSave] = useState(false);

    const toggleSaveItem = (id) => {
        setIdProductSave(id);
        setSave((pre) => !pre);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('navbar')}>
                    <span className={cx('link')}>Home</span>
                    <img className={cx('')} alt="" src={images.arrowRight} />
                    <span className={cx('link')}>Check out</span>
                </div>
                <div className={cx('cart-inner')}>
                    <div className={cx('left')}>
                        {/* Item 1 */}
                        <div className={cx('item')}>
                            <img className={cx('thumbnail')} alt=" " src={images.product2} />
                            <div className={cx('item-wrap')}>
                                <div className={cx('item-group-1')}>
                                    <h4 className={cx('name')}>Coffee Beans - Espresso Arabica and Robusta Beans</h4>
                                    <span className={cx('total-price')}>$47.00</span>
                                </div>
                                <div className={cx('item-group-2')}>
                                    <span className={cx('price')}>$47.00</span>
                                    <span className={cx('separate')}></span>
                                    <span className={cx('status')}>In Stock</span>
                                </div>
                                <div className={cx('item-group-3')}>
                                    <div className={cx('select-wrap')}>
                                        LavAzza
                                        <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                    </div>
                                    <div className={cx('quantity')}>
                                        <img className={cx('icon')} alt="" src={images.decreaseIcon} />
                                        1
                                        <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                    </div>
                                    <div className={cx('actions')}>
                                        <button onClick={() => toggleSaveItem(1)}>
                                            {idProductSave === 1 && save === true ? (
                                                <>
                                                    <img className={cx('saved')} alt="" src={images.saveIcon} />
                                                </>
                                            ) : (
                                                <>
                                                    <img className={cx('')} alt="" src={images.saveIcon} />
                                                </>
                                            )}
                                            Save
                                        </button>
                                        <button>
                                            <img className={cx('')} alt="" src={images.trashIcon} />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className={cx('item')}>
                            <img className={cx('thumbnail')} alt=" " src={images.product1} />
                            <div className={cx('item-wrap')}>
                                <div className={cx('item-group-1')}>
                                    <h4 className={cx('name')}>Coffee Beans - Espresso Arabica and Robusta Beans</h4>
                                    <span className={cx('total-price')}>$47.00</span>
                                </div>
                                <div className={cx('item-group-2')}>
                                    <span className={cx('price')}>$47.00</span>
                                    <span className={cx('separate')}></span>
                                    <span className={cx('status')}>In Stock</span>
                                </div>
                                <div className={cx('item-group-3')}>
                                    <div className={cx('select-wrap')}>
                                        LavAzza
                                        <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                    </div>
                                    <div className={cx('quantity')}>
                                        <img className={cx('icon')} alt="" src={images.decreaseIcon} />
                                        1
                                        <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                    </div>
                                    <div className={cx('actions')}>
                                        <button onClick={() => toggleSaveItem(2)}>
                                            {idProductSave === 2 && save === true ? (
                                                <>
                                                    <img className={cx('saved')} alt="" src={images.saveIcon} />
                                                </>
                                            ) : (
                                                <>
                                                    <img className={cx('')} alt="" src={images.saveIcon} />
                                                </>
                                            )}
                                            Save
                                        </button>
                                        <button>
                                            <img className={cx('')} alt="" src={images.trashIcon} />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className={cx('item')}>
                            <img className={cx('thumbnail')} alt=" " src={images.product2} />
                            <div className={cx('item-wrap')}>
                                <div className={cx('item-group-1')}>
                                    <h4 className={cx('name')}>Coffee Beans - Espresso Arabica and Robusta Beans</h4>
                                    <span className={cx('total-price')}>$47.00</span>
                                </div>
                                <div className={cx('item-group-2')}>
                                    <span className={cx('price')}>$47.00</span>
                                    <span className={cx('separate')}></span>
                                    <span className={cx('status')}>In Stock</span>
                                </div>
                                <div className={cx('item-group-3')}>
                                    <div className={cx('select-wrap')}>
                                        LavAzza
                                        <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                    </div>
                                    <div className={cx('quantity')}>
                                        <img className={cx('icon')} alt="" src={images.decreaseIcon} />
                                        1
                                        <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                    </div>
                                    <div className={cx('actions')}>
                                        <button onClick={() => toggleSaveItem(3)}>
                                            {idProductSave === 3 && save === true ? (
                                                <>
                                                    <img className={cx('saved')} alt="" src={images.saveIcon} />
                                                </>
                                            ) : (
                                                <>
                                                    <img className={cx('')} alt="" src={images.saveIcon} />
                                                </>
                                            )}
                                            Save
                                        </button>
                                        <button>
                                            <img className={cx('')} alt="" src={images.trashIcon} />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('bottom')}>
                            <div className={cx('back')}>
                                <img alt="" src={images.arrowLeft} className={cx('icon')} />
                                Continue Shopping
                            </div>
                            <div className={cx('left-subtotal')}>
                                <div>
                                    <span>Subtotal:</span>
                                    $196.00
                                </div>
                                <div>
                                    <span>Shipping:</span>
                                    $10.00
                                </div>
                                <div>
                                    <span>Total:</span>
                                    $216.00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('right-subtotal')}>
                            <div className={cx('item')}>
                                <span>
                                    Sub Total<strong>(Items)</strong>
                                </span>
                                3
                            </div>
                            <div className={cx('item')}>
                                <span>
                                    Price<strong>(Total)</strong>
                                </span>
                                $190.00
                            </div>
                            <div className={cx('item')}>
                                <span>Shipping</span>
                                $10.00
                            </div>
                            <div className={cx('item', 'last')}>
                                <span>Estimated Total</span>
                                $201.65
                            </div>
                            <button>Continue To Checkout</button>
                        </div>
                        <div className={cx('gift')}>
                            <div className={cx('wrap-icon')}>
                                <img alt="" src={images.cartGiftIcon} />
                            </div>
                            <div>
                                <h4>Send this order as gift</h4>
                                <p>Available items will be shipped to your gift recipient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
