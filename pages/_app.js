// _app.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SkinCareOptions from '../components/0-SkinCareOptions';
import ProblemAreasSelector from '../components/1-ProblemAreasSelector';
import HydratingIngredientsSelector from '../components/2-HydratingIngredientsSelector';
import SkinDescriptionSlider from '../components/3-SkinDescriptionSlider';
import InformativeScreen from '../components/4-InformativeScreen';
import MoisturizingFrequency from '../components/5-MoisturizingFrequency';
import DailyBodyCareTime from '../components/6-DailyBodyCareTime';
import SkincareExperienceQuestion from '../components/7-SkincareExperienceQuestion';
import '../styles/globals.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8; // Total number of slides
  const router = useRouter();

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Function to go to the previous slide (not currently used)
  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Function to handle skipping to the next slide
  const handleSkip = () => {
    goToNextSlide();
  };

  return (
    <div>
      <Head>
        <title>City Beauty</title>
        {/* Add other metadata here */}
      </Head>
      {/* Render the appropriate component based on the current slide */}
      {currentSlide === 1 && <SkinCareOptions onContinue={goToNextSlide} />}
      {currentSlide === 2 && <ProblemAreasSelector onContinue={goToNextSlide} onSkip={handleSkip} />}
      {currentSlide === 3 && <HydratingIngredientsSelector onContinue={goToNextSlide} onSkip={handleSkip} />}
      {currentSlide === 4 && <SkinDescriptionSlider onContinue={goToNextSlide} onSkip={handleSkip} />}
      {currentSlide === 5 && <InformativeScreen onContinue={goToNextSlide} onSkip={handleSkip} />}
      {currentSlide === 6 && <MoisturizingFrequency onContinue={goToNextSlide} onSkip={handleSkip} />}
      {currentSlide === 7 && <DailyBodyCareTime onContinue={goToNextSlide} onSkip={handleSkip} />}
      {currentSlide === 8 && <SkincareExperienceQuestion onContinue={goToNextSlide} onSkip={handleSkip} />}
    </div>
  );
};

export default App;