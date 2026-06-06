import { SiteHeader } from './components/SiteHeader';

const highlights = [
  {
    icon: '🌐',
    title: 'ครอบคลุมทั่วโลก',
    text: 'เครือข่ายกว่า 100+ ประเทศ'
  },
  {
    icon: '🚚',
    title: 'บริการครบวงจร',
    text: 'ขนส่งทางบก ทางเรือ ทางอากาศ และพิธีการศุลกากร'
  },
  {
    icon: '🛡️',
    title: 'เชื่อถือได้ ปลอดภัย',
    text: 'มาตรฐานสากล ดูแลทุกขั้นตอน'
  },
  {
    icon: '⏱️',
    title: 'ตรงเวลา ทุกการส่งมอบ',
    text: 'ด้วยระบบบริหารจัดการที่มีประสิทธิภาพ'
  },
  {
    icon: '🎧',
    title: 'บริการลูกค้า 24/7',
    text: 'พร้อมดูแลและให้คำปรึกษาตลอด 24 ชั่วโมง'
  }
];

const stats = [
  { value: '100+', label: 'ประเทศทั่วโลก', icon: '◎' },
  { value: '50,000+', label: 'พัสดุที่จัดส่งต่อวัน', icon: '▣' },
  { value: '1,000+', label: 'ลูกค้าธุรกิจที่ไว้วางใจ', icon: '♙' },
  { value: '98%', label: 'ส่งมอบตรงเวลา', icon: '▤' },
  { value: '20+', label: 'ปีแห่งประสบการณ์', icon: '✺' }
];

const services = [
  'ขนส่งด่วนภายในประเทศ',
  'นำเข้า-ส่งออกระหว่างประเทศ',
  'Fulfillment และคลังสินค้า',
  'Customs Clearance',
  'B2B Distribution',
  'Tracking & Control Tower'
];


export default function Home() {
  return (
    <main>
      <SiteHeader activePage="home" locale="th" />

      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="eyebrow">NextExpress Logistics</p>
          <h1>
            Delivering <br />
            the <span>Next</span> Possibility
          </h1>
          <div className="accent-line" />
          <h2>ขนส่งวันนี้ สร้างโอกาสให้ธุรกิจคุณในวันหน้า</h2>
          <p className="hero-copy">
            NextExpress มุ่งมั่นให้บริการโลจิสติกส์ครบวงจร ด้วยมาตรฐานระดับสากล
            เทคโนโลยีที่ทันสมัย และทีมงานมืออาชีพ เพื่อส่งมอบสิ่งที่ดีที่สุดให้กับคุณ
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="/services/">บริการของเรา</a>
            <a className="btn secondary" href="/contact/">ติดต่อเรา</a>
          </div>
        </div>

        <form className="tracking-card" aria-label="ติดตามสถานะพัสดุ">
          <div className="tracking-heading">
            <span className="cube" aria-hidden="true">▧</span>
            <div>
              <strong>ติดตามสถานะพัสดุ</strong>
              <small>กรอกหมายเลขติดตามพัสดุของคุณ</small>
            </div>
          </div>
          <div className="tracking-input">
            <input type="text" placeholder="กรอกหมายเลขติดตาม" aria-label="หมายเลขติดตาม" />
            <button type="submit" aria-label="ค้นหา">⌕</button>
          </div>
        </form>
      </section>

      <section className="highlight-strip" aria-label="NextExpress advantages">
        {highlights.map((item) => (
          <article key={item.title}>
            <span aria-hidden="true">{item.icon}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="stats-strip" aria-label="Company statistics">
        {stats.map((item) => (
          <article key={item.value}>
            <span className="stat-icon" aria-hidden="true">{item.icon}</span>
            <div>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="content-section" id="about">
        <div>
          <p className="section-kicker">About NextExpress</p>
          <h2>โลจิสติกส์ที่ออกแบบมาเพื่อการเติบโตของธุรกิจยุคใหม่</h2>
        </div>
        <p>
          เราผสานเครือข่ายขนส่งระดับภูมิภาค ระบบติดตามแบบเรียลไทม์ และทีมปฏิบัติการที่เข้าใจธุรกิจไทย
          เพื่อให้ทุกการส่งมอบมีความเร็ว ความโปร่งใส และความมั่นใจในทุกเส้นทาง
        </p>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="section-kicker">Our Services</p>
          <h2>บริการหลักของเรา</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
              <p>จัดการแบบครบวงจร พร้อม SLA ชัดเจนและทีมดูแลเฉพาะทาง</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="solutions">
        <div>
          <p className="section-kicker">Smart Logistics Solutions</p>
          <h2>พร้อมเชื่อมต่อระบบขนส่งกับธุรกิจของคุณ</h2>
          <p>รองรับระบบติดตาม API, dashboard สำหรับองค์กร และการออกแบบ route ที่เหมาะกับต้นทุนและเวลาส่งมอบ</p>
        </div>
        <a className="btn primary" href="/contact/">เริ่มต้นปรึกษาเรา</a>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>ติดต่อ NextExpress</h2>
          <p>ทีมงานพร้อมดูแลทุกความต้องการด้านโลจิสติกส์ของคุณ</p>
        </div>
        <a href="mailto:hello@nextexpress.asia">hello@nextexpress.asia</a>
      </section>
    </main>
  );
}
