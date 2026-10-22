import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RONA Photobooth Bali | Good People, Great Memories',
  description: 'Photobooth for weddings, parties, and special events in Bali. Explore RONA packages and book your date.',
  openGraph: {
    title: 'RONA Photobooth Bali',
    description: 'Good People, Great Memories.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
