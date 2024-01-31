// 4-InformativeScreen.js

import React from 'react';
import Image from 'next/image';
import styles from '../styles/4-InformativeScreen.module.css';

const InformativeScreen = ({ onContinue, onSkip }) => {
  // Function to handle continue button click
  const handleContinueClick = () => {
    onContinue(); // This will navigate to the next step in your application
  };

  // Function to handle skip button click
  const handleSkipClick = () => {
    onSkip(); // This will handle skipping the current step
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Back button */}
        <div className={styles.backButton} onClick={handleSkipClick}>&lt; Back</div>
      </div>
      <div className={styles.imageContainer}>
        {/* Displaying an image */}
        <Image
          src="/cb-quiz-frontend-imgs/4-halfway-there.png"
          alt="Skin Illustration"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Halfway there!</h2>
        <h3 className={styles.subheading}>Why do people give up protecting and hydrating their skin?</h3>
        <p>The No. 1 reason is using the wrong products that just aren&apos;t effective.</p>
        <p>You&apos;ll achieve much more in just a few weeks of starting City Beauty&apos;s treatment.</p>
        <p>Our primary goal is to deliver deep, long-lasting hydration that will prevent harsh aging and reduce the appearance of thinning, crepey skin. Visibly achieve healthy, supple skin with us.</p>
        {/* Continue and skip buttons */}
        <div className={styles.buttonContainer}>
        <button className={styles.gotItButton} onClick={handleContinueClick}>Got it</button>
        <button className={styles.skipButton} onClick={handleSkipClick}>Skip</button>
      </div>
    </div>
    </div>
  );
};

export default InformativeScreen;

