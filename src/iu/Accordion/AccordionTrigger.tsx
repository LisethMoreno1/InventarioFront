import React from 'react';

interface AccordionTriggerProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ className, onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default AccordionTrigger;
