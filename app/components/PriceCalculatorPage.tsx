'use client';

import { useMemo, useState } from 'react';
import type { Locale } from './SiteHeader';

type ProvinceCode = 'bkk' | 'cnx' | 'hkt' | 'cbi' | 'kkn' | 'ska' | 'nma';

type Vehicle = {
  key: string;
  nameTh: string;
  nameEn: string;
  descTh: string;
  descEn: string;
  base: number;
  perKm: number;
};

const provinces: Array<{ code: ProvinceCode; th: string; en: string }> = [
  { code: 'bkk', th: 'กรุงเทพฯ', en: 'Bangkok' },
  { code: 'cnx', th: 'เชียงใหม่', en: 'Chiang Mai' },
  { code: 'hkt', th: 'ภูเก็ต', en: 'Phuket' },
  { code: 'cbi', th: 'ชลบุรี', en: 'Chonburi' },
  { code: 'kkn', th: 'ขอนแก่น', en: 'Khon Kaen' },
  { code: 'ska', th: 'สงขลา', en: 'Songkhla' },
  { code: 'nma', th: 'นครราชสีมา', en: 'Nakhon Ratchasima' }
];

const distanceMatrix: Record<string, number> = {
  'bkk-cnx': 696,
  'bkk-hkt': 840,
  'bkk-cbi': 96,
  'bkk-kkn': 450,
  'bkk-ska': 950,
  'bkk-nma': 260,
  'cnx-hkt': 1530,
  'cbi-cnx': 780,
  'cnx-kkn': 670,
  'cnx-ska': 1560,
  'cnx-nma': 610,
  'cbi-hkt': 890,
  'hkt-kkn': 1260,
  'hkt-ska': 430,
  'hkt-nma': 930,
  'cbi-kkn': 520,
  'cbi-ska': 1010,
  'cbi-nma': 300,
  'kkn-ska': 1150,
  'kkn-nma': 210,
  'nma-ska': 930
};

const vehicles: Vehicle[] = [
  { key: 'pickup', nameTh: 'รถกระบะ 4 ล้อ', nameEn: '4-Wheel Pickup', descTh: 'เหมาะกับของไม่เกิน 1 ตัน', descEn: 'For loads up to 1 ton', base: 1600, perKm: 4.2 },
  { key: 'box4', nameTh: 'รถตู้ทึบ 4 ล้อ', nameEn: '4-Wheel Box Truck', descTh: 'กันแดดกันฝน สำหรับกล่องและพัสดุ', descEn: 'Covered body for parcels and boxes', base: 2600, perKm: 6.1 },
  { key: 'six', nameTh: 'รถ 6 ล้อ', nameEn: '6-Wheel Truck', descTh: 'งานกระจายสินค้าและพาเลท', descEn: 'For pallets and distribution work', base: 4500, perKm: 11.5 },
  { key: 'ten', nameTh: 'รถ 10 ล้อ', nameEn: '10-Wheel Truck', descTh: 'เหมาะกับงานล็อตใหญ่', descEn: 'For larger shipment lots', base: 7400, perKm: 16.5 },
  { key: 'cold', nameTh: 'รถห้องเย็น', nameEn: 'Temperature-Control Truck', descTh: 'ควบคุมอุณหภูมิสินค้า', descEn: 'Temperature-controlled logistics', base: 5200, perKm: 14.4 },
  { key: 'trailer', nameTh: 'รถเทรลเลอร์', nameEn: 'Trailer Truck', descTh: 'สำหรับตู้คอนเทนเนอร์ / สินค้าขนาดใหญ่', descEn: 'For containers and oversized goods', base: 8500, perKm: 28 }
];

const copy = {
  th: {
    activeNav: 'คำนวณราคา',
    heroKicker: 'NEXTEXPRESS PRICE CALCULATOR',
    heroTitleA: 'คำนวณ',
    heroTitleB: 'ค่าขนส่ง',
    heroCopy: 'เลือกต้นทาง–ปลายทาง ใส่น้ำหนักหรือปริมาตร แล้วเปรียบเทียบราคาขนส่งทั่วไปกับราคาเหมารถตามประเภทรถได้ในหน้าเดียว',
    badgeRate: 'เปรียบเทียบเรทตามน้ำหนักและปริมาตร',
    badgeFleet: 'ตัวเลือกรถเหมาสำหรับหลายขนาดสินค้า',
    tabParcel: 'ขนส่งตามน้ำหนัก / ปริมาตร',
    tabCharter: 'เหมารถ',
    tabExpress: 'ส่งด่วนพิเศษ',
    formTitle: 'เส้นทางและข้อมูลสินค้า',
    sampleBadge: 'ตัวอย่างราคาเบื้องต้น',
    origin: 'ต้นทาง',
    destination: 'ปลายทาง',
    chooseProvince: 'เลือกจังหวัด / พื้นที่',
    weight: 'น้ำหนักรวม',
    boxes: 'จำนวนกล่อง',
    volume: 'ปริมาตร',
    service: 'บริการ',
    regular: 'มาตรฐาน',
    kg: 'กิโลกรัม',
    pieces: 'ชิ้น',
    length: 'ยาว',
    width: 'กว้าง',
    height: 'สูง',
    pointA: 'จุด A',
    pointB: 'จุด B',
    originWarehouse: 'คลังสินค้าต้นทาง',
    destinationDelivery: 'ปลายทางจัดส่ง',
    distance: 'ระยะทางโดยประมาณ',
    deliveryTime: 'ระยะเวลาขนส่ง',
    priceZone: 'ประเภทราคา',
    summaryTitle: 'ผลคำนวณแนะนำ',
    recommendedPrice: 'ราคาค่าขนส่งแนะนำ',
    calculatedFromWeight: 'คิดจากน้ำหนัก',
    calculatedFromVolume: 'คิดจากปริมาตร',
    weightFee: 'ค่าขนส่งตามน้ำหนัก',
    volumeFee: 'ค่าขนส่งตามปริมาตร',
    insurance: 'ประกันสินค้า',
    pickupFee: 'ค่ารับสินค้าหน้าบ้าน',
    free: 'ฟรี',
    note: 'หมายเหตุ: ราคานี้เป็นตัวอย่างเบื้องต้นสำหรับหน้าเว็บ ค่าจริงควรเชื่อมกับตารางเรทและเงื่อนไขบริการของ NextExpress',
    byWeight: 'คิดตามน้ำหนัก',
    byVolume: 'คิดตามปริมาตร',
    recommended: 'แนะนำ',
    weightExplain: 'เหมาะกับสินค้าน้ำหนักมาก ปริมาตรไม่สูง ระบบแสดงให้เทียบกับราคาปริมาตรทันที',
    volumeExplain: 'เหมาะกับสินค้าขนาดใหญ่แต่น้ำหนักเบา เช่น กล่องพัสดุหรือสินค้าฟู',
    charterTitle: 'ราคาเหมารถตามประเภทรถ',
    charterSubtitle: 'แสดงตัวเลือกหลายประเภท เพื่อให้ลูกค้าเทียบราคาตามขนาดสินค้าและเส้นทาง',
    routeExample: 'เส้นทางที่เลือก',
    startsAt: 'เริ่มต้น',
    bottomTitle: 'ต้องการราคาจริงสำหรับเส้นทางนี้?',
    bottomCopy: 'ส่งข้อมูลให้ทีม NextExpress ตรวจสอบเรทและเงื่อนไขแบบละเอียด',
    bottomCta: 'ขอใบเสนอราคาจริง',
    daySame: 'ภายในวัน',
    dayOne: '1 วัน',
    dayTwo: '1–2 วัน',
    dayThree: '2–3 วัน'
  },
  en: {
    activeNav: 'Price Calculator',
    heroKicker: 'NEXTEXPRESS PRICE CALCULATOR',
    heroTitleA: 'Calculate',
    heroTitleB: 'Shipping Cost',
    heroCopy: 'Select origin and destination, enter weight or volume, then compare parcel freight and charter-truck estimates in one page.',
    badgeRate: 'Compare weight and volume rates',
    badgeFleet: 'Charter truck choices for different cargo sizes',
    tabParcel: 'Weight / Volume Freight',
    tabCharter: 'Charter Truck',
    tabExpress: 'Special Express',
    formTitle: 'Route and cargo details',
    sampleBadge: 'Sample estimate',
    origin: 'Origin',
    destination: 'Destination',
    chooseProvince: 'Select province / area',
    weight: 'Total weight',
    boxes: 'Boxes',
    volume: 'Volume',
    service: 'Service',
    regular: 'Regular',
    kg: 'kilograms',
    pieces: 'pcs',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    pointA: 'Point A',
    pointB: 'Point B',
    originWarehouse: 'Origin warehouse',
    destinationDelivery: 'Delivery destination',
    distance: 'Estimated distance',
    deliveryTime: 'Delivery time',
    priceZone: 'Price zone',
    summaryTitle: 'Recommended estimate',
    recommendedPrice: 'Recommended base freight',
    calculatedFromWeight: 'Calculated from weight',
    calculatedFromVolume: 'Calculated from volume',
    weightFee: 'Weight-based freight',
    volumeFee: 'Volume-based freight',
    insurance: 'Cargo insurance',
    pickupFee: 'Door pickup fee',
    free: 'Free',
    note: 'Note: This is a preliminary example for the website. Final pricing should connect to NextExpress rate tables and service conditions.',
    byWeight: 'By weight',
    byVolume: 'By volume',
    recommended: 'Recommended',
    weightExplain: 'Best for heavier goods with compact volume. Compare it instantly against volume pricing.',
    volumeExplain: 'Best for large but lightweight cargo such as parcel cartons or bulky goods.',
    charterTitle: 'Charter truck prices by vehicle type',
    charterSubtitle: 'Show multiple vehicle choices so customers can compare by route and cargo size.',
    routeExample: 'Selected route',
    startsAt: 'Starts at',
    bottomTitle: 'Need a confirmed price for this route?',
    bottomCopy: 'Send the details to NextExpress so our team can verify exact rates and service conditions.',
    bottomCta: 'Request Confirmed Quote',
    daySame: 'Same day',
    dayOne: '1 day',
    dayTwo: '1–2 days',
    dayThree: '2–3 days'
  }
} as const;

function routeKey(a: ProvinceCode, b: ProvinceCode) {
  return [a, b].sort().join('-');
}

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step;
}

function getDistance(origin: ProvinceCode, destination: ProvinceCode) {
  if (origin === destination) return 35;
  return distanceMatrix[routeKey(origin, destination)] ?? 620;
}

function formatBaht(value: number) {
  return `฿${Math.round(value).toLocaleString('th-TH')}`;
}

function getProvinceLabel(code: ProvinceCode, locale: Locale) {
  const province = provinces.find((item) => item.code === code) ?? provinces[0];
  return locale === 'th' ? province.th : province.en;
}

function getDeliveryLabel(distance: number, locale: Locale) {
  const t = copy[locale];
  if (distance < 150) return t.daySame;
  if (distance < 500) return t.dayOne;
  if (distance < 900) return t.dayTwo;
  return t.dayThree;
}

export function PriceCalculatorPage({ locale = 'th' }: { locale?: Locale }) {
  const t = copy[locale];
  const [mode, setMode] = useState<'parcel' | 'charter' | 'express'>('parcel');
  const [origin, setOrigin] = useState<ProvinceCode>('bkk');
  const [destination, setDestination] = useState<ProvinceCode>('cnx');
  const [weight, setWeight] = useState(140);
  const [boxes, setBoxes] = useState(12);
  const [volume, setVolume] = useState(2);
  const [length, setLength] = useState(120);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(170);

  const estimate = useMemo(() => {
    const distance = getDistance(origin, destination);
    const kgRate = Math.max(12, Math.round(10 + distance / 87));
    const cbmRate = roundTo(1050 + distance * 1.15, 50);
    const weightTotal = roundTo(weight * kgRate, 10);
    const volumeTotal = roundTo(volume * cbmRate, 10);
    const useWeight = weightTotal <= volumeTotal;
    const recommended = useWeight ? weightTotal : volumeTotal;
    const insurance = Math.max(80, roundTo(recommended * 0.045, 10));
    const vehiclePrices = vehicles.map((vehicle) => ({ ...vehicle, price: roundTo(vehicle.base + distance * vehicle.perKm, 100) }));
    return { distance, kgRate, cbmRate, weightTotal, volumeTotal, recommended, insurance, useWeight, vehiclePrices };
  }, [destination, origin, volume, weight]);

  const activeExplanation = estimate.useWeight
    ? `${t.calculatedFromWeight} ${weight} kg × ฿${estimate.kgRate}/kg`
    : `${t.calculatedFromVolume} ${volume.toFixed(1)} CBM × ฿${estimate.cbmRate.toLocaleString('th-TH')}/CBM`;

  return (
    <>
      <section className="price-hero-v1" id="price-calculator">
        <div className="price-hero-content-v1">
          <div>
            <p className="price-hero-kicker-v1">{t.heroKicker}</p>
            <h1>
              {t.heroTitleA}<br />
              <span>{t.heroTitleB}</span>
            </h1>
            <p className="price-hero-copy-v1">{t.heroCopy}</p>
          </div>
          <div className="price-hero-badges-v1">
            <div className="price-hero-badge-v1">
              <strong>kg / CBM</strong>
              <span>{t.badgeRate}</span>
            </div>
            <div className="price-hero-badge-v1">
              <strong>{locale === 'th' ? '6 ประเภท' : '6 types'}</strong>
              <span>{t.badgeFleet}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="price-calculator-wrap-v1">
        <div className="price-mode-tabs-v1" aria-label={locale === 'th' ? 'ประเภทการคำนวณราคา' : 'Pricing mode'}>
          <button className={mode === 'parcel' ? 'active' : ''} type="button" onClick={() => setMode('parcel')}>{t.tabParcel}</button>
          <button className={mode === 'charter' ? 'active' : ''} type="button" onClick={() => setMode('charter')}>{t.tabCharter}</button>
          <button className={mode === 'express' ? 'active' : ''} type="button" onClick={() => setMode('express')}>{t.tabExpress}</button>
        </div>

        <section className="price-calculator-card-v1">
          <div className="price-form-panel-v1">
            <div className="price-panel-title-v1">
              <h2>{t.formTitle}</h2>
              <small>{t.sampleBadge}</small>
            </div>

            <div className="price-field-grid-v1">
              <label className="price-field-v1">
                <span>{t.origin}</span>
                <select value={origin} onChange={(event) => setOrigin(event.target.value as ProvinceCode)}>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>{locale === 'th' ? province.th : province.en}</option>
                  ))}
                </select>
              </label>
              <button className="price-swap-v1" type="button" aria-label="Swap origin and destination" onClick={() => { setOrigin(destination); setDestination(origin); }}>⇄</button>
              <label className="price-field-v1">
                <span>{t.destination}</span>
                <select value={destination} onChange={(event) => setDestination(event.target.value as ProvinceCode)}>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>{locale === 'th' ? province.th : province.en}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="price-measurement-grid-v1">
              <label className="price-metric-input-v1">
                <span>{t.weight}</span>
                <input min="1" type="number" value={weight} onChange={(event) => setWeight(Number(event.target.value) || 0)} />
                <small>{t.kg}</small>
              </label>
              <label className="price-metric-input-v1">
                <span>{t.boxes}</span>
                <input min="1" type="number" value={boxes} onChange={(event) => setBoxes(Number(event.target.value) || 0)} />
                <small>{t.pieces}</small>
              </label>
              <label className="price-metric-input-v1">
                <span>{t.volume}</span>
                <input min="0.1" step="0.1" type="number" value={volume} onChange={(event) => setVolume(Number(event.target.value) || 0)} />
                <small>CBM</small>
              </label>
              <div className="price-metric-input-v1 static-v1">
                <span>{t.service}</span>
                <strong>REG</strong>
                <small>{t.regular}</small>
              </div>
            </div>

            <div className="price-dimension-row-v1" aria-label={locale === 'th' ? 'ขนาดสินค้า' : 'Cargo dimensions'}>
              <label>{t.length}<input min="1" type="number" value={length} onChange={(event) => setLength(Number(event.target.value) || 0)} /><strong>cm</strong></label>
              <label>{t.width}<input min="1" type="number" value={width} onChange={(event) => setWidth(Number(event.target.value) || 0)} /><strong>cm</strong></label>
              <label>{t.height}<input min="1" type="number" value={height} onChange={(event) => setHeight(Number(event.target.value) || 0)} /><strong>cm</strong></label>
            </div>

            <div className="price-route-card-v1">
              <div className="price-route-line-v1">
                <div className="price-pin-v1">
                  <i>{t.pointA}</i>
                  <strong>{getProvinceLabel(origin, locale)}</strong>
                  <small>{t.originWarehouse}</small>
                </div>
                <div className="price-pin-v1 end-v1">
                  <i>{t.pointB}</i>
                  <strong>{getProvinceLabel(destination, locale)}</strong>
                  <small>{t.destinationDelivery}</small>
                </div>
              </div>
              <div className="price-route-meta-v1">
                <div><span>{t.distance}</span><strong>{estimate.distance} km</strong></div>
                <div><span>{t.deliveryTime}</span><strong>{getDeliveryLabel(estimate.distance, locale)}</strong></div>
                <div><span>{t.priceZone}</span><strong>{estimate.distance < 150 ? 'Zone Local' : estimate.distance < 500 ? 'Zone Regional' : 'Zone Long-haul'}</strong></div>
              </div>
            </div>
          </div>

          <aside className="price-summary-panel-v1">
            <h2>{t.summaryTitle}</h2>
            <div className="price-total-box-v1">
              <p>{t.recommendedPrice}</p>
              <strong>{formatBaht(estimate.recommended)}</strong>
              <small>{activeExplanation}</small>
            </div>
            <div className="price-quote-breakdown-v1">
              <div><span>{t.weightFee}</span><strong>{formatBaht(estimate.weightTotal)}</strong></div>
              <div><span>{t.volumeFee}</span><strong>{formatBaht(estimate.volumeTotal)}</strong></div>
              <div><span>{t.insurance}</span><strong>+ {formatBaht(estimate.insurance)}</strong></div>
              <div><span>{t.pickupFee}</span><strong>{t.free}</strong></div>
            </div>
            <p className="price-summary-note-v1">{t.note}</p>
          </aside>
        </section>
      </main>

      <section className="price-results-section-v1" aria-label={locale === 'th' ? 'ผลลัพธ์ราคาแบบน้ำหนักและปริมาตร' : 'Weight and volume price results'}>
        <article className={`price-rate-card-v1 ${estimate.useWeight ? 'active' : ''}`}>
          {estimate.useWeight ? <span className="price-recommended-badge-v1">{t.recommended}</span> : null}
          <h3>{t.byWeight}</h3>
          <div className="price-unit-v1"><strong>฿{estimate.kgRate}</strong><span>/ kg</span></div>
          <p>{t.weightExplain}</p>
          <footer><span>{weight} kg</span><strong>{formatBaht(estimate.weightTotal)}</strong></footer>
        </article>
        <article className={`price-rate-card-v1 ${!estimate.useWeight ? 'active' : ''}`}>
          {!estimate.useWeight ? <span className="price-recommended-badge-v1">{t.recommended}</span> : null}
          <h3>{t.byVolume}</h3>
          <div className="price-unit-v1"><strong>฿{estimate.cbmRate.toLocaleString('th-TH')}</strong><span>/ CBM</span></div>
          <p>{t.volumeExplain}</p>
          <footer><span>{volume.toFixed(1)} CBM</span><strong>{formatBaht(estimate.volumeTotal)}</strong></footer>
        </article>
      </section>

      <section className="price-charter-section-v1" aria-label={locale === 'th' ? 'ราคาเหมารถตามประเภทรถ' : 'Charter truck prices by vehicle type'}>
        <div className="price-section-heading-v1">
          <div>
            <h2>{t.charterTitle}</h2>
            <p>{t.charterSubtitle}</p>
          </div>
          <p>{t.routeExample}: {getProvinceLabel(origin, locale)} → {getProvinceLabel(destination, locale)}</p>
        </div>
        <div className="price-fleet-grid-v1">
          {estimate.vehiclePrices.map((vehicle) => (
            <article className="price-vehicle-card-v1" key={vehicle.key}>
              <div className="price-vehicle-top-v1">
                <div className={`price-truck-icon-v1 ${vehicle.key}`}><span><i /><i /></span></div>
              </div>
              <div className="price-vehicle-body-v1">
                <h3>{locale === 'th' ? vehicle.nameTh : vehicle.nameEn}</h3>
                <p>{locale === 'th' ? vehicle.descTh : vehicle.descEn}</p>
                <div className="price-vehicle-price-v1"><span>{t.startsAt}</span><strong>{formatBaht(vehicle.price)}</strong></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="price-bottom-strip-v1">
        <div>
          <strong>{t.bottomTitle}</strong>
          <span>{t.bottomCopy}</span>
        </div>
        <a href={locale === 'th' ? '/contact/#message' : '/en/contact/#message'}>{t.bottomCta}</a>
      </section>
    </>
  );
}
