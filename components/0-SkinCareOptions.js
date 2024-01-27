import React, { useState } from 'react';
import styles from '../styles/0-SkinCareOptions.module.css'

const SkinCareOptions = ({ onContinue }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    onContinue(goal); // This will trigger the continuation process
  };

  // Define your goals and corresponding images
  const goals = [
    { id: 'removeCrepeySkin', label: 'Remove Crepey Skin' , imageSrc: '/path-to-remove-crepey-skin-image.jpg' },
    { id: 'relieveDrySkin', label: 'Relieve Dry, Flaky Skin', imageSrc: '/path-to-relieve-dry-skin-image.jpg' },
    { id: 'getFirmerSkin', label: 'Get Firmer, Tighter, Younger Looking Skin', imageSrc: '/path-to-get-firmer-skin-image.jpg' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.heading}>Achieve Perfectly Smooth, Youthful Skin</h1>
        <p className={styles.subheading}>Get a personalized skin care treatment</p>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.title}>Choose Your Goal</h2>
        <div className={styles.goalOptions}>
          {goals.map((goal) => (
            <div 
              key={goal.id}
              className={`${styles.option} ${selectedGoal === goal.id ? styles.active : ''}`}
              onClick={() => handleGoalSelection(goal.id)}
            >
              <span className={styles.optionText}>{goal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCareOptions;
