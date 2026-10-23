import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FutureTech | Technology Society Platform',
  description: 'Learn practical skills, build projects, and collaborate with student technologists.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070B1B] text-[#F3F6FC] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
