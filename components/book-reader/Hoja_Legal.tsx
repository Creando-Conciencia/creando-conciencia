import React from 'react';
import Image from 'next/image';

export const LegalPage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <Image
        src="/Libro_Hoja_Legal.jpg"
        alt="Hoja legal"
        fill
        className="object-contain"
      />
    </div>
  );
};