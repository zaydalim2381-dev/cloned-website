import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
      <main id="main" className="site-main">
        <PageHero
          title="Get in Touch with Dr. Adnan Tahir"
          subtitle="Contact Us"
          bgImage="https://adnan-tahir.com/wp-content/uploads/2023/10/contact-header.jpg"
        />
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1 col-lg-6">
              <h2 className="fs100" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>Reach Out</h2>
              <div className="text-content" style={{ marginTop: '30px' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                  Reach out to him to get the best cosmetic enhancements in a safe, judgment-free environment.
                </p>
                <div style={{ borderTop: '1px solid #ddd', paddingTop: '30px' }}>
                  <p style={{ marginBottom: '15px' }}>
                    <a href="mailto:dradnantahirenquiries@gmail.com" className="no-underline" style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                      dradnantahirenquiries@gmail.com
                    </a>
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <a href="tel:+971505674770" className="no-underline" style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                      +971 50 567 4770
                    </a>
                  </p>
                  <p>
                    <a rel="nofollow" href="https://api.whatsapp.com/send?phone=971505674770" className="no-underline" style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                      WhatsApp: +971 50 567 4770
                    </a>
                  </p>
                </div>
                <div style={{ marginTop: '30px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Visit Us</h3>
                  <p style={{ fontSize: '1.1rem' }}>
                    CosmeSurge Hospital<br />
                    02 Jumeirah Beach Road<br />
                    Opposite Burj Al Arab<br />
                    Umm Suqeim, Jumeirah 3<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
