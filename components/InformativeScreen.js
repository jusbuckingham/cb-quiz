// InformativeScreen.js
import React from 'react';
import styles from '../styles/InformativeScreen.module.css';

const InformativeScreen = ({ onGotIt, onSkip }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Halfway there!</h2>
        <h3>Why do people give up protecting and hydrating their skin?</h3>
        <p>The No. 1 reason is using the wrong products that just aren’t effective.</p>
        <p>You’ll achieve much more in just a few weeks of starting City Beauty's treatment.</p>
        <p>Our primary goal is to deliver deep, long-lasting hydration that will prevent harsh aging and reduce the appearance of thinning, crepey skin. Visibly achieve healthy, supple skin with us.</p>
        <button className={styles.gotItButton} onClick={onGotIt}>Got it</button>
        <button className={styles.skipButton} onClick={onSkip}>Skip</button>
      </div>
      <div className={styles.imageContainer}>
        {/* Include your image here */}
        <img src="/path-to-your-image.jpg" alt="Skin Illustration" />
      </div>
    </div>
  );
};

export default InformativeScreen;
