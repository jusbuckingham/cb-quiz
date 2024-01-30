// 7-SkincareExperienceQuestion.js

import React, { useState } from 'react';
import styles from '../styles/7-SkincareExperienceQuestion.module.css';

const SkincareExperienceQuestion = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showSubmissionMessage, setShowSubmissionMessage] = useState(false);

  const options = [
    'Overwhelmed, too many products to keep track of',
    'Overcomplicated, hard to understand ingredients',
    'Hopelessness',
    'No Results',
    'Anxiety',
    'None of the Above'
  ];

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [option]: !prevSelectedOptions[option]
    }));

    // Trigger the submission message only if "None of the Above" is selected
    if (option === 'None of the Above') {
      setShowSubmissionMessage(!selectedOptions[option]);
    } else {
      // If other options are selected, ensure "None of the Above" is not selected
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        'None of the Above': false
      }));
      setShowSubmissionMessage(false);
    }
  };

  const handleSubmit = () => {
    // Example submit function, replace with actual submit logic
    onSubmit(selectedOptions);
    setShowSubmissionMessage(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.progress}>6/6</div>
      <h2>Have you experienced any of these issues in your previous skincare attempts?</h2>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index} className={`${styles.option} ${selectedOptions[option] ? styles.optionSelected : ''}`}>
            <label>
              <input
                type="checkbox"
                name={option}
                checked={!!selectedOptions[option]}
                onChange={() => handleOptionChange(option)}
                className={styles.checkbox}
              />
              {option}
            </label>
          </div>
        ))}
        <div className={styles.submissionMessage} style={{ display: showSubmissionMessage ? 'block' : 'none' }}>
          Thanks for sharing! We&apos;ve discovered that a lot of people have faced the same setbacks. City Beauty has a clear one-step treatment that is easy to follow with long-term results. In less than two minutes, you will feel better than ever.
        </div>
        <button type="submit" className={styles.continueButton}>Continue</button>
        <button type="button" className={styles.skipButton} onClick={onSubmit}>Skip</button>
      </form>
    </div>
  );
};

export default SkincareExperienceQuestion;


