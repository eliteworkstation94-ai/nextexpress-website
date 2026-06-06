'use client';

import { useMemo, useState } from 'react';
import type { Locale } from './SiteHeader';

const provinces = [
  { code: 'bkk', th: 'กรุงเทพฯ', en: 'Bangkok', lat: 13.7563, lng: 100.5018 },
  { code: 'acr', th: 'อำนาจเจริญ', en: 'Amnat Charoen', lat: 15.8585, lng: 104.6288 },
  { code: 'atg', th: 'อ่างทอง', en: 'Ang Thong', lat: 14.5896, lng: 100.4551 },
  { code: 'bkn', th: 'บึงกาฬ', en: 'Bueng Kan', lat: 18.3609, lng: 103.6465 },
  { code: 'brm', th: 'บุรีรัมย์', en: 'Buriram', lat: 14.993, lng: 103.1029 },
  { code: 'cco', th: 'ฉะเชิงเทรา', en: 'Chachoengsao', lat: 13.6904, lng: 101.0779 },
  { code: 'cnt', th: 'ชัยนาท', en: 'Chai Nat', lat: 15.1853, lng: 100.1251 },
  { code: 'cpm', th: 'ชัยภูมิ', en: 'Chaiyaphum', lat: 15.8068, lng: 102.0315 },
  { code: 'cti', th: 'จันทบุรี', en: 'Chanthaburi', lat: 12.6113, lng: 102.1038 },
  { code: 'cnx', th: 'เชียงใหม่', en: 'Chiang Mai', lat: 18.7883, lng: 98.9853 },
  { code: 'cri', th: 'เชียงราย', en: 'Chiang Rai', lat: 19.9105, lng: 99.8406 },
  { code: 'cbi', th: 'ชลบุรี', en: 'Chonburi', lat: 13.3611, lng: 100.9847 },
  { code: 'cpn', th: 'ชุมพร', en: 'Chumphon', lat: 10.493, lng: 99.18 },
  { code: 'kls', th: 'กาฬสินธุ์', en: 'Kalasin', lat: 16.4328, lng: 103.5066 },
  { code: 'kpt', th: 'กำแพงเพชร', en: 'Kamphaeng Phet', lat: 16.4828, lng: 99.522 },
  { code: 'kri', th: 'กาญจนบุรี', en: 'Kanchanaburi', lat: 14.0228, lng: 99.5328 },
  { code: 'kkn', th: 'ขอนแก่น', en: 'Khon Kaen', lat: 16.4419, lng: 102.835 },
  { code: 'kbi', th: 'กระบี่', en: 'Krabi', lat: 8.0863, lng: 98.9063 },
  { code: 'lpg', th: 'ลำปาง', en: 'Lampang', lat: 18.2888, lng: 99.4909 },
  { code: 'lpn', th: 'ลำพูน', en: 'Lamphun', lat: 18.5745, lng: 99.0087 },
  { code: 'lei', th: 'เลย', en: 'Loei', lat: 17.486, lng: 101.7223 },
  { code: 'lbr', th: 'ลพบุรี', en: 'Lopburi', lat: 14.7995, lng: 100.6534 },
  { code: 'msn', th: 'แม่ฮ่องสอน', en: 'Mae Hong Son', lat: 19.302, lng: 97.9654 },
  { code: 'mkm', th: 'มหาสารคาม', en: 'Maha Sarakham', lat: 16.1851, lng: 103.3026 },
  { code: 'mdh', th: 'มุกดาหาร', en: 'Mukdahan', lat: 16.5453, lng: 104.7235 },
  { code: 'nyk', th: 'นครนายก', en: 'Nakhon Nayok', lat: 14.2069, lng: 101.2131 },
  { code: 'npt', th: 'นครปฐม', en: 'Nakhon Pathom', lat: 13.8199, lng: 100.0622 },
  { code: 'nkp', th: 'นครพนม', en: 'Nakhon Phanom', lat: 17.392, lng: 104.7696 },
  { code: 'nma', th: 'นครราชสีมา', en: 'Nakhon Ratchasima', lat: 14.9799, lng: 102.0977 },
  { code: 'nsn', th: 'นครสวรรค์', en: 'Nakhon Sawan', lat: 15.7047, lng: 100.1372 },
  { code: 'nst', th: 'นครศรีธรรมราช', en: 'Nakhon Si Thammarat', lat: 8.4304, lng: 99.9631 },
  { code: 'nan', th: 'น่าน', en: 'Nan', lat: 18.7756, lng: 100.773 },
  { code: 'nwt', th: 'นราธิวาส', en: 'Narathiwat', lat: 6.4264, lng: 101.8231 },
  { code: 'nbp', th: 'หนองบัวลำภู', en: 'Nong Bua Lamphu', lat: 17.2218, lng: 102.426 },
  { code: 'nki', th: 'หนองคาย', en: 'Nong Khai', lat: 17.8783, lng: 102.7413 },
  { code: 'nbi', th: 'นนทบุรี', en: 'Nonthaburi', lat: 13.8591, lng: 100.5217 },
  { code: 'pte', th: 'ปทุมธานี', en: 'Pathum Thani', lat: 14.0208, lng: 100.525 },
  { code: 'ptn', th: 'ปัตตานี', en: 'Pattani', lat: 6.8695, lng: 101.2501 },
  { code: 'pna', th: 'พังงา', en: 'Phang Nga', lat: 8.4501, lng: 98.5255 },
  { code: 'plg', th: 'พัทลุง', en: 'Phatthalung', lat: 7.6167, lng: 100.0833 },
  { code: 'pyo', th: 'พะเยา', en: 'Phayao', lat: 19.1665, lng: 99.9019 },
  { code: 'pbn', th: 'เพชรบูรณ์', en: 'Phetchabun', lat: 16.419, lng: 101.1606 },
  { code: 'pbi', th: 'เพชรบุรี', en: 'Phetchaburi', lat: 13.1119, lng: 99.9447 },
  { code: 'pct', th: 'พิจิตร', en: 'Phichit', lat: 16.4429, lng: 100.3482 },
  { code: 'plk', th: 'พิษณุโลก', en: 'Phitsanulok', lat: 16.8211, lng: 100.2659 },
  { code: 'ayt', th: 'พระนครศรีอยุธยา', en: 'Phra Nakhon Si Ayutthaya', lat: 14.3532, lng: 100.5689 },
  { code: 'pre', th: 'แพร่', en: 'Phrae', lat: 18.1446, lng: 100.1403 },
  { code: 'hkt', th: 'ภูเก็ต', en: 'Phuket', lat: 7.8804, lng: 98.3923 },
  { code: 'pri', th: 'ปราจีนบุรี', en: 'Prachinburi', lat: 14.0501, lng: 101.3713 },
  { code: 'pkk', th: 'ประจวบคีรีขันธ์', en: 'Prachuap Khiri Khan', lat: 11.8124, lng: 99.797 },
  { code: 'rng', th: 'ระนอง', en: 'Ranong', lat: 9.9529, lng: 98.6085 },
  { code: 'rbr', th: 'ราชบุรี', en: 'Ratchaburi', lat: 13.5367, lng: 99.8171 },
  { code: 'ryg', th: 'ระยอง', en: 'Rayong', lat: 12.6814, lng: 101.2816 },
  { code: 'ret', th: 'ร้อยเอ็ด', en: 'Roi Et', lat: 16.0538, lng: 103.652 },
  { code: 'skw', th: 'สระแก้ว', en: 'Sa Kaeo', lat: 13.824, lng: 102.0646 },
  { code: 'skn', th: 'สกลนคร', en: 'Sakon Nakhon', lat: 17.1546, lng: 104.1348 },
  { code: 'spk', th: 'สมุทรปราการ', en: 'Samut Prakan', lat: 13.5991, lng: 100.5998 },
  { code: 'skh', th: 'สมุทรสาคร', en: 'Samut Sakhon', lat: 13.5475, lng: 100.2744 },
  { code: 'skm', th: 'สมุทรสงคราม', en: 'Samut Songkhram', lat: 13.4098, lng: 100.0023 },
  { code: 'sri', th: 'สระบุรี', en: 'Saraburi', lat: 14.5289, lng: 100.9101 },
  { code: 'stn', th: 'สตูล', en: 'Satun', lat: 6.6238, lng: 100.0674 },
  { code: 'sbr', th: 'สิงห์บุรี', en: 'Sing Buri', lat: 14.8936, lng: 100.3967 },
  { code: 'ssk', th: 'ศรีสะเกษ', en: 'Si Sa Ket', lat: 15.1186, lng: 104.322 },
  { code: 'ska', th: 'สงขลา', en: 'Songkhla', lat: 7.1898, lng: 100.5951 },
  { code: 'sti', th: 'สุโขทัย', en: 'Sukhothai', lat: 17.0056, lng: 99.8264 },
  { code: 'spb', th: 'สุพรรณบุรี', en: 'Suphan Buri', lat: 14.4745, lng: 100.1177 },
  { code: 'sni', th: 'สุราษฎร์ธานี', en: 'Surat Thani', lat: 9.1382, lng: 99.3215 },
  { code: 'srn', th: 'สุรินทร์', en: 'Surin', lat: 14.8829, lng: 103.4937 },
  { code: 'tak', th: 'ตาก', en: 'Tak', lat: 16.8839, lng: 99.1251 },
  { code: 'trg', th: 'ตรัง', en: 'Trang', lat: 7.5594, lng: 99.6114 },
  { code: 'trt', th: 'ตราด', en: 'Trat', lat: 12.2428, lng: 102.5175 },
  { code: 'ubn', th: 'อุบลราชธานี', en: 'Ubon Ratchathani', lat: 15.2287, lng: 104.8564 },
  { code: 'udn', th: 'อุดรธานี', en: 'Udon Thani', lat: 17.4138, lng: 102.787 },
  { code: 'uti', th: 'อุทัยธานี', en: 'Uthai Thani', lat: 15.3835, lng: 100.0245 },
  { code: 'utd', th: 'อุตรดิตถ์', en: 'Uttaradit', lat: 17.6201, lng: 100.0993 },
  { code: 'yla', th: 'ยะลา', en: 'Yala', lat: 6.5411, lng: 101.2804 },
  { code: 'yst', th: 'ยโสธร', en: 'Yasothon', lat: 15.7926, lng: 104.1453 }
] as const;

type ProvinceCode = (typeof provinces)[number]['code'];

type Vehicle = {
  key: string;
  nameTh: string;
  nameEn: string;
  descTh: string;
  descEn: string;
  base: number;
  perKm: number;
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

const distanceOverrides: Partial<Record<string, number>> = {
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

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step;
}

function getProvince(code: ProvinceCode) {
  return provinces.find((item) => item.code === code) ?? provinces[0];
}

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getCoordinateRoadDistance(origin: ProvinceCode, destination: ProvinceCode) {
  const from = getProvince(origin);
  const to = getProvince(destination);
  const earthRadiusKm = 6371;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const haversine =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  const straightKm = 2 * earthRadiusKm * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
  return Math.max(35, roundTo(straightKm * 1.28, 5));
}

function getDistance(origin: ProvinceCode, destination: ProvinceCode) {
  if (origin === destination) return 35;
  return distanceOverrides[routeKey(origin, destination)] ?? getCoordinateRoadDistance(origin, destination);
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
