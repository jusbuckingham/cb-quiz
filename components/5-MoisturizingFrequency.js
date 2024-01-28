import React, { useState } from 'react';
import styles from '../styles/5-MoisturizingFrequency.module.css';

const MoisturizingFrequency = ({ onContinue, onSkip }) => {
  const [value, setValue] = useState(5); // Default slider value

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onSkip}>&lt;</div>
        <div className={styles.progressIndicator}>4/6</div>
      </div>
      <div className={styles.mainContent}>
        <h2 className={styles.title}>How often do you moisturize your skin?</h2>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="1"
            max="10"
            value={value}
            className={styles.slider}
            onChange={handleSliderChange}
          />
          <div className={styles.levelIndicator}>
            <span>Newcomer</span>
            <span>Amateur</span>
            <span>Pro</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={onContinue}>Continue</button>
          <button className={styles.skipButton} onClick={onSkip}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default MoisturizingFrequency;
