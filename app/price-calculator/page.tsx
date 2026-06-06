import type { Metadata } from 'next';
import { SiteHeader } from '../components/SiteHeader';
import { PriceCalculatorPage } from '../components/PriceCalculatorPage';

export const metadata: Metadata = {
  title: 'คำนวณราคา | NextExpress',
  description: 'คำนวณค่าขนส่งเบื้องต้นจากต้นทางและปลายทาง เปรียบเทียบราคาตามน้ำหนัก ปริมาตร และราคาเหมารถตามประเภทรถของ NextExpress'
};

export default function PriceCalculatorRoute() {
  return (
    <main className="price-page-v1">
      <SiteHeader activePage="pricing" locale="th" />
      <PriceCalculatorPage locale="th" />
    </main>
  );
}
