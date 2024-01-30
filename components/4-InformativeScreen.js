import React from 'react';
import Image from 'next/image'; 
import styles from '../styles/4-InformativeScreen.module.css'; 

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
      <div className={styles.header}>
        <div className={styles.backButton} onClick={handleSkipClick}>&lt; Back</div>
      </div>
      <div className={styles.imageContainer}>
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
        <button className={styles.gotItButton} onClick={handleContinueClick}>Got it</button>
        <button className={styles.skipButton} onClick={handleSkipClick}>Skip</button>
      </div>
    </div>
  );
};

export default InformativeScreen;
