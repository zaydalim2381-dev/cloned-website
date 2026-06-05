import { useState } from 'react';
import Carousel from './Carousel';

const testimonials = [
  {
    title: 'HD VASER Liposculpture',
    img: 'https://adnan-tahir.com/wp-content/uploads/2024/01/testimonial-HD-vaser.jpg',
    videoId: 'ufIfQkEBoc4',
    text: 'Once I met him, it changed my mind actually. If I didn\'t get the surgery, I don\'t think I would be on this track right now, confident, happy with my body, working out, and doing pilates every day.',
  },
  {
    title: 'Rhinoplasty',
    img: 'https://adnan-tahir.com/wp-content/uploads/2024/01/testimonial-rhinoplasty.jpg',
    videoId: 'eTIDA3kDOF0',
    text: 'I feel more confident going out. I feel great in myself, it\'s the most confidence I\'ve had in a long time.',
  },
  {
    title: 'Breast Augmentation',
    img: 'https://adnan-tahir.com/wp-content/uploads/2024/01/testimonial-breast-augmentation.jpg',
    videoId: 'Oo9GL23BJiQ',
    text: 'I was really satisfied with the results. The first few days I had to keep the dressing on, but I could already see the results and it changed my life.',
  },
  {
    title: 'Blepharoplasty',
    img: 'https://adnan-tahir.com/wp-content/uploads/2024/01/testimonial-blepharoplasty.jpg',
    videoId: '8daWZJOCwFM',
    text: 'I think the great thing about working with Dr Adnan is he really allows you to explore different treatments to make you more confident.',
  },
  {
    title: 'HD VASER Liposculpture',
    img: 'https://adnan-tahir.com/wp-content/uploads/2025/05/Dr-Adnad-thumnail-1-min-900x550.jpg',
    videoId: 'vHq7sLyVJWs',
    text: 'It was the best decision for me to come here. I am super happy with the results.',
  },
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonials" className="over pt-60 pt-lg-60">
      <header className="row g-0 text-center pt-lg-60">
        <div className="col-10 offset-1 col-lg-12 offset-lg-0 animate fadeIn">
          <h2 className="fs200 mb-0">Patient Testimonials</h2>
        </div>
      </header>
      <div className="animate fadeIn">
        <div className="row g-0 pt-40 pt-lg-60">
          <div className="col-1 offset-1 offset-lg-9 d-flex">
            <button className="slick-arrow slick-prev testimonials-prev ms-0 me-auto" aria-label="Previous">Previous</button>
          </div>
          <div className="col-1 offset-2 offset-lg-0 d-flex">
            <button className="slick-arrow slick-next testimonials-next ms-auto me-0" aria-label="Next">Next</button>
          </div>
        </div>
        <div className="row g-0 pt-20 pt-lg-0">
          <div className="col-10 offset-1 row g-0">
            <div className="col-12">
              <Carousel autoplay interval={5000} loop slidesToShow={3} responsive={[{ breakpoint: 992, slidesToShow: 2 }, { breakpoint: 576, slidesToShow: 1 }]}>
                {testimonials.map((t, i) => (
                  <div key={i} className="px-lg-3" style={{cursor: 'pointer'}} onClick={() => setActiveVideo(t.videoId)}>
                    <h3 className="fs45">{t.title}</h3>
                    <div className="position-relative video-cover">
                      <a href="javascript:void(0)" className={`video-toggle fs75 video-toggle-testimonial-${i + 1} no-underline d-flex`}
                        onClick={(e) => { e.preventDefault(); setActiveVideo(t.videoId); }}>
                        <span className="sr-only">Launch Video</span>
                      </a>
                      <img width="900" height="550" src={t.img} alt={t.title} loading="lazy" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                    </div>
                    <div className="text-content pt-20 pt-lg-40">
                      <p>{t.text}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 10001,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }} onClick={() => setActiveVideo(null)}>
          <div style={{position: 'relative', width: '90%', maxWidth: '800px', aspectRatio: '16/9'}} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} style={{
              position: 'absolute', top: '-40px', right: '0',
              background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer'
            }}>&times;</button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Testimonial Video"
              style={{width: '100%', height: '100%', border: 'none'}}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
