import PageHero from '../components/PageHero';

export default function CookiePolicy() {
  return (
      <main className="site-main">
        <PageHero
          title="Cookie Policy"
          subtitle="How We Use Cookies"
          bgImage="https://adnan-tahir.com/wp-content/uploads/2023/10/home-banner.jpg"
        />
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2>What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>

              <h2>How We Use Cookies</h2>
              <p>We use cookies to understand how visitors interact with our website, remember your preferences, and improve our content and services. We also use cookies for analytics purposes to track page views and user behavior anonymously.</p>

              <h2>Types of Cookies We Use</h2>
              <p><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</p>
              <p><strong>Analytics Cookies:</strong> These help us understand how visitors use our site.</p>
              <p><strong>Preference Cookies:</strong> These remember your settings and preferences.</p>

              <h2>Managing Cookies</h2>
              <p>You can control and manage cookies in your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>

              <h2>Third-Party Cookies</h2>
              <p>We may use third-party services such as Google Analytics that set their own cookies. These third parties have their own privacy policies governing the use of your information.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about our use of cookies, please <a href="/contact">contact us</a>.</p>

              <p style={{ marginTop: '40px', fontSize: '0.85rem', color: '#666' }}>Last updated: June 2026</p>
            </div>
          </div>
        </section>
      </main>
  );
}
