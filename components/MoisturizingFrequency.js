// MoisturizingFrequency.js
import React, { useState } from 'react';
import styles from '../styles/MoisturizingFrequency.module.css';

const MoisturizingFrequency = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(5); // Default slider value

  const sliderLabels = {
    1: 'Newcomer',
    5: 'Amateur',
    10: 'Pro'
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const getDescription = () => {
    // Implement your logic to get the description based on the slider value
    // For simplicity, we return the label corresponding to the current value
    return sliderLabels[sliderValue];
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>4/6</div>
      </div>
      <h2>How often do you moisturize your skin?</h2>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="1"
          max="10"
          value={sliderValue}
          className={styles.slider}
          onChange={handleSliderChange}
        />
        <div className={styles.labels}>
          <span>{sliderLabels[1]}</span>
          <span className={styles.centerLabel}>{sliderLabels[5]}</span>
          <span>{sliderLabels[10]}</span>
        </div>
      </div>
      <div className={styles.description}>{getDescription()}</div>
      <button className={styles.continueButton} onClick={() => onContinue(sliderValue)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default MoisturizingFrequency;
