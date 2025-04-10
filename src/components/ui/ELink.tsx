import Link from 'next/link';
import React from 'react';

export default function ELink(
    {
        href,
        underline = false,
        children,
        className,
        ...props}:
    {
        href: string,
        underline?: boolean,
        children?: React.ReactNode,
        className?: string
    }) {
    let ul: string = '';

    if (underline) {
        ul = 'hover:underline hover:underline-offset-2';
    }


    return (
        <Link
            href={href}
            className={`no-underline ${ul} ${className}`}
            {...props}
        >
            {children}
        </Link>
    )
}