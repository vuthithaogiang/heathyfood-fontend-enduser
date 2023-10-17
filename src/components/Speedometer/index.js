// Speedometer.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Speedometer.module.scss';

const cx = classNames.bind(styles);

const Speedometer = ({ speed }) => {
    const maxSpeed = 60; // Set your maximum speed here
    const rotation = -90 + (speed / maxSpeed) * 180;

    // Function to define background color based on speed range
    const getBackgroundColor = (speed) => {
        if (speed <= 25) {
            return '#67B044';
        } else if (speed <= 35) {
            return 'red';
        } else {
            return 'black';
        }
    };
    const colorClass = getBackgroundColor(speed);

    return (
        <div className={cx('speedometer', colorClass)}>
            <div className={cx('half-circle')}>
                <div
                    className={cx('gradient-background')}
                    style={{
                        borderColor: `${colorClass}`,
                    }}
                ></div>
                <div
                    className={cx('needle')}
                    style={{
                        transform: `rotate(${rotation}deg)`,
                    }}
                ></div>
            </div>
            <div className={cx('speed')}>{speed} mph</div>
        </div>
    );
};

export default Speedometer;
