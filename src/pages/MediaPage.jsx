const pressItems = [
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-khaleej-times.png',
    publication: 'Khaleej Times',
    title: 'Answering the demand for plastic surgeons among men',
    link: 'https://www.khaleejtimes.com/kt-network/answering-the-demand-for-plastic-surgeons-among-men',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-woman.png',
    publication: 'Emirates Woman',
    title: 'Everything you need to know about getting a mommy makeover',
    link: 'https://emirateswoman.com/everything-you-need-to-know-about-getting-a-mommy-makeover/',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-hayati.png',
    publication: 'Hayati Magazine',
    title: 'The God of Plastic Surgery in Dubai - How Dr Adnan Became One of the Best Surgeons in the World',
    link: 'https://www.hayatimagazine.com/the-god-of-plastic-surgery-in-dubai-how-dr-adnan-became-one-of-the-best-surgeons-in-the-world/',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-vogue.png',
    publication: 'VOGUE',
    title: 'Best Plastic Surgeons In Dubai',
    link: 'https://www.vogue.com/',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Elle-1.png',
    publication: 'Elle Hollywood',
    title: 'Dr. Adnan Tahir: The Best Celebrity Plastic Surgeon in Dubai',
    link: 'https://www.elle.com/hollywood/',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Cos-1.png',
    publication: 'Cosmopolitan',
    title: '10 Celebrity Plastic Surgeons in Dubai',
    link: 'https://www.cosmopolitan.com/',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2024/06/Spe.png',
    publication: "Spear's 500",
    title: 'Dr Adnan named in Spear\'s 500',
    link: 'https://www.spearswms.com/',
  },
  {
    logo: 'https://adnan-tahir.com/wp-content/uploads/2023/10/logo-dubais-best.png',
    publication: "Dubai's Best",
    title: 'Best Plastic Surgeon in Dubai',
    link: 'https://adnan-tahir.com/',
  },
];

export default function MediaPage() {
  return (
    <main id="main" className="site-main">
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <h2 className="subtitle mb-0">Press & Media</h2>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="400" src="https://adnan-tahir.com/wp-content/uploads/2023/12/AT-Press-and-Media-header-mob.jpg" className="d-lg-none cover-fit" alt="Press & Media" />
          <img width="1440" height="480" src="https://adnan-tahir.com/wp-content/uploads/2023/12/AT-Press-and-Media-header.jpg" className="d-none d-lg-block cover-fit" alt="Press & Media" />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60 pb-lg-100">
        <section className="row g-0 pb-30">
          <div className="col-10 offset-1">
            <div className="row g-0">
              {pressItems.map((item, i) => (
                <div key={i} className="col-12 col-lg-6 pb-40 animate fadeIn">
                  <div className="row g-0">
                    <div className="col-4 col-lg-3">
                      <img width="300" height="180" src={item.logo} alt={item.publication} loading="lazy" style={{maxWidth:'100%', height:'auto'}} />
                    </div>
                    <div className="col-8 col-lg-9 ps-3">
                      <p className="mb-0" style={{fontSize:'0.8rem', opacity:0.7, textTransform:'uppercase', letterSpacing:'0.1em'}}>{item.publication}</p>
                      <p className="fw-bold" style={{fontSize:'1.1rem'}}>{item.title}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-solid btn-sm">Read more</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
