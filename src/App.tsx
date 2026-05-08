import './App.css'

const supportEmail = 'support@lunilylabs.com'
const effectiveDate = 'May 8, 2026'

const services = [
  'AI software products',
  'Business automation tools',
  'Customer communication systems',
  'Internal workflow platforms',
]

const principles = [
  'We build focused tools that solve real operational problems.',
  'We keep automation useful, explainable, and controlled by people.',
  'We treat trust, consent, and privacy as part of the product design.',
]

function App() {
  const path = window.location.pathname

  if (path === '/privacy') {
    return <PrivacyPolicy />
  }

  if (path === '/terms') {
    return <TermsOfService />
  }

  return <Home />
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Lunily Labs home">
        <span className="brand-mark">LL</span>
        <span>Lunily Labs</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#services">Services</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Lunily Labs. A software and AI product studio.</p>
      <div>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms</a>
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="eyebrow">Software products and AI tools</div>
          <h1>Building practical software for the next wave of small business operations.</h1>
          <p className="hero-copy">
            Lunily Labs is a software and AI product studio developing focused tools for communication, operations,
            automation, and business workflows. Shadowline is one of the products we are building.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${supportEmail}`}>Start a conversation</a>
            <a className="button secondary" href="/privacy">Review our SMS policy</a>
          </div>
        </section>

        <section className="panel-grid" id="services" aria-label="Lunily Labs services">
          <div className="panel intro-panel">
            <p className="section-label">What we build</p>
            <h2>A parent studio for Shadowline and future software products.</h2>
            <p>
              We create useful software across customer communication, AI assistance, workflow automation, and other
              practical business tools. Some products are public, some are experiments, and others are built for specific
              operational needs.
            </p>
          </div>
          {services.map((service) => (
            <article className="panel service-card" key={service}>
              <span aria-hidden="true">0{services.indexOf(service) + 1}</span>
              <h3>{service}</h3>
            </article>
          ))}
        </section>

        <section className="split-section">
          <div>
            <p className="section-label">How we work</p>
            <h2>Small, capable products with a clear purpose.</h2>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <p key={principle}>{principle}</p>
            ))}
          </div>
        </section>

        <section className="contact-band">
          <p className="section-label">Contact</p>
          <h2>Have a software, AI, or product partnership question?</h2>
          <p>
            Email us at <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. If you request text follow-up from
            Lunily Labs, message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for
            help.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-heading">
          <p className="section-label">Effective {effectiveDate}</p>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how Lunily Labs collects, uses, and protects information when you visit our
            website, contact us, or communicate with us by phone, email, or text message.
          </p>
        </div>

        <LegalSection title="Information we collect">
          <p>
            We may collect information you provide directly, such as your name, email address, phone number, company
            name, project details, and messages you send to us. We may also collect basic website usage information,
            such as device, browser, pages visited, and referring URLs.
          </p>
        </LegalSection>

        <LegalSection title="How we use information">
          <p>
            We use information to respond to inquiries, provide software services, coordinate meetings or demos, operate
            and improve our website, maintain business records, and communicate with you about services you request.
          </p>
        </LegalSection>

        <LegalSection title="SMS and mobile information">
          <p>
            If you provide your phone number and consent to text messages, Lunily Labs may send text messages related to
            your inquiry, product or software questions, meeting coordination, customer support, or requested follow-up
            about Lunily Labs products and services. Message frequency varies. Message and data rates may apply. Reply
            STOP to opt out and HELP for help.
          </p>
          <p>
            Lunily Labs does not sell, rent, or share mobile phone numbers or SMS consent information with third parties
            or affiliates for marketing or promotional purposes.
          </p>
        </LegalSection>

        <LegalSection title="How we share information">
          <p>
            We may share information with service providers that help us operate our website, communications, scheduling,
            analytics, hosting, and business systems. These providers are permitted to use information only to provide
            services to Lunily Labs. We may also disclose information when required by law or to protect our rights,
            users, or services.
          </p>
        </LegalSection>

        <LegalSection title="Data retention and security">
          <p>
            We keep information for as long as reasonably necessary for the purposes described in this policy, unless a
            longer retention period is required by law. We use reasonable administrative, technical, and organizational
            safeguards designed to protect information.
          </p>
        </LegalSection>

        <LegalSection title="Your choices">
          <p>
            You may request that we update or delete information you provided, subject to legal and operational limits.
            You may unsubscribe from text messages at any time by replying STOP.
          </p>
        </LegalSection>

        <LegalSection title="Contact us">
          <p>
            For privacy questions, contact Lunily Labs at <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>
        </LegalSection>
      </main>
      <Footer />
    </>
  )
}

function TermsOfService() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-heading">
          <p className="section-label">Effective {effectiveDate}</p>
          <h1>Terms and Conditions</h1>
          <p>
            These Terms and Conditions govern your use of the Lunily Labs website and communications with Lunily Labs.
          </p>
        </div>

        <LegalSection title="Use of our website">
          <p>
            You may use this website for lawful business and informational purposes. You agree not to misuse the website,
            attempt unauthorized access, interfere with site operation, or use the site to transmit harmful or unlawful
            content.
          </p>
        </LegalSection>

        <LegalSection title="Software services">
          <p>
            Lunily Labs provides software services, AI automation support, and related consulting. Any paid services,
            project work, or subscriptions may be governed by separate written agreements in addition to these Terms.
          </p>
        </LegalSection>

        <LegalSection title="SMS program terms">
          <p>
            Lunily Labs may send conversational text messages to people who contact us, request follow-up, submit an
            inquiry, or otherwise consent to receive text messages from Lunily Labs. Messages may include responses to
            product or software inquiries, requested follow-up, meeting or demo coordination, and customer support.
          </p>
          <ul>
            <li>Program name: Lunily Labs customer communications.</li>
            <li>Message frequency varies based on your inquiry and conversation with us.</li>
            <li>Message and data rates may apply.</li>
            <li>Reply STOP to opt out of SMS messages.</li>
            <li>Reply HELP for help or email us at {supportEmail}.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p>
            SMS consent is not a condition of purchase. For details about how we handle information, see our{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </LegalSection>

        <LegalSection title="No warranties">
          <p>
            This website is provided on an as-is and as-available basis. To the fullest extent permitted by law, Lunily
            Labs disclaims warranties of any kind related to the website.
          </p>
        </LegalSection>

        <LegalSection title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, Lunily Labs will not be liable for indirect, incidental, special,
            consequential, or punitive damages arising from your use of the website or communications with us.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions about these Terms can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>
        </LegalSection>
      </main>
      <Footer />
    </>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default App
