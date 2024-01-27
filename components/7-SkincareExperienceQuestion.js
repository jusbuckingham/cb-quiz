// SkincareExperienceQuestion.js
import React, { useState } from 'react';
import styles from '../styles/globals.css';

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
    setSelectedOptions(prev => ({ ...prev, [option]: !prev[option] }));
    
    // Set the message if 'None of the Above' is selected
    if (option === 'None of the Above') {
      setSubmissionMessage("Thanks for sharing! We've discovered that a lot of people have faced the same setbacks. City Beauty has a clear one-step treatment that is easy to follow with long-term results. In less than two minutes, you will feel better than ever.");
    } else {
      setSubmissionMessage("");
    }
  };

  const handleSubmit = () => {
    // Submit the selected options and perform any further actions
    onSubmit(selectedOptions);
  };

  return (
    <div className={styles.container}>
      <h2>Have you experienced any of these issues in your previous skincare attempts?</h2>
      {options.map((option, index) => (
        <label key={index} className={styles.option}>
          <input
            type="checkbox"
            checked={!!selectedOptions[option]}
            onChange={() => handleOptionChange(option)}
            className={styles.checkbox}
          />
          {option}
        </label>
      ))}
      <div className={styles.submissionMessage}>{submissionMessage}</div>
      <button className={styles.continueButton} onClick={handleSubmit}>Continue</button>
      <button className={styles.skipButton}>Skip</button>
    </div>
  );
};

export default SkincareExperienceQuestion;
