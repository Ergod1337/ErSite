import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'math', 'cyrillic'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Eragod\'s Website'
};

export default function RootLayout({children,}:
    Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en' className={roboto.className}>
            <body>
                {children}
            </body>
        </html>
    );
}
