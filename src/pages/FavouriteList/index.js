import classNames from 'classnames/bind';
import styles from './FavouriteList.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function FavouriteList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('navbar')}>
                    <span className={cx('link')}>Home</span>
                    <img className={cx('')} alt="" src={images.arrowRight} />
                    <span className={cx('link')}>Favourite Items</span>
                </header>

                <div className={cx('inner')}>
                    <div className={cx('top')}>
                        <h3>Favourite List</h3>
                        <p>3 items</p>
                    </div>
                    <div className={cx('check-all')}>
                        <input type="checkbox" id="check-all" hidden />
                        <label htmlFor="check-all" className={cx('lable')}>
                            Check all
                        </label>
                    </div>
                    <div className={cx('list-item')}>
                        {/* Item 1 */}
                        <div className={cx('item')}>
                            <div className={cx('check-box')}>
                                <input type="checkbox" id="item-1" hidden />
                                <label htmlFor="item-1" className={cx('lable')}></label>
                            </div>
                            <figure>
                                <img className={cx('thumbnail')} alt="" src={images.product1} />
                            </figure>
                            <div className={cx('item-desc')}>
                                <div className={cx('item-info')}>
                                    <label htmlFor="item-1">
                                        <p className={cx('item-name')}>
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </p>
                                    </label>
                                    <p className={cx('price')}>$44.00</p>
                                </div>
                                <div className={cx('group')}>
                                    <p className={cx('item-price')}>$44.00</p>
                                    <span className={cx('separate')}></span>
                                    <p className={cx('status')}>In Stock</p>
                                </div>
                                <div className={cx('item-actions')}>
                                    <div className={cx('actions-group')}>
                                        <div className={cx('group-item')}>
                                            <span>Lalavaaa</span>
                                            <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                        </div>
                                        <div className={cx('group-item')}>
                                            <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                            <span>3</span>
                                            <img className={cx('icon')} alt="" src={images.decreaseIcon} />
                                        </div>
                                        <div className={cx('group-item')}>
                                            <button>
                                                <img alt="" className={cx('saved')} src={images.heartColor} />
                                                <span>Saved</span>
                                            </button>
                                            <button>
                                                <img alt="" className={cx('delete')} src={images.trashIcon} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('btn')}>
                                        <button>Check Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className={cx('item')}>
                            <div className={cx('check-box')}>
                                <input type="checkbox" id="item-2" hidden />
                                <label htmlFor="item-2" className={cx('lable')}></label>
                            </div>
                            <figure>
                                <img className={cx('thumbnail')} alt="" src={images.product1} />
                            </figure>
                            <div className={cx('item-desc')}>
                                <div className={cx('item-info')}>
                                    <label htmlFor="item-2">
                                        <p className={cx('item-name')}>
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </p>
                                    </label>
                                    <p className={cx('price')}>$44.00</p>
                                </div>
                                <div className={cx('group')}>
                                    <p className={cx('item-price')}>$44.00</p>
                                    <span className={cx('separate')}></span>
                                    <p className={cx('status')}>In Stock</p>
                                </div>
                                <div className={cx('item-actions')}>
                                    <div className={cx('actions-group')}>
                                        <div className={cx('group-item')}>
                                            <span>Lalavaaa</span>
                                            <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                        </div>
                                        <div className={cx('group-item')}>
                                            <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                            <span>3</span>
                                            <img className={cx('icon')} alt="" src={images.decreaseIcon} />
                                        </div>
                                        <div className={cx('group-item')}>
                                            <button>
                                                <img alt="" className={cx('saved')} src={images.heartColor} />
                                                <span>Saved</span>
                                            </button>
                                            <button>
                                                <img alt="" className={cx('delete')} src={images.trashIcon} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('btn')}>
                                        <button>Check Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className={cx('item')}>
                            <div className={cx('check-box')}>
                                <input type="checkbox" id="item-3" hidden />
                                <label htmlFor="item-3" className={cx('lable')}></label>
                            </div>
                            <figure>
                                <img className={cx('thumbnail')} alt="" src={images.product1} />
                            </figure>
                            <div className={cx('item-desc')}>
                                <div className={cx('item-info')}>
                                    <label htmlFor="item-3">
                                        <p className={cx('item-name')}>
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </p>
                                    </label>
                                    <p className={cx('price')}>$44.00</p>
                                </div>
                                <div className={cx('group')}>
                                    <p className={cx('item-price')}>$44.00</p>
                                    <span className={cx('separate')}></span>
                                    <p className={cx('status')}>In Stock</p>
                                </div>
                                <div className={cx('item-actions')}>
                                    <div className={cx('actions-group')}>
                                        <div className={cx('group-item')}>
                                            <span>Lalavaaa</span>
                                            <img className={cx('icon')} alt="" src={images.arrowIcon} />
                                        </div>
                                        <div className={cx('group-item')}>
                                            <img className={cx('icon')} alt="" src={images.increaseIcon} />
                                            <span>3</span>
                                            <img className={cx('icon')} alt="" src={images.decreaseIcon} />
                                        </div>
                                        <div className={cx('group-item')}>
                                            <button>
                                                <img alt="" className={cx('saved')} src={images.heartColor} />
                                                <span>Saved</span>
                                            </button>
                                            <button>
                                                <img alt="" className={cx('delete')} src={images.trashIcon} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('btn')}>
                                        <button>Check Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('bottom')}>
                        <div>
                            <img className={cx('icon')} alt="" src={images.arrowLeft} />
                            <span>Continue Shopping</span>
                        </div>
                        <button className={cx('btn-checkaout-all')}>Check Out All Items</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteList;
