import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getTreatment, getTreatmentsByCategory } from '../../data/treatments';
import { getTreatmentContent } from '../../data/treatmentsContent';
import GoogleReviews from '../../components/GoogleReviews';

function AccordionSection({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  if (!faqs || faqs.length === 0) return null;
  return (
    <section id="faqs" className="pb-20 pb-lg-60">
      <div className="row g-0">
        <div className="col-10 offset-1 col-lg-8 offset-lg-2">
          <header className="animate fadeIn"><h2 className="fs100 mb-0">FAQs</h2></header>
          <div className="pt-20 pt-lg-40">
            {faqs.map((faq, i) => (
              <div key={i} className={`accordion-item${openIdx === i ? ' active' : ''}`} style={{ borderBottom: '1px solid #ccc' }}>
                <button
                  className="accordion-trigger"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '15px 0', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
                >
                  <h3 className="fs35 mb-0 playfair">{faq.q}</h3>
                </button>
                <div className="accordion-content" style={{ display: openIdx === i ? 'block' : 'none', paddingBottom: '15px' }}>
                  <p className="text-content" style={{ margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = getTreatment(slug);
  const content = getTreatmentContent(slug);

  if (!treatment) {
    return (
      <main className="site-main py-60">
        <div className="row g-0">
          <div className="col-10 offset-1">
            <h1>Treatment Not Found</h1>
            <p>The treatment you are looking for does not exist.</p>
            <Link to="/site-map">View all treatments</Link>
          </div>
        </div>
      </main>
    );
  }

  const related = getTreatmentsByCategory(treatment.category).filter(t => t.slug !== slug);

  return (
    <main id="main" className="site-main">
      <header id="treatment-intro" className="split-header page-header header-top-padding position-relative">
        <div className="row g-0 h-100">
          <div className="col-12 col-lg-5 offset-lg-6 pb-40 py-lg-80 section-inner-lg ps-lg-0">
            <div className="row g-0">
              <div className="col-10 offset-1 col-lg-12 offset-lg-0">
                <div className="animate fadeIn">
                  <h3 className="subtitle mb-0 mb-lg-2">{treatment.category}</h3>
                </div>
                <h1 className="fs65">{treatment.name} In Dubai</h1>
                <div className="text-content animate fadeIn">
                  <p>{treatment.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header-image col-12 row g-0 d-none d-lg-flex">
            <div className="col-5 position-relative offset-lg-6">
              <div className="bg-img watermark watermark-br">
                <img loading="lazy" width="720" height="810" src={treatment.img} className="cover-fit" alt={treatment.name} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {content?.quickInfo && (
        <section id="quick-information" className="pt-40 pb-50 pt-lg-120 pb-lg-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <header><h2 className="floating-title fs100 mb-0">Quick Information</h2></header>
              <div className="row g-0 pt-lg-40">
                {content.quickInfo.map((info, i) => (
                  <div key={i} className="col-12 col-lg-4 py-20 py-lg-0 animate fadeIn">
                    <div className="text-center section-inner">
                      <h3 className="subtitle mb-0">{info.label}</h3>
                      <p className="fs35 playfair mb-0">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {content?.overview && (
        <section id="overview" className="watermark watermark-tl watermark-grey pt-40 pb-40 pt-lg-0 pb-lg-60">
          <div className="over row g-0">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2 pt-lg-100">
              <header className="animate fadeIn">
                <h2 className="subtitle mb-0">About This Treatment</h2>
              </header>
              <div className="text-content first-up animate fadeIn pt-20 pt-lg-40">
                {content.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>
      )}

      {content?.technology && (
        <section id="technology" className="pb-80 pb-lg-120 watermark watermark-bl watermark-grey">
          <div className="over row g-0">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2">
              <header className="animate fadeIn">
                <h2 className="fs100 mb-0">{content.technology.title || 'Technology'}</h2>
              </header>
              <div className="text-content animate fadeIn pt-20 pt-lg-40">
                {content.technology.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>
      )}

      <AccordionSection faqs={content?.faqs} />

      <div className="price-ba-wrap">
        {content?.pricing && (
          <section id="pricing" className="watermark watermark-tl watermark-grey pt-40 pb-30 pt-lg-0 pb-lg-100">
            <div className="over row g-0">
              <div className="col-10 offset-1 col-lg-6 offset-lg-3 text-center pt-lg-100">
                <header className="animate fadeIn"><h2 className="subtitle mb-0">Cost</h2></header>
                <p className="fs100 playfair mb-0 animate fadeIn" style={{ color: 'var(--gold)' }}>{content.pricing.from}</p>
                <div className="text-content animate fadeIn pt-20"><p>{content.pricing.note}</p></div>
              </div>
            </div>
          </section>
        )}

        {content?.beforeAfters && content.beforeAfters.length > 0 && (
          <section id="before-afters" className="pb-60 pb-lg-100 grad-white-to-grey">
            <div className="row g-0">
              <div className="col-10 offset-1">
                <header className="animate fadeIn pt-40 pt-lg-0 text-center">
                  <h2 className="fs100 mb-0">Before & After</h2>
                </header>
              </div>
            </div>
            {content.beforeAfters.map((ba, i) => (
              <div key={i} id={`patient-${i + 1}`} className="ba-patient pt-40 pt-lg-60">
                <div className="row g-0">
                  <div className="col-10 offset-1">
                    <h3 className="subtitle mb-20">{ba.title}</h3>
                  </div>
                </div>
                <div className="row g-0">
                  {ba.images.map((img, j) => (
                    <div key={j} className={`col-6 px-3 ${j > 0 ? 'pt-30 pt-lg-60' : ''}`}>
                      <img loading="lazy" width="540" height="540" src={img} alt={`${ba.title} ${j === 0 ? 'Before' : 'After'}`} className="w-100" />
                      <div className="text-center pt-3"><h4 className="fs35 mb-0">{j === 0 ? 'Before' : 'After'}</h4></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>

      {content?.videos && (content.videos.patient?.length > 0 || content.videos.procedure?.length > 0) && (
        <section id="videos" className="bg-marble py-60 pt-lg-60 pb-lg-100">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <header className="text-center animate fadeIn"><h2 className="fs100 mb-0">Videos</h2></header>
              <div className="section-inner-sm pt-40">
                {content.videos.patient?.map((v, i) => (
                  <div key={i} className="pt-30">
                    <h3 className="subtitle mb-10">{v.title}</h3>
                    <div className="video-wrapper">
                      <iframe src={v.videoUrl} title={v.title} allowFullScreen loading="lazy"></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <GoogleReviews />

      {related.length > 0 && (
        <section className="pb-60 pb-lg-100 pt-40 pt-lg-60 watermark watermark-bl watermark-grey">
          <div className="over row g-0">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2">
              <header className="animate fadeIn"><h2 className="fs75 mb-0">Related {treatment.category} Treatments</h2></header>
              <div className="row g-0 pt-30 pt-lg-40">
                {related.map(t => (
                  <div key={t.slug} className="col-12 col-lg-4 px-lg-3 pb-30 animate fadeIn">
                    <Link to={`/${t.slug}`} className="no-underline">
                      <img loading="lazy" width="400" height="300" src={t.img} alt={t.name} className="w-100" style={{ height: '200px', objectFit: 'cover' }} />
                      <h3 className="fs35 playfair pt-10 mb-0">{t.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}