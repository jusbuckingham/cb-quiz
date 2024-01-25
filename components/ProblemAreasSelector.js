// ProblemAreasSelector.js
import React, { useState } from 'react';
import styles from './ProblemAreasSelector.module.css';

const problemAreas = [
  { id: 'thighsAndLegs', label: 'Loose skin on thighs and legs' },
  { id: 'arms', label: 'Thinning skin on arms' },
  { id: 'neckJaw', label: 'Loose neck/jaw' },
  { id: 'belly', label: 'Saggy belly' }
];

const ProblemAreasSelector = ({ onContinue, onSkip }) => {
  const [selectedAreas, setSelectedAreas] = useState({});

  const toggleArea = (area) => {
    setSelectedAreas(prevSelectedAreas => ({
      ...prevSelectedAreas,
      [area]: !prevSelectedAreas[area]
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>1/6</div>
      </div>
      <h2>Select problem areas</h2>
      <div className={styles.options}>
        {problemAreas.map(area => (
          <div 
            key={area.id} 
            className={`${styles.option} ${selectedAreas[area.id] ? styles.optionSelected : ''}`}
            onClick={() => toggleArea(area.id)}
          >
            <div className={styles.checkbox}>
              {selectedAreas[area.id] && <span className={styles.checkmark}>✓</span>}
            </div>
            <div className={styles.label}>{area.label}</div>
          </div>
        ))}
      </div>
      <button className={styles.continueButton} onClick={onContinue}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default ProblemAreasSelector;
