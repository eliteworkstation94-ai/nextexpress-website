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
  { value: '1,248', label: 'Active Shipments', sub: 'งานขนส่งที่กำลังดำเนินการ', trend: '+8.5%', icon: '◎' },
  { value: '94.2%', label: 'On-time Rate', sub: 'อัตราการจัดส่งตรงเวลา', trend: '+2.1%', icon: '◉' },
  { value: '38', label: 'Delayed Orders', sub: 'งานล่าช้า', trend: '-5.3%', icon: '◴' },
  { value: '72', label: 'Customs Pending', sub: 'รอการตรวจสอบเอกสาร', trend: '+12.7%', icon: '▣' },
  { value: '68%', label: 'Warehouse Capacity', sub: 'ความจุคลังสินค้า', trend: '-3%', icon: '⌂' },
  { value: '2.45M', label: 'Revenue Today', sub: 'รายได้วันนี้ (THB)', trend: '+15.6%', icon: '฿' }
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

const warehouseProgress = [
  { label: 'คลังสินค้ากรุงเทพ (BKK)', value: '60%', sub: '10,240 / 15,000', progress: 60 },
  { label: 'คลังสินค้าแหลมฉบัง (LCB)', value: '72%', sub: '8,640 / 12,000', progress: 72 },
  { label: 'คลังสินค้าสุวรรณภูมิ (BKK Airport)', value: '55%', sub: '5,500 / 10,000', progress: 55 },
  { label: 'คลังสินค้าไซ่ง่อน (SIN)', value: '65%', sub: '6,500 / 10,000', progress: 65 }
];

const pickupSchedule = [
  { time: '10:00', client: 'ABC Manufacturing Co.', hub: 'BKK Warehouse' },
  { time: '11:30', client: 'Thai Auto Parts Co.', hub: 'LCB Warehouse' },
  { time: '14:00', client: 'Global Electronics Ltd.', hub: 'BKK Airport' },
  { time: '15:30', client: 'Delta Industrial Co.', hub: 'LCB Warehouse' }
];

const dockStatus = [
  { hub: 'BKK Warehouse', waiting: '12', empty: '8', active: '4' },
  { hub: 'LCB Warehouse', waiting: '10', empty: '6', active: '4' },
  { hub: 'BKK Airport', waiting: '8', empty: '5', active: '3' }
];

const inventoryHighlights = [
  { image: '/images/manage/inventory-electronics.png', name: 'ชิ้นส่วนอิเล็กทรอนิกส์', sku: 'ELEC-001', qty: '1,250', value: '2.35M THB' },
  { image: '/images/manage/inventory-automation.png', name: 'เครื่องจักรอุตสาหกรรม', sku: 'MACH-002', qty: '320', value: '8.64M THB' },
  { image: '/images/manage/inventory-auto-parts.png', name: 'อะไหล่ยานยนต์', sku: 'AUTO-003', qty: '2,180', value: '1.89M THB' },
  { image: '/images/manage/inventory-cold-chain.png', name: 'กล่องควบคุมอุณหภูมิ', sku: 'COLD-004', qty: '860', value: '940K THB' }
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
          <section className="manage-hero manage-hero-panorama" id="overview">
            <div className="manage-hero-copy">
              <p className="section-kicker">NextExpress Manage</p>
              <h1>ศูนย์จัดการขนส่ง NextExpress</h1>
              <strong>Logistics Control Tower</strong>
              <p>
                มุมมองแบบเรียลไทม์ ครอบคลุมทุกการขนส่งในภูมิภาค พร้อมข้อมูล SLA คลังสินค้า ศุลกากร และกิจกรรมสำคัญ
              </p>
            </div>
            <form className="manage-tracking-panel" aria-label="Quick tracking search">
              <label>
                <span>ติดตามสถานะพัสดุ (Quick Tracking)</span>
                <small>กรอกหมายเลขติดตามหรือเลขอ้างอิงงานขนส่ง</small>
              </label>
              <div>
                <input aria-label="Tracking number" placeholder="กรอกหมายเลขติดตาม (Tracking Number)" />
                <button type="submit">ติดตามพัสดุ</button>
              </div>
            </form>
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
            <div className="warehouse-ops-board">
              <article className="ops-progress-card">
                <div className="ops-title-row">
                  <h3>ภาพรวมความจุคลังสินค้า</h3>
                  <a href="#warehouse">ดูทั้งหมด</a>
                </div>
                {warehouseProgress.map((item) => (
                  <div className="ops-progress-row" key={item.label}>
                    <div><strong>{item.label}</strong><small>{item.sub}</small></div>
                    <b>{item.value}</b>
                    <span><i style={{ width: `${item.progress}%` }} /></span>
                  </div>
                ))}
              </article>

              <article className="ops-schedule-card">
                <div className="ops-title-row">
                  <h3>นัดหมายรับสินค้า (วันนี้)</h3>
                  <a href="#shipments">ดูทั้งหมด</a>
                </div>
                {pickupSchedule.map((item) => (
                  <div className="pickup-row" key={`${item.time}-${item.client}`}>
                    <strong>{item.time}</strong>
                    <div><span>{item.client}</span><small>{item.hub}</small></div>
                    <em>รอรับสินค้า</em>
                  </div>
                ))}
              </article>

              <article className="ops-dock-card">
                <div className="ops-title-row">
                  <h3>สถานะประตูรับสินค้า</h3>
                  <a href="#warehouse">ดูทั้งหมด</a>
                </div>
                {dockStatus.map((dock) => (
                  <div className="dock-location-row" key={dock.hub}>
                    <strong>{dock.hub}</strong>
                    <div><span>{dock.waiting}<small>คิวงาน</small></span><span>{dock.empty}<small>ว่าง</small></span><span>{dock.active}<small>ใช้งาน</small></span></div>
                  </div>
                ))}
              </article>

              <article className="ops-inventory-card">
                <div className="ops-title-row">
                  <h3>สินค้าคงคลังเด่น</h3>
                  <a href="#warehouse">ดูทั้งหมด</a>
                </div>
                {inventoryHighlights.map((item) => (
                  <div className="inventory-row" key={item.sku}>
                    <img src={item.image} alt="" />
                    <div>
                      <strong>{item.name}</strong>
                      <small>SKU: {item.sku}</small>
                      <span>{item.qty} ชิ้น · มูลค่า {item.value}</span>
                    </div>
                  </div>
                ))}
              </article>
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
