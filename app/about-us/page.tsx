import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | NextExpress',
  description:
    'NextExpress คือบริษัทโลจิสติกส์ยุคใหม่ที่ส่งมอบบริการที่เชื่อถือได้ มีประสิทธิภาพ และสร้างโอกาสใหม่ให้ธุรกิจทั่วโลก'
};

const navItems = [
  { label: 'หน้าแรก', href: '/', icon: 'home' },
  { label: 'เกี่ยวกับเรา', href: '/about-us/' },
  { label: 'บริการของเรา', href: '/services/' },
  { label: 'โซลูชันของเรา', href: '/solutions/' },
  { label: 'ข่าวสาร', href: '/#news' },
  { label: 'ติดต่อเรา', href: '/#contact' }
] as const;

const values = [
  { icon: 'shield', title: 'Reliability', thai: 'เชื่อถือได้' },
  { icon: 'bulb', title: 'Innovation', thai: 'สร้างสรรค์นวัตกรรม' },
  { icon: 'people', title: 'Customer Focus', thai: 'มุ่งเน้นลูกค้า' },
  { icon: 'globe', title: 'Global Reach', thai: 'เครือข่ายทั่วโลก' },
  { icon: 'handshake', title: 'Integrity', thai: 'ซื่อสัตย์ โปร่งใส' }
] as const;

const stats = [
  { icon: 'globe', value: '100+', label: 'Countries', thai: 'ประเทศทั่วโลก' },
  { icon: 'box', value: '50,000+', label: 'Shipments/Year', thai: 'การจัดส่งต่อปี' },
  { icon: 'people', value: '1,000+', label: 'Happy Clients', thai: 'ลูกค้าที่ไว้วางใจ' },
  { icon: 'clock', value: '98%', label: 'On-Time Delivery', thai: 'จัดส่งตรงเวลา' },
  { icon: 'medal', value: '20+', label: 'Years Experience', thai: 'ปีแห่งประสบการณ์' }
] as const;

type IconName =
  | 'home'
  | 'shield'
  | 'bulb'
  | 'people'
  | 'globe'
  | 'handshake'
  | 'box'
  | 'clock'
  | 'medal';

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

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M24 5 10 10v11c0 10.5 6.4 17.2 14 21 7.6-3.8 14-10.5 14-21V10L24 5Z" />
        <path {...common} d="m17 24 4.4 4.4L31.5 18" />
      </svg>
    );
  }

  if (name === 'bulb') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M18 35h12" />
        <path {...common} d="M20 41h8" />
        <path {...common} d="M17 26.5c-2.4-2.1-3.8-5-3.8-8.2C13.2 12.3 18 7.5 24 7.5s10.8 4.8 10.8 10.8c0 3.2-1.4 6.1-3.8 8.2-1.8 1.6-2.6 3.1-2.8 5H19.8c-.2-1.9-1-3.4-2.8-5Z" />
        <path {...common} d="M24 2.8v3.1M9.4 8.3l2.2 2.2M3.5 22h3.2m31.9 0h5.9M36.4 10.5l2.2-2.2" />
      </svg>
    );
  }

  if (name === 'people') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M18.5 21.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
        <path {...common} d="M6.5 39v-3.8c0-5.1 5.1-8.8 12-8.8s12 3.7 12 8.8V39" />
        <path {...common} d="M33.2 22.1a5.6 5.6 0 1 0-1.6-11" />
        <path {...common} d="M31.7 27.3c5.8.7 9.8 4 9.8 8.4V39" />
      </svg>
    );
  }

  if (name === 'globe') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="18" />
        <path {...common} d="M6 24h36M24 6c5 5.4 7.5 11.4 7.5 18S29 36.6 24 42M24 6c-5 5.4-7.5 11.4-7.5 18S19 36.6 24 42" />
        <path {...common} d="M10.5 14h27M10.5 34h27" />
      </svg>
    );
  }

  if (name === 'handshake') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M17 28 9 20l8-8 7 7" />
        <path {...common} d="m31 28 8-8-8-8-8 8" />
        <path {...common} d="M18 29.5 22.5 34c1.1 1.1 2.9 1.1 4 0L34 26.5" />
        <path {...common} d="m21 18 5 5c1.1 1.1 2.9 1.1 4 0l1.5-1.5" />
        <path {...common} d="m15 25 8.5 8.5M33 25 27 31" />
      </svg>
    );
  }

  if (name === 'box') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="m8 15.5 16-8 16 8-16 8-16-8Z" />
        <path {...common} d="M8 15.5v17L24 41l16-8.5v-17" />
        <path {...common} d="M24 23.5V41M15.5 11.7l16.8 8.4" />
      </svg>
    );
  }

  if (name === 'clock') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="17" />
        <path {...common} d="M24 13v11l7 4" />
        <path {...common} d="M9 24H5M43 24h-4M24 5v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...common} d="M24 6 29 18l13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1 5-12Z" />
      <path {...common} d="M17 31v12l7-4 7 4V31" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="/" aria-label="NextExpress home">
      <span className="logo-mark" aria-hidden="true">
        <span className="speed speed-a" />
        <span className="speed speed-b" />
        <span className="nx">NX</span>
      </span>
      <span className="logo-copy">
        <strong>
          Next<span>Express</span>
        </strong>
        <small>Delivering the Next Possibility</small>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header about-site-header">
      <Logo />
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} className={item.href === '/about-us/' ? 'active' : ''} href={item.href}>
            {'icon' in item ? <LineIcon name={item.icon} /> : null}
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <div className="language" aria-label="Language selector">
          <span aria-hidden="true">🌐</span>
          <strong>TH</strong>
          <i />
          <span>EN</span>
        </div>
        <a className="quote-btn" href="/#contact">ขอใบเสนอราคา</a>
      </div>
    </header>
  );
}

export default function AboutUsPage() {
  return (
    <main className="about-page-v2">
      <Header />

      <section className="about-hero" id="about-us">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-side-stack" aria-hidden="true" />
        <div className="about-hero-copy">
          <span className="about-title-rule" aria-hidden="true" />
          <p className="about-kicker">ABOUT US</p>
          <h1>เกี่ยวกับเรา</h1>
          <span className="about-short-rule" aria-hidden="true" />
          <p className="about-english">
            NextExpress is a modern logistics company dedicated to delivering reliable, efficient, and
            innovative solutions worldwide.
          </p>
          <p className="about-thai">
            NextExpress คือบริษัทโลจิสติกส์ที่ทันสมัย มุ่งมั่นในการส่งมอบบริการที่เชื่อถือได้
            มีประสิทธิภาพ และสร้างสรรค์นวัตกรรมเพื่อเชื่อมต่อโลกให้ใกล้คุณ
          </p>
        </div>
      </section>

      <section className="about-mission-values" aria-label="Mission and core values">
        <article className="mission-card">
          <div className="mission-icon" aria-hidden="true">
            <span />
          </div>
          <div>
            <h2>Our Mission</h2>
            <strong>“Delivering the Next Possibility”</strong>
            <p>เราส่งมอบมากกว่าการขนส่ง<br />เราส่งมอบโอกาส และความเป็นไปได้ในอนาคต</p>
          </div>
        </article>

        <article className="values-card">
          <div className="values-heading">
            <span aria-hidden="true" />
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-item">
                <span aria-hidden="true"><LineIcon name={value.icon} /></span>
                <strong>{value.title}</strong>
                <small>{value.thai}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="about-bottom-grid" aria-label="Company achievements and global network">
        <div className="about-stats-card">
          <h2>ตัวเลขที่สะท้อนความสำเร็จของเรา</h2>
          <div className="about-stats-grid">
            {stats.map((item) => (
              <article key={item.label}>
                <span className="about-stat-icon" aria-hidden="true"><LineIcon name={item.icon} /></span>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
                <small>{item.thai}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="network-panel">
          <h2>Global Network, <span>Local Expertise</span></h2>
          <p>เครือข่ายทั่วโลก มาตรฐานระดับสากล บริการด้วยใจในทุกการส่งมอบ</p>
          <div className="world-map" aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
