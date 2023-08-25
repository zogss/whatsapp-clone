import React from 'react';
import MainLogoWithLabel from '~/components/MainLogoWithLabel';
import { OnBoardingForm } from '~/modules/onboarding';

const OnBoarding: React.FC = () => {
  return (
    <div className="bg-panel-header-background min-h-screen w-screen text-white flex flex-col items-center justify-center">
      <MainLogoWithLabel />
      <h2 className="text-2xl">Create your profile</h2>
      <OnBoardingForm />
    </div>
  );
};

export default OnBoarding;
