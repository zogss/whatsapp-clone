import Image from 'next/image';
import React from 'react';

const MainLogoWithLabel: React.FC = () => (
  <div className="flex items-center justify-center gap-6">
    <Image
      src="/whatsapp.gif"
      alt="Whatsapp animated logo"
      width={300}
      height={300}
    />
    <span className="text-white text-7xl">Whatsapp</span>
  </div>
);

export default MainLogoWithLabel;
