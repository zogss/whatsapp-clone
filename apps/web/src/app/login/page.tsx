import React from 'react';
import LoginWithGoogleButton from '~/components/LoginWithGoogleButton';
import MainLogoWithLabel from '~/components/MainLogoWithLabel';

const Login: React.FC = () => (
  <div className="flex justify-center items-center bg-panel-header-background min-h-screen w-screen flex-col gap-6">
    <MainLogoWithLabel />
    <LoginWithGoogleButton />
  </div>
);

export default Login;
