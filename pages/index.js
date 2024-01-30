// pages/index.js

import React, { useState } from 'react';
import Head from 'next/head';
import SkinCareOptions from '../components/0-SkinCareOptions';
import ProblemAreasSelector from '../components/1-ProblemAreasSelector';
import HydratingIngredientsSelector from '../components/2-HydratingIngredientsSelector.js';
import SkinDescriptionSlider from '../components/3-SkinDescriptionSlider.js';
import InformativeScreen from '../components/4-InformativeScreen.js';
import MoisturizingFrequency from '../components/5-MoisturizingFrequency.js';
import DailyBodyCareTime from '../components/6-DailyBodyCareTime.js';
import SkincareExperienceQuestion from '../components/7-SkincareExperienceQuestion.js';
import '../styles/globals.css';

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8; // Total number of slides

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
    // Additional logic if needed when reaching the end of the slides
  };

  // Function to handle skipping to the next slide
  const handleSkip = () => {
    goToNextSlide();
  };

  // Function to render the current question component based on the currentSlide state
  const renderQuestion = () => {
    switch (currentSlide) {
      case 1:
        return <SkinCareOptions onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 2:
        return <ProblemAreasSelector onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 3:
        return <HydratingIngredientsSelector onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 4:
        return <SkinDescriptionSlider onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 5:
        return <InformativeScreen onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 6:
        return <MoisturizingFrequency onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 7:
        return <DailyBodyCareTime onContinue={goToNextSlide} onSkip={handleSkip} />;
      case 8:
        return <SkincareExperienceQuestion onContinue={goToNextSlide} />;
      default:
        // Logic for the end of the quiz
        return (
          <div>
            <h1>Quiz Completed!</h1>
            <p>Thank you for taking the quiz.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <Head>
        <title>Your Quiz Title</title>
        <meta name="description" content="Description of your quiz for SEO" />
      </Head>
      {renderQuestion()}
    </div>
  );
};

export default IndexPage;
