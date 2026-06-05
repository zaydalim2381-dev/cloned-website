export default function ContactPage() {
  return (
    <main id="main" className="site-main">
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <h2 className="subtitle mb-0">Contact</h2>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="810" src="https://adnan-tahir.com/wp-content/uploads/2023/10/contact-header-mob.jpg" className="d-lg-none cover-fit" alt="Contact Dr Adnan Tahir" />
          <img width="1440" height="480" src="https://adnan-tahir.com/wp-content/uploads/2023/10/contact-header.jpg" className="d-none d-lg-block cover-fit" alt="Contact Dr Adnan Tahir" />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60">
        <section className="row g-0 pb-30">
          <div className="col-10 offset-1">
            <div className="text-content" style={{fontSize:'1.2rem'}}>
              <p><a href="mailto:dradnantahirenquiries@gmail.com" className="no-underline fs35 playfair" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope me-3"></i>Send us an email</a></p>
              <p><a href="tel:+971505674770" className="no-underline fs35 playfair"><i className="fa-solid fa-phone-rotary me-3"></i>+971 50 567 4770</a></p>
              <p><a rel="nofollow" href="https://api.whatsapp.com/send?phone=971505674770" className="no-underline fs35 playfair" target="_blank"><i className="fa-brands fa-whatsapp me-3"></i>+971 50 567 4770</a></p>
            </div>
          </div>
        </section>

        <section className="row g-0 py-30 watermark watermark-br position-relative">
          <div className="col-10 offset-1">
            <h2 className="subtitle mb-0">Reach out to us</h2>
            <div className="row g-0 pt-30">
              <div className="col-12 col-lg-6">
                <form onSubmit={e => e.preventDefault()} style={{maxWidth:'500px'}}>
                  <div style={{marginBottom:'15px'}}>
                    <input type="text" placeholder="Name *" required style={{width:'100%', padding:'12px', border:'1px solid #ddd', fontSize:'0.95rem', background:'#fff'}} />
                  </div>
                  <div style={{marginBottom:'15px'}}>
                    <input type="email" placeholder="Email *" required style={{width:'100%', padding:'12px', border:'1px solid #ddd', fontSize:'0.95rem', background:'#fff'}} />
                  </div>
                  <div style={{marginBottom:'15px'}}>
                    <input type="tel" placeholder="Phone *" required style={{width:'100%', padding:'12px', border:'1px solid #ddd', fontSize:'0.95rem', background:'#fff'}} />
                  </div>
                  <div style={{marginBottom:'15px'}}>
                    <textarea placeholder="Message *" rows={5} required style={{width:'100%', padding:'12px', border:'1px solid #ddd', fontSize:'0.95rem', background:'#fff', resize:'vertical'}} />
                  </div>
                  <button type="submit" className="btn btn-solid">Send Enquiry</button>
                </form>
              </div>
              <div className="col-12 col-lg-5 offset-lg-1 pt-40 pt-lg-0">
                <div className="text-content">
                  <p className="fs35 playfair no-underline"><i className="fa-solid fa-map-pin me-2 me-lg-3"></i> CosmeSurge Hospital, 02 Jumeirah Beach Road, Dubai</p>
                  <div className="pt-30">
                    <a href="https://maps.google.com/?q=CosmeSurge+Hospital+02+Jumeirah+Beach+Road+Dubai" className="btn btn-solid" target="_blank" rel="noopener noreferrer">Get directions</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="google-reviews" className="watermark watermark-br position-relative py-lg-100">
        <div className="over row g-0 py-100 py-lg-100">
          <div className="col-10 offset-1 animate fadeIn" />
          <div id="ndrsl-687f250bf55f18245672b099" className="ndrsl-widget" />
          <div className="btn-wrap text-center pt-40 pt-lg-60 animate fadeIn">
            <a href="https://www.google.com/search?q=dr+adnan+tahir#lrd=0x3e5f6b7502e10a77:0x38cb7931d63888bf,1,,," className="btn btn-white" title="View Google Reviews" target="_blank">View Google Reviews</a>
          </div>
        </div>
        <div className="bg-img d-lg-none" style={{backgroundImage: "url('https://adnan-tahir.com/wp-content/uploads/2023/11/google-reviews-mob.jpg')"}} />
        <div className="bg-img d-none d-lg-block" style={{backgroundImage: "url('https://adnan-tahir.com/wp-content/uploads/2023/10/google-reviews.jpg')"}} />
      </section>
    </main>
  );
}
