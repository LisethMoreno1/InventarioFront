import React, { ReactNode } from 'react';

interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ type, collapsible, className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Accordion;
