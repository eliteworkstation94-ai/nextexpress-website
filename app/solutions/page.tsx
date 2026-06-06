import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'โซลูชันของเรา | NextExpress',
  description:
    'โซลูชันโลจิสติกส์ของ NextExpress ออกแบบเฉพาะธุรกิจ เพิ่มประสิทธิภาพ ลดความเสี่ยง ควบคุมต้นทุน และเติบโตอย่างยั่งยืน'
};

const navItems = [
  { label: 'หน้าแรก', href: '/', icon: 'home' },
  { label: 'เกี่ยวกับเรา', href: '/about-us/' },
  { label: 'บริการของเรา', href: '/services/' },
  { label: 'โซลูชันของเรา', href: '/solutions/' },
  { label: 'ข่าวสาร', href: '/#news' },
  { label: 'ติดต่อเรา', href: '/#contact' }
] as const;

const benefits = [
  { icon: 'target', title: 'ออกแบบเฉพาะธุรกิจ', sub: 'Tailor-made Solution' },
  { icon: 'chart', title: 'เพิ่มประสิทธิภาพ', sub: 'Optimize Performance' },
  { icon: 'shield', title: 'ลดความเสี่ยง', sub: 'Minimize Risk' },
  { icon: 'coin', title: 'ควบคุมต้นทุนได้ดีขึ้น', sub: 'Cost Efficiency' }
] as const;

const solutions = [
  {
    title: 'โซลูชันสำหรับธุรกิจขนาดเล็กและขนาดกลาง (SME)',
    icon: 'user',
    image: '/solution-sme.jpg',
    intro: 'บริการครบวงจร ช่วยให้ธุรกิจ SME เติบโตได้อย่างมั่นใจ',
    bullets: ['ค่าขนส่งคุ้มค่า', 'บริการครบจบในที่เดียว', 'ทีมงานดูแลอย่างใกล้ชิด']
  },
  {
    title: 'โซลูชันคลังสินค้าและกระจายสินค้า',
    icon: 'box',
    image: '/solution-warehouse.jpg',
    intro: 'บริหารจัดการคลังสินค้าและกระจายสินค้าอย่างมีประสิทธิภาพ',
    bullets: ['คลังได้มาตรฐาน', 'ระบบบริหารจัดการ WMS', 'กระจายสินค้าครอบคลุมทั่วประเทศ']
  },
  {
    title: 'โซลูชันขนส่งครบวงจร',
    icon: 'truck',
    image: '/solution-transport.jpg',
    intro: 'บริการขนส่งที่ครอบคลุมทุกเส้นทาง ทั้งในประเทศและต่างประเทศ',
    bullets: ['ขนส่งทางบก / ทางทะเล / ทางอากาศ', 'ติดตามสถานะแบบ Real-time', 'บริการ Door to Door']
  },
  {
    title: 'โซลูชันพิธีการศุลกากรและการค้าระหว่างประเทศ',
    icon: 'customs',
    image: '/solution-customs.jpg',
    intro: 'ดำเนินพิธีการศุลกากรอย่างถูกต้อง รวดเร็ว และโปร่งใส',
    bullets: ['ทีมงานผู้เชี่ยวชาญ', 'ลดความเสี่ยงด้านเอกสาร', 'บริการให้คำปรึกษาครบวงจร']
  },
  {
    title: 'โซลูชันเทคโนโลยีและระบบติดตาม',
    icon: 'network',
    image: '/solution-tech.jpg',
    intro: 'เทคโนโลยีที่ทันสมัย ช่วยให้คุณควบคุมทุกการขนส่งได้อย่างมั่นใจ',
    bullets: ['ระบบติดตามแบบ Real-time', 'Dashboard รายงานวิเคราะห์', 'เชื่อมต่อข้อมูลผ่านระบบ API']
  },
  {
    title: 'โซลูชันเพื่อความยั่งยืน (Green Logistics)',
    icon: 'leaf',
    image: '/solution-green.jpg',
    intro: 'ร่วมขับเคลื่อนธุรกิจสู่ความยั่งยืน ด้วยโซลูชันที่เป็นมิตรต่อสิ่งแวดล้อม',
    bullets: ['ลดการปล่อยคาร์บอน', 'เส้นทางขนส่งที่มีประสิทธิภาพ', 'บรรจุภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อม']
  }
] as const;

const processSteps = [
  { icon: 'search', title: 'วิเคราะห์ความต้องการ', text: 'ทำความเข้าใจธุรกิจและความท้าทายของคุณ' },
  { icon: 'puzzle', title: 'ออกแบบโซลูชัน', text: 'ออกแบบแนวทางที่เหมาะสมเฉพาะสำหรับธุรกิจคุณ' },
  { icon: 'gear', title: 'ดำเนินการ', text: 'จัดการและประสานงานอย่างมืออาชีพ' },
  { icon: 'graph', title: 'ติดตามและพัฒนา', text: 'ติดตามผลและปรับปรุงเพื่อประสิทธิภาพที่ดีต่อเนื่อง' }
] as const;

type IconName =
  | 'home'
  | 'target'
  | 'chart'
  | 'shield'
  | 'coin'
  | 'user'
  | 'box'
  | 'truck'
  | 'customs'
  | 'network'
  | 'leaf'
  | 'search'
  | 'puzzle'
  | 'gear'
  | 'graph'
  | 'phone'
  | 'mail'
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

  if (name === 'target') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="17" />
        <circle {...common} cx="24" cy="24" r="9" />
        <circle fill="currentColor" cx="24" cy="24" r="3.5" />
        <path {...common} d="m31 17 8-8M34 8h6v6" />
      </svg>
    );
  }

  if (name === 'chart') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M8 39h32" />
        <path {...common} d="M12 34V23m8 11V16m8 18V27m8 7V11" />
        <path {...common} d="m12 22 8-8 8 12 8-15" />
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

  if (name === 'coin') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse {...common} cx="24" cy="12" rx="13" ry="6" />
        <path {...common} d="M11 12v18c0 3.3 5.8 6 13 6s13-2.7 13-6V12" />
        <path {...common} d="M11 21c0 3.3 5.8 6 13 6s13-2.7 13-6" />
        <path {...common} d="M36 31 41 36l-8 7" />
      </svg>
    );
  }

  if (name === 'user') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="16" r="7" />
        <path {...common} d="M11 39v-3.2c0-6 5.5-10 13-10s13 4 13 10V39" />
        <path {...common} d="m34 15 4 4 6-8" />
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

  if (name === 'truck') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M5 15h25v19H5V15Z" />
        <path {...common} d="M30 22h7l6 6v6H30V22Z" />
        <circle {...common} cx="15" cy="36" r="4" />
        <circle {...common} cx="36" cy="36" r="4" />
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

  if (name === 'network') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="5" />
        <circle {...common} cx="11" cy="15" r="4" />
        <circle {...common} cx="37" cy="15" r="4" />
        <circle {...common} cx="11" cy="34" r="4" />
        <circle {...common} cx="37" cy="34" r="4" />
        <path {...common} d="M15 17.5 20 21m13-3.5L28 21M15 32l5-4m13 4-5-4" />
      </svg>
    );
  }

  if (name === 'leaf') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M40 8C23 9 12 18 11 33c11 0 25-7 29-25Z" />
        <path {...common} d="M11 40c6-13 15-20 27-29" />
      </svg>
    );
  }

  if (name === 'search') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="21" cy="21" r="12" />
        <path {...common} d="m30 30 10 10" />
      </svg>
    );
  }

  if (name === 'puzzle') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M18 7h12v9h5a5 5 0 0 1 0 10h-5v15H18V30h-5a5 5 0 0 1 0-10h5V7Z" />
      </svg>
    );
  }

  if (name === 'gear') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="6" />
        <path {...common} d="M24 5v7m0 24v7M5 24h7m24 0h7M10.6 10.6l5 5m16.8 16.8 5 5m0-26.8-5 5M15.6 32.4l-5 5" />
      </svg>
    );
  }

  if (name === 'graph') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M7 39h34" />
        <path {...common} d="M13 33V22m10 11V14m10 19V25" />
        <path {...common} d="m12 20 8-7 8 10 9-12" />
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

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M7 13h34v24H7V13Z" />
        <path {...common} d="m8 14 16 13 16-13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...common} d="M5 12h13" />
      <path {...common} d="m13 6 6 6-6 6" />
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
    <header className="site-header about-site-header solutions-site-header">
      <Logo />
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} className={item.href === '/solutions/' ? 'active' : ''} href={item.href}>
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

export default function SolutionsPage() {
  return (
    <main className="solutions-page-v2">
      <Header />

      <section className="solutions-hero-v2" id="solutions">
        <div className="solutions-hero-bg" aria-hidden="true" />
        <div className="solutions-angle-v2" aria-hidden="true" />
        <div className="solutions-hero-copy">
          <h1>โซลูชันของเรา</h1>
          <h2>ออกแบบเพื่อธุรกิจของคุณ</h2>
          <span aria-hidden="true" />
          <p>
            NextExpress นำเสนอโซลูชันโลจิสติกส์ที่ยืดหยุ่น และปรับแต่งได้ตามความต้องการของธุรกิจ
            เพื่อเพิ่มประสิทธิภาพ ลดต้นทุน และสร้างความได้เปรียบในการแข่งขัน
          </p>
        </div>
        <div className="solution-benefits-v2" aria-label="จุดเด่นโซลูชัน">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <LineIcon name={benefit.icon} />
              <strong>{benefit.title}</strong>
              <small>{benefit.sub}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions-heading-v2">
        <h2>โซลูชันที่ตอบโจทย์ทุกความต้องการ</h2>
      </section>

      <section className="solution-card-grid-v2" aria-label="รายการโซลูชันของ NextExpress">
        {solutions.map((solution) => (
          <article className="solution-card-v2" key={solution.title}>
            <div className="solution-photo-v2" style={{ backgroundImage: `url(${solution.image})` }} />
            <div className="solution-icon-bubble-v2" aria-hidden="true">
              <LineIcon name={solution.icon} />
            </div>
            <div className="solution-card-body-v2">
              <h3>{solution.title}</h3>
              <p>{solution.intro}</p>
              <ul>
                {solution.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a className="solution-detail-link-v2" href="/#contact">
                <span>ดูรายละเอียด</span>
                <LineIcon name="arrow" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="solutions-bottom-v2" aria-label="กระบวนการออกแบบโซลูชันและติดต่อเรา">
        <div className="solution-process-v2">
          <h2>กระบวนการออกแบบโซลูชันสำหรับคุณ</h2>
          <div className="process-grid-v2">
            {processSteps.map((step, index) => (
              <article key={step.title}>
                <div className="process-icon-v2"><LineIcon name={step.icon} /></div>
                <span className="process-number-v2">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                {index < processSteps.length - 1 ? <LineIcon name="arrow" /> : null}
              </article>
            ))}
          </div>
        </div>

        <div className="solution-cta-box-v2">
          <h2>ให้เราออกแบบโซลูชันที่ใช่<br /><span>เพื่อธุรกิจของคุณ</span></h2>
          <p>ปรึกษาผู้เชี่ยวชาญของเราได้ฟรี ไม่มีค่าใช้จ่าย</p>
          <div className="solution-cta-actions-v2">
            <a href="/#contact">ติดต่อเรา <LineIcon name="arrow" /></a>
            <div>
              <span><LineIcon name="phone" /> 02-XXX-XXXX</span>
              <span><LineIcon name="mail" /> hello@nextexpress.asia</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
