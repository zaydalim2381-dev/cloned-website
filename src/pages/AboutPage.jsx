import PageHero from '../components/PageHero';

export default function AboutPage() {
  return (
      <main id="main" className="site-main">
        <PageHero
          title="Best Plastic Surgeon in Dubai — UK-Trained Cosmetic Expert"
          subtitle="About the Doctor"
          bgImage="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-About-the-Doctor-hero-mobile-1.jpg"
        />
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <h2 className="subtitle">Meet Dr. Adnan Tahir</h2>
              <div className="text-content" style={{ maxWidth: '800px', marginTop: '30px' }}>
                <p>Dr Adnan Tahir is a UK-trained plastic surgeon and is registered with the UK General Medical Council as a Plastic Surgeon. He is one of the best plastic surgeons in Dubai, well known as a celebrity cosmetic surgeon in Dubai.</p>
                <p>He believes in doing the minimum to achieve the desired outcome that is natural-looking and proportionate. His philosophy centers on enhancing natural beauty rather than creating artificial looks.</p>
                <p>Dr Adnan practices at CosmeSurge Hospital in Dubai, offering a comprehensive range of cosmetic surgical procedures for both body and face.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-marble py-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <h2 className="fs100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Qualifications</h2>
              <div className="text-content" style={{ marginTop: '20px' }}>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '1.1rem', lineHeight: 2 }}>
                  <li>UK General Medical Council Registered Plastic Surgeon</li>
                  <li>Member of the American Society of Plastic Surgeons (ASPS)</li>
                  <li>International Society of Aesthetic Plastic Surgery (ISAPS)</li>
                  <li>Royal College of Surgeons</li>
                  <li>Extensive training in aesthetic and reconstructive surgery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
