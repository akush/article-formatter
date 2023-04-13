import React, { useRef, useEffect } from 'react';

const AutoExpandingTextarea = ({ className, value, onChange }) => {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = `${textareaRef.current.scrollHeight}px`;
      if (textareaRef.current.style.height !== newHeight) {
        textareaRef.current.style.height = newHeight;
      }
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleInput = (e) => {
    adjustHeight();
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      className={className}
      ref={textareaRef}
      value={value}
      onChange={handleInput}
      style={{ overflow: 'hidden', resize: 'none' }}
    />
  );
};

export default AutoExpandingTextarea;
