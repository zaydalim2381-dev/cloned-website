import { SOCIAL } from '../data/content';

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div id="consultation" className="overflow-hidden" style={{ position: 'fixed', inset: 0, zIndex: 10000, backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={onClose}>
      <div className="row g-0 h-100" onClick={e => e.stopPropagation()}>
        <div className="form-outer col-12 col-lg-6 offset-lg-6 bg-marble row g-0 pt-60 pb-100 py-lg-0" style={{ height: '100%', overflowY: 'auto' }}>
          <div className="col-12 col-lg-2 col-xxl-1 pe-lg-2 d-lg-flex">
            <div className="m-auto text-center">
              <button className="consultation-trigger ls200" onClick={onClose}>
                <i className="fa-thin fa-xmark fs65 d-block"></i>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
          <div className="watermark watermark-br col-10 offset-1 col-lg-8 offset-lg-0 col-xxl-10 pt-40 py-lg-80 d-flex">
            <div className="over w-100 my-auto">
              <div className="pb-2 pb-lg-0">
                <h3 className="fs35 mb-0">Reach out to him to get the best cosmetic enhancements in a safe, judgment-free environment.</h3>
                <div className="pt-20">
                  <p className="fs25">Fill in the form below and we'll get back to you.</p>
                  <form onSubmit={e => { e.preventDefault(); onClose(); }}>
                    <div style={{ marginBottom: '15px' }}>
                      <input type="text" placeholder="Your Name *" required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', fontSize: '0.95rem', background: '#fff' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <input type="email" placeholder="Your Email *" required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', fontSize: '0.95rem', background: '#fff' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <input type="tel" placeholder="Your Phone *" required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', fontSize: '0.95rem', background: '#fff' }} />
                    </div>
                    <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Send Enquiry</button>
                  </form>
                </div>
              </div>
              <div className="pt-40">
                <h4 className="fs35 mb-0">Or reach out to him directly</h4>
                <div className="section-inner-lg pt-20 pt-lg-40">
                  <p><a href={`mailto:${SOCIAL.email}`} className="fs35 no-underline" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope me-3"></i><span className="hover-underline">{SOCIAL.email}</span></a></p>
                  <p><a href={`tel:${SOCIAL.phone.replace(/\s/g, '')}`} className="fs35 no-underline"><i className="fa-solid fa-phone-rotary me-3"></i><span className="hover-underline">{SOCIAL.phone}</span></a></p>
                  <p><a rel="nofollow" href={SOCIAL.whatsapp} className="fs35 no-underline"><i className="fa-brands fa-whatsapp me-3"></i><span className="hover-underline">{SOCIAL.phone}</span></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
