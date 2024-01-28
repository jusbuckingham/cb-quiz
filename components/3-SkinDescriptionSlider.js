// SkinDescriptionSlider.js
import React, { useState } from 'react';
import styles from '../styles/3-SkinDescriptionSlider.module.css';

const SkinDescriptionSlider = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  // Function to map the slider value to a description
  const getSkinDescription = (value) => {
    // Replace this with your actual logic to map the value to a skin description
    if(value < 25) return 'Normal Skin';
    if(value < 50) return 'Dry Skin';
    if(value < 75) return 'Micro Wrinkles';
    return 'Crepey Skin';
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    // Update the image based on slider value if necessary
    // updateImage(getSkinDescription(event.target.value));
  };

  // Placeholder function - replace with your actual logic
  const updateImage = (description) => {
    console.log("Update image to show state:", description);
    // Logic to change image based on description
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onSkip}>&lt; Back</div>
        <div className={styles.progress}>3/6</div>
      </div>
      <h2 className={styles.title}>How would you describe your skin?</h2>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className={styles.rangeSlider}
          onChange={handleSliderChange}
        />
        <label className={styles.sliderLabel} style={{ left: `${sliderValue}%` }}>
          {getSkinDescription(sliderValue)}
        </label>
      </div>
      <button className={styles.continueButton} onClick={() => onContinue(sliderValue)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default SkinDescriptionSlider;
