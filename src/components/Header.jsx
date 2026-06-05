import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL } from '../data/content';
import { TREATMENT_CATEGORIES } from '../data/treatments';

const MEGA_ITEMS = [
  { id: 'body', title: 'Body', cat: TREATMENT_CATEGORIES[0] },
  { id: 'face', title: 'Face', cat: TREATMENT_CATEGORIES[1] },
  { id: 'breast', title: 'Breast', cat: TREATMENT_CATEGORIES[2] },
  { id: 'skin', title: 'Skin Tightening Technologies', cat: TREATMENT_CATEGORIES[3] },
  { id: 'patient', title: 'Patient Experiences' },
];

const PATIENT_EXP_LINKS = [
  { title: 'Rhinoplasty', slug: 'rhinoplasty-before-and-after' },
  { title: 'Vaser HD Lipo Sculpture', slug: 'hd-lipo-sculpture-in-dubai' },
  { title: 'Breast Augmentation', slug: 'eva-journey' },
  { title: 'Face Lift', slug: 'facelift' },
];

export default function Header({ onConsultationOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 500);
  };

  const toggleMobile = () => setMobileOpen(v => !v);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const header = document.getElementById('site-header');
      if (!header) return;
      const sy = window.scrollY;
      header.classList.toggle('is-scrolled', sy > 80);
      if (sy > 80) {
        header.classList.add(sy > lastScrollY ? 'scrolled-down' : 'scrolled-up');
        header.classList.remove(sy > lastScrollY ? 'scrolled-up' : 'scrolled-down');
      } else {
        header.classList.remove('scrolled-down', 'scrolled-up');
      }
      lastScrollY = sy;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [mobileOpen]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', !!activeMenu);
    return () => document.body.classList.remove('menu-open');
  }, [activeMenu]);

  return (
    <>
      <header id="site-header">
        <a className="skip-link sr-only sr-only-focusable" href="#content">Skip to content</a>
        <nav id="header-bar" aria-labelledby="main-nav-label">
          <h2 id="main-nav-label" className="screen-reader-text">Main Navigation</h2>
          <div className="section-inner-lg row g-0">
            <div className="header-contact col-3 offset-1 col-lg-3 offset-lg-0 section-inner-lg pe-lg-0 d-flex">
              <div className="w-100 my-auto">
                <a href={`mailto:${SOCIAL.email}`} className="d-inline-block me-2 me-lg-3 me-xxl-4" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-envelope fs35"></i>
                  <span className="sr-only">{SOCIAL.email}</span>
                </a>
                <a href={`tel:${SOCIAL.phone.replace(/\s/g, '')}`} className="ls50 no-underline d-inline-block">
                  <i className="fa-solid fa-phone-rotary fs35 me-2 me-lg-3"></i>
                  <span className="fs25 hover-underline d-none d-lg-inline-block">{SOCIAL.phone}</span>
                </a>
                <a rel="nofollow" href={SOCIAL.whatsapp} className="whatsapp no-underline d-inline-block d-lg-none" title="WhatsApp" target="_blank">
                  <i className="fa-brands fa-whatsapp fs35"></i>
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="col-4 col-lg-2 offset-lg-2 d-flex">
              <h2 className="branding m-auto">
                <Link to="/" rel="home" title="Dr Adnan Tahir">
                  <span className="sr-only">Dr Adnan Tahir</span>
                  <svg className="full-logo" viewBox="0 0 219.4 140.04" xmlns="http://www.w3.org/2000/svg">
                    <defs><style>{`.logo-letters,.logo-shape{stroke-width:0}.logo-shape{fill-rule:evenodd}`}</style></defs>
                    <path className="logo-shape" d="m52.65 67.48-7.33-5.87s-12.32 5.45-13.2 19.06c-0.87 13.61 6.61 23.36 21.26 24.2s19.8-4.4 19.8-4.4-20.7-0.9-23.46-13.2 2.93-19.8 2.93-19.8zm-16.08-43.71s-2.16-10.46 10.95-17.15c10.77-5.5 24.94-9.21 40.33-4.4s16.13 18.36 16.13 23.46v64.52s-0.24 7.23 3.67 8.07c4.72 1.01 9.69-1.35 11-3.67l3.28 3.28s-8.67 9.12-20.87 6.99c-12.21-2.13-14.66-8.59-14.66-15.4v-71.85s-0.11-12.19-13.2-13.2-21.22 1.94-24.2 6.6c-0.18 0.27-0.32 0.53-0.44 0.78 5.59 0.52 9.98 5.23 9.98 10.95 0 6.07-4.93 11-11 11-5.73 0-10.44-4.39-10.95-9.98z" />
                    <path className="logo-shape" d="m144.93,6.62h-17.49c-13.95,0-15.4,25.66-15.4,25.66h-2.93V2.95h78.84v29.33h-2.93s-1.45-25.66-15.4-25.66h-17.6v95.87h-21.47v-2.15s14.39-1.06,14.39-11.27V6.62Z" />
                    <path className="logo-letters" d="m13.33,133.14l-4.66-12.54-4.69,12.54h9.35Zm95.72-14.83v21.52h-1.38v-10.42h-12.57v10.42h-1.38v-21.52h1.38v9.93h12.57v-9.93h1.38Zm-25.04,0v1.17h-6.13v20.35h-1.38v-20.35h-6.13v-1.17h13.64Zm69.91,0v1.17h-6.13v20.35h-1.38v-20.35h-6.13v-1.17h13.64Zm-125.33,1.17v8.98h8.58v1.16h-8.58v9.04h9.5v1.16h-10.88v-21.52h10.88v1.17h-9.5Zm93.33,0v8.98h8.58v1.16h-8.58v9.04h9.5v1.16h-10.88v-21.52h10.88v1.17h-9.5Zm43.09-1.17v21.52h-1.38v-21.52h1.38Zm-151.26,16H3.56l-2.05,5.52H0l7.91-21.03h1.53l7.88,21.03h-1.5l-2.05-5.52Zm161.9-5.21c0-2.13.44-4.02,1.33-5.69s2.11-2.97,3.68-3.91c1.56-.94,3.32-1.41,5.26-1.41,2.45,0,4.52.57,6.19,1.72,1.68,1.14,2.9,2.75,3.68,4.81h-1.59c-.61-1.63-1.63-2.93-3.05-3.88-1.42-.95-3.16-1.42-5.23-1.42-1.65,0-3.16.39-4.51,1.18-1.35.79-2.41,1.92-3.19,3.4-.78,1.48-1.17,3.21-1.17,5.2s.39,3.67,1.17,5.13c.78,1.46,1.84,2.59,3.19,3.39,1.35.8,2.85,1.2,4.51,1.2,2.06,0,3.81-.48,5.23-1.43,1.42-.95,2.44-2.24,3.05-3.88h1.59c-.78,2.06-2,3.67-3.68,4.81-1.68,1.14-3.74,1.72-6.19,1.72-1.94,0-3.69-.46-5.26-1.39s-2.79-2.23-3.68-3.89c-.89-1.67-1.33-3.55-1.33-5.65Zm37.12,10.94c-1.39,0-2.61-.24-3.65-.74-1.04-.49-1.85-1.15-2.44-1.99-.58-.84-.92-1.77-1-2.79h1.44c.16,1.12.69,2.12,1.58,3,.89.88,2.24,1.32,4.06,1.32,1.06,0,1.99-.19,2.77-.58.79-.39,1.39-.92,1.82-1.59.43-.67.64-1.42.64-2.24,0-1.04-.25-1.87-.75-2.48-.5-.61-1.12-1.07-1.87-1.38-.75-.31-1.75-.63-3.02-.98-1.39-.37-2.51-.74-3.36-1.1-.85-.37-1.56-.93-2.15-1.7-.58-.77-.87-1.81-.87-3.14,0-1.02.27-1.96.81-2.8.54-.85,1.31-1.52,2.31-2.01,1-.49,2.16-.74,3.46-.74,1.9,0,3.43.47,4.6,1.41,1.16.94,1.86,2.09,2.08,3.46h-1.47c-.12-.55-.39-1.11-.81-1.69-.42-.57-1.01-1.05-1.78-1.43-.77-.38-1.68-.57-2.74-.57-1.43,0-2.64.39-3.62,1.18-.98.79-1.47,1.83-1.47,3.14,0,1.04.26,1.87.77,2.5.51.62,1.14,1.09,1.89,1.41s1.75.64,3.02.96c1.41.39,2.53.76,3.36,1.12.83.36,1.53.92,2.11,1.69.58.77.87,1.8.87,3.11,0,.96-.26,1.87-.77,2.73-.51.86-1.26,1.56-2.25,2.1-.99.54-2.19.81-3.6.81Z" />
                  </svg>
                  <svg className="simple-logo" enableBackground="new 0 0 219.4 105.2" version="1.1" viewBox="0 0 219.4 105.2" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path className="logo-shape" d="m52.7 67.5-7.3-5.9s-12.3 5.5-13.2 19.1 6.6 23.4 21.3 24.2 19.8-4.4 19.8-4.4-20.7-0.9-23.5-13.2 2.8-19.8 2.9-19.8zm-16.1-43.7s-2.2-10.5 11-17.1c10.8-5.5 24.9-9.2 40.3-4.4s16.1 18.3 16.1 23.4v64.5s-0.2 7.2 3.7 8.1c4.7 1 9.7-1.3 11-3.7l3.3 3.3s-8.7 9.1-20.9 7-14.7-8.6-14.7-15.4v-71.9s-0.1-12.2-13.2-13.2-21.2 2-24.2 6.6c-0.2 0.3-0.3 0.5-0.4 0.8 5.6 0.5 10 5.2 10 10.9 0 6.1-4.9 11-11 11-5.8 0-10.5-4.3-11-9.9z" />
                    <path className="logo-shape" d="m144.9 6.6h-17.5c-13.9 0-15.4 25.7-15.4 25.7h-2.9v-29.3h78.8v29.3h-2.9s-1.4-25.7-15.4-25.7h-17.6v95.9h-21.5v-2.2s14.4-1.1 14.4-11.3v-82.4z" />
                  </svg>
                </Link>
              </h2>
            </div>
            <div className="col-3 col-lg-5 section-inner-lg d-flex">
              <div className="my-auto ms-auto">
                <div className="hamburger-wrap my-auto ms-auto d-lg-none">
                  <button
                    className={`hamburger hamburger--stand${mobileOpen ? ' is-active' : ''}`}
                    type="button"
                    data-target="#mobile-menu"
                    aria-controls="main-menu"
                    aria-expanded={mobileOpen}
                    aria-label="Toggle navigation"
                    onClick={toggleMobile}
                  >
                    <span className="hamburger-inner"></span>
                  </button>
                </div>
                <button className="consultation-trigger btn btn-solid d-none d-lg-block" onClick={onConsultationOpen}>Book a Consultation</button>
              </div>
            </div>
          </div>
          <div id="desktop-menu" className="row g-0 d-none d-lg-flex" onMouseEnter={() => clearTimeout(timeoutRef.current)}>
            <div className="col-12 text-center d-flex">
              <ul id="menu-desktop-menu" className="nav m-auto justify-content-center">
                <li className="menu-item nav-item"><Link className="nav-link" to="/best-plastic-surgeon-in-dubai">About</Link></li>
                <li className={`hasSub menu-item nav-item${activeMenu === 'body' ? ' active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('body')}><a className="nav-link" href="#treatments-body-submenu" onClick={e => e.preventDefault()}>Body</a></li>
                <li className={`hasSub menu-item nav-item${activeMenu === 'face' ? ' active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('face')}><a className="nav-link" href="#treatments-face-submenu" onClick={e => e.preventDefault()}>Face</a></li>
                <li className={`hasSub menu-item nav-item${activeMenu === 'breast' ? ' active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('breast')}><a className="nav-link" href="#treatments-breast-submenu" onClick={e => e.preventDefault()}>Breast</a></li>
                <li className={`hasSub menu-item nav-item${activeMenu === 'skin' ? ' active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('skin')}><a className="nav-link" href="#skin-treatments-submenu" onClick={e => e.preventDefault()}>Skin Tightening Technologies</a></li>
                <li className="menu-item nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                <li className="menu-item nav-item"><Link className="nav-link" to="/press-and-media">Media</Link></li>
                <li className={`hasSub menu-item nav-item${activeMenu === 'patient' ? ' active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('patient')}><a className="nav-link" href="#patient-experiences-submenu" onClick={e => e.preventDefault()}>Patient Experiences</a></li>
                <li className="menu-item nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div id="menu-outer" className={`d-none d-lg-block${activeMenu ? ' active' : ''}`}
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={handleMouseLeave}>
        <div id="main-menu" className="main-menu position-relative h-100">
          <div className="row g-0 h-100">
            <div id="main-menu-sub" className="col-12 h-100">
              <div className="over row g-0 h-100">
                <div id="treatments-body-submenu" className={`sub-menu col-4 offset-1${activeMenu === 'body' ? ' current' : ''}`}>
                  <div className="pt-lg-100">
                    <h3 className="sr-only">Body</h3>
                    <div className="pb-lg-60">
                      <ul id="menu-treatments-body" className="nav d-block m-auto">
                        {TREATMENT_CATEGORIES[0].items.map(item => (
                          <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="nav-link">{item.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="treatments-face-submenu" className={`sub-menu col-4 offset-1${activeMenu === 'face' ? ' current' : ''}`}>
                  <div className="pt-lg-100">
                    <h3 className="sr-only">Face</h3>
                    <div className="pb-lg-60">
                      <ul id="menu-treatments-face" className="nav d-block m-auto">
                        {TREATMENT_CATEGORIES[1].items.map(item => (
                          <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="nav-link">{item.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="skin-treatments-submenu" className={`sub-menu col-4 offset-1${activeMenu === 'skin' ? ' current' : ''}`}>
                  <div className="pt-lg-100">
                    <h3 className="sr-only">Skin</h3>
                    <div className="pb-lg-60">
                      <ul id="menu-treatments-skin" className="nav d-block m-auto">
                        {TREATMENT_CATEGORIES[3].items.map(item => (
                          <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="nav-link">{item.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="treatments-breast-submenu" className={`sub-menu col-4 offset-1${activeMenu === 'breast' ? ' current' : ''}`}>
                  <div className="pt-lg-100">
                    <h3 className="sr-only">Breast</h3>
                    <div className="pb-lg-60">
                      <ul id="menu-treatments-breast" className="nav d-block m-auto">
                        {TREATMENT_CATEGORIES[2].items.map(item => (
                          <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="nav-link">{item.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="patient-experiences-submenu" className={`sub-menu col-4 offset-1${activeMenu === 'patient' ? ' current' : ''}`}>
                  <div className="pt-lg-100">
                    <h3 className="sr-only">Patient Experiences</h3>
                    <div className="pb-lg-60">
                      <ul id="menu-patient-experiences" className="nav d-block m-auto">
                        {PATIENT_EXP_LINKS.map(item => (
                          <li key={item.slug} className="nav-item"><Link to={`/${item.slug}`} className="nav-link">{item.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="treatments-body-submenu-img" className={`bg-img${activeMenu === 'body' ? ' show' : ''}`}>
                <img loading="lazy" width="720" height="810" src={TREATMENT_CATEGORIES[0].menuImage} className="cover-fit" alt="Body menu" />
              </div>
              <div id="treatments-face-submenu-img" className={`bg-img${activeMenu === 'face' ? ' show' : ''}`}>
                <img loading="lazy" width="720" height="810" src={TREATMENT_CATEGORIES[1].menuImage} className="cover-fit" alt="Face menu" />
              </div>
              <div id="skin-treatments-submenu-img" className={`bg-img${activeMenu === 'skin' ? ' show' : ''}`}>
                <img width="720" height="810" src={TREATMENT_CATEGORIES[3].menuImage} className="cover-fit" alt="" />
              </div>
              <div id="treatments-breast-submenu-img" className={`bg-img${activeMenu === 'breast' ? ' show' : ''}`}>
                <img loading="lazy" width="720" height="810" src={TREATMENT_CATEGORIES[2].menuImage} className="cover-fit" alt="Beast menu" />
              </div>
              <div id="patient-experiences-submenu-img" className={`bg-img${activeMenu === 'patient' ? ' show' : ''}`}>
                <img loading="lazy" width="720" height="810" src="https://adnan-tahir.com/wp-content/uploads/2023/10/menu-bg.jpg" className="cover-fit" alt="" />
              </div>
              <div className="close-wrap pb-lg-40">
                <button className="close close-sub" onClick={() => setActiveMenu(null)}>
                  <i className="fa-solid fa-xmark fs75 d-block"></i>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`d-lg-none${mobileOpen ? ' active' : ''}`}>
        <div id="menu-container" className="over menu-inner">
          <div className="menu-row row g-0 position-relative">
            <div className="mobile-main col-10 offset-1 pb-100">
              <div style={{display:'flex', justifyContent:'flex-end', padding:'0 0 20px'}}>
                <button onClick={() => setMobileOpen(false)} style={{background:'none', border:'none', fontSize:'1.5rem', cursor:'pointer'}}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div id="mobile-menu-inner" className="pb-20">
                <ul id="menu-mobile-menu" className="nav d-block w-100">
                  <li className="menu-item nav-item"><Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link></li>
                  <li className={`menu-item menu-item-has-children dropdown nav-item${activeMenu === 'body-m' ? ' active' : ''}`}>
                    <a className="dropdown-toggle nav-link" onClick={() => setActiveMenu(v => v === 'body-m' ? null : 'body-m')}>Body</a>
                    <ul className={`dropdown-menu${activeMenu === 'body-m' ? ' show' : ''}`}>
                      {TREATMENT_CATEGORIES[0].items.map(item => (
                        <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="dropdown-item" onClick={() => setMobileOpen(false)}>{item.title}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className={`menu-item menu-item-has-children dropdown nav-item${activeMenu === 'face-m' ? ' active' : ''}`}>
                    <a className="dropdown-toggle nav-link" onClick={() => setActiveMenu(v => v === 'face-m' ? null : 'face-m')}>Face</a>
                    <ul className={`dropdown-menu${activeMenu === 'face-m' ? ' show' : ''}`}>
                      {TREATMENT_CATEGORIES[1].items.map(item => (
                        <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="dropdown-item" onClick={() => setMobileOpen(false)}>{item.title}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className={`menu-item menu-item-has-children dropdown nav-item${activeMenu === 'breast-m' ? ' active' : ''}`}>
                    <a className="dropdown-toggle nav-link" onClick={() => setActiveMenu(v => v === 'breast-m' ? null : 'breast-m')}>Breast</a>
                    <ul className={`dropdown-menu${activeMenu === 'breast-m' ? ' show' : ''}`}>
                      {TREATMENT_CATEGORIES[2].items.map(item => (
                        <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="dropdown-item" onClick={() => setMobileOpen(false)}>{item.title}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className={`menu-item menu-item-has-children dropdown nav-item${activeMenu === 'skin-m' ? ' active' : ''}`}>
                    <a className="dropdown-toggle nav-link" onClick={() => setActiveMenu(v => v === 'skin-m' ? null : 'skin-m')}>Skin Tightening Technologies</a>
                    <ul className={`dropdown-menu${activeMenu === 'skin-m' ? ' show' : ''}`}>
                      {TREATMENT_CATEGORIES[3].items.map(item => (
                        <li key={item.id} className="nav-item"><Link to={`/${item.slug}`} className="dropdown-item" onClick={() => setMobileOpen(false)}>{item.title}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className="menu-item nav-item"><Link to="/best-plastic-surgeon-in-dubai" className="nav-link" onClick={() => setMobileOpen(false)}>About the Doctor</Link></li>
                  <li className={`menu-item menu-item-has-children dropdown nav-item${activeMenu === 'patient-m' ? ' active' : ''}`}>
                    <a className="dropdown-toggle nav-link" onClick={() => setActiveMenu(v => v === 'patient-m' ? null : 'patient-m')}>Patient Experiences</a>
                    <ul className={`dropdown-menu${activeMenu === 'patient-m' ? ' show' : ''}`}>
                      {PATIENT_EXP_LINKS.map(item => (
                        <li key={item.slug} className="nav-item"><Link to={`/${item.slug}`} className="dropdown-item" onClick={() => setMobileOpen(false)}>{item.title}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className="menu-item nav-item"><Link to="/blogs" className="nav-link" onClick={() => setMobileOpen(false)}>Blogs</Link></li>
                  <li className="menu-item nav-item"><Link to="/press-and-media" className="nav-link" onClick={() => setMobileOpen(false)}>Media</Link></li>
                  <li className="menu-item nav-item"><Link to="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link></li>
                </ul>
              </div>
              <div className="pt-30">
                <a href={`mailto:${SOCIAL.email}`} className="no-underline d-inline-block mb-2" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-envelope fs45 me-2"></i> <span className="fs35 ls50">Send us an email</span>
                </a>
                <a href={`tel:${SOCIAL.phone.replace(/\s/g, '')}`} className="no-underline d-inline-block">
                  <i className="fa-solid fa-phone-rotary fs45 me-2"></i>
                  <span className="fs35 ls50">{SOCIAL.phone}</span>
                </a>
              </div>
              <div className="social-dots pt-30">
                <ul className="nav" style={{gap:'20px'}}>
                  <li><a rel="nofollow" href={SOCIAL.whatsapp} className="whatsapp no-underline" title="WhatsApp" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
                  <li><a rel="nofollow" href={SOCIAL.instagram} className="instagram no-underline" title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a rel="nofollow" href={SOCIAL.facebook} className="facebook no-underline" title="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a rel="nofollow" href={SOCIAL.youtube} className="youtube no-underline" title="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fixed-navbar">
        <div className="d-lg-none">
          <button className="consultation-trigger btn btn-solid w-100" onClick={onConsultationOpen}>
            Book a Consultation
          </button>
        </div>
      </div>
    </>
  );
}