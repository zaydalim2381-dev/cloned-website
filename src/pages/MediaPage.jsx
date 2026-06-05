import PageHero from '../components/PageHero';
import MediaSection from '../components/MediaSection';

export default function MediaPage() {
  const mediaMentions = [
    { publication: 'Dubai\'s Best', title: 'Best Rhinoplasty Clinic in Dubai', url: 'https://www.dubaisbest.com/best-rhinoplasty-dubai/' },
    { publication: 'Khaleej Times', title: 'Dubai residents undergo cosmetic surgery for dimples', url: 'https://www.khaleejtimes.com/uae/dubai-residents-undergo-cosmetic-surgery-for-dimples' },
    { publication: 'Emirates Woman', title: 'Post-lockdown: Are you preparing yourself for life part two?', url: 'https://emirateswoman.com/cosmetic-procedures-dubai/' },
    { publication: 'VOGUE Arabia', title: 'Why The Non-surgical Nose Job Is A Trend You Should Know About', url: 'https://en.vogue.me/beauty/nose-jobs/' },
    { publication: 'Cosmopolitan UAE', title: 'The inspiring journey and vision of Dr Adnan Tahir', url: 'https://cosmopolitanuae.com/feature/the-inspiring-journey-and-vision-of-dr-adnan-tahir/' },
    { publication: 'ELLE Hollywood', title: 'Featured Article', url: 'https://ellehollywood.com/?p=1939' },
    { publication: 'Spear\'s 500', title: 'Adnan Tahir — Spear\'s 500 Adviser', url: 'https://www.spears500.com/adviser/15620/adnan-tahir' },
  ];

  return (
      <main id="main" className="site-main">
        <PageHero
          title="Press & Media — Dr Adnan Tahir in the News"
          subtitle="Dr Adnan"
          bgImage="https://adnan-tahir.com/wp-content/uploads/2023/10/home-banner.jpg"
        />
        <MediaSection />
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <h2 className="fs100" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Media Mentions</h2>
              <div style={{ marginTop: '30px', display: 'grid', gap: '24px' }}>
                {mediaMentions.map((m, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '4px' }}>{m.publication}</p>
                    <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display, serif', textDecoration: 'none', color: '#1a1a1a' }}>
                      {m.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
