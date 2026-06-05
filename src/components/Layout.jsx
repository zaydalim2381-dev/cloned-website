import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ConsultationModal from './ConsultationModal';
import FloatingSocialBar from './FloatingSocialBar';
import useScrollAnimation from '../hooks/useScrollAnimation';

function getPageClass(pathname) {
  if (pathname === '/') return 'page-home';
  if (pathname.startsWith('/blog/') || pathname.startsWith('/blogs/') || pathname.startsWith('/category/')) return 'news-single';
  if (pathname.startsWith('/best-plastic-surgeon')) return 'page-about';
  if (pathname.startsWith('/contact')) return 'page-contact';
  if (pathname.startsWith('/press-and-media')) return 'page-media';
  if (pathname.startsWith('/rhinoplasty-before-and-after') || pathname.startsWith('/hd-lipo-sculpture') || pathname.startsWith('/eva-journey') || pathname.startsWith('/facelift')) return 'page-experiences';
  if (pathname.startsWith('/thank-you')) return 'page-thank-you';
  if (pathname.startsWith('/privacy-policy') || pathname.startsWith('/cookie-policy') || pathname.startsWith('/site-map')) return 'page-policy';
  return 'page-default';
}

function getContentClass(pathname) {
  if (pathname === '/') return 'page-home';
  const treatmentPattern = /^\/(?:vaser-liposuction-dubai|liposuction-in-dubai|calf-liposuction|tummy-tuck|upper-body-lift|arm-lift|lower-body-lift|thigh-lift|buttock-augmentation|fat-transfer|mommy-makeover|gynecomastia|rhinoplasty-in-dubai|facelift-and-neck-lift|brow-lift|eyelid-surgery|otoplasty|breast-augmentation|breast-lift|breast-implants-removal|breast-reduction|breast-reconstruction|inverted-nipple|quantum-rf|bodytite-accutite|vaser$|j-plasma)/;
  if (treatmentPattern.test(pathname)) return 'single-treatment';
  if (pathname.startsWith('/blog/') || pathname.startsWith('/blogs/')) return 'news-single';
  if (pathname.startsWith('/category/')) return 'news-single';
  if (pathname.startsWith('/rhinoplasty-before-and-after') || pathname.startsWith('/hd-lipo-sculpture') || pathname.startsWith('/eva-journey') || pathname.startsWith('/facelift')) return 'page-experiences';
  if (pathname.startsWith('/press-and-media')) return 'page-media';
  if (pathname.startsWith('/privacy-policy') || pathname.startsWith('/cookie-policy') || pathname.startsWith('/site-map')) return 'page-policy';
  if (pathname.startsWith('/thank-you')) return 'page-thank-you';
  return '';
}

export default function Layout() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const { pathname } = useLocation();
  useScrollAnimation();

  const pageClass = getPageClass(pathname);
  const contentClass = getContentClass(pathname);

  return (
    <div className={`site ${pageClass}`} id="page">
      <Header onConsultationOpen={() => setConsultationOpen(true)} />
      <div id="content" className={contentClass} tabIndex="-1">
        <Outlet />
      </div>
      <Footer />
      <FloatingSocialBar />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </div>
  );
}
