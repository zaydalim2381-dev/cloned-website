import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const experiences = {
  'rhinoplasty-before-and-after': {
    title: 'Rhinoplasty Before & After', subtitle: 'Patient Experiences',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    text: 'See the remarkable transformations achieved through rhinoplasty surgery performed by Dr. Adnan Tahir. Each patient\'s journey is unique, and the results speak for themselves.'
  },
  'hd-lipo-sculpture-in-dubai': {
    title: 'HD Lipo Sculpture — Patient Experiences', subtitle: 'Vaser HD Lipo Sculpture',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    text: 'Discover how HD VASER Liposculpture has transformed the bodies and confidence of our patients. Dr. Adnan Tahir\'s precision sculpting technique delivers outstanding results.'
  },
  'eva-journey': {
    title: 'Eva\'s Breast Augmentation Journey', subtitle: 'Breast Augmentation',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    text: 'Follow Eva\'s inspiring journey through breast augmentation surgery with Dr. Adnan Tahir. From the initial consultation to the final results, see how this procedure changed her life.'
  },
  'facelift': {
    title: 'Facelift Patient Experience', subtitle: 'Face Lift',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    text: 'Read about the transformative experience of facelift patients at Dr. Adnan Tahir\'s clinic. Discover how a facelift can restore a more youthful, refreshed appearance.'
  },
};

export default function PatientExperiencePage() {
  const { slug } = useParams();
  const exp = experiences[slug];

  if (!exp) {
    return (
      <main className="site-main py-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <h1>Page Not Found</h1>
              <Link to="/site-map">View all pages</Link>
            </div>
          </div>
        </main>
    );
  }

  return (
      <main className="site-main">
        <PageHero title={exp.title} subtitle={exp.subtitle} bgImage={exp.img} />
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1 col-lg-8">
              <div className="text-content">
                <p>{exp.text}</p>
                <p>Dr. Adnan Tahir, a UK-trained plastic surgeon, takes pride in delivering quality outcomes that enhance natural beauty. Each patient receives personalized care from consultation through recovery.</p>
                <p>To explore how {exp.subtitle.toLowerCase()} can help you achieve your aesthetic goals, schedule a consultation at CosmeSurge Hospital in Dubai.</p>
              </div>
              <div style={{ marginTop: '40px', padding: '30px', background: '#f5f0eb' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Start Your Journey</h3>
                <p>Call: <a href="tel:+971505674770" className="no-underline">+971 50 567 4770</a></p>
                <p>Email: <a href="mailto:dradnantahirenquiries@gmail.com" className="no-underline">dradnantahirenquiries@gmail.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
