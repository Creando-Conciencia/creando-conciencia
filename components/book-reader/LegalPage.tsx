import Image from "next/image";
import React from "react";
import { BookCoverBackground } from "./BookCoverBackground";

type LegalPageProps = {
  title?: string;
  imageSrc?: string;
};

export const LegalPage: React.FC<LegalPageProps> = ({
  title = "Hoja legal",
  imageSrc = "/Libro_Hoja_Legal.jpg",
}) => {
  return (
    <div className="h-full w-full relative overflow-hidden bg-white dark:bg-gray-900">
      <BookCoverBackground />
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};