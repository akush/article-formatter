// components/FAQ.js
import React, { useEffect, useState } from 'react';

const FAQ = ({ onFaqChange }) => {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    onFaqChange?.(faqItems);
  }, [faqItems, onFaqChange]);

  const handleAddItem = () => {
    setFaqItems([...faqItems, { question: '', answer: '' }]);
  };

  const handleUpdateItem = (index, field, value) => {
    const updatedItems = [...faqItems];
    updatedItems[index][field] = value;
    setFaqItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...faqItems];
    updatedItems.splice(index, 1);
    setFaqItems(updatedItems);
  };

  const handleMoveItem = (index, direction) => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === faqItems.length - 1)
    ) {
      return;
    }
    const updatedItems = [...faqItems];
    const itemToMove = updatedItems[index];
    updatedItems.splice(index, 1);
    updatedItems.splice(index + (direction === 'down' ? 1 : -1), 0, itemToMove);
    setFaqItems(updatedItems);
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">FAQ</h2>
      {faqItems.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded p-4 mb-4">
          <div className="flex items-center mb-2">
            <label className="w-32">Question:</label>
            <input
              type="text"
              className="border rounded w-full p-1"
              value={item.question}
              onChange={(e) => handleUpdateItem(index, 'question', e.target.value)}
            />
          </div>
          <div className="flex items-start mb-2">
            <label className="w-32">Answer:</label>
            <textarea
              rows={3}
              className="border rounded w-full p-1"
              value={item.answer}
              onChange={(e) => handleUpdateItem(index, 'answer', e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <button
              className="bg-red-500 text-white rounded p-1 mr-2"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
            <button
              className="bg-blue-500 text-white rounded p-1 mr-2"
              onClick={() => handleMoveItem(index, 'up')}
            >
              Move Up
            </button>
            <button
              className="bg-blue-500 text-white rounded p-1"
              onClick={() => handleMoveItem(index, 'down')}
            >
              Move Down
            </button>
          </div>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white rounded p-1"
        onClick={handleAddItem}
      >
        Add Question
      </button>
    </div>
  );
};

export default FAQ;
