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

export default function ClientCases() {
  const [activeVideo, setActiveVideo] = useState(null);
  const { index, next, prev, goTo, pause, resume } = useCarousel({
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
      <header className="row g-0 animate fadeIn">
        <div className="col-10 offset-1">
          <h2 className="subtitle mb-0">Some of his popular client cases...</h2>
        </div>
      </header>
      <div className="animate fadeIn">
        <div className="row g-0 pt-20 d-lg-none">
          <div className="col-1 offset-1 d-flex">
            <button className="slick-arrow slick-prev case-prev ms-0 me-auto" onClick={prev} aria-label="Previous">Previous</button>
          </div>
          <div className="col-1 offset-2 d-flex">
            <button className="slick-arrow slick-next case-next ms-auto me-0" onClick={next} aria-label="Next">Next</button>
          </div>
        </div>
        <div className="row g-0 pt-30 pt-lg-0">
          <div className="col-1 d-flex">
            <button className="slick-arrow slick-prev case-prev d-none d-lg-block" onClick={prev} aria-label="Previous">Previous</button>
          </div>
          <div className="col-10 col-lg-10">
            <div className="case-carousel carousel" key={index}>
              <div>
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
                      <div className="case-inner-carousel carousel">
                        {c.images.map((img, j) => (
                          <div key={j}>
                            <img src={img} alt={`${c.title} ${j + 1}`} style={{ width: '300px', height: '230px', objectFit: 'cover' }} />
                          </div>
                        ))}
                      </div>
                      {c.videoId && (
                        <div className="pt-20">
                          <button onClick={() => setActiveVideo(c.videoId)} className="btn btn-solid">&#9654; Launch Video</button>
                        </div>
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
          <div className="col-1 d-flex">
            <button className="slick-arrow slick-next case-next d-none d-lg-block" onClick={next} aria-label="Next">Next</button>
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
              title="Client Case Video"
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
