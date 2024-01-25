// SkinDescriptionSlider.js
import React, { useState } from 'react';
import styles from '../styles/SkinDescriptionSlider.module.css';

const SkinDescriptionSlider = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    // Update the image based on slider value if necessary
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>3/6</div>
      </div>
      <h2>How would you describe your skin?</h2>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className={styles.slider}
          onChange={handleSliderChange}
        />
        <div className={styles.labels}>
          <span>Normal Skin</span>
          <span>Crepey Skin</span>
        </div>
      </div>
      <button className={styles.continueButton} onClick={() => onContinue(sliderValue)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default SkinDescriptionSlider;
