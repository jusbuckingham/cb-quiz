import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SkinCareOptions from '@/components/SkinCareOptions.js';
import ProblemAreasSelector from '@/components/ProblemAreasSelector.js';
import HydratingIngredientsSelector from '@/components/HydratingIngredientsSelector.js';
import SkinDescriptionSlider from '@/components/SkinDescriptionSlider.js';
import InformativeScreen from '@/components/InformativeScreen.js';
import MoisturizingFrequency from '@/components/MoisturizingFrequency.js';
import DailyBodyCareTime from '@/components/DailyBodyCareTime.js';
import SkincareExperienceQuestion from '@/components/SkincareExperienceQuestion.js';
import SharedLayout from '../components/SharedLayout';

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8; // Assuming there are 8 questions
  const router = useRouter();

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle the end of the quiz, e.g., show a summary or thank you message
      router.push('/thank-you'); // Redirect to a thank-you page or summary page
    }
  };

  const handleSkip = () => {
    goToNextSlide();
  };

  // Define an array of question components in the order you want to render them
  const questionComponents = [
    <SkinCareOptions onContinue={goToNextSlide} />,
    <ProblemAreasSelector onContinue={goToNextSlide} />,
    <HydratingIngredientsSelector onContinue={goToNextSlide} />,
    <SkinDescriptionSlider onContinue={goToNextSlide} />,
    <InformativeScreen onContinue={goToNextSlide} />,
    <MoisturizingFrequency onContinue={goToNextSlide} />,
    <DailyBodyCareTime onContinue={goToNextSlide} />,
    <SkincareExperienceQuestion onContinue={goToNextSlide} />,
  ];

  return (
    <SharedLayout>
      <Head>
        <title>Your Quiz Title</title>
        {/* Add other metadata here */}
      </Head>
      {questionComponents[currentSlide - 1]}
    </SharedLayout>
  );
};

export default IndexPage;
