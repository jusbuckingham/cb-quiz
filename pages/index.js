// pages/index.js
import React, { useState } from 'react';
import SkinCareOptions from '@/components/SkinCareOptions.js';
import ProblemAreasSelector from '@/components/ProblemAreasSelector.js';
import HydratingIngredientsSelector from '@/components/HydratingIngredientsSelector.js';
import SkinDescriptionSlider from '@/components/SkinDescriptionSlider.js';
import InformativeScreen from '@/components/InformativeScreen.js';
import MoisturizingFrequency from '@/components/MoisturizingFrequency.js';
import DailyBodyCareTime from '@/components/DailyBodyCareTime';
import SkincareExperienceQuestion from '@/components/SkincareExperienceQuestion';
import SharedLayout from '../components/SharedLayout';

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8; // Assuming there are 6 questions

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle the end of the quiz, e.g., show a summary or thank you message
    }
  };

  const handleSkip = () => {
    goToNextSlide();
  };

  return (
    <SharedLayout>
      {currentSlide === 1 && <SkinCareOptions onContinue={goToNextSlide} />}
      {currentSlide === 2 && <ProblemAreasSelector onContinue={goToNextSlide} />}
      {currentSlide === 3 && <HydratingIngredientsSelector onContinue={goToNextSlide} />}
      {currentSlide === 4 && <SkinDescriptionSlider onContinue={goToNextSlide} />}
      {currentSlide === 5 && <InformativeScreen onContinue={goToNextSlide} />}
      {currentSlide === 6 && <MoisturizingFrequency onContinue={goToNextSlide} />}
      {currentSlide === 7 && <DailyBodyCareTime onContinue={goToNextSlide} />}
      {currentSlide === 8 && <SkincareExperienceQuestion onContinue={goToNextSlide} />}
      
      {/* Repeat for other slides */}
      {/* Add components for questions 3 through 6 here */}
      {/* The last slide might be different since it needs to show a thank you message */}
    </SharedLayout>
  );
};

export default IndexPage;
