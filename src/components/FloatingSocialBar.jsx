import { SOCIAL } from '../data/content';

const scrollToContent = () => {
  const el = document.getElementById('main-content');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function FloatingSocialBar() {
  return (
    <div className="header-utilities">
      <div className="row g-0 h-100">
        <div className="col-1 d-flex">
          <a className="header-scroll smooth-scroll" onClick={scrollToContent} data-target="#main-content">Scroll</a>
        </div>
        <div className="col-1 offset-10 ps-0">
          <div className="social-dots section-inner d-flex">
            <ul className="nav m-auto">
              <li><a rel="nofollow" href={SOCIAL.whatsapp} className="whatsapp no-underline" title="WhatsApp" target="_blank"><i className="fa-brands fa-whatsapp"></i><span className="sr-only">WhatsApp</span></a></li>
              <li><a rel="nofollow" href={SOCIAL.instagram} className="instagram no-underline" title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i><span className="sr-only">Instagram</span></a></li>
              <li><a rel="nofollow" href={SOCIAL.facebook} className="facebook no-underline" title="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i><span className="sr-only">Facebook</span></a></li>
              <li><a rel="nofollow" href={SOCIAL.youtube} className="youtube no-underline" title="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i><span className="sr-only">YouTube</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
