import React from 'react';
import AccordionTrigger from './AccordionTrigger';
import AccordionContent from './AccordionContent';

interface AccordionItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, className }) => {
    return (
        <div className={className}>
            {React.Children.map(children, child =>
                React.isValidElement(child) && child.type === AccordionTrigger
                    ? React.cloneElement(child)
                    : React.isValidElement(child) && child.type === AccordionContent
                        ? React.cloneElement(child)
                        : child
            )}
        </div>
    );
};

export default AccordionItem;
