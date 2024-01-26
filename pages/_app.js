import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SkinCareOptions from '../components/SkinCareOptions';
import ProblemAreasSelector from '../components/ProblemAreasSelector';
import HydratingIngredientsSelector from '../components/HydratingIngredientsSelector';
import SkinDescriptionSlider from '../components/SkinDescriptionSlider';
import InformativeScreen from '../components/InformativeScreen';
import MoisturizingFrequency from '../components/MoisturizingFrequency';
import DailyBodyCareTime from '../components/DailyBodyCareTime';
import SkincareExperienceQuestion from '../components/SkincareExperienceQuestion';
import '../styles/globals.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8; // Assuming there are 8 questions
  const router = useRouter();

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    // You can handle skip differently if you want
    goToNextSlide();
  };

  return (
    <div>
      <Head>
        <title>City Beauty</title>
        {/* Add other metadata here */}
      </Head>
      {currentSlide === 1 && <SkinCareOptions onContinue={goToNextSlide} />}
      {currentSlide === 2 && <ProblemAreasSelector onContinue={goToNextSlide} />}
      {currentSlide === 3 && <HydratingIngredientsSelector onContinue={goToNextSlide} />}
      {currentSlide === 4 && <SkinDescriptionSlider onContinue={goToNextSlide} />}
      {currentSlide === 5 && <InformativeScreen onContinue={goToNextSlide} />}
      {currentSlide === 6 && <MoisturizingFrequency onContinue={goToNextSlide} />}
      {currentSlide === 7 && <DailyBodyCareTime onContinue={goToNextSlide} />}
      {currentSlide === 8 && <SkincareExperienceQuestion onContinue={goToNextSlide} />}
    </div>
  );
};

export default App;
