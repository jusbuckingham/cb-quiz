import React from 'react';
import styles from '../styles/globals.css';

const InformativeScreen = ({ onContinue, onSkip }) => {
  // 'onContinue' is used to handle the logic to go to the next step.
  const handleContinueClick = () => {
    onContinue(); // This function should handle moving to the next step.
  };

  // 'onSkip' is used to handle the logic to skip the step.
  const handleSkipClick = () => {
    onSkip(); // This function should handle skipping to the next step.
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Halfway there!</h2>
        <h3>Why do people give up protecting and hydrating their skin?</h3>
        <p>The No. 1 reason is using the wrong products that just aren't effective.</p>
        <p>You'll achieve much more in just a few weeks of starting City Beauty's treatment.</p>
        <p>Our primary goal is to deliver deep, long-lasting hydration that will prevent harsh aging and reduce the appearance of thinning, crepey skin. Visibly achieve healthy, supple skin with us.</p>
        <button className={styles.gotItButton} onClick={handleContinueClick}>Got it</button>
        <button className={styles.skipButton} onClick={handleSkipClick}>Skip</button>
      </div>
      <div className={styles.imageContainer}>
        {/* Image included here */}
        <img src="/path-to-your-image.jpg" alt="Skin Illustration" />
      </div>
    </div>
  );
};

export default InformativeScreen;
