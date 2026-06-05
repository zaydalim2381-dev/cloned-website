import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const staticLinks = [
  { name: 'Home', path: '/' },
  { name: 'About the Doctor', path: '/best-plastic-surgeon-in-dubai' },
  { name: 'Press & Media', path: '/press-and-media' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Cookie Policy', path: '/cookie-policy' },
  { name: 'Rhinoplasty Before & After', path: '/rhinoplasty-before-and-after' },
  { name: 'HD Lipo Sculpture', path: '/hd-lipo-sculpture-in-dubai' },
  { name: 'Breast Augmentation — Eva\'s Journey', path: '/eva-journey' },
  { name: 'Facelift Patient Experience', path: '/facelift' },
];

const treatmentLinks = [
  { name: 'VASER HD Liposculpture', path: '/vaser-liposuction-dubai' },
  { name: 'Liposuction', path: '/liposuction-in-dubai' },
  { name: 'Calf Liposuction', path: '/calf-liposuction-in-dubai' },
  { name: 'Tummy Tuck', path: '/tummy-tuck-surgery-in-dubai' },
  { name: 'Upper Body Lift', path: '/upper-body-lift-dubai' },
  { name: 'Upper Arm Lift', path: '/arm-lift-in-dubai' },
  { name: 'Lower Body Lift', path: '/lower-body-lift-dubai' },
  { name: 'Thigh Lift', path: '/thigh-lift-in-dubai' },
  { name: 'Buttock Augmentation', path: '/buttock-augmentation-dubai' },
  { name: 'Fat Transfer', path: '/fat-transfer-in-dubai' },
  { name: 'Mommy Makeover', path: '/mommy-makeover-dubai' },
  { name: 'Gynecomastia', path: '/gynecomastia-surgery-dubai' },
  { name: 'Rhinoplasty', path: '/rhinoplasty-in-dubai' },
  { name: 'Facelift and Neck Lift', path: '/facelift-and-neck-lift-in-dubai' },
  { name: 'Brow Lift', path: '/brow-lift-in-dubai' },
  { name: 'Eyelid Surgery (Blepharoplasty)', path: '/eyelid-surgery-in-dubai' },
  { name: 'Otoplasty', path: '/otoplasty-in-dubai' },
  { name: 'Breast Augmentation', path: '/breast-augmentation-in-dubai' },
  { name: 'Breast Lift', path: '/breast-lift-surgery-dubai' },
  { name: 'Breast Implant Removal', path: '/breast-implants-removal-surgery-in-dubai' },
  { name: 'Breast Reduction', path: '/breast-reduction-dubai' },
  { name: 'Breast Reconstruction', path: '/breast-reconstruction-surgery-in-dubai' },
  { name: 'Inverted Nipple Correction', path: '/inverted-nipple-and-areolar-reduction-surgery-in-dubai' },
  { name: 'Quantum RF', path: '/quantum-rf-skin-tightening-in-dubai' },
  { name: 'BodyTite & AccuTite', path: '/bodytite-accutite-skin-tightening-in-dubai' },
  { name: 'VASER', path: '/vaser' },
];

const categories = [...new Set(blogPosts.map(p => p.category))].sort();

export default function SiteMapPage() {
  return (
      <main id="main" className="site-main">
        <section className="py-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Site Map</h1>
              <div style={{ marginTop: '40px', columns: '2 300px', columnGap: '40px' }}>
                <h3 style={{ columnSpan: 'all', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>Pages</h3>
                {staticLinks.map((link, i) => (
                  <div key={i} style={{ breakInside: 'avoid', marginBottom: '12px' }}>
                    <Link to={link.path} style={{ textDecoration: 'none', color: '#1a1a1a', fontSize: '1rem' }}>
                      {link.name}
                    </Link>
                  </div>
                ))}
                <h3 style={{ columnSpan: 'all', marginBottom: '16px', marginTop: '30px', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>Treatments</h3>
                {treatmentLinks.map((link, i) => (
                  <div key={i} style={{ breakInside: 'avoid', marginBottom: '12px' }}>
                    <Link to={link.path} style={{ textDecoration: 'none', color: '#1a1a1a', fontSize: '1rem' }}>
                      {link.name}
                    </Link>
                  </div>
                ))}
                <h3 style={{ columnSpan: 'all', marginBottom: '16px', marginTop: '30px', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>Blog Categories</h3>
                {categories.map(cat => {
                  const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div key={cat} style={{ breakInside: 'avoid', marginBottom: '12px' }}>
                      <Link to={`/blog/category/${catSlug}`} style={{ textDecoration: 'none', color: '#1a1a1a', fontSize: '1rem' }}>
                        {cat}
                      </Link>
                    </div>
                  );
                })}
                <h3 style={{ columnSpan: 'all', marginBottom: '16px', marginTop: '30px', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>Blog Posts ({blogPosts.length})</h3>
                {blogPosts.map(post => (
                  <div key={post.slug} style={{ breakInside: 'avoid', marginBottom: '12px' }}>
                    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: '#1a1a1a', fontSize: '1rem' }}>
                      {post.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
