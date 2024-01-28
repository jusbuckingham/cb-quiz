import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import styles from '../styles/4-InformativeScreen.module.css'; // Update the path as necessary

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
        <div className={styles.progress}>3/6</div>
      </div>
      <div className={styles.imageContainer}>
        {/* Use the Next.js Image component for optimized image loading */}
        <Image
          src="/path-to-your-image.jpg" // Update the path to your image
          alt="Skin Illustration"
          width={500} // Set the image width as required
          height={300} // Set the image height as required
          layout="responsive" // Makes the image scale nicely to the parent element
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
