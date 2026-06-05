import { useState } from 'react';
import useCarousel from '../hooks/useCarousel';

const cases = [
  {
    title: 'HD VASER liposculpture',
    testimonial: `Dr. Adnan was very realistic and transparent with the results that I can expect and what the healing process would be. I came in for 360 liposuction and some fat transfer to what my friends have always called a "long back" aka buttocks.`,
    testimonial2: `Well he definitely underestimated the results, two weeks post-surgery my body already belongs in a museum and if it was to be auctioned off at Sotheby's it would be a record breaking sale! He also over-estimated the recovery and prepared me for the absolute worse. I was ready to party straight out of surgery (they didn't let me). I have my whole life suffered with fat around the midsection and no matter what I did this stubborn fat just loved to hang out with the rest of my naturally perfect self. Dr. Adnan's work is so spectacular he even didn't believe that the before photos were actually me.`,
    images: [
      'https://adnan-tahir.com/wp-content/uploads/2023/12/AT-Client-Case-HD-VASER-liposculpture-1.jpg',
      'https://adnan-tahir.com/wp-content/uploads/2023/10/client-case-1.jpg',
      'https://adnan-tahir.com/wp-content/uploads/2023/12/AT-Client-Case-HD-VASER-liposculpture-3.jpg',
      'https://adnan-tahir.com/wp-content/uploads/2023/12/AT-Client-Case-HD-VASER-liposculpture-4.jpg',
    ],
    videoId: null,
  },
  {
    title: 'Breast Augmentation',
    testimonial: `I would like to recommend a fantastic and very talented Dr. Adnan Tahir at Aesthetics who literally changed my life!! It took me years to find a doctor who i would fully trust and who would listen to me and my needs.`,
    testimonial2: `He provided me with the best advice, game constructive & honest feedback and provided fantastic care & support pre and post operation. The whole experience was with the minimum pain as was the recovery. Dr Adnan Tahir is a MAGICIAN and i can't thank him enough.`,
    images: ['https://adnan-tahir.com/wp-content/uploads/2023/11/AT-Ms-E-Breast-Augmentation-video-image.jpg'],
    videoId: 'cXR34Gv0qKg',
  },
  {
    title: 'HD VASER liposculpture',
    testimonial: `I had a liposuction operation with Dr Adnan and i can't be happier from the results. Dr Adnan changed my life not only he was super professional during the operation but even after it always attends my calls and i can visit him anytime. Can't thank him enough for his miraculous results and highly recommend for anyone who wish a true transformation.`,
    images: ['https://adnan-tahir.com/wp-content/uploads/2024/01/AT-Client-Cases-HD-VASER-liposculpture-2.jpg'],
    videoId: null,
  },
  {
    title: 'Face Lift',
    testimonial: `Face Lift Transformation can be very difficult for some people, however the skin ageing procedure happens to everyone, and is a wholly natural process, and make people lose confidence in their appearance.`,
    testimonial2: `As we get older, the making of collagen and elastin in our bodies slows, causing the mutual signs of skin ageing, such as adequate lines, wrinkles and a loss of volume in the skin. Collagen and elastin are the proteins that exist inside many of the body's tissues, including the skin, and gives structural support, strength, pliability and durability to the skin.`,
    images: ['https://adnan-tahir.com/wp-content/uploads/2024/01/AT-Client-Cases-Face-Lift.jpg'],
    videoId: null,
  },
];

function InnerCarousel({ images, title }) {
  const { index, next, prev } = useCarousel({
    totalSlides: images.length,
    slidesToShow: 1,
    loop: true,
    autoplay: images.length > 1,
    interval: 4000,
  });
  if (images.length <= 1) {
    return (
      <img width="640" height="490" src={images[0]} alt={title} style={{ width: '100%', height: 'auto' }} />
    );
  }
  return (
    <div className="case-inner-carousel carousel slick-initialized slick-slider slick-dotted">
      <div className="slick-list draggable">
        <div className="slick-track" style={{ width: `${images.length * 100}%` }}>
          {images.map((img, j) => (
            <div key={j} className={`slick-slide${j === index ? ' slick-current slick-active' : ''}`} style={{ width: `${100 / images.length}%` }}>
              <img width="640" height="490" src={img} alt={`${title} ${j + 1}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
      <ul className="slick-dots" role="tablist">
        {images.map((_, j) => (
          <li key={j} className={j === index ? 'slick-active' : ''} role="presentation">
            <button type="button" role="tab" aria-label={`${j + 1} of ${images.length}`}>{j + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClientCases() {
  const [activeVideo, setActiveVideo] = useState(null);
  const { index, next, prev, pause, resume } = useCarousel({
    totalSlides: cases.length,
    slidesToShow: 1,
    loop: true,
    autoplay: true,
    interval: 6000,
  });

  const c = cases[index];

  return (
    <section id="client-cases" className="over pt-lg-60"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <header className="row g-0 animate fadeIn ani-trigger">
        <div className="col-10 offset-1">
          <h2 className="subtitle mb-0">Some of his popular client cases...</h2>
        </div>
      </header>

      <div className="animate fadeIn ani-trigger">
        <div className="row g-0 pt-20 d-lg-none">
          <div className="col-1 offset-1 offset-lg-9 d-flex">
            <button className="slick-arrow slick-prev case-prev ms-0 me-auto" onClick={prev} aria-label="Previous">Previous</button>
          </div>
          <div className="col-1 offset-2 offset-lg-0 d-flex">
            <button className="slick-arrow slick-next case-next ms-auto me-0" onClick={next} aria-label="Next">Next</button>
          </div>
        </div>

        <div className="row g-0 pt-30 pt-lg-0">
          <div className="col-1 d-flex">
            <button className="slick-arrow slick-prev case-prev d-none d-lg-block" onClick={prev} aria-label="Previous">Previous</button>
          </div>

          <div className="col-10 col-lg-10">
            <div className="case-carousel carousel slick-initialized slick-slider" key={index}>
              <div className="slick-list draggable">
                <div className="slick-track">
                  <div className="slick-slide slick-current slick-active">
                    <div className="row g-0">
                      <div className="col-12 col-lg-10 offset-lg-1 pb-30 pb-lg-60">
                        <h3 className="fs75 mb-0">{c.title}</h3>
                      </div>

                      <div className="d-lg-none col-11 offset-1">
                        <div className="case-content text-content first-up w-100 my-auto">
                          <p>{c.testimonial}</p>
                          {c.testimonial2 && <p>{c.testimonial2}</p>}
                        </div>
                      </div>

                      <div className="col-11 offset-1 col-lg-5 offset-lg-0 d-lg-flex">
                        <div className="media-wrapper w-100 my-auto pt-20 pt-lg-0">
                          {c.videoId ? (
                            <div className="position-relative">
                              <div className="video-cover">
                                <a href="javascript:void(0)" className="video-toggle fs75 video-toggle-case-2 no-underline d-flex" onClick={() => setActiveVideo(c.videoId)} title="Play video">
                                  <span className="sr-only">Launch Video</span>
                                </a>
                              </div>
                              <img width="900" height="550" src={c.images[0]} alt={c.title} style={{ width: '100%', height: 'auto' }} />
                            </div>
                          ) : (
                            <InnerCarousel images={c.images} title={c.title} />
                          )}
                        </div>
                      </div>

                      <div className="d-none d-lg-flex col-5 offset-1">
                        <div className="case-content text-content first-up w-100 my-auto">
                          <p>{c.testimonial}</p>
                          {c.testimonial2 && <p>{c.testimonial2}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1 d-flex">
            <button className="slick-arrow slick-next case-next d-none d-lg-block" onClick={next} aria-label="Next">Next</button>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,0.85)' }} onClick={() => setActiveVideo(null)}>
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content" style={{ background: 'transparent', border: 'none' }}>
              <button type="button" className="btn-close btn-close-white" onClick={() => setActiveVideo(null)} style={{ position: 'absolute', top: '-40px', right: '0' }}></button>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Client Case Video"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
