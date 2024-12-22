"use client";

import { useState } from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = keyof typeof Icons;

type ToggleProps = {
    icon?: IconName;
    title: string;
    description?: string;
    content?: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

const Toggle = ({
    icon,
    title,
    description,
    content,
    defaultOpen = false,
    className,
}: ToggleProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const Icon = (icon ? Icons[icon] : Icons.ChevronRight) as React.ElementType;

    return (
        <div className={cn("border rounded-lg overflow-hidden mb-4", className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-0 flex items-center justify-between bg-background hover:bg-muted/50 transition-colors"
            >
                <div className="flex flex-col">
                    <h3 className="font-medium text-foreground text-left">{title}</h3>
                    {description && <p className="text-sm text-muted-foreground">{description}</p>}
                </div>
                <Icon
                    className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-90"
                    )}
                />
            </button>

            {isOpen && (
                <div className="px-4 py-3 bg-muted/50 border-t">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Toggle;