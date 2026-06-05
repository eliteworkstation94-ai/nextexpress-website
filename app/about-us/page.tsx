import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | NextExpress',
  description:
    'NextExpress คือบริษัทโลจิสติกส์ยุคใหม่ที่ส่งมอบบริการที่เชื่อถือได้ มีประสิทธิภาพ และสร้างโอกาสใหม่ให้ธุรกิจทั่วโลก'
};

const navItems = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'เกี่ยวกับเรา', href: '/about-us/' },
  { label: 'บริการของเรา', href: '/#services' },
  { label: 'โซลูชันของเรา', href: '/#solutions' },
  { label: 'ข่าวสาร', href: '/#news' },
  { label: 'ติดต่อเรา', href: '/#contact' }
];

const values = [
  { icon: '盾', title: 'Reliability', thai: 'เชื่อถือได้' },
  { icon: '✦', title: 'Innovation', thai: 'สร้างสรรค์นวัตกรรม' },
  { icon: '👥', title: 'Customer Focus', thai: 'มุ่งเน้นลูกค้า' },
  { icon: '◎', title: 'Global Reach', thai: 'เครือข่ายทั่วโลก' },
  { icon: '🤝', title: 'Integrity', thai: 'ซื่อสัตย์ โปร่งใส' }
];

const stats = [
  { value: '100+', label: 'Countries', thai: 'ประเทศทั่วโลก', icon: '◎' },
  { value: '50,000+', label: 'Shipments/Year', thai: 'การจัดส่งต่อปี', icon: '▱' },
  { value: '1,000+', label: 'Happy Clients', thai: 'ลูกค้าที่ไว้วางใจ', icon: '♙' },
  { value: '98%', label: 'On-Time Delivery', thai: 'จัดส่งตรงเวลา', icon: '◷' },
  { value: '20+', label: 'Years Experience', thai: 'ปีแห่งประสบการณ์', icon: '✺' }
];

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
    <main>
      <Header />

      <section className="about-hero" id="about-us">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-hero-copy">
          <span className="about-title-rule" aria-hidden="true" />
          <p className="about-kicker">ABOUT US</p>
          <h1>เกี่ยวกับเรา</h1>
          <span className="about-short-rule" aria-hidden="true" />
          <p className="about-english">
            NextExpress is a modern logistics company dedicated to delivering reliable,
            efficient, and innovative solutions worldwide.
          </p>
          <p className="about-thai">
            NextExpress คือบริษัทโลจิสติกส์ที่ทันสมัย มุ่งมั่นในการส่งมอบบริการที่เชื่อถือได้
            มีประสิทธิภาพ และสร้างสรรค์นวัตกรรมเพื่อเชื่อมต่อโลกให้ใกล้คุณ
          </p>
        </div>
        <div className="about-hero-collage" aria-label="Warehouse, container port, global business and logistics operations">
          <div className="collage-frame frame-one" />
          <div className="collage-frame frame-two" />
          <div className="collage-frame frame-three" />
        </div>
      </section>

      <section className="about-mission-values" aria-label="Mission and core values">
        <article className="mission-card">
          <div className="mission-icon" aria-hidden="true">◎</div>
          <div>
            <h2>Our Mission</h2>
            <strong>“Delivering the Next Possibility”</strong>
            <p>เราส่งมอบมากกว่าการขนส่ง เราส่งมอบโอกาส และความเป็นไปได้ในอนาคต</p>
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
                <span aria-hidden="true">{value.icon}</span>
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
                <span className="about-stat-icon" aria-hidden="true">{item.icon}</span>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
                <small>{item.thai}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="network-panel">
          <h2>Global Network, Local Expertise</h2>
          <p>เครือข่ายทั่วโลก มาตรฐานระดับสากล บริการด้วยใจในทุกการส่งมอบ</p>
          <div className="world-map" aria-hidden="true">
            <span className="route route-a" />
            <span className="route route-b" />
            <span className="route route-c" />
            <i className="pin pin-1" />
            <i className="pin pin-2" />
            <i className="pin pin-3" />
            <i className="pin pin-4" />
            <i className="pin pin-5" />
            <i className="pin pin-6" />
          </div>
        </div>
      </section>
    </main>
  );
}
