import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader, type PageKey } from '../../components/SiteHeader';

export const dynamicParams = false;

type EnglishSlug = 'home' | 'about-us' | 'services' | 'solutions' | 'news' | 'contact';
type PageData = {
  slug: EnglishSlug;
  activePage: PageKey;
  title: string;
  eyebrow: string;
  lead: string;
  heroImage: string;
  ctaLabel: string;
  ctaHref: string;
  cards: Array<{ title: string; text: string }>;
};

const pages: Record<EnglishSlug, PageData> = {
  home: {
    slug: 'home',
    activePage: 'home',
    title: 'Delivering the Next Possibility',
    eyebrow: 'NextExpress Logistics',
    lead: 'Integrated logistics designed for modern business growth — reliable transport, warehouse operations, customs support, and real-time shipment visibility.',
    heroImage: '/hero-logistics.jpg',
    ctaLabel: 'Explore Services',
    ctaHref: '/en/services/',
    cards: [
      { title: 'Nationwide Express', text: 'Fast domestic delivery with professional operations and clear service standards.' },
      { title: 'International Freight', text: 'Air, sea, and cross-border logistics with documentation support.' },
      { title: 'Control Tower Visibility', text: 'Shipment tracking and operating visibility for business teams.' }
    ]
  },
  'about-us': {
    slug: 'about-us',
    activePage: 'about',
    title: 'About NextExpress',
    eyebrow: 'About Us',
    lead: 'NextExpress is a modern logistics partner focused on reliable service, operational clarity, and long-term business growth.',
    heroImage: '/about-hero-scene.jpg',
    ctaLabel: 'Contact Our Team',
    ctaHref: '/en/contact/',
    cards: [
      { title: 'Reliability', text: 'We manage every route with care, visibility, and disciplined execution.' },
      { title: 'Innovation', text: 'Technology and process design help customers move faster with confidence.' },
      { title: 'Customer Focus', text: 'Our team designs practical logistics solutions around real business needs.' }
    ]
  },
  services: {
    slug: 'services',
    activePage: 'services',
    title: 'Our Services',
    eyebrow: 'Services',
    lead: 'A complete logistics service portfolio covering land transport, sea freight, air freight, warehousing, customs clearance, and special solutions.',
    heroImage: '/services-hero-scene.jpg',
    ctaLabel: 'Request a Quote',
    ctaHref: '/en/contact/',
    cards: [
      { title: 'Land Transport', text: 'Nationwide B2B and parcel distribution with clear delivery windows.' },
      { title: 'Sea & Air Freight', text: 'International freight options balanced for cost, lead time, and reliability.' },
      { title: 'Warehouse & Fulfillment', text: 'Inventory, packing, dispatch, and distribution support for growing businesses.' }
    ]
  },
  solutions: {
    slug: 'solutions',
    activePage: 'solutions',
    title: 'Our Solutions',
    eyebrow: 'Designed for Your Business',
    lead: 'Flexible logistics solutions that combine transport, warehousing, customs, and technology into one operating model.',
    heroImage: '/solutions-hero-scene.jpg',
    ctaLabel: 'Design My Solution',
    ctaHref: '/en/contact/',
    cards: [
      { title: 'SME Logistics', text: 'Practical packages for businesses that need speed, control, and predictable costs.' },
      { title: 'Distribution Networks', text: 'Route planning and fulfillment support for multi-location delivery.' },
      { title: 'Tracking Technology', text: 'Visibility tools that help teams monitor status and reduce uncertainty.' }
    ]
  },
  news: {
    slug: 'news',
    activePage: 'news',
    title: 'News & Updates',
    eyebrow: 'News',
    lead: 'Company updates, logistics insights, service announcements, and activity highlights from NextExpress.',
    heroImage: '/news-hero-scene.jpg',
    ctaLabel: 'Talk to Us',
    ctaHref: '/en/contact/',
    cards: [
      { title: 'New Distribution Center', text: 'NextExpress expands operating capacity to support nationwide growth.' },
      { title: 'Real-time Tracking', text: 'Improved shipment visibility for customers and business operators.' },
      { title: 'Logistics Trends', text: 'Insights on Thai and regional supply-chain opportunities.' }
    ]
  },
  contact: {
    slug: 'contact',
    activePage: 'contact',
    title: 'Contact Us',
    eyebrow: 'Contact',
    lead: 'Our team is ready to help with logistics consultation, quotations, shipment inquiries, and business solutions.',
    heroImage: '/contact-hero-scene.jpg',
    ctaLabel: 'Send a Message',
    ctaHref: '#message',
    cards: [
      { title: 'Phone', text: '02-XXX-XXXX · Monday-Friday, 08:30-17:30' },
      { title: 'Email', text: 'hello@nextexpress.asia' },
      { title: 'LINE Official', text: '@nextexpress' }
    ]
  }
};

function slugToPage(slug?: string[]): PageData | null {
  if (!slug || slug.length === 0) return pages.home;
  if (slug.length !== 1) return null;
  return pages[slug[0] as EnglishSlug] ?? null;
}

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['about-us'] },
    { slug: ['services'] },
    { slug: ['solutions'] },
    { slug: ['news'] },
    { slug: ['contact'] }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = slugToPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | NextExpress`,
    description: page.lead
  };
}

function EnglishContactForm() {
  return (
    <section className="english-contact-panel" id="message" aria-label="Contact NextExpress">
      <div className="english-contact-copy">
        <h2>Send a message to NextExpress</h2>
        <p>Tell us what you need and our logistics team will get back to you as soon as possible.</p>
        <ul>
          <li>Quotations and service consultation</li>
          <li>Shipment status and transport inquiries</li>
          <li>Warehouse, customs, and special logistics solutions</li>
        </ul>
      </div>
      <form className="english-contact-form">
        <input type="text" placeholder="Full name *" aria-label="Full name" required />
        <input type="email" placeholder="Email *" aria-label="Email" required />
        <input type="tel" placeholder="Phone number *" aria-label="Phone number" required />
        <select defaultValue="" aria-label="Contact topic" required>
          <option value="" disabled>Contact topic *</option>
          <option>Request a quotation</option>
          <option>Transport services</option>
          <option>Shipment tracking</option>
          <option>Warehouse services</option>
          <option>Customs clearance</option>
          <option>Other</option>
        </select>
        <textarea placeholder="How can we help?" aria-label="Message" required />
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

export default async function EnglishPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = slugToPage(slug);
  if (!page) notFound();

  return (
    <main className={`english-page-v2 english-${page.activePage}-page`}>
      <SiteHeader activePage={page.activePage} locale="en" />

      <section className="english-hero-v2">
        <div className="english-hero-bg" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.93) 34%, rgba(255,255,255,0.45) 58%, rgba(255,255,255,0.08) 100%), url('${page.heroImage}')` }} aria-hidden="true" />
        <div className="english-hero-copy">
          <p className="section-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <span aria-hidden="true" />
          <p>{page.lead}</p>
          <a className="btn primary" href={page.ctaHref}>{page.ctaLabel}</a>
        </div>
      </section>

      <section className="english-content-v2" aria-label={`${page.title} summary`}>
        <div className="english-section-heading">
          <p className="section-kicker">NextExpress Standard</p>
          <h2>Consistent service, clear communication, reliable delivery.</h2>
        </div>
        <div className="english-card-grid-v2">
          {page.cards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      {page.activePage === 'contact' ? <EnglishContactForm /> : null}
    </main>
  );
}
