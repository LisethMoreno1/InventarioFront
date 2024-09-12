import React, { ReactNode, useState } from 'react';

interface AccordionSummaryProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    expandIcon?: ReactNode;
    className?: string;
}

const AccordionSummary: React.FC<AccordionSummaryProps> = ({ title, subtitle, children, expandIcon, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={className}>
            <div
                className={className}
                onClick={toggleOpen}
            >
                <div>
                    <h3 className={className}>{title}</h3>
                    {subtitle && <p className={className}>{subtitle}</p>}
                </div>
                {expandIcon && <span className={className}>{expandIcon}</span>}
            </div>
            {isOpen && <div className={className}>{children}</div>}
        </div>
    );
};

export default AccordionSummary;
