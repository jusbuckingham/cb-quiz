import React, { useState } from 'react';
import styles from '../styles/globals.css';

const SkinCareOptions = ({ onContinue }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    onContinue(goal); // Pass the selected goal to the onContinue function
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.heading}>Achieve Perfectly Smooth, Youthful Skin</h1>
        <p className={styles.subheading}>Get a personalized skin care treatment</p>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.title}>Choose Your Goal</h2>
        <div className={styles.goalOptions}> {/* Adjusted the className here */}
          {['Remove Crepey Skin', 'Relieve Dry, Flaky Skin', 'Get Firmer, Tighter, Younger Looking Skin'].map((goal) => (
            <div 
              key={goal}
              className={`${styles.option} ${selectedGoal === goal ? styles.active : ''}`}
              onClick={() => handleGoalSelection(goal)}
            >
              {/* Placeholder for image */}
              <div className={styles.optionImage}></div> {/* Use a div for the image placeholder */}
              <span className={styles.optionText}>{goal}</span> {/* Added className for text */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCareOptions;
