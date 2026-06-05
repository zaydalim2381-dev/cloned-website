import { Link } from 'react-router-dom';
import { SOCIAL } from '../data/content';

export default function Footer() {
  return (
    <div id="footer-wrap" className="bg-marble position-relative watermark watermark-br">
      <div id="location" className="over row g-0">
        <div className="col-10 offset-1 position-relative bg-grey text-white">
          <div className="over text-center section-inner py-30 py-lg-40">
            <div className="pb-100 pb-lg-100 animate fadeIn">
              <h4 className="subtitle mb-0"><span className="text-gold">Meet Dr Adnan @</span></h4>
            </div>
            <i className="fa-solid fa-map-pin fs100 animate fadeIn" style={{color:'#fff'}}></i>
            <div className="pt-20">
              <div className="animate fadeIn">
                <h3 className="fs200 mb-0" style={{fontFamily:'playfair-display,serif'}}>CosmeSurge Hospital</h3>
              </div>
              <div className="pt-30 pt-lg-40 animate fadeIn">
                <p className="subtitle mb-0">02 Jumeirah Beach Road</p>
              </div>
            </div>
          </div>
          <div className="bg-img">
            <img loading="lazy" width="520" height="810" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-Footer-mob-1.jpg" className="d-lg-none cover-fit" alt="CosmeSurge Hopital" />
            <img loading="lazy" width="1080" height="450" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-Footer-2.jpg" className="d-none d-lg-block cover-fit" alt="CosmeSurge Hopital" />
          </div>
        </div>
      </div>

      <footer id="site-footer" className="over pt-50 pt-lg-60 pb-100 pb-lg-60">
        <div className="row g-0 pb-40 pb-lg-50">
          <div className="col-4 offset-4 col-lg-2 offset-lg-5 d-flex pb-40 animate fadeIn">
            <h3 className="branding m-auto p-0">
              <a href="/" title="Dr Adnan Tahir">
                <img loading="lazy" width="219" height="140" src="https://adnan-tahir.com/wp-content/themes/adnan-tahir-bm/images/logo-full.svg" alt="Dr Adnan Tahir" />
              </a>
            </h3>
          </div>
          <div className="col-10 offset-1 col-lg-5">
            <div className="pb-40 pb-lg-50 animate fadeIn">
              <div className="pb-2">
                <a href={`mailto:${SOCIAL.email}`} className="fs35 ls50 playfair no-underline" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-envelope me-3"></i><span className="hover-underline">Send us an email</span>
                </a>
              </div>
              <div>
                <a href={`tel:${SOCIAL.phone.replace(/\s/g, '')}`} className="fs35 ls50 playfair no-underline">
                  <i className="fa-solid fa-phone-rotary me-3"></i><span className="hover-underline">{SOCIAL.phone}</span>
                </a>
              </div>
            </div>
            <div className="animate fadeIn">
              <p className="uppercase">Come visit us at</p>
              <div className="fs35 ls50 playfair no-underline">
                <i className="fa-solid fa-map-pin me-2 me-lg-3"></i> CosmeSurge Hospital, 02 Jumeirah Beach Road, Dubai
              </div>
            </div>
            <nav className="social pt-20 animate fadeIn">
              <p className="uppercase">Follow us</p>
              <ul className="nav fs45">
                <li><a rel="nofollow" href={SOCIAL.facebook} className="facebook no-underline" title="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i><span className="sr-only">Facebook</span></a></li>
                <li><a rel="nofollow" href={SOCIAL.youtube} className="youtube no-underline" title="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i><span className="sr-only">YouTube</span></a></li>
                <li><a rel="nofollow" href={SOCIAL.whatsapp} className="whatsapp no-underline" title="WhatsApp" target="_blank"><i className="fa-brands fa-whatsapp"></i><span className="sr-only">WhatsApp</span></a></li>
                <li><a rel="nofollow" href={SOCIAL.instagram} className="instagram no-underline" title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i><span className="sr-only">Instagram</span></a></li>
              </ul>
            </nav>
          </div>
          <div className="col-10 offset-1 col-lg-5 offset-lg-0 col-xxl-4 offset-xxl-1 pt-40 pt-lg-0">
            <div className="animate fadeIn">
              <h3 className="fs35">Quick Links</h3>
              <nav id="footer-menu">
                <ul className="nav d-block">
                  <li className="nav-item"><Link to="/" title="Home" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/vaser-liposuction-dubai" title="VASER HD Liposculpture" className="nav-link">VASER HD Liposculpture</Link></li>
                  <li className="nav-item"><Link to="/tummy-tuck-surgery-in-dubai" title="Tummy Tuck" className="nav-link">Tummy Tuck</Link></li>
                  <li className="nav-item"><Link to="/breast-lift-surgery-dubai" title="Breast Lift" className="nav-link">Breast Lift</Link></li>
                  <li className="nav-item"><Link to="/facelift-and-neck-lift-in-dubai" title="Face Lift" className="nav-link">Face Lift</Link></li>
                  <li className="nav-item"><Link to="/blogs" title="Blogs" className="nav-link">Blogs</Link></li>
                  <li className="nav-item"><Link to="/rhinoplasty-in-dubai" title="Rhinoplasty" className="nav-link">Rhinoplasty</Link></li>
                  <li className="nav-item"><Link to="/breast-augmentation-in-dubai" title="Breast Augmentation" className="nav-link">Breast Augmentation</Link></li>
                  <li className="nav-item"><Link to="/breast-implants-removal-surgery-in-dubai" title="Breast Implant Removal" className="nav-link">Breast Implant Removal</Link></li>
                </ul>
              </nav>
              <nav id="policy-menu" className="pt-30 pt-lg-40">
                <ul className="nav d-block">
                  <li className="nav-item"><Link to="/cookie-policy" title="Cookie Policy" className="nav-link">Cookie Policy</Link></li>
                  <li className="nav-item"><Link to="/privacy-policy" title="Privacy Policy" className="nav-link">Privacy Policy</Link></li>
                  <li className="nav-item"><Link to="/site-map" title="Site Map" className="nav-link">Site Map</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-10 offset-1">
            <div className="info-row row g-0 pt-30">
              <div className="col-12 col-lg-6 animate fadeIn">
                <div className="text-content">
                  <p>&copy; Copyright AT Aesthetics {new Date().getFullYear()}</p>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-lg-end animate fadeIn">
                <div className="text-content">
                  <p>Designed &amp; built by <a rel="nofollow" href="https://blowmedia.co.uk/" className="credit" title="Blow Media">Blow Media</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
