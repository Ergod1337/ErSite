import Link from 'next/link';
import React from 'react';

export default function ELink(
    {
        href,
        children,
        className,
        ...props}:
    {
        href: string,
        children?: React.ReactNode,
        className?: string}) {
    return (
        <Link
            href={href}
            className={className}
            {...props}
        >
            {children}
        </Link>
    )
}