// components/OpenGraphPreview.js
import React from 'react';

const OpenGraphPreview = ({ title, description, image }) => {
  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="flex flex-row bg-gray-100 rounded p-4 max-w-2xl">
      <div className="w-[200px] h-48 min-w-[200px] bg-cover bg-no-repeat bg-center mr-4" style={imageStyle}></div>
      <div className="flex flex-col">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-base">{description}</div>
      </div>
    </div>
  );
};

export default OpenGraphPreview;
