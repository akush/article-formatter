// components/MetaTags.js
import React, { useEffect, useState } from 'react';
// import OpenGraphPreview from './OpenGraphPreview';

// Order Food Online On Train | Quick & Tasty Food Delivery in Train
// Order Online Cheap Veg and Non-veg Food on Running Train & Enjoy Journey. Grab The Best Offers on Food in Train Food Delivery by Our Travel and Rail Khana Services.
// https://neon.ipsator.com/c/image/upload/c_scale,w_400/v1660498287/irctc/images/mobile_backdrop.webp

const MetaTags = ({ onMetaTagsChange }) => {
  const [metaTags, setMetaTags] = useState({
    // title: '',
    // description: '',
    keywords: '',
    // image: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setMetaTags((prevMetaTags) => ({
      ...prevMetaTags,
      [id]: value,
    }));
  };

  useEffect(() => {
    onMetaTagsChange(metaTags);
  }, [metaTags, onMetaTagsChange]);

  return (
    <div className="flex flex-col md:flex-row w-full gap-8">
      <div className='w-full'>
        {/* <div className="flex flex-col">
          <label htmlFor="title" className="label">Title:</label>
          <input
            type="text"
            id="title"
            value={metaTags.title}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="label">Description:</label>
          <input
            type="text"
            id="description"
            value={metaTags.description}
            onChange={handleInputChange}
            className="input"
          />
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="keywords" className="label">Keywords:</label>
          <input
            type="text"
            id="keywords"
            value={metaTags.keywords}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="image" className="label">Image URL (for Open Graph and Twitter):</label>
          <input
            type="text"
            id="image"
            value={metaTags.image}
            onChange={handleInputChange}
            className="input"
          />
        </div> */}
      </div>
      {/* <div className='w-full'>
        <label>Open Graph / Twitter Preview</label>
        <OpenGraphPreview title={metaTags.title} description={metaTags.description} image={metaTags.image} />
      </div> */}
    </div>
  );
};

export default MetaTags;
