// pages/index.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SkinCareOptions from '../components/SkinCareOptions';
import ProblemAreasSelector from '../components/ProblemAreasSelector';
import HydratingIngredientsSelector from '../components/HydratingIngredientsSelector.js';
import SkinDescriptionSlider from '../components/SkinDescriptionSlider.js';
import InformativeScreen from '../components/InformativeScreen.js';
import MoisturizingFrequency from '../components/MoisturizingFrequency.js';
import DailyBodyCareTime from '../components/DailyBodyCareTime.js';
import SkincareExperienceQuestion from '../components/SkincareExperienceQuestion.js';
import SharedLayout from '../components/SharedLayout';

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8; // Assuming there are 8 questions
  const router = useRouter();

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle the end of the quiz by displaying a summary or thank-you message
      // You can customize the content here
      return (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Thank you for taking the quiz. Here's a summary of your responses:</p>
          {/* Display a summary of the user's responses */}
        </div>
      );
    }
  };

  const handleSkip = () => {
    goToNextSlide();
  };

  // Define an array of question components in the order you want to render them
  const questionComponents = [
    <SkinCareOptions key="1" onContinue={goToNextSlide} />,
    <ProblemAreasSelector key="2" onContinue={goToNextSlide} />,
    <HydratingIngredientsSelector key="3" onContinue={goToNextSlide} />,
    <SkinDescriptionSlider key="4" onContinue={goToNextSlide} />,
    <InformativeScreen key="5" onContinue={goToNextSlide} />,
    <MoisturizingFrequency key="6" onContinue={goToNextSlide} />,
    <DailyBodyCareTime key="7" onContinue={goToNextSlide} />,
    <SkincareExperienceQuestion key="8" onContinue={goToNextSlide} />,
  ];

  return (
    <SharedLayout>
      <Head>
        <title>Your Quiz Title</title>
        {/* Add other metadata here */}
        <meta name="description" content="Description of your quiz for SEO" />
        {/* Add other meta tags as needed */}
      </Head>
      {questionComponents[currentSlide - 1]}
    </SharedLayout>
  );
};

export default IndexPage;
