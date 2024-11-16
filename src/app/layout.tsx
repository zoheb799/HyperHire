'use client';

import { ReactNode } from 'react';
import Navbar from './components/organisms/Navbar';
import { Footer } from './components/organisms/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="h-screen">        
        <main className="flex-1">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
