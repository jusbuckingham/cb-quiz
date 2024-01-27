// DailyBodyCareTime.js
import React, { useState } from 'react';
import styles from '../styles/globals.css';

const options = [
  { id: '10min', label: '10 Minutes' },
  { id: '30min', label: '30 Minutes' },
  { id: '1hour', label: '1 Hour' },
  { id: '5min', label: '5 Minutes' }
];

const DailyBodyCareTime = ({ onContinue, onSkip }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>5/6</div>
      </div>
      <h2>How much time do you spend on body care daily:</h2>
      <form className={styles.options}>
        {options.map((option) => (
          <label key={option.id} className={styles.option}>
            <input
              type="radio"
              name="bodyCareTime"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
              className={styles.radio}
            />
            {option.label}
          </label>
        ))}
      </form>
      <button className={styles.continueButton} onClick={() => onContinue(selectedOption)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default DailyBodyCareTime;
