import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MediaPage from './pages/MediaPage';
import SiteMapPage from './pages/SiteMapPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TreatmentPage from './pages/treatments/TreatmentPage';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPostPage from './pages/blog/BlogPostPage';
import BlogCategoryPage from './pages/blog/BlogCategoryPage';
import PatientExperiencePage from './pages/PatientExperiencePage';
import ThankYouPage from './pages/ThankYouPage';

const treatmentSlugs = [
  'vaser-liposuction-dubai', 'liposuction-in-dubai', 'calf-liposuction-in-dubai',
  'tummy-tuck-surgery-in-dubai', 'upper-body-lift-dubai', 'arm-lift-in-dubai',
  'lower-body-lift-dubai', 'thigh-lift-in-dubai', 'buttock-augmentation-dubai',
  'fat-transfer-in-dubai', 'mommy-makeover-dubai', 'gynecomastia-surgery-dubai',
  'rhinoplasty-in-dubai', 'facelift-and-neck-lift-in-dubai', 'brow-lift-in-dubai',
  'eyelid-surgery-in-dubai', 'otoplasty-in-dubai',
  'breast-augmentation-in-dubai', 'breast-lift-surgery-dubai',
  'breast-implants-removal-surgery-in-dubai', 'breast-reduction-dubai',
  'breast-reconstruction-surgery-in-dubai', 'inverted-nipple-and-areolar-reduction-surgery-in-dubai',
  'quantum-rf-skin-tightening-in-dubai', 'bodytite-accutite-skin-tightening-in-dubai',
  'vaser', 'j-plasma',
];

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/best-plastic-surgeon-in-dubai" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/press-and-media" element={<MediaPage />} />
          <Route path="/site-map" element={<SiteMapPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="/blogs" element={<BlogIndex />} />
          <Route path="/blogs/page/:pageNum" element={<BlogIndex />} />
          <Route path="/category/:categorySlug" element={<BlogCategoryPage />} />
          <Route path="/category/:categorySlug/page/:pageNum" element={<BlogCategoryPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          <Route path="/rhinoplasty-before-and-after" element={<PatientExperiencePage />} />
          <Route path="/hd-lipo-sculpture-in-dubai" element={<PatientExperiencePage />} />
          <Route path="/eva-journey" element={<PatientExperiencePage />} />
          <Route path="/facelift" element={<PatientExperiencePage />} />

          <Route path="/thank-you-consultation" element={<ThankYouPage title="Thank You" message="Your consultation request has been received. We will contact you shortly." />} />
          <Route path="/thank-you-contact" element={<ThankYouPage title="Message Sent" message="Thank you for reaching out. We will get back to you as soon as possible." />} />

          {treatmentSlugs.map(slug => (
            <Route key={slug} path={`/${slug}`} element={<TreatmentPage />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
