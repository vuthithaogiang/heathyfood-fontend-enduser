import classNames from 'classnames/bind';
import styles from './NutritionByCategory.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function NutritionByCategory() {
    const LIST_CATEGORY = [
        {
            id: 1,
            title: 'Snacks',
            icon1: images.cateFruit1,
            icon2: images.category22,
        },
        {
            id: 2,
            title: 'Fresh Produce',

            icon1: images.cateVegetable1,
            icon2: images.cateFruit2,
        },
        {
            id: 3,
            title: 'Frozen',
            icon1: images.cateRootVegetable1,
            icon2: images.category23,
        },
        {
            id: 4,
            title: 'Candy',
            icon1: images.category21,
            icon2: images.category24,
        },
        {
            id: 5,
            title: 'Bakery & Bread',
            icon1: images.cate13,
            icon2: images.cate26,
        },
        {
            id: 6,
            title: 'Benerages',
            icon1: images.cate14,
            icon2: images.cate27,
        },
        {
            id: 7,
            title: 'Cooktails & Coffee',
            icon1: images.cate15,
            icon2: images.cate28,
        },
        {
            id: 8,
            title: 'Special Food',
            icon1: images.cate16,
            icon2: images.cate29,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <p>Popular Category</p>
                    <h2>Featured Nutrition by Category</h2>
                </header>

                <div className={cx('list-category')}>
                    {LIST_CATEGORY.map((item) => (
                        <div key={item.id} className={cx('item')}>
                            <div className={cx('group-icon')}>
                                <img src={item.icon1} alt="" />
                                <img src={item.icon2} alt="" className={cx('icon')} />
                            </div>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NutritionByCategory;
