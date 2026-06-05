import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Accreditations from '../components/Accreditations';
import FeaturedTreatments from '../components/FeaturedTreatments';
import MediaSection from '../components/MediaSection';
import ClientCases from '../components/ClientCases';
import Testimonials from '../components/Testimonials';
import GoogleReviews from '../components/GoogleReviews';
import LatestPosts from '../components/LatestPosts';

function useScrollAnimation() {
  const observerRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.animate');
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ani-trigger');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return null;
}

export default function HomePage() {
  return (
      <main id="main" className="site-main">
        <Hero />
        <div id="main-content" className="grad-white-to-grey pt-60">
          <div className="watermark watermark-bl">
            <Intro />
            <Accreditations />
          </div>
          <FeaturedTreatments />
        </div>
        <MediaSection />
        <div className="grad-grey-to-white pt-30">
          <div id="testimonial-outer" className="pt-30 pb-50">
            <ClientCases />
            <Testimonials />
          </div>
        </div>
        <GoogleReviews />
        <LatestPosts />
      </main>
  );
}
