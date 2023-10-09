import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const NAVBAR_lIST = [
        {
            title: 'Nutrition',
            subMenu: [
                {
                    cate: 'Fruits and Vegetables',
                },
                {
                    cate: 'Grains and Cereals',
                },
                {
                    cate: 'Protein Foods',
                },
                {
                    cate: 'Dairy & Dairy Alternatives',
                },
                {
                    cate: 'Fats and Oils',
                },
                {
                    cate: 'Sweets and Desserts',
                },
                {
                    cate: 'Beverages',
                },
                {
                    cate: 'Snacks',
                },
            ],
        },
        {
            title: 'Grocery',
            children: [
                {
                    cate: 'Brands',
                    icon1: images.cateFruit1,
                    icon2: images.category22,
                    subMenu: [
                        {
                            title: "Nature's Path (organic cereals and granola)",
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Fruits',
                    icon1: images.cateVegetable1,
                    icon2: images.cateFruit2,
                    subMenu: [
                        {
                            title: 'Citrus Fruits',
                            to: '',
                        },
                        {
                            title: 'Berris',
                            to: '',
                        },
                        {
                            title: 'Apples and Pears',
                            to: '',
                        },
                        {
                            title: 'Bananas',
                            to: '',
                        },
                        {
                            title: 'Tropical Fruits',
                            to: '',
                        },
                        {
                            title: 'Stone Fruits',
                            to: '',
                        },
                        {
                            title: 'Grapes',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Rice',
                    icon1: images.cateRootVegetable1,
                    icon2: images.category23,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Snacks',
                    icon1: images.category21,
                    icon2: images.category24,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Snacks',
                    icon1: images.category21,
                    icon2: images.category24,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Fruits',
                    icon1: images.cateVegetable1,
                    icon2: images.cateFruit2,
                    subMenu: [
                        {
                            title: 'Citrus Fruits',
                            to: '',
                        },
                        {
                            title: 'Berris',
                            to: '',
                        },
                        {
                            title: 'Apples and Pears',
                            to: '',
                        },
                        {
                            title: 'Bananas',
                            to: '',
                        },
                        {
                            title: 'Tropical Fruits',
                            to: '',
                        },
                        {
                            title: 'Stone Fruits',
                            to: '',
                        },
                        {
                            title: 'Grapes',
                            to: '',
                        },
                        {
                            title: 'Melons',
                            to: '',
                        },
                        {
                            title: 'Avocado',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Rice',
                    icon1: images.cateRootVegetable1,
                    icon2: images.category23,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Event & Campain',
            children: [
                {
                    cate: 'Brands',
                    icon1: images.cateFruit1,
                    icon2: images.category22,
                    subMenu: [
                        {
                            title: "Nature's Path (organic cereals and granola)",
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Fruits',
                    icon1: images.cateVegetable1,
                    icon2: images.cateFruit2,
                    subMenu: [
                        {
                            title: 'Citrus Fruits',
                            to: '',
                        },
                        {
                            title: 'Berris',
                            to: '',
                        },
                        {
                            title: 'Apples and Pears',
                            to: '',
                        },
                        {
                            title: 'Bananas',
                            to: '',
                        },
                        {
                            title: 'Tropical Fruits',
                            to: '',
                        },
                        {
                            title: 'Stone Fruits',
                            to: '',
                        },
                        {
                            title: 'Grapes',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Rice',
                    icon1: images.cateRootVegetable1,
                    icon2: images.category23,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Snacks',
                    icon1: images.category21,
                    icon2: images.category24,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Snacks',
                    icon1: images.category21,
                    icon2: images.category24,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Fruits',
                    icon1: images.cateVegetable1,
                    icon2: images.cateFruit2,
                    subMenu: [
                        {
                            title: 'Citrus Fruits',
                            to: '',
                        },
                        {
                            title: 'Berris',
                            to: '',
                        },
                        {
                            title: 'Apples and Pears',
                            to: '',
                        },
                        {
                            title: 'Bananas',
                            to: '',
                        },
                        {
                            title: 'Tropical Fruits',
                            to: '',
                        },
                        {
                            title: 'Stone Fruits',
                            to: '',
                        },
                        {
                            title: 'Grapes',
                            to: '',
                        },
                        {
                            title: 'Melons',
                            to: '',
                        },
                        {
                            title: 'Avocado',
                            to: '',
                        },
                    ],
                },
                {
                    cate: 'Rice',
                    icon1: images.cateRootVegetable1,
                    icon2: images.category23,
                    subMenu: [
                        {
                            title: 'White Rice',
                            to: '',
                        },
                        {
                            title: 'Brown Rice',
                            to: '',
                        },
                        {
                            title: 'Basmati Rice',
                            to: '',
                        },
                        {
                            title: 'Jasmine Rice',
                            to: '',
                        },
                        {
                            title: 'Wild Rice',
                            to: '',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Others',
            children: [
                {
                    cate: 'Tool & Calulators',
                    icon1: images.cateFruit1,
                    icon2: images.category25,
                    subMenu: [
                        {
                            title: 'BMI (Body Mass Index)',
                            to: '',
                        },
                        {
                            title: 'How Many Calories Should You Eat?',
                            to: '',
                        },
                    ],
                },
            ],
        },
    ];

    const FRUITS_AND_VEGETABLES = [
        {
            subCate: 'Fruits',
            icon1: images.cateFruit1,
            icon2: images.cateFruit2,
            to: '',
            children: [
                {
                    title: 'Citrus Fruits',
                    to: '',
                },
                {
                    title: 'Berris',
                    to: '',
                },
                {
                    title: 'Apples and Pears',
                    to: '',
                },
                {
                    title: 'Bananas',
                    to: '',
                },
                {
                    title: 'Tropical Fruits',
                    to: '',
                },
                {
                    title: 'Stone Fruits',
                    to: '',
                },
                {
                    title: 'Grapes',
                    to: '',
                },
                {
                    title: 'Melons',
                    to: '',
                },
                {
                    title: 'Avocado',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Vegetables',
            icon1: images.cateVegetable1,
            icon2: images.cateFruit2,
            to: '',
            children: [
                {
                    title: 'Leafy Greens',
                    to: '',
                },
                {
                    title: 'Cruciferous Vegetables',
                    to: '',
                },

                {
                    title: 'Bell Peppers',
                    to: '',
                },

                {
                    title: 'Beans and Peas',
                    to: '',
                },
                {
                    title: 'Cucumbers and Zucchinis',
                    to: '',
                },
                {
                    title: 'Onions and Garlic',
                    to: '',
                },
                {
                    title: 'Squash',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Root Vegetables',
            icon1: images.cateRootVegetable1,
            icon2: images.cateFruit2,
            to: '',

            children: [
                {
                    title: 'Tomatos',
                    to: '',
                },
                {
                    title: 'Sweet Tomatos',
                    to: '',
                },
                {
                    title: 'Carrots',
                    to: '',
                },
                {
                    title: 'Beets',
                    to: '',
                },
                {
                    title: 'Yuca (Cassava)',
                    to: '',
                },
                {
                    title: 'Turmaric',
                    to: '',
                },
            ],
        },
    ];

    const PROTEIN_FOODS = [
        {
            subCate: 'Fruits',
            icon1: images.cateFruit1,
            icon2: images.cateFruit2,
            to: '',
            children: [
                {
                    title: 'Citrus Fruits',
                    to: '',
                },
                {
                    title: 'Berris',
                    to: '',
                },
                {
                    title: 'Apples and Pears',
                    to: '',
                },
                {
                    title: 'Bananas',
                    to: '',
                },
                {
                    title: 'Tropical Fruits',
                    to: '',
                },
                {
                    title: 'Stone Fruits',
                    to: '',
                },
                {
                    title: 'Grapes',
                    to: '',
                },
                {
                    title: 'Melons',
                    to: '',
                },
                {
                    title: 'Avocado',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Vegetables',
            icon1: images.cateVegetable1,
            icon2: images.cateFruit2,
            to: '',
            children: [
                {
                    title: 'Leafy Greens',
                    to: '',
                },
                {
                    title: 'Cruciferous Vegetables',
                    to: '',
                },

                {
                    title: 'Bell Peppers',
                    to: '',
                },

                {
                    title: 'Beans and Peas',
                    to: '',
                },
                {
                    title: 'Cucumbers and Zucchinis',
                    to: '',
                },
                {
                    title: 'Onions and Garlic',
                    to: '',
                },
                {
                    title: 'Squash',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Root Vegetables',
            icon1: images.cateRootVegetable1,
            icon2: images.cateFruit2,
            to: '',

            children: [
                {
                    title: 'Tomatos',
                    to: '',
                },
                {
                    title: 'Sweet Tomatos',
                    to: '',
                },
                {
                    title: 'Carrots',
                    to: '',
                },
                {
                    title: 'Beets',
                    to: '',
                },
                {
                    title: 'Yuca (Cassava)',
                    to: '',
                },
                {
                    title: 'Turmaric',
                    to: '',
                },
            ],
        },
    ];

    const GRAINS_AND_CEREALS = [
        {
            subCate: 'Rice',
            icon1: images.cateFruit1,
            icon2: images.cateWheat1,
            to: '',
            children: [
                {
                    title: 'White Rice',
                    to: '',
                },
                {
                    title: 'Brown Rice',
                    to: '',
                },
                {
                    title: 'Basmati Rice',
                    to: '',
                },
                {
                    title: 'Jasmine Rice',
                    to: '',
                },
                {
                    title: 'Wild Rice',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Wheat',
            icon1: images.cateVegetable1,
            icon2: images.cateWheat1,
            to: '',
            children: [
                {
                    title: 'Bread',
                    to: '',
                },
                {
                    title: 'Pasta',
                    to: '',
                },

                {
                    title: 'Cereals',
                    to: '',
                },

                {
                    title: 'Whole Wheat',
                    to: '',
                },
                {
                    title: 'Hard Wheat',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Cereals',
            icon1: images.cateRootVegetable1,
            icon2: images.cateWheat1,
            to: '',

            children: [
                {
                    title: 'Quinoa',
                    to: '',
                },
                {
                    title: 'Corn',
                    to: '',
                },
                {
                    title: 'Millet',
                    to: '',
                },
                {
                    title: 'Buckwheat',
                    to: '',
                },
                {
                    title: 'Soy',
                    to: '',
                },
            ],
        },
        {
            subCate: 'Oats',
            icon1: images.category21,
            icon2: images.cateWheat1,
            to: '',

            children: [
                {
                    title: 'Old-fashioned Oats',
                    to: '',
                },
                {
                    title: 'Granola Bars',
                    to: '',
                },
                {
                    title: 'Cookies',
                    to: '',
                },
            ],
        },
    ];

    const navigate = useNavigate();

    const [size, setSize] = useState(null);
    const [subCategoryActive, setSubCategoryActive] = useState(null);
    const scrollRef = useRef();

    const scrollToTop = () => {
        const scrollElement = scrollRef.current;

        scrollElement.scrollIntoView();
    };

    function isHidden(element) {
        if (!element) return true;

        if (window.getComputedStyle(element).display === 'none') {
            return true;
        }

        let parent = element.parentElement;
        while (parent) {
            if (window.getComputedStyle(parent).display === 'none') {
                return true;
            }
            parent = parent.parentElement;
        }

        return false;
    }

    function convertToUppercaseAndReplaceSpaces(inputString) {
        // Convert the string to uppercase
        const uppercaseString = inputString.toUpperCase();
        // Replace spaces with underscores
        const stringWithUnderscores = uppercaseString.replace(/ /g, '_');
        return stringWithUnderscores;
    }

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const calArrowPos = () => {
            if (isHidden($('.js-dropdown-list'))) return;

            const items = $$('.js-dropdown-list > li');

            items.forEach((item) => {
                const arrowPos = item.offsetLeft + item.offsetWidth / 2;
                setSize(arrowPos);
                item.style.setProperty('--arrow-left-pos', `${arrowPos}px`);
            });
        };
        function initJsToggle() {
            $$('.js-toggle').forEach((button) => {
                const target = button.getAttribute('toggle-target');
                if (!target) {
                    document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
                }
                button.onclick = () => {
                    if (!$(target)) {
                        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
                    }
                    const isHidden = $(target).classList.contains('hide');

                    requestAnimationFrame(() => {
                        $(target).classList.toggle('hide', !isHidden);
                        $(target).classList.toggle('show', isHidden);
                    });
                };
            });

            const links = $$('.js-dropdown-list > li > a');

            links.forEach((link) => {
                link.onclick = () => {
                    if (window.innerWidth > 991) return;
                    const item = link.closest('li');
                    item.classList.toggle('navbar-item--active');
                };
            });
        }

        calArrowPos();
        initJsToggle();

        if (window.innerWidth < 991) {
            setSubCategoryActive(null);
        } else {
            setSubCategoryActive('FRUITS_AND_VEGETABLES');
        }
    }, [size]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [subCategoryActive]);

    // window.addEventListener('template-loaded', initJsToggle);
    // window.addEventListener('resize', calArrowPos);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top-bar')}>
                    {/* More */}
                    <button className={cx('top-bar-more', 'js-toggle', 'd-none', 'd-lg-block')} toggle-target="#navbar">
                        <img className={cx('icon', 'more-icon')} alt="" src={images.moreIcon} />
                    </button>
                    {/* Logo */}
                    <div className={cx('logo')} onClick={() => navigate('/')}>
                        <img src={images.logo} alt="Healthy Food" className={cx('logo-img')} />
                        <h2 className={cx('logo-title')}>healthyfood</h2>
                    </div>

                    {/* Navbar */}
                    <nav id="navbar" className={cx('navbar', 'hide')}>
                        <button
                            className={cx('nav-bar-close-btn', 'js-toggle', 'icon', 'd-none', 'd-lg-block')}
                            toggle-target="#navbar"
                        >
                            <img src={images.arrowLeftIcon} alt="" />
                        </button>

                        <a href="#!" className={cx('nav-btn', 'd-none', 'd-md-flex')}>
                            <img src={images.cartIcon} alt="" className={cx('icon', 'nav-btn-icon')} />
                            <span className={cx('nav-btn-title')}>Cart</span>
                            <span className={cx('nav-btn-qnt')}>3</span>
                        </a>
                        <a href="#!" className={cx('nav-btn', 'd-none', 'd-md-flex')}>
                            <img src={images.heartIcon} alt="" className={cx('icon', 'nav-btn-icon')} />
                            <span className={cx('nav-btn-title')}>Favourire</span>
                            <span className={cx('nav-btn-qnt')}>6</span>
                        </a>

                        <ul className={cx('list', 'js-dropdown-list')}>
                            {NAVBAR_lIST.map((item, index) => (
                                <li key={index} className={cx('navbar-item')}>
                                    <a href="#!" className={cx('navbar-link')}>
                                        <span>{item.title}</span>
                                        <img className={cx('arrow-icon', 'icon')} alt="" src={images.arrowIcon} />
                                    </a>
                                    <div className={cx('drop-down')}>
                                        <div className={cx('inner')}>
                                            {item.title === 'Nutrition' ? (
                                                <>
                                                    <div className={cx('top-menu')}>
                                                        <div className={cx('top-menu-main')}>
                                                            <div className={cx('menu-column')}>
                                                                <div className={cx('menu-column-icon', 'd-lg-none')}>
                                                                    <img
                                                                        src={images.category11}
                                                                        alt=""
                                                                        className={cx('menu-icon')}
                                                                    />
                                                                    <img
                                                                        src={images.category12}
                                                                        alt=""
                                                                        className={cx('menu-icon', 'icon')}
                                                                    />
                                                                </div>
                                                                <div className={cx('menu-column-content')}>
                                                                    <h2
                                                                        className={cx(
                                                                            'menu-column-heading',
                                                                            'd-lg-none',
                                                                        )}
                                                                    >
                                                                        All Departments
                                                                    </h2>
                                                                    {item.subMenu && (
                                                                        <ul
                                                                            className={cx('menu-column-list')}
                                                                            ref={scrollRef}
                                                                        >
                                                                            {item.subMenu.map((sub, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    className={
                                                                                        subCategoryActive ===
                                                                                        convertToUppercaseAndReplaceSpaces(
                                                                                            sub.cate,
                                                                                        )
                                                                                            ? cx(
                                                                                                  'menu-column-item',
                                                                                                  'active',
                                                                                              )
                                                                                            : cx('menu-column-item')
                                                                                    }
                                                                                >
                                                                                    <span
                                                                                        className={cx(
                                                                                            'menu-column-link',
                                                                                        )}
                                                                                        onClick={() => {
                                                                                            setSubCategoryActive(
                                                                                                convertToUppercaseAndReplaceSpaces(
                                                                                                    sub.cate,
                                                                                                ),
                                                                                            );
                                                                                            scrollToTop();
                                                                                        }}
                                                                                    >
                                                                                        {sub.cate}
                                                                                    </span>

                                                                                    {subCategoryActive ===
                                                                                        'FRUITS_AND_VEGETABLES' && (
                                                                                        <div className={cx('sub-menu')}>
                                                                                            {FRUITS_AND_VEGETABLES.map(
                                                                                                (
                                                                                                    subCategory,
                                                                                                    index,
                                                                                                ) => (
                                                                                                    <div
                                                                                                        className={cx(
                                                                                                            'sub-menu-column',
                                                                                                        )}
                                                                                                        key={index}
                                                                                                    >
                                                                                                        <div
                                                                                                            className={cx(
                                                                                                                'menu-column',
                                                                                                            )}
                                                                                                        >
                                                                                                            <div
                                                                                                                className={cx(
                                                                                                                    'menu-column-icon',
                                                                                                                )}
                                                                                                            >
                                                                                                                <img
                                                                                                                    src={
                                                                                                                        subCategory.icon1
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                                    className={cx(
                                                                                                                        'menu-icon',
                                                                                                                    )}
                                                                                                                />
                                                                                                                <img
                                                                                                                    src={
                                                                                                                        subCategory.icon2
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                                    className={cx(
                                                                                                                        'menu-icon',
                                                                                                                        'icon',
                                                                                                                    )}
                                                                                                                />
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className={cx(
                                                                                                                    'menu-column-content',
                                                                                                                )}
                                                                                                            >
                                                                                                                <h2
                                                                                                                    className={cx(
                                                                                                                        'menu-column-heading',
                                                                                                                    )}
                                                                                                                >
                                                                                                                    {
                                                                                                                        subCategory.subCate
                                                                                                                    }
                                                                                                                </h2>
                                                                                                                {subCategory.children && (
                                                                                                                    <ul
                                                                                                                        className={cx(
                                                                                                                            'menu-column-list',
                                                                                                                        )}
                                                                                                                    >
                                                                                                                        {subCategory.children.map(
                                                                                                                            (
                                                                                                                                item,
                                                                                                                                index,
                                                                                                                            ) => (
                                                                                                                                <li
                                                                                                                                    className={cx(
                                                                                                                                        'menu-column-item',
                                                                                                                                    )}
                                                                                                                                    key={
                                                                                                                                        index
                                                                                                                                    }
                                                                                                                                >
                                                                                                                                    <a
                                                                                                                                        href="#!"
                                                                                                                                        className={cx(
                                                                                                                                            'menu-column-link',
                                                                                                                                        )}
                                                                                                                                    >
                                                                                                                                        {
                                                                                                                                            item.title
                                                                                                                                        }
                                                                                                                                    </a>
                                                                                                                                </li>
                                                                                                                            ),
                                                                                                                        )}
                                                                                                                    </ul>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ),
                                                                                            )}
                                                                                        </div>
                                                                                    )}
                                                                                    {subCategoryActive ===
                                                                                        'GRAINS_AND_CEREALS' && (
                                                                                        <div className={cx('sub-menu')}>
                                                                                            {GRAINS_AND_CEREALS.map(
                                                                                                (
                                                                                                    subCategory,
                                                                                                    index,
                                                                                                ) => (
                                                                                                    <div
                                                                                                        className={cx(
                                                                                                            'sub-menu-column',
                                                                                                        )}
                                                                                                        key={index}
                                                                                                    >
                                                                                                        <div
                                                                                                            className={cx(
                                                                                                                'menu-column',
                                                                                                            )}
                                                                                                        >
                                                                                                            <div
                                                                                                                className={cx(
                                                                                                                    'menu-column-icon',
                                                                                                                )}
                                                                                                            >
                                                                                                                <img
                                                                                                                    src={
                                                                                                                        subCategory.icon1
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                                    className={cx(
                                                                                                                        'menu-icon',
                                                                                                                    )}
                                                                                                                />
                                                                                                                <img
                                                                                                                    src={
                                                                                                                        subCategory.icon2
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                                    className={cx(
                                                                                                                        'menu-icon',
                                                                                                                        'icon',
                                                                                                                    )}
                                                                                                                />
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className={cx(
                                                                                                                    'menu-column-content',
                                                                                                                )}
                                                                                                            >
                                                                                                                <h2
                                                                                                                    className={cx(
                                                                                                                        'menu-column-heading',
                                                                                                                    )}
                                                                                                                >
                                                                                                                    {
                                                                                                                        subCategory.subCate
                                                                                                                    }
                                                                                                                </h2>
                                                                                                                {subCategory.children && (
                                                                                                                    <ul
                                                                                                                        className={cx(
                                                                                                                            'menu-column-list',
                                                                                                                        )}
                                                                                                                    >
                                                                                                                        {subCategory.children.map(
                                                                                                                            (
                                                                                                                                item,
                                                                                                                                index,
                                                                                                                            ) => (
                                                                                                                                <li
                                                                                                                                    className={cx(
                                                                                                                                        'menu-column-item',
                                                                                                                                    )}
                                                                                                                                    key={
                                                                                                                                        index
                                                                                                                                    }
                                                                                                                                >
                                                                                                                                    <a
                                                                                                                                        href="#!"
                                                                                                                                        className={cx(
                                                                                                                                            'menu-column-link',
                                                                                                                                        )}
                                                                                                                                    >
                                                                                                                                        {
                                                                                                                                            item.title
                                                                                                                                        }
                                                                                                                                    </a>
                                                                                                                                </li>
                                                                                                                            ),
                                                                                                                        )}
                                                                                                                    </ul>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ),
                                                                                            )}
                                                                                        </div>
                                                                                    )}

                                                                                    {subCategoryActive ===
                                                                                        'PROTEIN_FOODS' && (
                                                                                        <div className={cx('sub-menu')}>
                                                                                            {PROTEIN_FOODS.map(
                                                                                                (
                                                                                                    subCategory,
                                                                                                    index,
                                                                                                ) => (
                                                                                                    <div
                                                                                                        className={cx(
                                                                                                            'sub-menu-column',
                                                                                                        )}
                                                                                                        key={index}
                                                                                                    >
                                                                                                        <div
                                                                                                            className={cx(
                                                                                                                'menu-column',
                                                                                                            )}
                                                                                                        >
                                                                                                            <div
                                                                                                                className={cx(
                                                                                                                    'menu-column-icon',
                                                                                                                )}
                                                                                                            >
                                                                                                                <img
                                                                                                                    src={
                                                                                                                        subCategory.icon1
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                                    className={cx(
                                                                                                                        'menu-icon',
                                                                                                                    )}
                                                                                                                />
                                                                                                                <img
                                                                                                                    src={
                                                                                                                        subCategory.icon2
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                                    className={cx(
                                                                                                                        'menu-icon',
                                                                                                                        'icon',
                                                                                                                    )}
                                                                                                                />
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className={cx(
                                                                                                                    'menu-column-content',
                                                                                                                )}
                                                                                                            >
                                                                                                                <h2
                                                                                                                    className={cx(
                                                                                                                        'menu-column-heading',
                                                                                                                    )}
                                                                                                                >
                                                                                                                    {
                                                                                                                        subCategory.subCate
                                                                                                                    }
                                                                                                                </h2>
                                                                                                                {subCategory.children && (
                                                                                                                    <ul
                                                                                                                        className={cx(
                                                                                                                            'menu-column-list',
                                                                                                                        )}
                                                                                                                    >
                                                                                                                        {subCategory.children.map(
                                                                                                                            (
                                                                                                                                item,
                                                                                                                                index,
                                                                                                                            ) => (
                                                                                                                                <li
                                                                                                                                    className={cx(
                                                                                                                                        'menu-column-item',
                                                                                                                                    )}
                                                                                                                                    key={
                                                                                                                                        index
                                                                                                                                    }
                                                                                                                                >
                                                                                                                                    <a
                                                                                                                                        href="#!"
                                                                                                                                        className={cx(
                                                                                                                                            'menu-column-link',
                                                                                                                                        )}
                                                                                                                                    >
                                                                                                                                        {
                                                                                                                                            item.title
                                                                                                                                        }
                                                                                                                                    </a>
                                                                                                                                </li>
                                                                                                                            ),
                                                                                                                        )}
                                                                                                                    </ul>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ),
                                                                                            )}
                                                                                        </div>
                                                                                    )}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className={cx('top-menu')}>
                                                        <div className={cx('sub-menu', 'not-main')}>
                                                            {item.children &&
                                                                item.children.map((subItem, index) => (
                                                                    <>
                                                                        <div className={cx('menu-column')} key={index}>
                                                                            <div className={cx('menu-column-icon')}>
                                                                                <img
                                                                                    src={subItem.icon1}
                                                                                    alt=""
                                                                                    className={cx('menu-icon')}
                                                                                />
                                                                                <img
                                                                                    src={subItem.icon2}
                                                                                    alt=""
                                                                                    className={cx('menu-icon', 'icon')}
                                                                                />
                                                                            </div>
                                                                            <div className={cx('menu-column-content')}>
                                                                                <h2
                                                                                    className={cx(
                                                                                        'menu-column-heading',
                                                                                    )}
                                                                                >
                                                                                    {subItem.cate}
                                                                                </h2>
                                                                                <ul className={cx('menu-column-list')}>
                                                                                    {subItem.subMenu.map(
                                                                                        (item, index) => (
                                                                                            <li
                                                                                                key={index}
                                                                                                className={cx(
                                                                                                    'menu-column-item',
                                                                                                )}
                                                                                            >
                                                                                                <a
                                                                                                    href="#!"
                                                                                                    className={cx(
                                                                                                        'menu-column-link',
                                                                                                    )}
                                                                                                >
                                                                                                    {item.title}
                                                                                                </a>
                                                                                            </li>
                                                                                        ),
                                                                                    )}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={cx('nav-bar-overlay', 'js-toggle')} toggle-target="#navbar"></div>

                    {/* Actions */}

                    <div className={cx('top-action')}>
                        <div className={cx('top-action-group', 'd-md-none')}>
                            <button className={cx('btn', 'd-lg-none')}>
                                <img src={images.searchIcon} alt="" className={cx('action-icon', 'icon')} />
                            </button>
                        </div>
                        <button className={cx('btn', 'btn-text')} onClick={() => navigate('/login')}>
                            Sign In
                        </button>
                        <button className={cx('btn', 'btn-primary')} onClick={() => navigate('/sign-up')}>
                            Sign Up
                        </button>

                        {/* <div className={cx('top-action-group', 'd-md-none')}>
                            <button className={cx('btn')}>
                                <img src={images.heartIcon} alt="" className={cx('action-icon', 'icon')} />
                                <span className={cx('action-title')}>03</span>
                            </button>
                            <div className={cx('separate')}></div>
                            <button className={cx('btn')}>
                                <img src={images.cartIcon} alt="" className={cx('action-icon', 'icon')} />
                                <span className={cx('action-title')}>$65.42</span>
                            </button>
                        </div>
                        <div className={cx('top-action-user')}>
                            <img src={images.avatar} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
