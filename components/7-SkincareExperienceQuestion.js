// 7-SkincareExperienceQuestion.js

import React, { useState } from 'react';
import styles from '../styles/7-SkincareExperienceQuestion.module.css';

const SkincareExperienceQuestion = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  const options = [
    'Overwhelmed, too many products to keep track of',
    'Overcomplicated, hard to understand ingredients',
    'Hopelessness',
    'No Results',
    'Anxiety',
    'None of the Above'
  ];

  const handleOptionChange = (option) => {
    const newSelectedOptions = { ...selectedOptions, [option]: !selectedOptions[option] };

    if (option === 'None of the Above') {
      // If 'None of the Above' is selected, clear all other selections.
      if (newSelectedOptions[option]) {
        for (let key in newSelectedOptions) {
          if (key !== 'None of the Above') {
            newSelectedOptions[key] = false;
          }
        }
        setSubmissionMessage("Thanks for sharing! We've discovered that a lot of people have faced the same setbacks. City Beauty has a clear one-step treatment that is easy to follow with long-term results. In less than two minutes, you will feel better than ever.");
      } else {
        setSubmissionMessage("");
      }
    } else {
      // If any other option is selected, 'None of the Above' should not be selected.
      newSelectedOptions['None of the Above'] = false;
      setSubmissionMessage("");
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    onSubmit(selectedOptions);
  };

  return (
    <div className={styles.container}>
      <div className={styles.progress}>6/6</div>
      <h2>Have you experienced any of these issues in your previous skincare attempts?</h2>
      {options.map((option, index) => (
        <label key={index} className={`${styles.option} ${selectedOptions[option] ? styles.optionSelected : ''}`}>
          <input
            type="checkbox"
            checked={!!selectedOptions[option]}
            onChange={() => handleOptionChange(option)}
            className={styles.checkbox}
          />
          {option}
        </label>
      ))}
      <div className={styles.submissionMessage} style={{ display: submissionMessage ? 'block' : 'none' }}>
        {submissionMessage}
      </div>
      <button className={styles.continueButton} onClick={handleSubmit}>Continue</button>
      <button className={styles.skipButton} onClick={onSubmit}>Skip</button>
    </div>
  );
};

export default SkincareExperienceQuestion;
