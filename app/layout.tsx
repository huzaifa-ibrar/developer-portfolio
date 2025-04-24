import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Huzaifa Ibrar | Software Engineer',
  description: 'Personal portfolio website for Huzaifa Ibrar, a Software Engineer specializing in web development and DevOps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 