import Carousel from './Carousel';

const logos = [
  { src: 'https://adnan-tahir.com/wp-content/uploads/2024/01/AT-American-Society-of-Plastic-Surgeons-logo.png', alt: 'American Society of Plastic Surgeons' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-ucl.png', alt: 'UCL Logo' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-royal-college-of-surgeons.png', alt: 'Royal College of Surgeon Logo' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-ema.png', alt: 'EMA logo' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-gmc.png', alt: 'General Medical Council logo' },
  { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-isaps.png', alt: 'ISAPS logo' },
];

export default function Accreditations() {
  return (
    <div className="over section-inner-sm pb-30 py-lg-60">
      <div className="row g-0 animate fadeIn">
        <Carousel autoplay interval={3000} loop slidesToShow={4} responsive={[{ breakpoint: 992, slidesToShow: 2 }, { breakpoint: 576, slidesToShow: 1 }]}>
          {logos.concat(logos).map((logo, i) => (
            <div key={i} style={{textAlign: 'center'}}>
              <img width="300" height="180" src={logo.src} alt={logo.alt} loading="lazy" style={{maxWidth: '100%', height: 'auto'}} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
