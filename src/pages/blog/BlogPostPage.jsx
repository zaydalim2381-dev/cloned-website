import { useParams, Link } from 'react-router-dom';
import { getPost, blogPosts, categories } from '../../data/blogPosts';
import GoogleReviews from '../../components/GoogleReviews';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="site-main py-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <h1>Post Not Found</h1>
              <Link to="/blogs">View all blog posts</Link>
            </div>
          </div>
        </main>
    );
  }

  const related = blogPosts.filter(p => p.category === post.category && p.slug !== slug).slice(0, 3);

  return (
      <main id="main" className="site-main">
        <div id="main-content" className="pt-60 pb-60">
          <div className="row g-0">
            <div className="col-10 offset-1">
              <div className="row g-0">
                <article className="col-12 col-lg-8">
                  <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="no-underline" style={{
                    fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666'
                  }}>
                    {post.category}
                  </Link>
                  <h1 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'playfair-display, serif', margin: '10px 0 20px'}}>
                    {post.title}
                  </h1>
                  <p style={{fontSize: '0.85rem', color: '#999', marginBottom: '20px'}}>{post.date}</p>
                  <img src={post.img} alt={post.title} style={{width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover'}} />
                  <div className="text-content" style={{marginTop: '30px'}}>
                    <p>This article explores {post.title.toLowerCase()} and provides insights from Dr. Adnan Tahir, a UK-trained plastic surgeon practicing at CosmeSurge Hospital in Dubai.</p>
                    <p>Dr. Adnan Tahir is one of the best plastic surgeons in Dubai, passionate about delivering quality outcomes in aesthetics. He believes in doing the minimum to achieve the desired outcome that is natural-looking and proportionate.</p>
                    <p>For a personalized consultation regarding {post.category.toLowerCase()}, contact Dr. Adnan Tahir's clinic to discuss your options.</p>
                  </div>
                  <div style={{marginTop: '40px', padding: '30px', background: '#f5f0eb'}}>
                    <h3 style={{fontFamily: 'playfair-display, serif', fontSize: '1.3rem', marginBottom: '10px'}}>Book a Consultation</h3>
                    <p>Call: <a href="tel:+971505674770" className="no-underline">+971 50 567 4770</a></p>
                  </div>
                  {related.length > 0 && (
                    <div style={{marginTop: '50px'}}>
                      <h2 className="subtitle mb-0" style={{marginBottom: '20px'}}>Related Posts</h2>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
                        {related.map(p => (
                          <Link key={p.slug} to={`/blog/${p.slug}`} style={{textDecoration: 'none', color: '#1a1a1a'}}>
                            <img src={p.img} alt={p.title} style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                            <h3 style={{fontSize: '1rem', fontFamily: 'playfair-display, serif', marginTop: '8px'}}>{p.title}</h3>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </article>

                <div className="col-12 col-lg-3 offset-lg-1">
                  <aside className="blog-sidebar" style={{paddingTop: '50px'}}>
                    <div style={{marginBottom: '30px'}}>
                      <h4 style={{fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '15px'}}>Categories</h4>
                      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        {categories.map(cat => (
                          <li key={cat} style={{marginBottom: '8px'}}>
                            <Link to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} style={{fontSize: '0.9rem', color: '#555'}}>
                              {cat}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoogleReviews />
      </main>
  );
}
