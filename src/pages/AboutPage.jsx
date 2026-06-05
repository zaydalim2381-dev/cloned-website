export default function AboutPage() {
  const qualifications = [
    'https://adnan-tahir.com/wp-content/uploads/2024/01/AT-American-Society-of-Plastic-Surgeons-logo.png',
    'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-ucl.png',
    'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-royal-college-of-surgeons.png',
    'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-ema.png',
    'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-gmc.png',
    'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-isaps.png',
  ];

  const expertise = [
    'Surgery For Burn Injuries', 'HD VASER Liposculpture', 'Gynecomastia Surgery',
    'Hand Surgery', 'Breast Augmentation', 'Face/Neck Lift',
    'Cancer Reconstruction', 'Breast Reduction/Lift', 'Blepharoplasty',
    'Trauma Reconstruction', 'Rhinoplasty', 'Abdominoplasty',
    'Congenital Deformities', 'Breast Implants Exchange', 'Ear Correction (otoplasty)',
  ];

  const mediaLogos = [
    { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-dubais-best.png', alt: "Dubai's Best" },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-khaleej-times.png', alt: 'Khaleej Times' },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-woman.png', alt: 'Emirates Woman' },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-hayati.png', alt: 'Hayati' },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-vogue.png', alt: 'VOGUE' },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Cos-1.png', alt: 'Cosmopolitan' },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Elle-1.png', alt: 'Elle Hollywood' },
    { src: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Spe.png', alt: "Spear's 500" },
  ];

  return (
    <main id="main" className="site-main">
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <h2 className="subtitle mb-0">About</h2>
              <div className="inset-content">
                <h1 className="fs100">Dr. Adnan</h1>
                <h3 className="subtitle mb-0">Best plastic surgeon in Dubai</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="810" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-About-the-Doctor-hero-mobile-1.jpg" className="d-lg-none cover-fit" alt="Dr Adnan Tahir About" />
          <img width="1440" height="810" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-About-the-Doctor-hero-desktop-1.jpg" className="d-none d-lg-block cover-fit" alt="Dr Adnan Tahir About" />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60">
        <section className="over row g-0">
          <div className="col-10 offset-1 col-lg-8">
            <div className="animate fadeIn">
              <h2 className="subtitle mb-0">If You Seek High-Quality Results In Aesthetic Surgery In Dubai, Look Nowhere Else.</h2>
            </div>
            <div className="row g-0 pt-30 animate fadeIn">
              <div className="col-12 col-lg-10">
                <div className="text-content">
                  <p>He started his career in Plastic Surgery in 2003 after completing his basic surgical training from the Royal College of Surgeons leading to MRCS (Eng). Having worked in a number of teaching hospitals across the UK he was then awarded a National training post in Plastic and reconstructive surgery in England leading to Certificate of Completion of Training by Royal College of Surgeons. He passed the prestigious FRCS (Plast) examination by Royal College of Surgeons of England in 2012 and finished his board certification leading to CCT and entry into GMC's specialist register for Plastic Surgery in the UK.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="over row g-0 pt-60">
          <div className="col-10 offset-1 col-lg-8">
            <div className="animate fadeIn">
              <div className="text-content">
                <p>For the past 15 years, Dr. Adnan has been practising aesthetic surgery on a full-time basis as a consultant and for the past 11 years he is in Dubai. He strives to ensure the best experience for all patients looking for Rhinoplasty, HD liposculpture, and breast augmentation/lifting, among other procedures. Currently, Dr. Adnan is providing cosmetic treatments in Dubai and is well known as a celebrity plastic surgeon. Throughout his illustrious career prior to this, Dr. Adnan gained experience in Burns, Hand surgery, cancer reconstruction, Trauma reconstruction. Congenital deformities and aesthetic surgery. He completed his fellowship in aesthetic surgery from Rotterdam, Netherlands. Throughout his career, Dr Adnan published numerous articles in peer-reviewed journals and presented at many national and international scientific meetings. His research experience includes the award of MSc in the field of tissue engineering from University College London.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="over row g-0 pt-60 pb-60 watermark watermark-br position-relative">
          <div className="col-10 offset-1 col-lg-8">
            <div className="row g-0">
              <div className="col-12 col-lg-7 order-lg-2 animate fadeIn">
                <div className="text-content">
                  <p>Dr Adnan, the best cosmetic surgeon in Dubai provides an enhanced patient experience with the best of British care measured by the quality of care that he delivers based on current best practices backed by science. He spends a lot of time with his patients listening to their needs and educating them about potential treatments they may require. Dr Adnan believes in doing the minimum necessary to achieve the desired outcome that is natural-looking and proportionate. He frequently uses the term "Beauty made better" to his clients to reflect this.</p>
                </div>
              </div>
              <div className="col-10 offset-2 col-lg-5 offset-lg-0 order-lg-1 pt-20 pt-lg-0 animate fadeIn">
                <img width="640" height="640" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-About-the-Doctor-image.jpg" className="cover-fit" alt="Dr Adnan Tahir" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="bg-img d-lg-none" style={{backgroundImage: "url('https://adnan-tahir.com/wp-content/uploads/2024/01/AT-About-the-Doctor-watermark.jpg')"}} />
          <div className="bg-img d-none d-lg-block" style={{backgroundImage: "url('https://adnan-tahir.com/wp-content/uploads/2024/01/AT-About-the-Doctor-watermark.jpg')"}} />
        </section>
      </div>

      <section className="over pb-60">
        <header className="row g-0 pt-60 pb-30 animate fadeIn">
          <div className="col-10 offset-1">
            <h2 className="subtitle mb-0">Certifications & Qualifications</h2>
          </div>
        </header>
        <div className="section-inner-sm row g-0 animate fadeIn">
          <div className="col-1 d-flex">
            <button className="slick-arrow about-arrow slick-prev">Previous</button>
              </div>
              <div className="col-10">
                <div className="carousel" style={{display:'flex', gap:'30px', overflow:'hidden', padding:'10px 0'}}>
                  {qualifications.map((img, i) => (
                    <div key={i} style={{flex:'0 0 180px'}}>
                      <img width="300" height="180" src={img} alt={`Qualification ${i + 1}`} loading="lazy" style={{maxWidth:'100%', height:'auto'}} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-1 d-flex">
                <button className="slick-arrow about-arrow slick-next">Next</button>
          </div>
        </div>
      </section>

      <section className="bg-marble py-60 watermark watermark-br">
        <div className="row g-0">
          <div className="col-10 offset-1">
            <div className="animate fadeIn">
              <h2 className="subtitle mb-0">General Expertise</h2>
            </div>
            <div className="pt-20 animate fadeIn">
              <div className="text-content">
                <p>For the past 15 years, Dr Adnan has been practising aesthetic surgery on a full-time basis as a consultant. Throughout his illustrious career prior to this, Dr Adnan gained experience in reconstructive and aesthetic surgery. He completed his fellowship in aesthetic surgery from Rotterdam, Netherlands.</p>
              </div>
            </div>
            <div className="row g-0 pt-30 animate fadeIn" style={{columnGap:'0'}}>
              {expertise.map((item, i) => (
                <div key={i} className="col-6 col-lg-4" style={{borderBottom:'1px solid #ddd', padding:'10px 0'}}>
                  <span style={{fontSize:'0.85rem', letterSpacing:'0.05em', textTransform:'uppercase'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-60">
        <div className="row g-0">
          <div className="col-10 offset-1 col-lg-10 offset-lg-1">
            <div className="row g-0">
              <div className="col-12 col-lg-5 animate fadeIn">
                <h3 className="subtitle mb-0">Dr Adnan Tahir</h3>
                <h2 className="fs100">Best cosmetic surgeon in Dubai</h2>
                <div className="text-content pt-20">
                  <p>Dr. Adnan loves to socialize and share his knowledge with peers and learning doctors. He has had several plastic surgery-related articles published in peer-reviewed journals and has presented at numerous medical events and meetings throughout his career. Today, he is an active member of six of the top medical societies in the world.</p>
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1 pt-40 pt-lg-0 animate fadeIn">
                <div className="section-inner-sm row g-0" style={{alignItems:'center'}}>
                  <div className="col-1 d-flex">
                    <button className="slick-arrow about-arrow slick-prev">Previous</button>
                  </div>
                  <div className="col-10">
                    <div className="carousel" style={{display:'flex', gap:'20px', overflow:'hidden', padding:'10px 0'}}>
                      {mediaLogos.map((logo, i) => (
                        <div key={i} style={{flex:'0 0 180px', textAlign:'center'}}>
                          <img src={logo.src} alt={logo.alt} loading="lazy" style={{width:'180px', height:'108px', objectFit:'contain'}} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-1 d-flex">
                    <button className="slick-arrow about-arrow slick-next">Next</button>
                  </div>
                </div>
                <div className="pt-30">
                  <p className="uppercase">Follow Dr Adnan to start a conversation</p>
                  <ul className="nav" style={{gap:'20px', fontSize:'1.5rem'}}>
                    <li><a href="https://api.whatsapp.com/send?phone=971505674770" className="whatsapp no-underline" title="WhatsApp" target="_blank" rel="nofollow"><i className="fa-brands fa-whatsapp"></i><span className="sr-only">WhatsApp</span></a></li>
                    <li><a href="https://www.instagram.com/dradnantahir/" className="instagram no-underline" title="Instagram" target="_blank" rel="nofollow"><i className="fa-brands fa-instagram"></i><span className="sr-only">Instagram</span></a></li>
                    <li><a href="https://www.facebook.com/dradnantahir" className="facebook no-underline" title="Facebook" target="_blank" rel="nofollow"><i className="fa-brands fa-facebook-f"></i><span className="sr-only">Facebook</span></a></li>
                    <li><a href="https://www.youtube.com/channel/UCAp0E7J8AN6GSX2dN2QjA4g" className="youtube no-underline" title="YouTube" target="_blank" rel="nofollow"><i className="fa-brands fa-youtube"></i><span className="sr-only">YouTube</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marble py-60 watermark watermark-br">
        <div className="row g-0">
          <div className="col-10 offset-1">
            <div className="animate fadeIn">
              <h2 className="subtitle mb-0">Meet Our Team</h2>
            </div>
            <div className="row g-0 pt-30 animate fadeIn">
              <div className="col-12 col-lg-8">
                <div className="text-content">
                  <p>Frankie, the Patient Coordinator, is compassionate and empathetic, always ensuring that patients feel heard, supported, and well-cared for throughout their entire journey.</p>
                  <p>Nurse Laura – kind and caring, offering support and making sure patients feel comfortable and well taken care of during their treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
