import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import SideNavbar from '@/components/side-navbar/side-navbar';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'ShriShrine',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative min-h-screen min-w-full">
          <header className="fixed top-0 z-50 w-full">
            <Header />
          </header>
          {/* <aside className="fixed left-0 top-0 z-40 h-screen">
            <SideNavbar />
          </aside> */}

          {children}
          <footer className="border-t border-primary-200 bg-secondary-100">
            <Footer />
          </footer>
          <Toaster position="top-center" reverseOrder={true} />
        </main>
      </body>
    </html>
  );
}
