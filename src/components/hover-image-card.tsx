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
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-6 py-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-[28px] leading-[34px] font-semibold whitespace-pre-line [font-family:'Helvetica',_sans-serif]">
          {text}
        </p>
      </div>
    </div>
  );
};
