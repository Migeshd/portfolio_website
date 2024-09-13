import TopBar from '@/ui/components/Tool-Bar';
import './globals.css';

export const metadata = {
  title: 'MIGESH DAWADI',
  description: 'Welcome to the site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <TopBar />
        {children}
      </body>
    </html>
  );
}
