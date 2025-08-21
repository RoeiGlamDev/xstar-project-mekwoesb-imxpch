import React from 'react';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luxury FashionTV Cosmetics',
  description: 'Explore our premium cosmetics collection with an elegant touch.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-pink-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}