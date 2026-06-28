export type Locale = 'th' | 'en';
export type PageKey = 'home' | 'about' | 'services' | 'solutions' | 'news' | 'pricing' | 'contact';

const pagePaths: Record<Locale, Record<PageKey, string>> = {
  th: {
    home: '/',
    about: '/about-us/',
    services: '/services/',
    solutions: '/solutions/',
    news: '/news/',
    pricing: '/price-calculator/',
    contact: '/contact/'
  },
  en: {
    home: '/en/',
    about: '/en/about-us/',
    services: '/en/services/',
    solutions: '/en/solutions/',
    news: '/en/news/',
    pricing: '/en/price-calculator/',
    contact: '/en/contact/'
  }
};

const navLabels: Record<Locale, Record<PageKey, string>> = {
  th: {
    home: 'หน้าแรก',
    about: 'เกี่ยวกับเรา',
    services: 'บริการของเรา',
    solutions: 'โซลูชันของเรา',
    news: 'ข่าวสาร',
    pricing: 'คำนวณราคา',
    contact: 'ติดต่อเรา'
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    solutions: 'Solutions',
    news: 'News',
    pricing: 'Calculator',
    contact: 'Contact'
  }
};

const quoteLabel: Record<Locale, string> = {
  th: 'ขอใบเสนอราคา',
  en: 'Request a Quote'
};

const navOrder: PageKey[] = ['home', 'about', 'services', 'solutions', 'news', 'pricing', 'contact'];

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3.5 11 8.5-7 8.5 7" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.2 2.4 3.2 5 3.2 8S14.2 17.6 12 20" />
      <path d="M12 4c-2.2 2.4-3.2 5-3.2 8s1 5.6 3.2 8" />
    </svg>
  );
}

function Logo({ locale }: { locale: Locale }) {
  return (
    <a className="logo" href={pagePaths[locale].home} aria-label="NextExpress home">
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

export function localizedPath(locale: Locale, page: PageKey) {
  return pagePaths[locale][page];
}

export function SiteHeader({ activePage, locale = 'th' }: { activePage?: PageKey; locale?: Locale }) {
  const languagePage = activePage ?? 'home';
  const switchToThai = pagePaths.th[languagePage];
  const switchToEnglish = pagePaths.en[languagePage];

  return (
    <header className="site-header standard-site-header">
      <Logo locale={locale} />
      <nav aria-label={locale === 'th' ? 'เมนูหลัก' : 'Main navigation'}>
        {navOrder.map((page) => (
          <a key={page} className={activePage === page ? 'active' : ''} href={pagePaths[locale][page]} aria-current={activePage === page ? 'page' : undefined}>
            {page === 'home' ? <HomeIcon /> : null}
            {navLabels[locale][page]}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <div className="language" aria-label={locale === 'th' ? 'เลือกภาษา' : 'Language selector'}>
          <GlobeIcon />
          <a href={switchToThai} className={locale === 'th' ? 'active' : ''} aria-current={locale === 'th' ? 'true' : undefined}>
            TH
          </a>
          <i aria-hidden="true" />
          <a href={switchToEnglish} className={locale === 'en' ? 'active' : ''} aria-current={locale === 'en' ? 'true' : undefined}>
            EN
          </a>
        </div>
        <a className="quote-btn" href={`${pagePaths[locale].contact}#message`}>{quoteLabel[locale]}</a>
      </div>
    </header>
  );
}
