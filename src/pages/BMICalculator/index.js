import classNames from 'classnames/bind';
import styles from './BMICalculator.module.scss';
// import Speedometer from '~/components/Speedometer';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BMICalculator() {
    // const [speed, setSpeed] = useState(0); // Set the initial speed
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
                            <span className={cx('active')}>Your BMI</span>
                            <span>Your Calories in Day</span>
                            <span>Your Food & Exercise Tips</span>
                        </div>
                        <p className={cx('title-desc')}>Your BMI and Healthy Weight Range</p>
                        <p className={cx('content-desc')}>
                            There's no "perfect weight" that fits everyone. BMI, or body mass index, measures how
                            healthy your weight is based on how tall you are. It gives you a clue to your risk for
                            weight-related health problems.
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
        </div>
    );
}

export default BMICalculator;
