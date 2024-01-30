// 0-SkinCareOptions.js

import React, { useState } from 'react';
import styles from '../styles/0-SkinCareOptions.module.css';

const SkinCareOptions = ({ onContinue }) => {
  // State to track the selected goal
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Function to handle goal selection and trigger the continuation process
  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    onContinue(goal); // This will trigger the continuation process
  };

  // List of available skin care goals with labels and image sources
  const goals = [
    {
      id: 'removeCrepeySkin',
      label: 'Remove Crepey Skin',
      imageSrc: '/cb-quiz-frontend-imgs/0-remove-crepy-skin.png',
    },
    {
      id: 'relieveDrySkin',
      label: 'Relieve Dry, Flaky Skin',
      imageSrc: '/cb-quiz-frontend-imgs/0-relieve-dry-flaky-skin.png',
    },
    {
      id: 'getFirmerSkin',
      label: 'Get Firmer, Tighter, Younger Looking Skin',
      imageSrc: '/cb-quiz-frontend-imgs/0-get-firmer-tighter-younger-looking-skin.png',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        {/* Heading and subheading */}
        <h1 className={styles.heading}>Achieve Perfectly Smooth, Youthful Skin</h1>
        <p className={styles.subheading}>Get a personalized skin care treatment</p>
      </div>
      <div className={styles.rightPanel}>
        {/* Title for goal selection */}
        <h2 className={styles.title}>Choose Your Goal</h2>
        <div className={styles.goalOptions}>
          {/* Map through the list of goals and render options */}
          {goals.map((goal) => (
            <div
              key={goal.id}
              // Apply the "active" class if the goal is selected
              className={`${styles.option} ${selectedGoal === goal.id ? styles.active : ''}`}
              onClick={() => handleGoalSelection(goal.id)}
            >
              {/* Goal label */}
              <span className={styles.optionText}>{goal.label}</span>
              {/* Goal image */}
              <img
                src={goal.imageSrc}
                alt={goal.label}
                className={styles.optionImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCareOptions;

