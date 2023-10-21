import classNames from 'classnames/bind';
import styles from './BMICalculator.module.scss';
import images from '~/assets/images';
import { useState } from 'react';
import { useEffect } from 'react';
import BackToTop from '~/components/BackToTop';

const cx = classNames.bind(styles);

function BMICalculator() {
    const [typeCalculate, settypeCalculate] = useState('BMI');

    const [showSelectGender, setShowSelectGender] = useState(false);
    const [gender, setGender] = useState(null);

    const [showSelectActivity, setShowSelectActivity] = useState(false);
    const [activity, setActivity] = useState(null);

    const toggeSelectActivity = () => {
        setShowSelectActivity((pre) => !pre);
    };

    const toggeleSelecGender = () => {
        setShowSelectGender((pre) => !pre);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <h2>BMI Calculator</h2>
                        <div className={cx('group-icon')}>
                            <img className={cx('icon')} alt="" src={images.bmiIcon1} />
                            <img className={cx('icon')} alt="" src={images.bmiIcon2} />
                            <img src={images.bmiIcon3} className={cx('icon')} alt="" />
                            <img className={cx('icon')} alt="" src={images.bmiIcon4} />
                            <img className={cx('icon')} alt="" src={images.bmiIcon5} />
                        </div>
                        <div className={cx('actions')}>
                            <span
                                className={typeCalculate === 'BMI' ? cx('active') : cx('')}
                                onClick={() => settypeCalculate('BMI')}
                            >
                                Your BMI
                            </span>
                            <span
                                className={typeCalculate === 'CALORIES' ? cx('active') : cx('')}
                                onClick={() => settypeCalculate('CALORIES')}
                            >
                                Your Calories in Day
                            </span>
                            <span
                                className={typeCalculate === 'RECOMMEND' ? cx('active') : cx('')}
                                onClick={() => settypeCalculate('RECOMMEND')}
                            >
                                Your Food & Exercise Tips
                            </span>
                        </div>
                        <>
                            {typeCalculate === 'BMI' && (
                                <div>
                                    <p className={cx('title-desc')}>Your BMI and Healthy Weight Range</p>
                                    <p className={cx('content-desc')}>
                                        There's no "perfect weight" that fits everyone. BMI, or body mass index,
                                        measures how healthy your weight is based on how tall you are. It gives you a
                                        clue to your risk for weight-related health problems.
                                    </p>

                                    <form onSubmit={(e) => e.preventDefault()} className={cx('form')}>
                                        <div className={cx('row')}>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="height">
                                                    Height (cm)
                                                </label>
                                                <input
                                                    className={cx('form-input')}
                                                    type="text"
                                                    name="height"
                                                    id="height"
                                                    placeholder="163"
                                                />
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="weight">
                                                    Weight (kg)
                                                </label>
                                                <input
                                                    className={cx('form-input')}
                                                    type="text"
                                                    name="weight"
                                                    id="weight"
                                                    placeholder="50"
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('btn-group')}>
                                            <button>Clear</button>
                                            <button type="submit">Calculate</button>
                                        </div>
                                    </form>
                                    <p className={cx('title-desc')}>BMI Introduction</p>
                                    <p className={cx('content-desc')}>
                                        The Body Mass Index (BMI) Calculator can be used to calculate BMI value and
                                        corresponding weight status while taking age into consideration. Use the "Metric
                                        Units" tab for the International System of Units or the "Other Units" tab to
                                        convert units into either US or metric units. Note that the calculator also
                                        computes the Ponderal Index in addition to BMI, both of which are discussed
                                        below in detail.
                                    </p>
                                    <p className={cx('title-desc')}>BMI table for adults</p>
                                    <p className={cx('content-desc')}>
                                        This is the World Health Organization's (WHO) recommended body weight based on
                                        BMI values for adults. It is used for both men and women, age 20 or older.
                                    </p>
                                    <div className={cx('table')}>
                                        <span className={cx('table-heading')}>Classification</span>
                                        <span className={cx('table-heading')}>BMI Range (kg/m2)</span>
                                        <span className={cx('range')}>Severe Thinness</span>
                                        <span className={cx('number')}>under 16</span>
                                        <span className={cx('range-normal')}>Morderate Thinness</span>
                                        <span className={cx('number')}>16 - 17</span>
                                        <span className={cx('range-normal')}>Mid Thinness</span>
                                        <span className={cx('number')}>17 - 18.5</span>
                                        <span className={cx('range-normal')}>Normal</span>
                                        <span className={cx('number')}>18.5 - 25</span>
                                        <span className={cx('range')}>Overweight</span>
                                        <span className={cx('number')}>25 - 30</span>
                                        <span className={cx('range')}>Obese Class I</span>
                                        <span className={cx('number')}>30 - 35</span>
                                        <span className={cx('range')}>Obese Class II</span>
                                        <span className={cx('number')}>35 - 40</span>
                                        <span className={cx('range')}>Obese class III</span>
                                        <span className={cx('number')}>larger 40</span>
                                    </div>
                                </div>
                            )}

                            {typeCalculate === 'CALORIES' && (
                                <div>
                                    <p className={cx('title-desc')}>How to use this calculator</p>
                                    <p className={cx('content-desc')}>
                                        This calculator uses your age, size, sex, and activity level to estimate the
                                        number of calories you should eat per day to maintain your weight. You can
                                        adjust this number based on your goals if you’re trying to gain or lose weight.
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Keep in mind that this tool only provides general guidance, as activity levels
                                        and many other factors influence your daily calorie needs. Thus, this calculator
                                        will likely provide a number that’s close to your calorie needs, but it’s not a
                                        perfect tool.
                                    </p>
                                    <form onSubmit={(e) => e.preventDefault()} className={cx('form')}>
                                        <div className={cx('row')}>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="height">
                                                    Height (cm)
                                                </label>
                                                <input
                                                    className={cx('form-input')}
                                                    type="text"
                                                    name="height"
                                                    id="height"
                                                    placeholder="163"
                                                />
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="weight">
                                                    Weight (kg)
                                                </label>
                                                <input
                                                    className={cx('form-input')}
                                                    type="text"
                                                    name="weight"
                                                    id="weight"
                                                    placeholder="50"
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="age">
                                                    Age
                                                </label>
                                                <input
                                                    className={cx('form-input')}
                                                    type="text"
                                                    name="age"
                                                    id="age"
                                                    placeholder="20"
                                                />
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="gender">
                                                    Gender
                                                </label>
                                                <div className={cx('select-wrap-gender')} onClick={toggeleSelecGender}>
                                                    {gender ? gender : 'Select Gender'}
                                                    <img
                                                        className={cx('icon', 'select-icon')}
                                                        alt=""
                                                        src={images.arrowIcon}
                                                    />
                                                    <div
                                                        className={
                                                            showSelectGender === true
                                                                ? cx('select-items', 'active')
                                                                : cx('select-items')
                                                        }
                                                    >
                                                        <span onClick={() => setGender('Male')}>Male</span>
                                                        <span onClick={() => setGender('Female')}>Female</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('row')}>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')} htmlFor="activity">
                                                    Activity
                                                </label>
                                                <div
                                                    className={cx('select-wrap-activity')}
                                                    onClick={toggeSelectActivity}
                                                >
                                                    {activity ? activity : 'Select Activity'}
                                                    <img
                                                        className={cx('icon', 'select-icon')}
                                                        alt=""
                                                        src={images.arrowIcon}
                                                    />
                                                    <div
                                                        className={
                                                            showSelectActivity === true
                                                                ? cx('select-items', 'active')
                                                                : cx('select-items')
                                                        }
                                                    >
                                                        <span onClick={() => setActivity('Sedentary lifestyle')}>
                                                            Sedentary lifestyle
                                                        </span>
                                                        <span onClick={() => setActivity('Slightly active')}>
                                                            Slightly active
                                                        </span>
                                                        <span onClick={() => setActivity('Moderately active')}>
                                                            Moderately active
                                                        </span>
                                                        <span onClick={() => setActivity('Active lifestyle')}>
                                                            Active lifestyle
                                                        </span>
                                                        <span onClick={() => setActivity('Very active lifestyle')}>
                                                            Very active lifestyle
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('btn-group')}>
                                            <button>Clear</button>
                                            <button type="submit">Calculate</button>
                                        </div>
                                    </form>

                                    <p className={cx('title-desc')}>How many calories should you eat on average?</p>
                                    <p className={cx('content-desc')}>
                                        Still, it’s important to ensure that you’re consuming enough nutrients, even if
                                        you’re trying to lose weight, or you risk developing nutritional deficiencies
                                        and metabolic changes that make long-term weight maintenance difficult
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Here’s a closer look at how many calories you should eat based on
                                        recommendations from the U.S. Department of Agriculture’s (USDA’s) 2020–2025
                                        Dietary Guidelines for Americans
                                    </p>

                                    <p className={cx('title-desc')}>People assigned female at birth (AFAB)</p>

                                    <div className={cx('table')}>
                                        <span className={cx('table-heading')}>Age</span>
                                        <span className={cx('table-heading')}>Daily calorie requirements</span>
                                        <span className={cx('range-normal')}>19 – 30 years</span>
                                        <span className={cx('number')}>1,800 – 2,400 calories</span>
                                        <span className={cx('range-normal')}>31 – 60 years</span>
                                        <span className={cx('number')}>1,600 – 2,200 calories</span>
                                        <span className={cx('range-normal')}>61+ years</span>
                                        <span className={cx('number')}>1,600 – 2,000 calories</span>
                                    </div>

                                    <p className={cx('title-desc')}>People assigned male at birth (AMAB)</p>

                                    <div className={cx('table')}>
                                        <span className={cx('table-heading')}>Age</span>
                                        <span className={cx('table-heading')}>Daily calorie requirements</span>
                                        <span className={cx('range')}>19 – 30 years</span>
                                        <span className={cx('number')}>2,400 – 3,000 calories</span>
                                        <span className={cx('range')}>31 – 60 years</span>
                                        <span className={cx('number')}>2,200 – 3,000 calories</span>
                                        <span className={cx('range')}>61+ years</span>
                                        <span className={cx('number')}>2,000 – 2,600 calories</span>
                                    </div>

                                    <div className={cx('summary')}>
                                        <h4>Summary</h4>
                                        <p>
                                            Calories are units that measure the energy content of foods and beverages.
                                            While many factors can influence weight loss, you generally need to eat
                                            fewer calories than you burn to lose weight.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {typeCalculate === 'RECOMMEND' && (
                                <div>
                                    <p className={cx('title-desc')}>How To Reduce Calorie Intake</p>
                                    <p className={cx('content-desc')}>
                                        Although decreasing the number of calories you consume can be effective for
                                        weight loss, cutting calories without considering which foods you eat isn’t a
                                        sustainable way to lose weight.
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Here a five strategies that may help you lose weight.
                                    </p>
                                    <p className={cx('sub-title')}>1. Eat more protein</p>
                                    <p className={cx('content-desc')}>
                                        Protein may also help fight cravings. According to some research, high protein
                                        snacks help enhance feelings of fullness while decreasing hunger and appetite.
                                    </p>
                                    <p className={cx('content-desc')}>
                                        In addition to promoting weight loss, some research suggests that maintaining a
                                        high protein diet may prevent or reduce weight regain and help maintain muscle
                                        mass
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Therefore, if you want to achieve long lasting, sustainable weight loss,
                                        consider increasing your protein intake by eating more eggs, meat, poultry,
                                        tofu, nuts, seeds, or legumes
                                    </p>
                                    <p className={cx('sub-title')}>2. Limit sugary drinks</p>
                                    <p className={cx('content-desc')}>
                                        The harmful effects of sugar also go far beyond weight gain. In fact, added
                                        sugar may contribute to other health issues, including heart disease, liver
                                        problems, and type 2 diabetes
                                    </p>
                                    <p className={cx('sub-title')}>3. Drink more water</p>
                                    <p className={cx('content-desc')}>
                                        One thing you can do for your health is to drink more water.
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Adequate hydration is associated with improved brain health and weight
                                        management, as well as a reduced kidney stone risk
                                    </p>
                                    <p className={cx('content-desc')}>
                                        When combined with a healthy diet, drinking more water — especially before meals
                                        — appears helpful if you need to lose weight.
                                    </p>
                                    <p className={cx('sub-title')}>5. Exercise</p>
                                    <p className={cx('content-desc')}>
                                        Cardio exercises, such as walking, swimming, or jogging, are also important —
                                        both for increasing weight loss and supporting overall health
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Additionally, exercise has a variety of other benefits that go beyond weight
                                        loss, such as increased longevity, enhanced energy levels, improved mental
                                        health, and a decreased risk of chronic disease
                                    </p>
                                    <p className={cx('sub-title')}>
                                        5. Reduce your intake of refined carbs and ultra-processed foods
                                    </p>
                                    <p className={cx('content-desc')}>
                                        The term “refined carbs” refers to grains that have lost their bran and germ,
                                        including white bread, pasta, crackers, and white rice. It also includes sugar
                                        and other sweeteners.
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Refined grains typically lack fiber, which supports weight loss by decreasing
                                        your appetite and increasing feelings of fullness
                                    </p>
                                    <p className={cx('content-desc')}>
                                        Eating fewer refined carbs may promote weight loss by altering levels of
                                        specific hormones that regulate your appetite, such as peptide YY (30Trusted
                                        Source). It’s also best to avoid ultra-processed foods.
                                    </p>
                                    <div className={cx('summary')}>
                                        <h4>Summary</h4>
                                        <p>
                                            Eating more protein, exercising, staying hydrated, and limiting your intake
                                            of refined carbs and sugary beverages are a few simple ways to decrease your
                                            daily calorie intake.
                                        </p>
                                    </div>

                                    <p className={cx('title-desc')}>A few basic weight loss tips</p>
                                    <p className={cx('content-desc')}>
                                        In addition to cutting calories, there are several steps you can take to lose
                                        weight in a sustainable, long lasting manner:
                                    </p>
                                    <p className={cx('sub-title')}>Practice mindful eating: </p>
                                    <p className={cx('content-desc')}>
                                        Mindful eating can help reduce food cravings and promote long-term weight loss
                                    </p>
                                    <p className={cx('sub-title')}>Eat more fruits and vegetables: </p>
                                    <p className={cx('content-desc')}>
                                        Fruits and veggies are low in calories but high in fiber, which makes them ideal
                                        for weight loss
                                    </p>
                                    <p className={cx('sub-title')}>Stock up on healthy foods:</p>
                                    <p className={cx('content-desc')}>
                                        Following a healthy diet is much more challenging when you have a kitchen full
                                        of processed foods. Make sure you have healthy snacks and foods on hand.
                                    </p>

                                    <div className={cx('summary')}>
                                        <h4>Summary</h4>
                                        <p>
                                            In addition to decreasing your daily calorie intake, the tips outlined above
                                            may support long-term weight loss.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </>

                        <div className={cx('glossary')}>
                            <p className={cx('title-desc')}>Glossary</p>
                            <div className={cx('row')}>
                                <div className={cx('column')}>
                                    <div className={cx('wrap-icon')}>
                                        <img className={cx('icon')} alt="" src={images.bmiIcon1} />
                                    </div>
                                    <div className={cx('info')}>
                                        <p className={cx('info-heading')}>BMI</p>
                                        <p className={cx('info-desc')}>
                                            A number doctors use to help judge your risk of illness. It doesn't tell you
                                            how much body fat you have.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('column')}>
                                    <div className={cx('wrap-icon')}>
                                        <img className={cx('icon')} alt="" src={images.bmiIcon2} />
                                    </div>
                                    <div className={cx('info')}>
                                        <p className={cx('info-heading')}>Daily Calorie Target</p>
                                        <p className={cx('info-desc')}>
                                            The net number of calories your body needs to meet your weight goal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('column')}>
                                    <div className={cx('wrap-icon')}>
                                        <img className={cx('icon')} alt="" src={images.bmiIcon3} />
                                    </div>
                                    <div className={cx('info')}>
                                        <p className={cx('info-heading')}>Waist-to-Height Ratio</p>
                                        <p className={cx('info-desc')}>
                                            Helps describe your body shape and could warn of health problems.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('column')}>
                                    <div className={cx('wrap-icon')}>
                                        <img className={cx('icon')} alt="" src={images.bmiIcon4} />
                                    </div>
                                    <div className={cx('info')}>
                                        <p className={cx('info-heading')}>Target Heart Rate</p>
                                        <p className={cx('info-desc')}>
                                            How fast your heart should beat when you're getting a good workout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('column')}>
                                    <div className={cx('wrap-icon')}>
                                        <img className={cx('icon')} alt="" src={images.bmiIcon5} />
                                    </div>
                                    <div className={cx('info')}>
                                        <p className={cx('info-heading')}>Metabolism</p>
                                        <p className={cx('info-desc')}>
                                            The process in your body that turns calories into energy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <h4 className={cx('right-heading')}>Today on Healthy Food</h4>
                        <div className={cx('list-suggest')}>
                            <div className={cx('item-suggest')}>
                                <img
                                    alt=""
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723465873-850G5DM2SB5UH3LOFAWA/DJI_0111.jpg?format=1500w"
                                />
                                <p>Find out what your number is and what it means.</p>
                            </div>
                            <div className={cx('item-suggest')}>
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723529325-4Y2AO3H1QV7NNT9GEN0U/_R3O4133.jpg?format=1500w"
                                    alt=""
                                />
                                <p>Find out what your number is and what it means.</p>
                            </div>

                            <div className={cx('item-suggest')}>
                                <img
                                    alt=""
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723647222-G1F451GHWWZ37XYHSHR1/_R3O3866.jpg?format=1500w"
                                />
                                <p>Find out what your number is and what it means.</p>
                            </div>

                            <div className={cx('item-suggest')}>
                                <img
                                    alt=""
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669732048332-5IE6FFXOSTVYPKT5MWPC/_R3O4618.jpg?format=1500w"
                                />
                                <p>Find out what your number is and what it means.</p>
                            </div>
                            <div className={cx('item-suggest')}>
                                <img
                                    alt=""
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1669723529325-4Y2AO3H1QV7NNT9GEN0U/_R3O4133.jpg?format=1500w"
                                />
                                <p>Find out what your number is and what it means.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BackToTop />
        </div>
    );
}

export default BMICalculator;
