// 1-ProblemAreasSelector.js

import React, { useState } from 'react';
import styles from '../styles/1-ProblemAreasSelector.module.css';

// List of problem areas with labels and image sources
const problemAreas = [
  { id: 'thighsAndLegs', label: 'Loose skin on thighs and legs', imageSrc: '/cb-quiz-frontend-imgs/1-loose-skin-on-thighs-and-legs.png' },
  { id: 'arms', label: 'Thinning skin on arms', imageSrc: '/cb-quiz-frontend-imgs/1-thinning-skin-on-arms.png' },
  { id: 'neckJaw', label: 'Loose neck/jaw', imageSrc: '/cb-quiz-frontend-imgs/1-loose-neck-jaw.png' },
  { id: 'belly', label: 'Saggy belly', imageSrc: '/cb-quiz-frontend-imgs/1-saggy-belly.png' }
];

const ProblemAreasSelector = ({ onContinue, onSkip }) => {
  // State to track selected problem areas
  const [selectedAreas, setSelectedAreas] = useState({});

  // Function to toggle the selection of problem areas
  const toggleArea = (areaId) => {
    setSelectedAreas(prevSelectedAreas => ({
      ...prevSelectedAreas,
      [areaId]: !prevSelectedAreas[areaId]
    }));
  };

  // Function to handle the continue action
  const handleContinue = () => {
    onContinue(selectedAreas);
  };

  // Function to handle the skip action
  const handleSkip = () => {
    onSkip();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Back button and progress indicator */}
        <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>1/6</div>
      </div>
      <h2>Select problem areas</h2>
      <div className={styles.options}>
        {/* Map through problem areas and render checkboxes */}
        {problemAreas.map(area => (
          <label key={area.id} className={`${styles.option} ${selectedAreas[area.id] ? styles.optionSelected : ''}`}>
            <input
              type="checkbox"
              name="problemAreas"
              value={area.id}
              checked={!!selectedAreas[area.id]}
              onChange={() => toggleArea(area.id)}
              className={styles.checkbox}
            />
            {/* Problem area label and image */}
            <span className={styles.optionText}>{area.label}</span>
            <img src={area.imageSrc} alt={area.label} className={styles.optionImage} />
          </label>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        {/* Continue and skip buttons */}
        <button className={styles.continueButton} onClick={handleContinue}>Continue</button>
        <button className={styles.skipButton} onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
};

export default ProblemAreasSelector;
