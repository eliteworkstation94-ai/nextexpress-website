import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ติดต่อเรา | NextExpress',
  description:
    'ติดต่อ NextExpress เพื่อขอคำปรึกษา ขอใบเสนอราคา และรับการดูแลด้านโลจิสติกส์ครบวงจร'
};

const navItems = [
  { label: 'หน้าแรก', href: '/', icon: 'home' },
  { label: 'เกี่ยวกับเรา', href: '/about-us/' },
  { label: 'บริการของเรา', href: '/services/' },
  { label: 'โซลูชันของเรา', href: '/solutions/' },
  { label: 'ข่าวสาร', href: '/news/' },
  { label: 'ติดต่อเรา', href: '/contact/' }
] as const;

const contactItems = [
  {
    icon: 'pin',
    title: 'บริษัท เน็กซ์เอ็กซ์เพรส โลจิสติกส์ จำกัด',
    lines: ['999/9 อาคารเน็กซ์เอ็กซ์เพรส ชั้น 15 ถนนสุขุมวิท', 'แขวงบางจาก เขตพระโขนง กรุงเทพมหานคร 10260']
  },
  {
    icon: 'phone',
    title: 'โทรศัพท์',
    highlight: '02-XXX-XXXX',
    lines: ['วันจันทร์ - ศุกร์ เวลา 08:30 - 17:30 น.']
  },
  {
    icon: 'mail',
    title: 'อีเมล',
    highlight: 'info@nextexpress.co.th',
    lines: ['เราจะตอบกลับโดยเร็วที่สุด']
  },
  {
    icon: 'line',
    title: 'LINE Official',
    highlight: '@nextexpress',
    lines: []
  }
] as const;

const contactReasons = ['ขอใบเสนอราคา', 'สอบถามบริการขนส่ง', 'ติดตามสถานะสินค้า', 'บริการคลังสินค้า', 'บริการพิธีการศุลกากร', 'อื่น ๆ'];

const trustItems = [
  { icon: 'clock', title: 'ตอบกลับรวดเร็ว', detail: 'ภายใน 24 ชั่วโมง' },
  { icon: 'headset', title: 'ทีมงานมืออาชีพ', detail: 'พร้อมให้คำปรึกษา' },
  { icon: 'shield', title: 'ข้อมูลปลอดภัย', detail: 'เชื่อถือได้ 100%' },
  { icon: 'handshake', title: 'บริการครบวงจร', detail: 'จบในที่เดียว' }
] as const;

type IconName =
  | 'home'
  | 'pin'
  | 'phone'
  | 'mail'
  | 'line'
  | 'share'
  | 'send'
  | 'clock'
  | 'headset'
  | 'shield'
  | 'handshake'
  | 'plus'
  | 'globe';

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

  if (name === 'pin') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M24 43s13-11.8 13-25A13 13 0 1 0 11 18c0 13.2 13 25 13 25Z" />
        <circle {...common} cx="24" cy="18" r="4.5" />
      </svg>
    );
  }

  if (name === 'phone') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M17 9 11 14c-1.5 1.3-.9 8.4 5.9 15.2C23.8 36 31 36.6 32.2 35.1l5-6.1-8-5.1-3.4 3.4c-3-1.1-5-3.1-6.2-6.1l3.5-3.5L17 9Z" />
      </svg>
    );
  }

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect {...common} x="8" y="13" width="32" height="24" rx="3" />
        <path {...common} d="m9.5 15 14.5 12 14.5-12" />
      </svg>
    );
  }

  if (name === 'line') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M24 10c-8.3 0-15 5.2-15 11.7 0 4.8 3.7 8.9 9 10.7l-.7 5.1 5.7-4.2h1c8.3 0 15-5.2 15-11.6S32.3 10 24 10Z" />
        <path {...common} d="M16.5 22.2h4.2m-4.2-3.3v6.6m6.6-6.6v6.6m3-6.6v6.6m0-6.6 4 6.6m0-6.6v6.6" />
      </svg>
    );
  }

  if (name === 'share') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="15" cy="24" r="4.5" />
        <circle {...common} cx="33" cy="14" r="4.5" />
        <circle {...common} cx="33" cy="34" r="4.5" />
        <path {...common} d="m19 22 10-5.6M19 26l10 5.6" />
      </svg>
    );
  }

  if (name === 'send') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="m4 12 16-8-4.5 16-3.7-6.4L4 12Z" />
        <path {...common} d="m11.8 13.6 4.4-5.3" />
      </svg>
    );
  }

  if (name === 'clock') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="15" />
        <path {...common} d="M24 14v11l7 4" />
      </svg>
    );
  }

  if (name === 'headset') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M11 27v-4a13 13 0 0 1 26 0v4" />
        <rect {...common} x="7" y="24" width="8" height="11" rx="3" />
        <rect {...common} x="33" y="24" width="8" height="11" rx="3" />
        <path {...common} d="M36 35c-1.6 4-5.2 6-10.8 6H22" />
      </svg>
    );
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M24 7 37 12v11c0 8-5.1 14.2-13 18-7.9-3.8-13-10-13-18V12l13-5Z" />
        <path {...common} d="m17.5 24 4.4 4.4 8.9-9.1" />
      </svg>
    );
  }

  if (name === 'handshake') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M17 19 24 13l7 6" />
        <path {...common} d="m7 25 8-8 9 9 4-4 13 9" />
        <path {...common} d="m15 17 9 9 4-4 5 4" />
        <path {...common} d="m13 31 5 5m2-3 4 4m1.5-6 4 4" />
      </svg>
    );
  }

  if (name === 'plus') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle {...common} cx="12" cy="12" r="8" />
        <path {...common} d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...common} cx="12" cy="12" r="8" />
      <path {...common} d="M4 12h16M12 4c2.2 2.4 3.2 5 3.2 8s-1 5.6-3.2 8M12 4c-2.2 2.4-3.2 5-3.2 8s1 5.6 3.2 8" />
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
    <header className="site-header about-site-header contact-site-header">
      <Logo />
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} className={item.href === '/contact/' ? 'active' : ''} href={item.href}>
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
        <a className="quote-btn" href="/contact/#message">ขอใบเสนอราคา</a>
      </div>
    </header>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page-v2">
      <Header />

      <section className="contact-hero-v2" id="contact">
        <div className="contact-hero-bg" aria-hidden="true" />
        <div className="contact-hero-copy">
          <h1>ติดต่อเรา</h1>
          <p>
            เราพร้อมดูแลและให้คำปรึกษา<br />
            เพื่อทุกความต้องการด้าน<span>โลจิสติกส์</span>ของคุณ
          </p>
          <i aria-hidden="true" />
          <small>
            ทีมงาน NextExpress พร้อมให้บริการและตอบทุกข้อสงสัย<br />
            เพื่อให้ธุรกิจของคุณก้าวไปข้างหน้าอย่างมั่นใจ
          </small>
        </div>
      </section>

      <section className="contact-main-v2" aria-label="ช่องทางการติดต่อและส่งข้อความ">
        <aside className="contact-channel-card-v2">
          <h2>ช่องทางการติดต่อ</h2>
          <span className="section-mini-line" aria-hidden="true" />

          <div className="contact-channel-list-v2">
            {contactItems.map((item) => (
              <article className="contact-channel-item-v2" key={item.title}>
                <span className="contact-channel-icon-v2" aria-hidden="true">
                  <LineIcon name={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  {'highlight' in item && item.highlight ? <strong>{item.highlight}</strong> : null}
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="contact-social-v2">
            <span className="contact-channel-icon-v2" aria-hidden="true">
              <LineIcon name="share" />
            </span>
            <div>
              <h3>ติดตามเรา</h3>
              <div className="contact-social-icons-v2" aria-label="Social links">
                <a href="/contact/" aria-label="Facebook">f</a>
                <a href="/contact/" aria-label="LinkedIn">in</a>
                <a href="/contact/" aria-label="YouTube">▶</a>
                <a href="/contact/" aria-label="X">𝕏</a>
              </div>
            </div>
          </div>
        </aside>

        <section className="contact-form-panel-v2" id="message" aria-label="ส่งข้อความถึง NextExpress">
          <h2>ส่งข้อความถึงเรา</h2>
          <span className="section-mini-line" aria-hidden="true" />
          <form className="contact-form-v2">
            <div className="contact-form-grid-v2">
              <label>
                <span>ชื่อ-นามสกุล *</span>
                <input name="name" type="text" placeholder="ชื่อ-นามสกุล *" required />
              </label>
              <label>
                <span>อีเมล *</span>
                <input name="email" type="email" placeholder="อีเมล *" required />
              </label>
              <label>
                <span>เบอร์โทรศัพท์ *</span>
                <input name="phone" type="tel" placeholder="เบอร์โทรศัพท์ *" required />
              </label>
              <label>
                <span>หัวข้อที่ต้องการติดต่อ *</span>
                <select name="topic" defaultValue="" required>
                  <option value="" disabled>
                    หัวข้อที่ต้องการติดต่อ *
                  </option>
                  {contactReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="contact-message-field-v2">
              <span>รายละเอียด / ข้อความ *</span>
              <textarea
                name="message"
                placeholder="กรุณาระบุรายละเอียดเพื่อให้เราสามารถช่วยเหลือคุณได้อย่างตรงจุด"
                required
              />
            </label>
            <label className="contact-consent-v2">
              <input type="checkbox" name="consent" />
              <span>
                ฉันยินยอมให้บริษัทจัดเก็บและใช้ข้อมูลส่วนบุคคลของฉัน ·{' '}
                <a href="/contact/">นโยบายความเป็นส่วนตัว</a>
              </span>
            </label>
            <button className="contact-submit-v2" type="button">
              <LineIcon name="send" />
              <span>ส่งข้อความ</span>
            </button>
          </form>
        </section>

        <aside className="contact-map-card-v2" aria-label="แผนที่สำนักงาน NextExpress">
          <div className="contact-map-image-v2">
            <img src="/contact-map-panel.jpg" alt="แผนที่สำนักงาน NextExpress Logistics Co., Ltd." />
          </div>
          <div className="contact-map-content-v2">
            <h2>สำนักงานใหญ่</h2>
            <span className="section-mini-line" aria-hidden="true" />
            <strong>บริษัท เน็กซ์เอ็กซ์เพรส โลจิสติกส์ จำกัด</strong>
            <p>
              999/9 อาคารเน็กซ์เอ็กซ์เพรส ชั้น 15 ถนนสุขุมวิท<br />
              แขวงบางจาก เขตพระโขนง กรุงเทพมหานคร 10260
            </p>
            <a className="contact-directions-v2" href="/contact/">
              <LineIcon name="send" />
              <span>ดูเส้นทาง</span>
              <LineIcon name="plus" />
            </a>
          </div>
        </aside>
      </section>

      <section className="contact-trust-strip-v2" aria-label="เหตุผลที่ลูกค้าเลือกติดต่อ NextExpress">
        <div className="contact-trust-title-v2">
          <h2>
            ทำไมต้องติดต่อ<br />
            <span>NextExpress?</span>
          </h2>
        </div>
        {trustItems.map((item) => (
          <article className="contact-trust-item-v2" key={item.title}>
            <LineIcon name={item.icon} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
        <div className="contact-trust-phone-v2">
          <LineIcon name="phone" />
          <p>
            ต้องการพูดคุยกับผู้เชี่ยวชาญ?<br />
            โทรหาเราเลย <strong>02-XXX-XXXX</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
