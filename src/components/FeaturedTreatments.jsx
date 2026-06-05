import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const treatments = [
  { category: 'Body', name: 'VASER HD Liposculpture', href: '/vaser-liposuction-dubai', img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/AT-Vaser-HD-Liposculpture-Featured.jpg' },
  { category: 'Breast', name: 'Breast Augmentation', href: '/breast-augmentation-in-dubai', img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/AT-Breast-Augmentation-Featured.jpg' },
  { category: 'Face', name: 'Rhinoplasty', href: '/rhinoplasty-in-dubai', img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/AT-Rhinoplasty-Featured.jpg' },
  { category: 'Body', name: 'Mommy Makeover', href: '/mommy-makeover-dubai', img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/AT-Mummy-Makeover-Featured.jpg' },
  { category: 'Face', name: 'Eyelid Surgery', href: '/eyelid-surgery-in-dubai', img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/AT-Eyelid-Featured.jpg' },
];

export default function FeaturedTreatments() {
  return (
    <section id="featured-treatments" className="pb-60 py-lg-40 position-relative">
      <header className="row g-0 animate fadeIn">
        <div className="col-10 offset-1 text-center">
          <h2 className="fs100 mb-0">Our Popular Procedures</h2>
        </div>
      </header>
      <div className="section-inner-sm row g-0 animate fadeIn">
        <Carousel autoplay interval={4000} loop slidesToShow={3} responsive={[{ breakpoint: 992, slidesToShow: 2 }, { breakpoint: 576, slidesToShow: 1 }]}>
          {treatments.map((t, i) => (
            <div key={i} className="px-3 text-center d-flex">
              <div className="slide-inner position-relative w-100 my-auto">
                <div className="treatment-thumb d-flex flex-wrap">
                  <div className="w-100 mb-auto px-3">
                    <h4 className="fs35 fw-light uppercase helvetica ls50 text-white">{t.category}</h4>
                  </div>
                  <div className="w-100 mt-auto px-3">
                    <h3 className="fs45">
                      <Link to={t.href} className="text-white no-underline" title={t.name}>{t.name}</Link>
                    </h3>
                    <div className="btn-wrap">
                      <Link to={t.href} className="btn btn-white" title={t.name}>View <span className="d-lg-none d-xl-inline-block">treatment</span></Link>
                    </div>
                  </div>
                </div>
                <img width="640" height="490" src={t.img} alt={t.name} loading="lazy" />
                <Link to={t.href} className="cover-link" title={t.name}><span className="sr-only">{t.name}</span></Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
