import { SiteHeader } from '../components/SiteHeader';

const sideNav = [
  ['แดชบอร์ด', 'Dashboard', '▦'],
  ['งานขนส่ง', 'Shipments', '▤'],
  ['ติดตาม', 'Tracking', '⌕'],
  ['คลังสินค้า', 'Warehouse', '▥'],
  ['ศุลกากร', 'Customs', '◇'],
  ['การเงิน', 'Billing', '฿'],
  ['รายงาน', 'Reports', '▧'],
  ['ตั้งค่า', 'Settings', '⚙']
];

const kpis = [
  { value: '3,284', label: 'Active Shipments', sub: 'กำลังจัดส่งวันนี้', trend: '+12.4%', icon: '🚚' },
  { value: '98.2%', label: 'On-time Rate', sub: 'SLA delivery success', trend: '+1.8%', icon: '⏱' },
  { value: '42', label: 'Delayed Orders', sub: 'ต้องติดตามใกล้ชิด', trend: '-8', icon: '⚠' },
  { value: '128', label: 'Customs Pending', sub: 'รอเอกสาร / เคลียร์สินค้า', trend: '18 urgent', icon: '◆' },
  { value: '76%', label: 'Warehouse Capacity', sub: 'Bangkok DC + regional hubs', trend: '+4%', icon: '▥' },
  { value: '฿1.48M', label: 'Revenue Today', sub: 'ยอดงานขนส่งทั้งหมด', trend: '+9.6%', icon: '฿' }
];

const alerts = [
  { type: 'Delay', severity: 'High', time: '7m ago', title: 'NX-TH-884219 ถึงเชียงใหม่ช้ากว่า SLA 42 นาที', meta: 'Domestic Express · แจ้งเตือนลูกค้าแล้ว' },
  { type: 'Customs', severity: 'Review', time: '14m ago', title: 'เอกสาร HS Code สำหรับ INB-2041 ต้องตรวจทาน', meta: 'Import Clearance · Bangkok Port' },
  { type: 'Capacity', severity: 'Queue', time: '22m ago', title: 'Dock B-04 แน่นช่วง 15:00–17:00', meta: 'Warehouse · จัดคิวรถเพิ่ม 3 คัน' },
  { type: 'Message', severity: 'Owner', time: '31m ago', title: 'ลูกค้า B2B ขอปรับ ETA สำหรับ 12 shipments', meta: 'Account team · ตอบกลับภายใน 8 นาที' }
];

const shipments = [
  { id: 'NX-TH-884219', service: 'Domestic Express', from: 'Bangkok', to: 'Chiang Mai', eta: '14:40', carrier: 'NextFleet 42', status: 'Delayed', progress: 74 },
  { id: 'NX-SEA-220419', service: 'Sea Freight', from: 'Laem Chabang', to: 'Singapore', eta: 'Tomorrow', carrier: 'Ocean Link', status: 'On route', progress: 56 },
  { id: 'NX-AIR-730228', service: 'Air Freight', from: 'Suvarnabhumi', to: 'Tokyo', eta: '21:15', carrier: 'Air Cargo 7', status: 'In transit', progress: 68 },
  { id: 'NX-FUL-109643', service: 'Fulfillment', from: 'BKK DC', to: 'Phuket', eta: '18:30', carrier: 'Last Mile A', status: 'Picking', progress: 39 },
  { id: 'NX-CUS-450872', service: 'Customs', from: 'Shanghai', to: 'Bangkok', eta: 'Review', carrier: 'Clearance Desk', status: 'Pending', progress: 24 }
];

const warehouseCards = [
  { name: 'Bangkok Fulfillment Hub', value: '82%', label: 'Storage used', bars: [82, 64, 48] },
  { name: 'Laem Chabang Cross Dock', value: '69%', label: 'Dock utilization', bars: [69, 78, 43] },
  { name: 'Chiang Mai Regional DC', value: '54%', label: 'Outbound wave', bars: [54, 36, 72] }
];

const analytics = [
  { title: 'Carrier Performance', value: '96.8%', copy: 'Top 5 carriers by on-time delivery', bars: [92, 74, 88, 66, 81] },
  { title: 'Delivery SLA', value: '98.2%', copy: '7-day service-level trend', bars: [62, 70, 68, 84, 76] },
  { title: 'Volume by Service', value: '18.7k', copy: 'Domestic, air, sea, customs, fulfillment', bars: [80, 52, 45, 63, 74] }
];

const quickActions = [
  ['✎', 'สร้างงานขนส่ง', 'Create Shipment'],
  ['⌕', 'ติดตามพัสดุ', 'Tracking'],
  ['▤', 'ใบแจ้งหนี้', 'Invoices'],
  ['▧', 'รายงาน SLA', 'SLA Report'],
  ['◇', 'เอกสารศุลกากร', 'Customs Docs'],
  ['▥', 'จัดการคลังสินค้า', 'Warehouse'],
  ['♙', 'ลูกค้า', 'Customers'],
  ['⚙', 'ตั้งค่า', 'Settings']
];

export default function ManagePage() {
  return (
    <main className="manage-page">
      <SiteHeader locale="th" />

      <section className="manage-shell" aria-label="NextExpress management dashboard">
        <aside className="manage-sidebar" aria-label="Admin modules">
          <div className="manage-sidebar-title">
            <span>NX</span>
            <div>
              <strong>Manage</strong>
              <small>Control Tower</small>
            </div>
          </div>
          <nav>
            {sideNav.map(([thai, english, icon], index) => (
              <a key={english} href="#overview" className={index === 0 ? 'active' : ''}>
                <span aria-hidden="true">{icon}</span>
                <strong>{thai}</strong>
                <small>{english}</small>
              </a>
            ))}
          </nav>
          <div className="manage-sidebar-help">
            <span aria-hidden="true">🎧</span>
            <strong>Need Help?</strong>
            <small>ติดต่อทีมซัพพอร์ต</small>
            <a href="tel:020265999">02-026-5999</a>
            <em>support@nextexpress.asia</em>
          </div>
        </aside>

        <div className="manage-content">
          <section className="manage-hero" id="overview">
            <div className="manage-hero-copy">
              <p className="section-kicker">NextExpress Manage</p>
              <h1>ศูนย์จัดการขนส่ง NextExpress</h1>
              <strong>Logistics Control Tower</strong>
              <p>
                รวมทุกสถานะงานขนส่ง คลังสินค้า ศุลกากร SLA และรายงานเชิงปฏิบัติการไว้ในหน้าเดียว
                เพื่อให้ทีมมองเห็นภาพรวมและตัดสินใจได้เร็วขึ้น
              </p>
              <form className="manage-search" aria-label="Quick tracking search">
                <input aria-label="Tracking number" placeholder="ค้นหา Tracking ID, ลูกค้า, เส้นทาง หรือเลขอ้างอิง" />
                <button type="submit">ค้นหา</button>
              </form>
              <div className="manage-hero-actions">
                <a className="btn primary" href="#shipments">สร้างงานขนส่ง</a>
                <a className="btn secondary" href="#analytics">ดูรายงานวันนี้</a>
              </div>
            </div>
            <div className="manage-hero-art" aria-hidden="true">
              <img src="/images/manage/operations-hero.png" alt="" />
              <div className="floating-card card-a">
                <span>On-time</span>
                <strong>98.2%</strong>
              </div>
              <div className="floating-card card-b">
                <span>Live orders</span>
                <strong>3,284</strong>
              </div>
            </div>
          </section>

          <section className="manage-kpi-grid" aria-label="Operations KPI cards">
            {kpis.map((item) => (
              <article key={item.label}>
                <div className="kpi-topline">
                  <span aria-hidden="true">{item.icon}</span>
                  <small>{item.trend}</small>
                </div>
                <strong>{item.value}</strong>
                <h2>{item.label}</h2>
                <p>{item.sub}</p>
              </article>
            ))}
          </section>

          <section className="manage-command-grid">
            <article className="manage-map-card">
              <div className="manage-card-heading">
                <div>
                  <p className="section-kicker">Live Network</p>
                  <h2>Route Map & Control Tower</h2>
                </div>
                <a href="#shipments">ดูทุกเส้นทาง</a>
              </div>
              <div className="map-frame">
                <img src="/images/manage/control-tower-map.png" alt="เส้นทางขนส่งและเครือข่าย NextExpress" />
                <div className="map-filters" aria-hidden="true">
                  <span className="active">Live</span>
                  <span>Air</span>
                  <span>Sea</span>
                  <span>Truck</span>
                  <span>Customs</span>
                </div>
                <div className="map-chip chip-1"><strong>BKK</strong><span>1,084 jobs</span></div>
                <div className="map-chip chip-2"><strong>SEA</strong><span>420 routes</span></div>
                <div className="map-chip chip-3"><strong>Air</strong><span>68 flights</span></div>
              </div>
            </article>

            <aside className="manage-alert-card">
              <div className="manage-card-heading compact">
                <div>
                  <p className="section-kicker">Priority Queue</p>
                  <h2>Alerts & Actions</h2>
                </div>
                <span>24 live</span>
              </div>
              <div className="alert-list">
                {alerts.map((alert) => (
                  <article key={alert.title}>
                    <div className="alert-headline">
                      <span>{alert.type}</span>
                      <small>{alert.severity} · {alert.time}</small>
                    </div>
                    <h3>{alert.title}</h3>
                    <p>{alert.meta}</p>
                    <a href="#shipments">View action</a>
                  </article>
                ))}
              </div>
            </aside>
          </section>

          <section className="manage-table-card" id="shipments">
            <div className="manage-card-heading">
              <div>
                <p className="section-kicker">Shipment Operations</p>
                <h2>Recent Shipments</h2>
              </div>
              <div className="table-actions">
                <button type="button">Export</button>
                <button type="button" className="primary-mini">New Shipment</button>
              </div>
            </div>
            <div className="shipment-table" role="table" aria-label="Recent shipments">
              <div className="shipment-row heading" role="row">
                <span>Tracking</span>
                <span>Service</span>
                <span>Route</span>
                <span>ETA</span>
                <span>Carrier</span>
                <span>Status</span>
                <span>Progress</span>
              </div>
              {shipments.map((item) => (
                <div className="shipment-row" role="row" key={item.id}>
                  <strong>{item.id}</strong>
                  <span>{item.service}</span>
                  <span>{item.from} → {item.to}</span>
                  <span>{item.eta}</span>
                  <span>{item.carrier}</span>
                  <span className={`status-pill ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span>
                  <span className="progress-cell"><i style={{ width: `${item.progress}%` }} /><b>{item.progress}%</b></span>
                </div>
              ))}
            </div>
          </section>

          <section className="manage-warehouse" id="warehouse">
            <div className="manage-card-heading">
              <div>
                <p className="section-kicker">Warehouse & Fulfillment</p>
                <h2>Capacity, Dock Status & Pickup Schedule</h2>
              </div>
              <a href="#analytics">Optimize plan</a>
            </div>
            <div className="warehouse-grid">
              {warehouseCards.map((item) => (
                <article key={item.name}>
                  <div className="warehouse-title">
                    <h3>{item.name}</h3>
                    <strong>{item.value}</strong>
                  </div>
                  <p>{item.label}</p>
                  <div className="warehouse-bars">
                    {item.bars.map((bar, index) => (
                      <span key={`${item.name}-${index}`}><i style={{ width: `${bar}%` }} /></span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="dock-strip">
              <article><strong>18</strong><span>Inbound trucks</span></article>
              <article><strong>32</strong><span>Outbound waves</span></article>
              <article><strong>07</strong><span>Open docks</span></article>
              <article><strong>12m</strong><span>Avg. dwell time</span></article>
            </div>
          </section>

          <section className="manage-analytics" id="analytics">
            <div className="manage-card-heading">
              <div>
                <p className="section-kicker">Performance Analytics</p>
                <h2>Carrier Performance, SLA & Service Volume</h2>
              </div>
              <span className="date-pill">Today · 08:00–18:00</span>
            </div>
            <div className="analytics-grid">
              {analytics.map((item) => (
                <article key={item.title}>
                  <div className="analytics-head">
                    <h3>{item.title}</h3>
                    <strong>{item.value}</strong>
                  </div>
                  <p>{item.copy}</p>
                  <div className="bar-chart" aria-hidden="true">
                    {item.bars.map((bar, index) => (
                      <span key={`${item.title}-${index}`} style={{ height: `${bar}%` }} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="manage-quick-actions" aria-label="Quick actions">
            <div className="manage-card-heading">
              <div>
                <p className="section-kicker">Tools</p>
                <h2>ทางลัดสำหรับทีมปฏิบัติการ</h2>
              </div>
            </div>
            <div className="quick-action-grid">
              {quickActions.map(([icon, thai, english]) => (
                <a href="#overview" key={english}>
                  <span aria-hidden="true">{icon}</span>
                  <strong>{thai}</strong>
                  <small>{english}</small>
                </a>
              ))}
            </div>
          </section>

          <section className="manage-cta-panel">
            <div>
              <p className="section-kicker">Smart Logistics Solutions</p>
              <h2>เชื่อมต่อทุกทีมในระบบเดียว พร้อมข้อมูลตัดสินใจแบบเรียลไทม์</h2>
              <p>รองรับ dashboard สำหรับองค์กร, API tracking, SLA monitoring, route optimization และ workflow สำหรับทีมปฏิบัติการ</p>
            </div>
            <a className="btn primary" href="/contact/#message">ขอเปิดใช้งาน Manage</a>
          </section>
        </div>
      </section>

      <footer className="manage-footer">
        <div className="manage-footer-brand">
          <strong>Next<span>Express</span> Manage</strong>
          <p>ระบบจัดการโลจิสติกส์ครบวงจรสำหรับองค์กร ครอบคลุมการขนส่ง คลังสินค้า ศุลกากร และรายงาน SLA</p>
        </div>
        <div>
          <h3>ติดต่อเรา</h3>
          <p>NextExpress (Thailand) Co., Ltd.</p>
          <p>319 Chamchuri Square, Bangkok 10330</p>
          <a href="mailto:hello@nextexpress.asia">hello@nextexpress.asia</a>
        </div>
        <div>
          <h3>บริการของเรา</h3>
          <p>Air Freight</p>
          <p>Sea Freight</p>
          <p>Warehouse & Fulfillment</p>
          <p>Customs Clearance</p>
        </div>
        <div>
          <h3>ดาวน์โหลดแอป</h3>
          <span className="store-badge">App Store</span>
          <span className="store-badge">Google Play</span>
        </div>
      </footer>
    </main>
  );
}
