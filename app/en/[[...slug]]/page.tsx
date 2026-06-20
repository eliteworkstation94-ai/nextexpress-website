import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader, type PageKey } from '../../components/SiteHeader';
import { PriceCalculatorPage } from '../../components/PriceCalculatorPage';

export const dynamicParams = false;

type EnglishSlug = 'home' | 'about-us' | 'services' | 'solutions' | 'news' | 'price-calculator' | 'contact';

type PageInfo = {
  slug: EnglishSlug;
  activePage: PageKey;
  title: string;
  description: string;
};

const pageInfo: Record<EnglishSlug, PageInfo> = {
  home: {
    slug: 'home',
    activePage: 'home',
    title: 'NextExpress | Delivering the Next Possibility',
    description: 'NextExpress provides integrated logistics services for domestic delivery, international freight, warehousing, customs clearance, and business supply chains.'
  },
  'about-us': {
    slug: 'about-us',
    activePage: 'about',
    title: 'About Us | NextExpress',
    description: 'Learn about NextExpress, our mission, logistics network, values, and commitment to reliable modern logistics.'
  },
  services: {
    slug: 'services',
    activePage: 'services',
    title: 'Our Services | NextExpress',
    description: 'Explore NextExpress logistics services including land transport, sea freight, air freight, warehousing, customs clearance, and tailored solutions.'
  },
  solutions: {
    slug: 'solutions',
    activePage: 'solutions',
    title: 'Our Solutions | NextExpress',
    description: 'Tailored logistics solutions from NextExpress for SME operations, warehousing, distribution, customs, tracking technology, and green logistics.'
  },
  news: {
    slug: 'news',
    activePage: 'news',
    title: 'News | NextExpress',
    description: 'Company news, logistics articles, service updates, and activity highlights from NextExpress.'
  },
  'price-calculator': {
    slug: 'price-calculator',
    activePage: 'pricing',
    title: 'Price Calculator | NextExpress',
    description: 'Estimate NextExpress freight from origin and destination, compare baht per weight, baht per volume, and charter truck prices by vehicle type.'
  },
  contact: {
    slug: 'contact',
    activePage: 'contact',
    title: 'Contact Us | NextExpress',
    description: 'Contact NextExpress for logistics consultation, quotations, shipment inquiries, and business solutions.'
  }
};

function slugToPage(slug?: string[]): PageInfo | null {
  if (!slug || slug.length === 0) return pageInfo.home;
  if (slug.length !== 1) return null;
  return pageInfo[slug[0] as EnglishSlug] ?? null;
}

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['about-us'] },
    { slug: ['services'] },
    { slug: ['solutions'] },
    { slug: ['news'] },
    { slug: ['price-calculator'] },
    { slug: ['contact'] }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = slugToPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description
  };
}

function LineIcon({ name }: { name: string }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.05,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  if (['truck', 'transport'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M5 15h25v19H5V15Z" />
        <path {...common} d="M30 22h7l6 6v6H30V22Z" />
        <circle {...common} cx="15" cy="36" r="4" />
        <circle {...common} cx="36" cy="36" r="4" />
        <path {...common} d="M10 23h12M3 29h9" />
      </svg>
    );
  }

  if (['ship', 'sea'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M8 29h32l-4 8H12l-4-8Z" />
        <path {...common} d="M16 29V18h16v11" />
        <path {...common} d="M20 18v-6h8v6" />
        <path {...common} d="M11 39c3 2 6 2 9 0 3 2 6 2 9 0 3 2 6 2 9 0" />
      </svg>
    );
  }

  if (['plane', 'air'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M5 27 43 10 31 43l-8-15-18-1Z" />
        <path {...common} d="M23 28 43 10" />
      </svg>
    );
  }

  if (['warehouse', 'building'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M7 21 24 11l17 10" />
        <path {...common} d="M10 21v20h28V21" />
        <path {...common} d="M16 41V27h16v14" />
        <path {...common} d="M19 31h10M19 36h10" />
      </svg>
    );
  }

  if (['customs', 'notice'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M13 6h17l7 7v29H13V6Z" />
        <path {...common} d="M30 6v8h8" />
        <path {...common} d="M18 22h13M18 28h10" />
        <path {...common} d="M31 31 36 36l7-10" />
      </svg>
    );
  }

  if (['solution', 'bulb', 'puzzle'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M18 35h12M20 41h8" />
        <path {...common} d="M17 27c-2.5-2.2-3.8-5-3.8-8.3C13.2 12.8 18.1 8 24 8s10.8 4.8 10.8 10.7c0 3.3-1.3 6.1-3.8 8.3-1.8 1.6-2.6 3.1-2.8 5h-8.4c-.2-1.9-1-3.4-2.8-5Z" />
      </svg>
    );
  }

  if (['shield', 'secure'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M24 5 10 10v11c0 10.5 6.4 17.2 14 21 7.6-3.8 14-10.5 14-21V10L24 5Z" />
        <path {...common} d="m17 24 4.4 4.4L31.5 18" />
      </svg>
    );
  }

  if (['people', 'user', 'headset'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="20" cy="16" r="6" />
        <path {...common} d="M8 39v-3c0-5.8 5.3-9.5 12-9.5S32 30.2 32 36v3" />
        <path {...common} d="M33 22a5.4 5.4 0 1 0-1.4-10.4M32.5 28c5.2.6 8.5 3.8 8.5 8v3" />
      </svg>
    );
  }

  if (['globe', 'network'].includes(name)) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="18" />
        <path {...common} d="M6 24h36M24 6c5 5.4 7.5 11.4 7.5 18S29 36.6 24 42M24 6c-5 5.4-7.5 11.4-7.5 18S19 36.6 24 42" />
      </svg>
    );
  }

  if (name === 'clock') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="17" />
        <path {...common} d="M24 13v11l7 4" />
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

  if (name === 'chart' || name === 'graph') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M8 39h32" />
        <path {...common} d="M12 34V23m8 11V16m8 18V27m8 7V11" />
        <path {...common} d="m12 22 8-8 8 12 8-15" />
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
        <rect {...common} x="8" y="13" width="32" height="24" rx="3" />
        <path {...common} d="m9.5 15 14.5 12 14.5-12" />
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

  if (name === 'send') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="m4 12 16-8-4.5 16-3.7-6.4L4 12Z" />
        <path {...common} d="m11.8 13.6 4.4-5.3" />
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

const homeHighlights = [
  { icon: 'globe', title: 'Global Coverage', text: 'Network reach across 100+ countries' },
  { icon: 'truck', title: 'Integrated Service', text: 'Land, sea, air freight, warehousing, and customs support' },
  { icon: 'shield', title: 'Reliable & Secure', text: 'International standards with professional handling' },
  { icon: 'clock', title: 'On-Time Delivery', text: 'Efficient operations for every shipment' },
  { icon: 'headset', title: 'Customer Support', text: 'Consultation and service support for business customers' }
];

const homeStats = [
  { value: '100+', label: 'Countries worldwide', icon: '◎' },
  { value: '50,000+', label: 'Shipments per day', icon: '▣' },
  { value: '1,000+', label: 'Trusted business clients', icon: '♙' },
  { value: '98%', label: 'On-time delivery', icon: '▤' },
  { value: '20+', label: 'Years of experience', icon: '✺' }
];

const homeServices = ['Domestic express delivery', 'International import & export', 'Fulfillment and warehousing', 'Customs clearance', 'B2B distribution', 'Tracking & control tower'];

function EnglishHomePage() {
  return (
    <main>
      <SiteHeader activePage="home" locale="en" />

      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="eyebrow">NextExpress Logistics</p>
          <h1>
            Delivering <br />
            the <span>Next</span> Possibility
          </h1>
          <div className="accent-line" />
          <h2>Logistics that create the next opportunity for your business.</h2>
          <p className="hero-copy">
            NextExpress provides integrated logistics services with international standards, modern technology,
            and a professional operations team to deliver the best outcome for every customer.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="/en/services/">Our Services</a>
            <a className="btn secondary" href="/en/contact/">Contact Us</a>
          </div>
        </div>

        <form className="tracking-card" aria-label="Track shipment">
          <div className="tracking-heading">
            <span className="cube" aria-hidden="true">▧</span>
            <div>
              <strong>Track Shipment</strong>
              <small>Enter your tracking number</small>
            </div>
          </div>
          <div className="tracking-input">
            <input type="text" placeholder="Tracking number" aria-label="Tracking number" />
            <button type="submit" aria-label="Search">⌕</button>
          </div>
        </form>
      </section>

      <section className="highlight-strip" aria-label="NextExpress advantages">
        {homeHighlights.map((item) => (
          <article key={item.title}>
            <span aria-hidden="true"><LineIcon name={item.icon} /></span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="stats-strip" aria-label="Company statistics">
        {homeStats.map((item) => (
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
          <h2>Logistics designed for modern business growth.</h2>
        </div>
        <p>
          We combine regional transport networks, real-time visibility, and operations teams that understand business needs
          to make every shipment faster, clearer, and more dependable.
        </p>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="section-kicker">Our Services</p>
          <h2>Core Services</h2>
        </div>
        <div className="service-grid">
          {homeServices.map((service, index) => (
            <article key={service}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
              <p>End-to-end operations with clear service standards and dedicated support.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="solutions">
        <div>
          <p className="section-kicker">Smart Logistics Solutions</p>
          <h2>Connect your business with smarter logistics operations.</h2>
          <p>Support for tracking APIs, enterprise dashboards, and route designs that balance cost and delivery time.</p>
        </div>
        <a className="btn primary" href="/en/contact/">Start a Consultation</a>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Contact NextExpress</h2>
          <p>Our team is ready to support your logistics needs.</p>
        </div>
        <a href="mailto:hello@nextexpress.asia">hello@nextexpress.asia</a>
      </section>
    </main>
  );
}

const aboutValues = [
  { icon: 'shield', title: 'Reliability', thai: 'Reliable operations' },
  { icon: 'bulb', title: 'Innovation', thai: 'Modern logistics technology' },
  { icon: 'people', title: 'Customer Focus', thai: 'Customer-first service' },
  { icon: 'globe', title: 'Global Reach', thai: 'Worldwide network' },
  { icon: 'handshake', title: 'Integrity', thai: 'Transparent partnership' }
];

const aboutStats = [
  { icon: 'globe', value: '100+', label: 'Countries', thai: 'Global network' },
  { icon: 'box', value: '50,000+', label: 'Shipments/Year', thai: 'Annual shipments' },
  { icon: 'people', value: '1,000+', label: 'Happy Clients', thai: 'Trusted clients' },
  { icon: 'clock', value: '98%', label: 'On-Time Delivery', thai: 'Delivery performance' },
  { icon: 'medal', value: '20+', label: 'Years Experience', thai: 'Industry experience' }
];

function EnglishAboutPage() {
  return (
    <main className="about-page-v2">
      <SiteHeader activePage="about" locale="en" />

      <section className="about-hero" id="about-us">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-side-stack" aria-hidden="true" />
        <div className="about-hero-copy">
          <span className="about-title-rule" aria-hidden="true" />
          <p className="about-kicker">ABOUT US</p>
          <h1>About Us</h1>
          <span className="about-short-rule" aria-hidden="true" />
          <p className="about-english">
            NextExpress is a modern logistics company dedicated to delivering reliable, efficient, and innovative solutions worldwide.
          </p>
          <p className="about-thai">
            We connect businesses with dependable transport networks, smart operations, and service teams that help every shipment move with confidence.
          </p>
        </div>
      </section>

      <section className="about-mission-values" aria-label="Mission and core values">
        <article className="mission-card">
          <div className="mission-icon" aria-hidden="true"><span /></div>
          <div>
            <h2>Our Mission</h2>
            <strong>“Delivering the Next Possibility”</strong>
            <p>We deliver more than logistics.<br />We deliver opportunity, confidence, and future possibilities.</p>
          </div>
        </article>

        <article className="values-card">
          <div className="values-heading">
            <span aria-hidden="true" />
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {aboutValues.map((value) => (
              <div key={value.title} className="value-item">
                <span aria-hidden="true"><LineIcon name={value.icon} /></span>
                <strong>{value.title}</strong>
                <small>{value.thai}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="about-stats-network" aria-label="Global network statistics">
        <div className="about-stats-card">
          {aboutStats.map((stat) => (
            <article key={stat.value}>
              <span aria-hidden="true"><LineIcon name={stat.icon} /></span>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
              <small>{stat.thai}</small>
            </article>
          ))}
        </div>
        <div className="about-map-card" aria-label="Worldwide logistics network">
          <img src="/about-world-map.jpg" alt="NextExpress global logistics network map" />
        </div>
      </section>
    </main>
  );
}

const serviceTabs = [
  { label: 'Transport Services', icon: 'box', active: true },
  { label: 'Warehousing', icon: 'warehouse' },
  { label: 'Customs Clearance', icon: 'customs' },
  { label: 'Special Solutions', icon: 'solution' }
];

const services = [
  { title: 'Land Transport', icon: 'truck', image: '/service-road.jpg', intro: 'Nationwide and cross-border land transport services for business shipments.', bullets: ['Multiple truck types', 'Real-time transport visibility', 'Safe and on-time delivery'] },
  { title: 'Sea Freight', icon: 'ship', image: '/service-sea.jpg', intro: 'FCL and LCL sea freight services with worldwide coverage.', bullets: ['Global carrier network', 'Cost-effective end-to-end service', 'Door-to-door options'] },
  { title: 'Air Freight', icon: 'plane', image: '/service-air.jpg', intro: 'Fast, safe, and reliable air freight for urgent and high-value goods.', bullets: ['Fast lead times', 'Global airport connectivity', 'Ideal for high-value shipments'] },
  { title: 'Warehousing Services', icon: 'warehouse', image: '/service-warehouse.jpg', intro: 'International-standard warehousing supported by modern management systems.', bullets: ['Strategic warehouse locations', 'Modern WMS operations', 'Accurate inventory control'] },
  { title: 'Customs Clearance', icon: 'customs', image: '/service-customs.jpg', intro: 'End-to-end import and export customs clearance handled by specialists.', bullets: ['Experienced customs team', 'Fast and compliant processes', 'Reduced import/export risk'] },
  { title: 'Special Solutions', icon: 'solution', image: '/service-solutions.jpg', intro: 'Tailored logistics solutions designed around your business model.', bullets: ['Expert consultation', 'Flexible customized solutions', 'Higher efficiency and lower cost'] }
];

const comingSoonServices = ['Sea Freight', 'Air Freight', 'Customs Clearance'];

function EnglishServicesPage() {
  return (
    <main className="services-page-v2">
      <SiteHeader activePage="services" locale="en" />

      <section className="services-hero-v2" id="services">
        <div className="services-hero-bg" aria-hidden="true" />
        <div className="services-hero-copy">
          <h1>Our Services</h1>
          <span aria-hidden="true" />
          <p>
            NextExpress provides integrated logistics services with international standards, modern technology,
            and professional teams to make every shipment smooth, secure, and on time.
          </p>
        </div>
      </section>

      <section className="service-tabs-v2" aria-label="Service categories">
        {serviceTabs.map((tab) => (
          <button key={tab.label} className={tab.active ? 'active' : ''} type="button">
            <LineIcon name={tab.icon} />
            <span>{tab.label}</span>
          </button>
        ))}
      </section>

      <section className="service-card-grid-v2" aria-label="NextExpress service list">
        {services.map((service) => {
          const isComingSoon = comingSoonServices.includes(service.title);

          return (
            <article
              className={`service-card-v2${isComingSoon ? ' service-card-coming-soon-v2' : ''}`}
              key={service.title}
              aria-disabled={isComingSoon ? 'true' : undefined}
            >
              <div className="service-photo-v2" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="service-icon-bubble-v2" aria-hidden="true">
                <LineIcon name={service.icon} />
              </div>
              <div className="service-card-body-v2">
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {isComingSoon ? (
                  <div className="service-detail-link-v2 service-detail-link-disabled-v2" aria-hidden="true">
                    <span>Coming Soon</span>
                    <LineIcon name="arrow" />
                  </div>
                ) : (
                  <a className="service-detail-link-v2" href="/en/contact/">
                    <span>View Details</span>
                    <LineIcon name="arrow" />
                  </a>
                )}
              </div>
              {isComingSoon ? (
                <div className="service-coming-soon-overlay-v2" aria-label={`${service.title} coming soon`}>
                  <span>COMING SOON</span>
                  <small>Launching soon</small>
                </div>
              ) : null}
            </article>
          );
        })}
      </section>

      <section className="services-cta-bar-v2" aria-label="Request a quotation">
        <div className="cta-support-v2">
          <LineIcon name="headset" />
          <p>Let us manage your logistics<br />so you can focus fully on your business.</p>
        </div>
        <div className="cta-phone-v2">
          <LineIcon name="phone" />
          <div>
            <span>Contact Us</span>
            <strong>02-XXX-XXXX</strong>
          </div>
        </div>
        <a className="cta-quote-v2" href="/en/contact/">
          Request a Quote
          <LineIcon name="arrow" />
        </a>
      </section>
    </main>
  );
}

const solutionBenefits = [
  { icon: 'target', title: 'Tailor-made Design', sub: 'Business-specific solution' },
  { icon: 'chart', title: 'Performance Optimization', sub: 'Optimize operations' },
  { icon: 'shield', title: 'Risk Reduction', sub: 'Minimize risk' },
  { icon: 'coin', title: 'Better Cost Control', sub: 'Cost efficiency' }
];

const solutions = [
  { title: 'SME Logistics Solution', icon: 'user', image: '/solution-sme.jpg', intro: 'Integrated services that help SMEs grow with confidence.', bullets: ['Cost-effective transport', 'End-to-end service', 'Dedicated support team'] },
  { title: 'Warehouse & Distribution Solution', icon: 'box', image: '/solution-warehouse.jpg', intro: 'Efficient warehouse management and nationwide distribution.', bullets: ['Standardized warehouses', 'WMS operations', 'Nationwide distribution'] },
  { title: 'Full-Service Transport Solution', icon: 'truck', image: '/solution-transport.jpg', intro: 'Transport service coverage across domestic and international routes.', bullets: ['Land / sea / air transport', 'Real-time tracking', 'Door-to-door service'] },
  { title: 'Customs & International Trade Solution', icon: 'customs', image: '/solution-customs.jpg', intro: 'Accurate, fast, and transparent customs clearance operations.', bullets: ['Expert team', 'Lower documentation risk', 'End-to-end consultation'] },
  { title: 'Technology & Tracking Solution', icon: 'network', image: '/solution-tech.jpg', intro: 'Modern technology that helps you control every shipment with confidence.', bullets: ['Real-time tracking', 'Analytics dashboard', 'API data integration'] },
  { title: 'Green Logistics Solution', icon: 'leaf', image: '/solution-green.jpg', intro: 'Sustainable logistics solutions designed for environmentally responsible growth.', bullets: ['Carbon reduction', 'Efficient route planning', 'Eco-friendly packaging options'] }
];

const processSteps = [
  { icon: 'search', title: 'Analyze Needs', text: 'Understand your business and operating challenges.' },
  { icon: 'puzzle', title: 'Design Solution', text: 'Build a practical approach tailored to your business.' },
  { icon: 'gear', title: 'Operate', text: 'Coordinate and execute professionally.' },
  { icon: 'graph', title: 'Track & Improve', text: 'Monitor performance and continuously improve results.' }
];

function EnglishSolutionsPage() {
  return (
    <main className="solutions-page-v2">
      <SiteHeader activePage="solutions" locale="en" />

      <section className="solutions-hero-v2" id="solutions">
        <div className="solutions-hero-bg" aria-hidden="true" />
        <div className="solutions-angle-v2" aria-hidden="true" />
        <div className="solutions-hero-copy">
          <h1>Our Solutions</h1>
          <h2>Designed for Your Business</h2>
          <span aria-hidden="true" />
          <p>
            NextExpress delivers flexible logistics solutions customized to your business needs,
            increasing efficiency, reducing costs, and creating a stronger competitive advantage.
          </p>
        </div>
        <div className="solution-benefits-v2" aria-label="Solution benefits">
          {solutionBenefits.map((benefit) => (
            <article key={benefit.title}>
              <LineIcon name={benefit.icon} />
              <strong>{benefit.title}</strong>
              <small>{benefit.sub}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions-heading-v2">
        <h2>Solutions for every logistics need</h2>
      </section>

      <section className="solution-card-grid-v2" aria-label="NextExpress logistics solutions">
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
              <a className="solution-detail-link-v2" href="/en/contact/">
                <span>View Details</span>
                <LineIcon name="arrow" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="solutions-bottom-v2" aria-label="Solution design process and contact">
        <div className="solution-process-v2">
          <h2>Our solution design process</h2>
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
          <h2>Let us design the right solution<br /><span>for your business.</span></h2>
          <p>Consult with our experts for free.</p>
          <div className="solution-cta-actions-v2">
            <a href="/en/contact/">Contact Us <LineIcon name="arrow" /></a>
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

const newsTabs = ['All', 'Company News', 'Logistics Industry', 'Services & Solutions', 'Activities', 'Announcements'];
const newsPosts = [
  { category: 'Company News', image: '/news-expansion.jpg', date: '20 May 2024', title: 'NextExpress opens a new distribution center to expand nationwide service coverage.', excerpt: 'Increasing delivery and distribution capacity to support continuously growing customer demand.' },
  { category: 'Services & Solutions', image: '/news-tracking.jpg', date: '15 May 2024', title: 'NextExpress launches real-time tracking for a better delivery experience.', excerpt: 'Track shipment status anytime with accurate and secure visibility tools.' },
  { category: 'Logistics Industry', image: '/news-industry.jpg', date: '8 May 2024', title: 'Thai logistics trends in 2024: opportunities and challenges to watch.', excerpt: 'Insights into the trends shaping logistics and supply chains this year.' },
  { category: 'Activities', image: '/news-activity.jpg', date: '30 April 2024', title: 'NextExpress hosts community activities for sustainable growth.', excerpt: 'Supporting green spaces and community development as part of our sustainability commitment.' },
  { category: 'Services & Solutions', image: '/news-airfreight.jpg', date: '22 April 2024', title: 'Integrated transport services from NextExpress for every business need.', excerpt: 'Coverage across domestic and international routes with international service standards.' },
  { category: 'Company News', image: '/news-iso.jpg', date: '10 April 2024', title: 'NextExpress receives ISO 9001:2015 certification for quality service operations.', excerpt: 'Continuously improving operational quality for the highest customer satisfaction.' }
];
const newsCategories = [
  { label: 'All', count: 32, icon: 'inbox' },
  { label: 'Company News', count: 10, icon: 'building' },
  { label: 'Logistics Industry', count: 8, icon: 'globe' },
  { label: 'Services & Solutions', count: 7, icon: 'box' },
  { label: 'Activities', count: 5, icon: 'people' },
  { label: 'Announcements', count: 2, icon: 'notice' }
];

function EnglishNewsPage() {
  const popularPosts = newsPosts.slice(0, 3);
  return (
    <main className="news-page-v2">
      <SiteHeader activePage="news" locale="en" />

      <section className="news-hero-v2" id="news">
        <div className="news-hero-bg" aria-hidden="true" />
        <div className="news-angle-v2" aria-hidden="true" />
        <div className="news-hero-copy">
          <h1>News</h1>
          <span aria-hidden="true" />
          <p>
            Latest updates and movements<br />
            in the logistics industry from <strong>NextExpress</strong>
          </p>
        </div>
      </section>

      <section className="news-layout-v2" aria-label="NextExpress news">
        <div className="news-main-v2">
          <nav className="news-tabs-v2" aria-label="News categories">
            {newsTabs.map((tab, index) => (
              <a key={tab} className={index === 0 ? 'active' : ''} href="#news-list">
                {tab}
              </a>
            ))}
          </nav>

          <div className="news-card-grid-v2" id="news-list">
            {newsPosts.map((post) => (
              <article className="news-card-v2" key={post.title}>
                <div className="news-card-photo-v2" style={{ backgroundImage: `url(${post.image})` }}>
                  <span>{post.category}</span>
                </div>
                <div className="news-card-body-v2">
                  <small><LineIcon name="calendar" /> {post.date}</small>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <a href="#newsletter">Read More <LineIcon name="arrow" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="news-sidebar-v2" aria-label="Categories and popular news">
          <section className="sidebar-panel-v2 category-panel-v2">
            <h2>News Categories</h2>
            <ul>
              {newsCategories.map((category) => (
                <li key={category.label}>
                  <span><LineIcon name={category.icon} /> {category.label}</span>
                  <strong>{category.count}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className="sidebar-panel-v2 popular-panel-v2">
            <h2>Popular News</h2>
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
              <h2>Never miss important news and updates from <span>NextExpress</span></h2>
              <p>Follow useful logistics news and articles to move your business forward.</p>
            </div>
            <img src="/news-promo-laptop.jpg" alt="NextExpress newsletter preview" />
          </section>
        </aside>
      </section>

      <section className="news-subscribe-v2" id="newsletter" aria-label="Subscribe to news">
        <div className="subscribe-copy-v2">
          <LineIcon name="mail" />
          <div>
            <h2>Subscribe to our news</h2>
            <p>Receive the latest news, articles, and updates from NextExpress first.</p>
          </div>
        </div>
        <form>
          <input type="email" placeholder="Enter your email" aria-label="Email for news subscription" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}

const contactItems = [
  { icon: 'pin', title: 'NextExpress Logistics Co., Ltd.', lines: ['999/9 NextExpress Building, 15th Floor, Sukhumvit Road', 'Bang Chak, Phra Khanong, Bangkok 10260'] },
  { icon: 'phone', title: 'Phone', highlight: '02-XXX-XXXX', lines: ['Monday - Friday, 08:30 - 17:30'] },
  { icon: 'mail', title: 'Email', highlight: 'info@nextexpress.co.th', lines: ['We will reply as soon as possible.'] },
  { icon: 'line', title: 'LINE Official', highlight: '@nextexpress', lines: [] }
];
const contactReasons = ['Request a quotation', 'Transport service inquiry', 'Shipment tracking', 'Warehouse services', 'Customs clearance', 'Other'];
const trustItems = [
  { icon: 'clock', title: 'Fast Response', detail: 'Within 24 hours' },
  { icon: 'headset', title: 'Professional Team', detail: 'Ready to consult' },
  { icon: 'shield', title: 'Secure Information', detail: 'Trusted handling' },
  { icon: 'handshake', title: 'Integrated Service', detail: 'One-stop logistics' }
];

function EnglishContactPage() {
  return (
    <main className="contact-page-v2">
      <SiteHeader activePage="contact" locale="en" />

      <section className="contact-hero-v2" id="contact">
        <div className="contact-hero-bg" aria-hidden="true" />
        <div className="contact-hero-copy">
          <h1>Contact Us</h1>
          <p>We are ready to consult and support<br />every <span>logistics</span> need for your business.</p>
          <i aria-hidden="true" />
          <small>NextExpress is ready to answer questions and help your business move forward with confidence.</small>
        </div>
      </section>

      <section className="contact-main-v2" aria-label="Contact channels and message form">
        <aside className="contact-channel-card-v2">
          <h2>Contact Channels</h2>
          <span className="section-mini-line" aria-hidden="true" />
          <div className="contact-channel-list-v2">
            {contactItems.map((item) => (
              <article className="contact-channel-item-v2" key={item.title}>
                <span className="contact-channel-icon-v2" aria-hidden="true"><LineIcon name={item.icon} /></span>
                <div>
                  <h3>{item.title}</h3>
                  {'highlight' in item && item.highlight ? <strong>{item.highlight}</strong> : null}
                  {item.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </article>
            ))}
          </div>
          <div className="contact-social-v2">
            <span className="contact-channel-icon-v2" aria-hidden="true"><LineIcon name="share" /></span>
            <div><h3>Follow Us</h3><div className="contact-social-icons-v2" aria-label="Social links"><a href="/en/contact/" aria-label="Facebook">f</a><a href="/en/contact/" aria-label="LinkedIn">in</a><a href="/en/contact/" aria-label="YouTube">▶</a><a href="/en/contact/" aria-label="X">𝕏</a></div></div>
          </div>
        </aside>

        <section className="contact-form-panel-v2" id="message" aria-label="Send a message to NextExpress">
          <h2>Send a Message</h2>
          <span className="section-mini-line" aria-hidden="true" />
          <form className="contact-form-v2">
            <div className="contact-form-grid-v2">
              <label><span>Full name *</span><input name="name" type="text" placeholder="Full name *" required /></label>
              <label><span>Email *</span><input name="email" type="email" placeholder="Email *" required /></label>
              <label><span>Phone number *</span><input name="phone" type="tel" placeholder="Phone number *" required /></label>
              <label><span>Contact topic *</span><select name="topic" defaultValue="" required><option value="" disabled>Contact topic *</option>{contactReasons.map((reason) => <option key={reason} value={reason}>{reason}</option>)}</select></label>
            </div>
            <label className="contact-message-field-v2"><span>Message *</span><textarea name="message" placeholder="Please describe your request so our team can support you accurately." required /></label>
            <label className="contact-consent-v2"><input type="checkbox" name="consent" /><span>I consent to the company collecting and using my personal data · <a href="/en/contact/">Privacy Policy</a></span></label>
            <button className="contact-submit-v2" type="button"><LineIcon name="send" /><span>Send Message</span></button>
          </form>
        </section>

        <aside className="contact-map-card-v2" aria-label="NextExpress office map">
          <div className="contact-map-image-v2"><img src="/contact-map-panel.jpg" alt="NextExpress Logistics office map" /></div>
          <div className="contact-map-content-v2">
            <h2>Head Office</h2>
            <span className="section-mini-line" aria-hidden="true" />
            <strong>NextExpress Logistics Co., Ltd.</strong>
            <p>999/9 NextExpress Building, 15th Floor, Sukhumvit Road<br />Bang Chak, Phra Khanong, Bangkok 10260</p>
            <a className="contact-directions-v2" href="/en/contact/"><LineIcon name="send" /><span>Get Directions</span><LineIcon name="plus" /></a>
          </div>
        </aside>
      </section>

      <section className="contact-trust-strip-v2" aria-label="Why contact NextExpress">
        <div className="contact-trust-title-v2"><h2>Why contact<br /><span>NextExpress?</span></h2></div>
        {trustItems.map((item) => (
          <article className="contact-trust-item-v2" key={item.title}><LineIcon name={item.icon} /><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>
        ))}
        <div className="contact-trust-phone-v2"><LineIcon name="phone" /><p>Need to speak with an expert?<br />Call us at <strong>02-XXX-XXXX</strong></p></div>
      </section>
    </main>
  );
}

function renderPage(page: PageInfo) {
  if (page.slug === 'home') return <EnglishHomePage />;
  if (page.slug === 'about-us') return <EnglishAboutPage />;
  if (page.slug === 'services') return <EnglishServicesPage />;
  if (page.slug === 'solutions') return <EnglishSolutionsPage />;
  if (page.slug === 'news') return <EnglishNewsPage />;
  if (page.slug === 'price-calculator') {
    return (
      <main className="price-page-v1">
        <SiteHeader activePage="pricing" locale="en" />
        <PriceCalculatorPage locale="en" />
      </main>
    );
  }
  if (page.slug === 'contact') return <EnglishContactPage />;
  return null;
}

export default async function EnglishPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = slugToPage(slug);
  if (!page) notFound();
  return renderPage(page);
}
