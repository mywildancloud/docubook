"use client";

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type AccordionProps = {
    title: string;
    content?: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
};

const Accordion = ({
    title,
    content,
    defaultOpen = false,
    className,
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={cn("border rounded-lg overflow-hidden", className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 transition-colors bg-background hover:bg-muted/50"
            >
                <h3 className="font-medium text-left text-foreground">{title}</h3>
                <ChevronRight
                    className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-90"
                    )}
                />
            </button>

            {isOpen && (
                <div className="px-4 py-3 border-t bg-muted/50">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;
