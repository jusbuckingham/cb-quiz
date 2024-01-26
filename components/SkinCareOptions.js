import React, { useState } from 'react';
import styles from './SkinCareOptions.module.css';

const SkinCareOptions = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    // This function should navigate to the next question
    goToNextQuestion();
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1>Achieve Perfectly Smooth, Youthful Skin</h1>
        <p>Get a personalized skin care treatment</p>
      </div>
      <h2>Choose Your Goal</h2>
      <div className={styles.rightPanel}>
        <div className={styles.options}>
          <button className={styles.option} onClick={() => handleGoalSelection('Remove Crepey Skin')}>Remove Crepey Skin</button>
          <button className={styles.option} onClick={() => handleGoalSelection('Relieve Dry, Flaky Skin')}>Relieve Dry, Flaky Skin</button>
          <button className={styles.option} onClick={() => handleGoalSelection('Get Firmer, Tighter, Younger Looking Skin')}>Get Firmer, Tighter, Younger Looking Skin</button>
        </div>
      </div>
    </div>
  );
};

// This is a placeholder function, replace it with your actual navigation logic
const goToNextQuestion = () => {
  console.log('Navigate to the next question');
};

export default SkinCareOptions;
