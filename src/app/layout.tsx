import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grant Matejka',
  description: 'Personal site of Grant Matejka; Full Stack Engineer'
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
