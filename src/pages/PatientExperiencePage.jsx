import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';

const experiences = {
  'rhinoplasty-before-and-after': {
    title: 'Rhinoplasty Before & After', subtitle: 'Patient Experiences',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    sections: [
      {
        trigger: 'The Consultation',
        content: 'During the initial consultation, Dr. Adnan Tahir carefully assessed the patient\'s facial structure and discussed their aesthetic goals. Using advanced 3D imaging, the patient was able to visualize the potential results before committing to the procedure.',
      },
      {
        trigger: 'The Procedure',
        content: 'The rhinoplasty was performed under general anaesthesia. Dr. Adnan used an open approach, making a small incision across the columella to access the nasal structures. The dorsal hump was carefully reduced, and the nasal tip was refined to create a more harmonious profile.',
      },
      {
        trigger: 'Recovery & Results',
        content: 'The patient experienced minimal discomfort and was able to return to work after two weeks. The final results became apparent after six months, revealing a natural-looking nose that beautifully complements the patient\'s facial features.',
      },
    ],
  },
  'hd-lipo-sculpture-in-dubai': {
    title: 'HD Lipo Sculpture — Patient Experiences', subtitle: 'Vaser HD Lipo Sculpture',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    sections: [
      {
        trigger: 'The Consultation',
        content: 'Dr. Adnan Tahir conducted a thorough assessment of the patient\'s body composition and discussed their desired aesthetic outcome. The patient was an ideal candidate for VASER HD Liposculpture, being at their ideal body weight with stubborn fat deposits resistant to diet and exercise.',
      },
      {
        trigger: 'The Procedure',
        content: 'The procedure was performed under general anaesthesia and took approximately three hours. Dr. Adnan used VASER ultrasound technology to selectively emulsify fat cells before gently suctioning them out. The HD aspect allowed for precise sculpting of the abdominal muscles, creating a defined, athletic appearance.',
      },
      {
        trigger: 'Recovery & Results',
        content: 'The patient wore a compression garment for four weeks to support healing. The initial swelling subsided within three weeks, and the final results became visible at three months. The patient was thrilled with the transformation and reported a significant boost in confidence.',
      },
    ],
  },
  'eva-journey': {
    title: 'Eva\'s Breast Augmentation Journey', subtitle: 'Breast Augmentation',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    sections: [
      {
        trigger: 'The Consultation',
        content: 'Eva came to Dr. Adnan Tahir with a desire to restore breast volume lost after pregnancy and breastfeeding. During the consultation, Dr. Adnan discussed implant options including size, profile, and placement to achieve Eva\'s desired natural-looking result.',
      },
      {
        trigger: 'The Procedure',
        content: 'The breast augmentation was performed under general anaesthesia. Dr. Adnan placed moderate-profile silicone implants using a dual-plane technique to achieve a natural slope and movement. The incisions were made in the inframammary fold for optimal scar concealment.',
      },
      {
        trigger: 'Recovery & Results',
        content: 'Eva returned to light activities within a week and resumed full exercise at six weeks. She was delighted with the natural-looking results that restored her pre-pregnancy breast appearance. Eva said the procedure was life-changing and greatly improved her self-esteem.',
      },
    ],
  },
  'facelift': {
    title: 'Facelift Patient Experience', subtitle: 'Face Lift',
    img: 'https://adnan-tahir.com/wp-content/uploads/2023/10/patient-experience-banner.jpg',
    sections: [
      {
        trigger: 'The Consultation',
        content: 'Dr. Adnan Tahir evaluated the patient\'s facial structure and degree of aging. The patient had noticeable sagging in the mid-face, jowls, and neck laxity. A comprehensive facelift and neck lift plan was developed to address all areas of concern.',
      },
      {
        trigger: 'The Procedure',
        content: 'The facelift was performed under general anaesthesia. Dr. Adnan used a SMAS (Superficial Musculoaponeurotic System) technique, tightening the underlying muscle layers before redraping the skin. A neck lift was performed simultaneously through a small incision under the chin.',
      },
      {
        trigger: 'Recovery & Results',
        content: 'The patient experienced swelling and bruising which resolved over three weeks. The final results became visible at three months, revealing a refreshed, natural-looking appearance. The patient looked rested and rejuvenated without an operated appearance.',
      },
    ],
  },
};

export default function PatientExperiencePage() {
  const { slug } = useParams();
  const exp = experiences[slug];
  const [openIdx, setOpenIdx] = useState(null);

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
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <h2 className="subtitle mb-0">{exp.subtitle}</h2>
              <h1 className="fs65">{exp.title}</h1>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="810" src={exp.img} className="d-lg-none cover-fit" alt={exp.title} />
          <img width="1440" height="480" src={exp.img} className="d-none d-lg-block cover-fit" alt={exp.title} />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60 pb-60">
        <div className="row g-0">
          <div className="col-10 offset-1 col-lg-8">
            {exp.sections.map((section, i) => (
              <div key={i} className={`accordion-item${openIdx === i ? ' active' : ''}`} style={{ borderBottom: '1px solid #ccc' }}>
                <button
                  className="accordion-trigger"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', padding: '20px 0',
                    cursor: 'pointer', textAlign: 'left', font: 'inherit',
                  }}
                >
                  <h3 className="fs45 mb-0 playfair">{section.trigger}</h3>
                </button>
                <div className="accordion-content" style={{ display: openIdx === i ? 'block' : 'none', paddingBottom: '20px' }}>
                  <p className="text-content" style={{ margin: 0 }}>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-0 pt-40">
          <div className="col-10 offset-1 col-lg-8">
            <div style={{ padding: '30px', background: '#f5f0eb' }}>
              <h3 style={{ fontFamily: 'playfair-display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Start Your Journey</h3>
              <p>Call: <a href="tel:+971505674770" className="no-underline">+971 50 567 4770</a></p>
              <p>Email: <a href="mailto:dradnantahirenquiries@gmail.com" className="no-underline">dradnantahirenquiries@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <GoogleReviews />
    </main>
  );
}
