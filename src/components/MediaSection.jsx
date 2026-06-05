import Carousel from './Carousel';

const mediaLogos = [
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-dubais-best.png', alt: "Dubai's Best Logo", href: 'https://www.dubaisbest.com/best-rhinoplasty-dubai/' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-khaleej-times.png', alt: 'Khaleej Times Logo', href: 'https://www.khaleejtimes.com/uae/dubai-residents-undergo-cosmetic-surgery-for-dimples' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-woman.png', alt: 'Emirates women Logo', href: 'https://emirateswoman.com/cosmetic-procedures-dubai/' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-hayati.png', alt: 'Hayati logo' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-vogue.png', alt: 'VOGUE logo', href: 'https://en.vogue.me/beauty/nose-jobs/' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Cos-1.png', alt: 'Cosmopolitan', href: 'https://cosmopolitanuae.com/feature/the-inspiring-journey-and-vision-of-dr-adnan-tahir/' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Elle-1.png', alt: 'Elle Hollywood', href: 'https://ellehollywood.com/?p=1939' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Spe.png', alt: "Spear's 500", href: 'https://www.spears500.com/adviser/15620/adnan-tahir' },
];

// Live site uses: dubai's best, khaleej times, emirates woman, hayati, vogue,
// repeat: dubai's best, khaleej times, emirates woman, hayati, vogue,
// then: cosmopolitan, elle, spears = 13 slides
const carouselSlides = [...mediaLogos, ...mediaLogos.slice(0, 3)];

export default function MediaSection() {
  return (
    <section id="media" className="bg-marble watermark watermark-br pt-50 pb-60 py-lg-120">
      <header className="over row g-0 pb-lg-100 animate fadeIn">
        <div className="col-10 offset-1 text-center">
          <h3 className="subtitle">Dr Adnan</h3>
          <h2 className="fs100 mb-0">In the Media</h2>
        </div>
      </header>
      <div className="over section-inner-sm row g-0 animate fadeIn">
        <Carousel autoplay interval={3000} loop slidesToShow={4} responsive={[{ breakpoint: 992, slidesToShow: 2 }, { breakpoint: 576, slidesToShow: 1 }]}>
          {carouselSlides.map((logo, i) => (
            <div key={i} style={{padding: '10px 0'}}>
              {logo.href ? (
                <a href={logo.href} className="d-block" title={logo.alt} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt={logo.alt} style={{width: '200px', height: '120px', objectFit: 'contain'}} loading="lazy" />
                </a>
              ) : (
                <img src={logo.src} alt={logo.alt} style={{width: '200px', height: '120px', objectFit: 'contain'}} loading="lazy" />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
