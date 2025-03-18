import React from 'react';

export default function EButton(
    {
        children,
        onClick,
        variant = 'default',
        ...props
    }: {
        children?: React.ReactNode;
        onClick: React.MouseEventHandler<HTMLButtonElement>;
        variant?: 'default' | 'success';
    }) {

    const variants: Record<'default' | 'success', string> = {
        default: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
        success: 'bg-green-800 text-green-800 hover:bg-green-600 border border-green-300',
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-4xl font-medium transition-all 
            ${variants[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}
