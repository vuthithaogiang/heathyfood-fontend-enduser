import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import images from '~/assets/images';
import { useState, useEffect } from 'react';
import BackToTop from '~/components/BackToTop';

const cx = classNames.bind(styles);

function Cart() {
    const [idProductSave, setIdProductSave] = useState([]);
    const [save, setSave] = useState(false);

    // const [subMenu, setSubMenu] = useState('checkout'); // checkout->shipping->payment method

    const [type, setType] = useState('CHECKOUT');

    const toggleSaveItem = (id) => {
        if (!idProductSave.includes(id)) {
            setSave(true);
            setIdProductSave((pre) => [id, ...pre]);
            return;
        } else {
            //remove id from array -> set state
            const newArray = idProductSave.filter((item) => item !== id);
            setIdProductSave(newArray);
            setSave(true);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('navbar')}>
                    <span className={cx('link')}>Home</span>
                    <img className={cx('')} alt="" src={images.arrowRight} />
                    <span
                        className={type === 'CHECKOUT' ? cx('link', 'active') : cx('link')}
                        onClick={() => setType('CHECKOUT')}
                    >
                        Check out
                    </span>

                    {type === 'SHIPPING' && (
                        <>
                            <img className={cx('')} alt="" src={images.arrowRight} />
                            <span
                                className={type === 'SHIPPING' ? cx('link', 'active') : cx('link')}
                                onClick={() => setType('SHIPPING')}
                            >
                                Shipping
                            </span>
                        </>
                    )}

                    {type === 'PAYMENTMETHOD' && (
                        <>
                            <img className={cx('')} alt="" src={images.arrowRight} />
                            <span
                                className={type === 'SHIPPING' ? cx('link', 'active') : cx('link')}
                                onClick={() => setType('SHIPPING')}
                            >
                                Shipping
                            </span>
                        </>
                    )}
                    {type === 'PAYMENTMETHOD' && (
                        <>
                            <img className={cx('')} alt="" src={images.arrowRight} />
                            <span
                                className={type === 'PAYMENTMETHOD' ? cx('link', 'active') : cx('link')}
                                onClick={() => setType('PAYMENTMETHOD')}
                            >
                                Payment Method
                            </span>
                        </>
                    )}
                </div>

                {type !== 'PAYMENTMETHOD' && (
                    <>
                        <div className={cx('cart-inner')}>
                            <div className={cx('left')}>
                                {type === 'SHIPPING' && (
                                    <>
                                        <header className={cx('shipping-header')}>
                                            <h4>1. Shipping, arrives between Mon, May 16—Tue, May 24</h4>
                                        </header>

                                        <div className={cx('shipping-address')}>
                                            <div className={cx('header-address')}>
                                                <div>
                                                    <span>Shipping Address</span>
                                                    <span>Where should we deliver your order?</span>
                                                </div>
                                                <button>
                                                    <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                                    Add a new address
                                                </button>
                                            </div>
                                            <div className={cx('list-address')}>
                                                {/* Item address */}
                                                <div className={cx('item-address')}>
                                                    <div className={cx('check-box')}>
                                                        <input type="checkbox" id="address-1" hidden />
                                                        <label htmlFor="address-1" className={cx('lable')}></label>
                                                    </div>
                                                    <div className={cx('adress-details')}>
                                                        <label htmlFor="address-1">
                                                            <p className={cx('username')}>Imran Khan</p>
                                                            <p className={cx('address-info')}>
                                                                Museum of Rajas, Sylhet Sadar, Sylhet 3100.
                                                            </p>
                                                        </label>

                                                        <div className={cx('state')}>
                                                            <span>Shipping</span>
                                                            <span>Delivery from store</span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('address-action')}>
                                                        <button>
                                                            <img className={cx('icon')} alt="" src={images.editIcon} />
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* Item address */}
                                                <div className={cx('item-address')}>
                                                    <div className={cx('check-box')}>
                                                        <input type="checkbox" id="address-2" hidden />
                                                        <label htmlFor="address-2" className={cx('lable')}></label>
                                                    </div>
                                                    <div className={cx('adress-details')}>
                                                        <label htmlFor="address-2">
                                                            <p className={cx('username')}>Imran Khan</p>
                                                            <p className={cx('address-info')}>
                                                                Al Hamra City (10th Floor), Hazrat Shahjalal Road,
                                                                Sylhet, Sylhet, Bangladesh
                                                            </p>
                                                        </label>

                                                        <div className={cx('state')}>
                                                            <span>Shipping</span>
                                                            <span>Delivery from store</span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('address-action')}>
                                                        <button>
                                                            <img className={cx('icon')} alt="" src={images.editIcon} />
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('product-lable')}>Items details</div>
                                    </>
                                )}
                                <div className={cx('list-items')}>
                                    {/* Item 1 */}
                                    <div className={cx('item')}>
                                        <img className={cx('thumbnail')} alt=" " src={images.product2} />
                                        <div className={cx('item-wrap')}>
                                            <div className={cx('item-group-1')}>
                                                <h4 className={cx('name')}>
                                                    Coffee Beans - Espresso Arabica and Robusta Beans
                                                </h4>
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
                                                        {idProductSave.includes(1) && save === true ? (
                                                            <>
                                                                <img
                                                                    className={cx('saved')}
                                                                    alt=""
                                                                    src={images.saveIcon}
                                                                />
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
                                                <h4 className={cx('name')}>
                                                    Coffee Beans - Espresso Arabica and Robusta Beans
                                                </h4>
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
                                                        {idProductSave.includes(2) && save === true ? (
                                                            <>
                                                                <img
                                                                    className={cx('saved')}
                                                                    alt=""
                                                                    src={images.saveIcon}
                                                                />
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
                                                <h4 className={cx('name')}>
                                                    Coffee Beans - Espresso Arabica and Robusta Beans
                                                </h4>
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
                                                        {idProductSave.includes(3) && save === true ? (
                                                            <>
                                                                <img
                                                                    className={cx('saved')}
                                                                    alt=""
                                                                    src={images.saveIcon}
                                                                />
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
                                </div>

                                <div className={cx('bottom')}>
                                    <div className={cx('back')}>
                                        <img alt="" src={images.arrowLeft} className={cx('icon')} />
                                        Continue Shopping
                                    </div>
                                    {type === 'CHECKOUT' && (
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
                                    )}

                                    {type === 'SHIPPING' && (
                                        <button onClick={() => setType('PAYMENTMETHOD')} className={cx('btn-continue')}>
                                            Continue
                                        </button>
                                    )}
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
                                    {type === 'CHECKOUT' && (
                                        <button onClick={() => setType('SHIPPING')}>Continue To Checkout</button>
                                    )}
                                </div>
                                {type === 'CHECKOUT' && (
                                    <div className={cx('gift')}>
                                        <div className={cx('wrap-icon')}>
                                            <img alt="" src={images.cartGiftIcon} />
                                        </div>
                                        <div>
                                            <h4>Send this order as gift</h4>
                                            <p>Available items will be shipped to your gift recipient.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {type === 'PAYMENTMETHOD' && (
                    <>
                        <div className={cx('cart-inner')}>
                            <div className={cx('left-payment')}>
                                <div className={cx('shipping-address')}>
                                    <div className={cx('wrap-1')}>
                                        <h4 className={cx('heading')}>
                                            1. Shipping, arrives between Mon, May 16—Tue, May 24
                                        </h4>
                                        <button onClick={() => setType('SHIPPING')}>
                                            <img className={cx('icon')} alt="" src={images.editIcon} />
                                            Edit
                                        </button>
                                    </div>

                                    <div className={cx('wrap-2')}>
                                        <div>
                                            <p>Imma Khan</p>
                                            <p>Museum of Rajas, Sylhet Sadar, Sylhet 3100.</p>
                                        </div>
                                        <img alt="" src={images.checkboxIcon} />
                                    </div>
                                    <div className={cx('wrap-3')}>
                                        <div>
                                            <p>Items details</p>
                                            <p>3 items</p>
                                        </div>
                                        <button onClick={() => setType('SHIPPING')}>View Details</button>
                                    </div>
                                </div>

                                <div className={cx('shipping-method')}>
                                    <h4 className={cx('heading')}>2. Shipping Method</h4>
                                    <p className={cx('desc')}>Availeble Shipping method</p>

                                    <div className={cx('wrap-1')}>
                                        <div>
                                            <img alt="" src={images.delivery1} />
                                            <div>
                                                <p>Fedex Delivery</p>
                                                <p>Delivery: 2-3 days work</p>
                                            </div>
                                        </div>

                                        <div className={cx('check-box')}>
                                            <input type="checkbox" id="free-ship" hidden />
                                            <label htmlFor="free-ship" className={cx('lable')}>
                                                Free
                                            </label>
                                        </div>
                                    </div>

                                    <div className={cx('wrap-2')}>
                                        <div>
                                            <img alt="" src={images.delivery2} />
                                            <div>
                                                <p>DHL Delivery</p>
                                                <p>Delivery: 2-3 days work</p>
                                            </div>
                                        </div>

                                        <div className={cx('check-box')}>
                                            <input type="checkbox" id="cost-ship" hidden />
                                            <label htmlFor="cost-ship" className={cx('lable')}>
                                                $10.00
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('right-payment')}>
                                <h4 className={cx('heading')}>Payment Details</h4>
                                <p className={cx('desc')}>
                                    Complete your purchase item by providing your payment details order.
                                </p>

                                <form className={cx('form')} onSubmit={(e) => e.preventDefault()} method="post">
                                    <div className={cx('form-group')}>
                                        <label htmlFor="email" className={cx('form-label')}>
                                            Email Address
                                        </label>
                                        <div className={cx('form-input')}>
                                            <input id="email" name="email" placeholder="abcd@gmail.com" type="email" />
                                        </div>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="card-number" className={cx('form-label')}>
                                            Card Number
                                        </label>
                                        <div className={cx('form-input')}>
                                            <input
                                                id="card-number"
                                                name="cardNumber"
                                                placeholder="1243546562425"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="card-holder" className={cx('form-label')}>
                                            Card Holder
                                        </label>
                                        <div className={cx('form-input')}>
                                            <input
                                                id="card-holder"
                                                name="cardHodle"
                                                placeholder="KIMAN JAMES"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="card-expired" className={cx('form-label')}>
                                            Card Expired
                                        </label>
                                        <div className={cx('form-multi-input')}>
                                            <input
                                                id="card-expired"
                                                name="cardExpired"
                                                placeholder="MM/YY"
                                                type="text"
                                            />
                                            <input placeholder="CVC" type="text" />
                                        </div>
                                    </div>

                                    <div className={cx('sub-total')}>
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
                                    </div>

                                    <button type="submit">Pay $456.90</button>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <BackToTop />
        </div>
    );
}

export default Cart;
