// Accordion.tsx

import React, { useState } from 'react';

interface PanelProps {
  title: string;
  content: string;
}

const Panel: React.FC<PanelProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="panel" role="tabpanel">
      <button
        className="panel__label"
        role="tab"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div
        className="panel__inner"
        style={{ height: isOpen ? 'auto' : 0 }}
        aria-hidden={!isOpen}
      >
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  panels: PanelProps[];
}

const Accordion: React.FC<AccordionProps> = ({ panels }) => {
  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => (
        <Panel key={index} title={panel.title} content={panel.content} />
      ))}
    </div>
  );
};

export default Accordion;
