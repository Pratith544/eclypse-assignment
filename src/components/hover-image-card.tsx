import React from "react";

interface HoverImageCardProps {
  imageSrc: string;
  text: string;
}

export const HoverImageCard: React.FC<HoverImageCardProps> = ({
  imageSrc,
  text,
}) => {
  return (
    <div className="relative w-full h-[397px] rounded-[5px] overflow-hidden group">
      {/* Image */}
      <img
        src={imageSrc}
        alt="hover card"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay - Appears only on hover */}
      <div className="absolute h-full bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 px-6 py-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {/* Paragraph is now anchored to the bottom */}
        <p className="absolute bottom-5 left-6 right-6 text-white text-4xl leading-[34px] whitespace-pre-line [font-family:'Helvetica',_sans-serif]">
          {text}
        </p>
      </div>
    </div>
  );
};