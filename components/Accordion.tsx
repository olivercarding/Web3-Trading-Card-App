import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md mb-2">
      <div
        className={`flex justify-between items-center px-4 py-3 cursor-pointer ${
          isOpen ? 'bg-gray-100' : 'bg-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-gray-500">{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="px-4 py-3">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
