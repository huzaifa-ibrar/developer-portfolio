import 'react';

declare module 'next/link';
declare module 'next/font/google';
declare module 'react-icons/fa';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 