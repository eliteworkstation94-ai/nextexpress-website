import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ข่าวสาร | NextExpress',
  description:
    'ข่าวสาร บทความ และความเคลื่อนไหวล่าสุดในอุตสาหกรรมโลจิสติกส์จาก NextExpress'
};

const navItems = [
  { label: 'หน้าแรก', href: '/', icon: 'home' },
  { label: 'เกี่ยวกับเรา', href: '/about-us/' },
  { label: 'บริการของเรา', href: '/services/' },
  { label: 'โซลูชันของเรา', href: '/solutions/' },
  { label: 'ข่าวสาร', href: '/news/' },
  { label: 'ติดต่อเรา', href: '/#contact' }
] as const;

const tabs = ['ทั้งหมด', 'ข่าวบริษัท', 'อุตสาหกรรมโลจิสติกส์', 'บริการและโซลูชัน', 'กิจกรรม', 'ประกาศ'];

const posts = [
  {
    category: 'ข่าวบริษัท',
    image: '/news-expansion.jpg',
    date: '20 พฤษภาคม 2567',
    title: 'NextExpress เปิดศูนย์กระจายสินค้าแห่งใหม่ยกระดับบริการครอบคลุมทั่วประเทศ',
    excerpt: 'เพิ่มศักยภาพการจัดส่งและกระจายสินค้า รองรับความต้องการของลูกค้าที่เติบโตอย่างต่อเนื่อง'
  },
  {
    category: 'บริการและโซลูชัน',
    image: '/news-tracking.jpg',
    date: '15 พฤษภาคม 2567',
    title: 'NextExpress เปิดตัวระบบ Tracking แบบ Real-time มอบประสบการณ์การจัดส่งที่ดียิ่งขึ้น',
    excerpt: 'ติดตามสถานะสินค้าได้ทุกที่ ทุกเวลา ด้วยระบบที่แม่นยำและปลอดภัย'
  },
  {
    category: 'อุตสาหกรรมโลจิสติกส์',
    image: '/news-industry.jpg',
    date: '8 พฤษภาคม 2567',
    title: 'แนวโน้มโลจิสติกส์ไทย ปี 2024 โอกาสและความท้าทายที่ต้องจับตามอง',
    excerpt: 'เจาะลึกเทรนด์สำคัญที่ส่งผลต่อธุรกิจโลจิสติกส์และซัพพลายเชนในปีนี้'
  },
  {
    category: 'กิจกรรม',
    image: '/news-activity.jpg',
    date: '30 เมษายน 2567',
    title: 'NextExpress จัดกิจกรรมเพื่อสังคม มุ่งมั่นสู่การเติบโตอย่างยั่งยืน',
    excerpt: 'ร่วมปลูกต้นไม้และฟื้นฟูพื้นที่สีเขียว เพื่อสิ่งแวดล้อมที่ดีขึ้นสำหรับชุมชนของเรา'
  },
  {
    category: 'บริการและโซลูชัน',
    image: '/news-airfreight.jpg',
    date: '22 เมษายน 2567',
    title: 'บริการขนส่งครบวงจรจาก NextExpress ทางเลือกที่ตอบโจทย์ทุกธุรกิจ',
    excerpt: 'ครอบคลุมทุกเส้นทาง ทั้งในประเทศและระหว่างประเทศ ด้วยมาตรฐานระดับสากล'
  },
  {
    category: 'ข่าวบริษัท',
    image: '/news-iso.jpg',
    date: '10 เมษายน 2567',
    title: 'NextExpress ได้รับการรับรองมาตรฐาน ISO 9001:2015 ตอกย้ำคุณภาพการให้บริการ',
    excerpt: 'มุ่งมั่นพัฒนาคุณภาพการดำเนินงานอย่างต่อเนื่อง เพื่อความพึงพอใจสูงสุดของลูกค้า'
  }
] as const;

const categories = [
  { label: 'ทั้งหมด', count: 32, icon: 'inbox' },
  { label: 'ข่าวบริษัท', count: 10, icon: 'building' },
  { label: 'อุตสาหกรรมโลจิสติกส์', count: 8, icon: 'globe' },
  { label: 'บริการและโซลูชัน', count: 7, icon: 'box' },
  { label: 'กิจกรรม', count: 5, icon: 'people' },
  { label: 'ประกาศ', count: 2, icon: 'notice' }
] as const;

const popularPosts = posts.slice(0, 3);

type IconName =
  | 'home'
  | 'calendar'
  | 'arrow'
  | 'mail'
  | 'inbox'
  | 'building'
  | 'globe'
  | 'box'
  | 'people'
  | 'notice';

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

  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect {...common} x="4" y="5" width="16" height="15" rx="2" />
        <path {...common} d="M8 3v4m8-4v4M4 10h16" />
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

  if (name === 'inbox') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M4 7h16l-2 10H6L4 7Z" />
        <path {...common} d="M8 7V5h8v2M8 13h2c.5 1.4 1.2 2 2 2s1.5-.6 2-2h2" />
      </svg>
    );
  }

  if (name === 'building') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M5 21V5h10v16M15 9h4v12" />
        <path {...common} d="M8 9h4M8 13h4M8 17h4" />
      </svg>
    );
  }

  if (name === 'globe') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle {...common} cx="12" cy="12" r="8" />
        <path {...common} d="M4 12h16M12 4c2.2 2.4 3.2 5 3.2 8S14.2 17.6 12 20M12 4c-2.2 2.4-3.2 5-3.2 8s1 5.6 3.2 8" />
      </svg>
    );
  }

  if (name === 'box') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="m4 8 8-4 8 4-8 4-8-4Z" />
        <path {...common} d="M4 8v8l8 4 8-4V8M12 12v8" />
      </svg>
    );
  }

  if (name === 'people') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle {...common} cx="9" cy="8" r="3" />
        <path {...common} d="M3.5 20v-1.5c0-3 2.4-5 5.5-5s5.5 2 5.5 5V20" />
        <path {...common} d="M15 11a3 3 0 1 0-.8-5.9M15.5 14c3 .3 5 2 5 4.4V20" />
      </svg>
    );
  }

  if (name === 'notice') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M5 5h14v14H5V5Z" />
        <path {...common} d="M8 9h8M8 13h8M8 17h5" />
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
    <header className="site-header about-site-header news-site-header">
      <Logo />
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} className={item.href === '/news/' ? 'active' : ''} href={item.href}>
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

export default function NewsPage() {
  return (
    <main className="news-page-v2">
      <Header />

      <section className="news-hero-v2" id="news">
        <div className="news-hero-bg" aria-hidden="true" />
        <div className="news-angle-v2" aria-hidden="true" />
        <div className="news-hero-copy">
          <h1>ข่าวสาร</h1>
          <span aria-hidden="true" />
          <p>
            อัปเดตข่าวสารและความเคลื่อนไหวล่าสุด<br />
            ในอุตสาหกรรมโลจิสติกส์จาก <strong>NextExpress</strong>
          </p>
        </div>
      </section>

      <section className="news-layout-v2" aria-label="ข่าวสาร NextExpress">
        <div className="news-main-v2">
          <nav className="news-tabs-v2" aria-label="หมวดหมู่ข่าวสาร">
            {tabs.map((tab, index) => (
              <a key={tab} className={index === 0 ? 'active' : ''} href="#news-list">
                {tab}
              </a>
            ))}
          </nav>

          <div className="news-card-grid-v2" id="news-list">
            {posts.map((post) => (
              <article className="news-card-v2" key={post.title}>
                <div className="news-card-photo-v2" style={{ backgroundImage: `url(${post.image})` }}>
                  <span>{post.category}</span>
                </div>
                <div className="news-card-body-v2">
                  <small><LineIcon name="calendar" /> {post.date}</small>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <a href="#newsletter">อ่านเพิ่มเติม <LineIcon name="arrow" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="news-sidebar-v2" aria-label="หมวดหมู่และข่าวยอดนิยม">
          <section className="sidebar-panel-v2 category-panel-v2">
            <h2>หมวดหมู่ข่าวสาร</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.label}>
                  <span><LineIcon name={category.icon} /> {category.label}</span>
                  <strong>{category.count}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className="sidebar-panel-v2 popular-panel-v2">
            <h2>ข่าวสารยอดนิยม</h2>
            <ol>
              {popularPosts.map((post, index) => (
                <li key={post.title}>
                  <span>{index + 1}</span>
                  <p>{post.title}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="news-promo-v2">
            <div>
              <h2>ไม่พลาดทุกข่าวสารและอัปเดตสำคัญจาก <span>NextExpress</span></h2>
              <p>ติดตามข่าวสารและบทความที่น่าสนใจ เพื่อพัฒนาธุรกิจของคุณไปอีกขั้น</p>
            </div>
            <img src="/news-promo-laptop.jpg" alt="NextExpress newsletter preview" />
          </section>
        </aside>
      </section>

      <section className="news-subscribe-v2" id="newsletter" aria-label="สมัครรับข่าวสาร">
        <div className="subscribe-copy-v2">
          <LineIcon name="mail" />
          <div>
            <h2>สมัครรับข่าวสารจากเรา</h2>
            <p>รับข่าวสาร บทความ และอัปเดตล่าสุดจาก NextExpress ก่อนใคร</p>
          </div>
        </div>
        <form>
          <input type="email" placeholder="กรอกอีเมลของคุณ" aria-label="อีเมลสำหรับสมัครรับข่าวสาร" />
          <button type="submit">สมัครรับข่าวสาร</button>
        </form>
      </section>
    </main>
  );
}
