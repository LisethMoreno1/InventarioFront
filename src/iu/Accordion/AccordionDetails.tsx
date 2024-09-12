import React from 'react';

interface AccordionDetailsProps {
  expanded?: boolean;
  children?: React.ReactNode;
  className? : string
}

// Componente AccordionDetails
const AccordionDetails: React.FC<AccordionDetailsProps> = ({ expanded, children, className }) => {
  return expanded ? (
    <div className={className}>
      {children}
    </div>
  ) : null;
};

export default AccordionDetails;
