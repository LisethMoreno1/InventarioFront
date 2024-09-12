import React from 'react';

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({  children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AccordionContent;
