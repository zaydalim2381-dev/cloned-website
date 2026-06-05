import PageHero from '../components/PageHero';

export default function PrivacyPolicy() {
  return (
      <main className="site-main">
        <PageHero
          title="Privacy Policy"
          subtitle="Your Privacy Matters"
          bgImage="https://adnan-tahir.com/wp-content/uploads/2023/10/home-banner.jpg"
        />
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2>Introduction</h2>
              <p>Dr. Adnan Tahir ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

              <h2>Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you fill out a contact form, subscribe to our newsletter, or interact with our website. This may include your name, email address, phone number, and any other information you choose to provide.</p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide you with information about our services, improve our website, and comply with legal obligations.</p>

              <h2>Data Protection</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2>Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings. Please see our <a href="/cookie-policy">Cookie Policy</a> for more details.</p>

              <h2>Third-Party Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>

              <h2>Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information held by you. You may also withdraw your consent at any time by contacting us.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.</p>

              <p style={{ marginTop: '40px', fontSize: '0.85rem', color: '#666' }}>Last updated: June 2026</p>
            </div>
          </div>
        </section>
      </main>
  );
}
