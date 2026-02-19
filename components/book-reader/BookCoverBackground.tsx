import React from 'react';

export const BookCoverBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('/PORTADA_LIBRO_CIENCIA01.png')",
          filter: "blur(16px) saturate(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-white/15 dark:bg-black/25 backdrop-blur-sm" />
    </div>
  );
};
