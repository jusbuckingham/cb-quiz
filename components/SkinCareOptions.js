import React, { useState } from 'react';
import styles from '../styles/SkinCareOptions.module.css'; // Import the CSS module

const SkinCareOptions = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    // This function should navigate to the next question
    goToNextQuestion();
  };

  return (
    <div className={`${styles.container} bg-primary-color text-text-color`}>
      <div className={`${styles.leftPanel} text-center`}>
        <h1>Achieve Perfectly Smooth, Youthful Skin</h1>
        <p>Get a personalized skin care treatment</p>
      </div>
      <h2>Choose Your Goal</h2>
      <div className={`${styles.rightPanel} w-full`}>
        <div className={`${styles.options} flex flex-col w-full`}>
          <button className={`${styles.option} my-2 py-2 border-2 border-option-border-color text-text-color text-center cursor-pointer transition duration-300 hover:bg-primary-color hover:text-white`} onClick={() => handleGoalSelection('Remove Crepey Skin')}>Remove Crepey Skin</button>
          <button className={`${styles.option} my-2 py-2 border-2 border-option-border-color text-text-color text-center cursor-pointer transition duration-300 hover:bg-primary-color hover:text-white`} onClick={() => handleGoalSelection('Relieve Dry, Flaky Skin')}>Relieve Dry, Flaky Skin</button>
          <button className={`${styles.option} my-2 py-2 border-2 border-option-border-color text-text-color text-center cursor-pointer transition duration-300 hover:bg-primary-color hover:text-white`} onClick={() => handleGoalSelection('Get Firmer, Tighter, Younger Looking Skin')}>Get Firmer, Tighter, Younger Looking Skin</button>
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
