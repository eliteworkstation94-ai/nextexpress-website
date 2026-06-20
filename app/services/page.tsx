import type { Metadata } from 'next';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'บริการของเรา | NextExpress',
  description:
    'บริการโลจิสติกส์ครบวงจรของ NextExpress ทั้งขนส่งทางบก ทางทะเล ทางอากาศ คลังสินค้า พิธีการศุลกากร และโซลูชันพิเศษ'
};

const serviceTabs = [
  { label: 'บริการขนส่ง', icon: 'box', active: true },
  { label: 'บริการคลังสินค้า', icon: 'warehouse' },
  { label: 'บริการพิธีการศุลกากร', icon: 'customs' },
  { label: 'โซลูชันพิเศษ', icon: 'solution' }
] as const;

const services = [
  {
    title: 'ขนส่งทางบก',
    icon: 'truck',
    image: '/service-road.jpg',
    intro: 'บริการขนส่งสินค้าทางบกครอบคลุมทั่วประเทศและประเทศเพื่อนบ้าน',
    bullets: ['รถบรรทุกหลากหลายประเภท', 'ติดตามสถานะการขนส่งแบบเรียลไทม์', 'ปลอดภัย ตรงเวลา']
  },
  {
    title: 'ขนส่งทางทะเล',
    icon: 'ship',
    image: '/service-sea.jpg',
    intro: 'บริการขนส่งสินค้าทางเรือ ทั้ง FCL และ LCL ครอบคลุมทั่วโลก',
    bullets: ['เครือข่ายสายเรือชั้นนำทั่วโลก', 'ราคาคุ้มค่า บริการครบวงจร', 'บริการ Door to Door']
  },
  {
    title: 'ขนส่งทางอากาศ',
    icon: 'plane',
    image: '/service-air.jpg',
    intro: 'บริการขนส่งสินค้าทางอากาศ รวดเร็ว ปลอดภัย เชื่อถือได้',
    bullets: ['รวดเร็ว ตรงเวลา', 'เชื่อมต่อทุกสนามบินทั่วโลก', 'เหมาะสำหรับสินค้ามูลค่าสูง']
  },
  {
    title: 'บริการคลังสินค้า',
    icon: 'warehouse',
    image: '/service-warehouse.jpg',
    intro: 'บริการคลังสินค้ามาตรฐานสากล ปลอดภัยด้วยระบบบริหารจัดการที่ทันสมัย',
    bullets: ['คลังสินค้าทำเลศักยภาพ', 'ระบบ WMS ที่ทันสมัย', 'บริหารสต็อกแม่นยำ']
  },
  {
    title: 'บริการพิธีการศุลกากร',
    icon: 'customs',
    image: '/service-customs.jpg',
    intro: 'บริการดำเนินพิธีการศุลกากร นำเข้า-ส่งออก ครบวงจร',
    bullets: ['ทีมงานผู้เชี่ยวชาญ', 'รวดเร็ว ถูกต้องตามกฎหมาย', 'ลดความเสี่ยงในการนำเข้า-ส่งออก']
  },
  {
    title: 'โซลูชันพิเศษ',
    icon: 'solution',
    image: '/service-solutions.jpg',
    intro: 'ออกแบบโซลูชันโลจิสติกส์ที่เหมาะสมกับธุรกิจของคุณ',
    bullets: ['ให้คำปรึกษาโดยผู้เชี่ยวชาญ', 'โซลูชันที่ยืดหยุ่นและปรับแต่งได้', 'เพิ่มประสิทธิภาพ ลดต้นทุน']
  }
] as const;

const comingSoonServices = ['ขนส่งทางทะเล', 'ขนส่งทางอากาศ', 'บริการพิธีการศุลกากร'];

type IconName =
  | 'home'
  | 'box'
  | 'warehouse'
  | 'customs'
  | 'solution'
  | 'truck'
  | 'ship'
  | 'plane'
  | 'phone'
  | 'headset'
  | 'arrow';

function LineIcon({ name }: { name: IconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.05,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  if (name === 'home') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="m3.5 11 8.5-7 8.5 7" />
        <path {...common} d="M5.5 10.5V20h13v-9.5" />
        <path {...common} d="M10 20v-5h4v5" />
      </svg>
    );
  }

  if (name === 'truck') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M5 15h25v19H5V15Z" />
        <path {...common} d="M30 22h7l6 6v6H30V22Z" />
        <circle {...common} cx="15" cy="36" r="4" />
        <circle {...common} cx="36" cy="36" r="4" />
        <path {...common} d="M10 23h12M3 29h9" />
      </svg>
    );
  }

  if (name === 'ship') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M8 29h32l-4 8H12l-4-8Z" />
        <path {...common} d="M16 29V18h16v11" />
        <path {...common} d="M20 18v-6h8v6" />
        <path {...common} d="M11 39c3 2 6 2 9 0 3 2 6 2 9 0 3 2 6 2 9 0" />
      </svg>
    );
  }

  if (name === 'plane') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M5 27 43 10 31 43l-8-15-18-1Z" />
        <path {...common} d="M23 28 43 10" />
      </svg>
    );
  }

  if (name === 'warehouse') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M7 21 24 11l17 10" />
        <path {...common} d="M10 21v20h28V21" />
        <path {...common} d="M16 41V27h16v14" />
        <path {...common} d="M19 31h10M19 36h10" />
      </svg>
    );
  }

  if (name === 'customs') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M13 6h17l7 7v29H13V6Z" />
        <path {...common} d="M30 6v8h8" />
        <path {...common} d="M18 22h13M18 28h10" />
        <path {...common} d="M31 31 36 36l7-10" />
      </svg>
    );
  }

  if (name === 'solution') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M18 35h12M20 41h8" />
        <path {...common} d="M17 27c-2.5-2.2-3.8-5-3.8-8.3C13.2 12.8 18.1 8 24 8s10.8 4.8 10.8 10.7c0 3.3-1.3 6.1-3.8 8.3-1.8 1.6-2.6 3.1-2.8 5h-8.4c-.2-1.9-1-3.4-2.8-5Z" />
        <path {...common} d="M8 19H4m40 0h-4M10 8l3 3m25-3-3 3" />
      </svg>
    );
  }

  if (name === 'phone') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M16 7 9 12c1.8 12.4 14.6 25.2 27 27l5-7-10-6-4 4c-4.1-2.1-7.8-5.8-10-10l4-4-5-9Z" />
      </svg>
    );
  }

  if (name === 'headset') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M9 27v-4c0-8.3 6.7-15 15-15s15 6.7 15 15v4" />
        <path {...common} d="M9 27h6v10H9V27Zm24 0h6v10h-6V27Z" />
        <path {...common} d="M32 39c-2 2-4.6 3-8 3h-4" />
      </svg>
    );
  }

  if (name === 'arrow') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M5 12h13" />
        <path {...common} d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...common} d="m8 15.5 16-8 16 8-16 8-16-8Z" />
      <path {...common} d="M8 15.5v17L24 41l16-8.5v-17" />
      <path {...common} d="M24 23.5V41M15.5 11.7l16.8 8.4" />
    </svg>
  );
}



export default function ServicesPage() {
  return (
    <main className="services-page-v2">
      <SiteHeader activePage="services" locale="th" />

      <section className="services-hero-v2" id="services">
        <div className="services-hero-bg" aria-hidden="true" />
        <div className="services-hero-copy">
          <h1>บริการของเรา</h1>
          <span aria-hidden="true" />
          <p>
            NextExpress มอบบริการโลจิสติกส์ครบวงจรด้วยมาตรฐานระดับสากล เทคโนโลยีที่ทันสมัย
            และทีมงานมืออาชีพ เพื่อให้ทุกการขนส่งของคุณเป็นไปอย่างราบรื่น ปลอดภัย และตรงเวลา
          </p>
        </div>
      </section>

      <section className="service-tabs-v2" aria-label="ประเภทบริการ">
        {serviceTabs.map((tab) => (
          <button key={tab.label} className={'active' in tab && tab.active ? 'active' : ''} type="button">
            <LineIcon name={tab.icon} />
            <span>{tab.label}</span>
          </button>
        ))}
      </section>

      <section className="service-card-grid-v2" aria-label="รายการบริการของ NextExpress">
        {services.map((service) => {
          const isComingSoon = comingSoonServices.includes(service.title);

          return (
            <article
              className={`service-card-v2${isComingSoon ? ' service-card-coming-soon-v2' : ''}`}
              key={service.title}
              aria-disabled={isComingSoon ? 'true' : undefined}
            >
              <div className="service-photo-v2" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="service-icon-bubble-v2" aria-hidden="true">
                <LineIcon name={service.icon} />
              </div>
              <div className="service-card-body-v2">
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {isComingSoon ? (
                  <div className="service-detail-link-v2 service-detail-link-disabled-v2" aria-hidden="true">
                    <span>เร็ว ๆ นี้</span>
                    <LineIcon name="arrow" />
                  </div>
                ) : (
                  <a className="service-detail-link-v2" href="/contact/">
                    <span>ดูรายละเอียด</span>
                    <LineIcon name="arrow" />
                  </a>
                )}
              </div>
              {isComingSoon ? (
                <div className="service-coming-soon-overlay-v2" aria-label={`${service.title} coming soon`}>
                  <span>COMING SOON</span>
                  <small>เร็ว ๆ นี้</small>
                </div>
              ) : null}
            </article>
          );
        })}
      </section>

      <section className="services-cta-bar-v2" aria-label="ติดต่อขอใบเสนอราคา">
        <div className="cta-support-v2">
          <LineIcon name="headset" />
          <p>ให้เราดูแลการขนส่งของคุณ<br />เพื่อให้คุณโฟกัสกับธุรกิจของคุณได้อย่างเต็มที่</p>
        </div>
        <div className="cta-phone-v2">
          <LineIcon name="phone" />
          <div>
            <span>ติดต่อเรา</span>
            <strong>02-XXX-XXXX</strong>
          </div>
        </div>
        <a className="cta-quote-v2" href="/contact/">
          ขอใบเสนอราคา
          <LineIcon name="arrow" />
        </a>
      </section>
    </main>
  );
}
