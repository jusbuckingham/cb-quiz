import React, { useState } from 'react';
import styles from '../styles/6-DailyBodyCareTime.module.css';

const BodyCareTime = ({ onContinue, onSkip }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onSkip}>&lt;</div>
        <div className={styles.progress}>5/6</div>
      </div>
      <h2 className={styles.title}>How much time do you spend on body care daily:</h2>
      <div className={styles.options}>
        {['10 Minutes', '30 Minutes', '1 Hour', '5 Minutes'].map((time) => (
          <label key={time} className={`${styles.option} ${selectedTime === time ? styles.selected : ''}`}>
            <input
              type="radio"
              name="bodyCareTime"
              value={time}
              checked={selectedTime === time}
              onChange={() => handleSelection(time)}
              className={styles.radioInput}
            />
            {time}
          </label>
        ))}
      </div>
      <button className={styles.continueButton} onClick={() => onContinue(selectedTime)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default BodyCareTime;
