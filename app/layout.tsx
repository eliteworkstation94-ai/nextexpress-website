import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextExpress | Delivering the Next Possibility',
  description: 'NextExpress บริการโลจิสติกส์ครบวงจร ครอบคลุมทั่วโลก ส่งตรงเวลา ปลอดภัย พร้อมดูแลลูกค้า 24/7',
  keywords: ['NextExpress', 'Logistics', 'Shipping', 'Thailand', 'ขนส่ง', 'โลจิสติกส์'],
  openGraph: {
    title: 'NextExpress | Delivering the Next Possibility',
    description: 'ขนส่งวันนี้ สร้างโอกาสให้ธุรกิจคุณในวันหน้า',
    type: 'website',
    locale: 'th_TH',
    url: 'https://nextexpress.asia/',
    siteName: 'NextExpress'
  }
};

export const viewport: Viewport = {
  themeColor: '#003366',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
