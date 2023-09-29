import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`icon ${isOpen ? 'open' : ''}`}>&#x25BC;</span>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
