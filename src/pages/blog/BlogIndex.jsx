import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../../data/blogPosts';
import GoogleReviews from '../../components/GoogleReviews';

export default function BlogIndex() {
  return (
      <main id="main" className="site-main">
        <div id="main-content" className="pt-60">
          <section className="row g-0 pb-30">
            <div className="col-10 offset-1">
              <h1 className="subtitle mb-0">Blog Posts...</h1>
              <div className="text-content" style={{maxWidth: '600px', paddingTop: '10px'}}>
                <p>In these blogs learn all the important and helpful tips here by Dr Adnan Tahir on Plastic surgery and other surgeries related to breast, face and body.</p>
              </div>
            </div>
          </section>

          <div className="row g-0">
            <div className="col-10 offset-1">
              <div className="row g-0">
                <div className="col-12 col-lg-8">
                  {blogPosts.map(post => (
                    <article key={post.slug} style={{marginBottom: '50px'}}>
                      <Link to={`/blog/${post.slug}`}>
                        <img src={post.img} alt={post.title} style={{width: '100%', height: '280px', objectFit: 'cover'}} />
                      </Link>
                      <div style={{paddingTop: '15px'}}>
                        <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="no-underline" style={{
                          fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666'
                        }}>
                          {post.category}
                        </Link>
                        <h3 style={{fontSize: '1.4rem', fontFamily: 'playfair-display, serif', marginTop: '5px'}}>
                          <Link to={`/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                        </h3>
                        <Link to={`/blog/${post.slug}`} className="btn btn-solid" style={{marginTop: '15px'}}>Read more</Link>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="col-12 col-lg-3 offset-lg-1">
                  <aside className="blog-sidebar">
                    <div style={{marginBottom: '30px'}}>
                      <h4 style={{fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '15px'}}>Search</h4>
                      <form role="search" onSubmit={e => e.preventDefault()} style={{display: 'flex', border: '1px solid #ddd'}}>
                        <input type="text" placeholder="Search..." style={{flex: 1, padding: '10px', border: 'none', fontSize: '0.85rem'}} />
                        <button type="submit" style={{padding: '10px 15px', border: 'none', background: '#1a1a1a', color: 'white', cursor: 'pointer'}}>Search</button>
                      </form>
                    </div>

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

                    <div style={{marginBottom: '30px'}}>
                      <h4 style={{fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '15px'}}>Archives</h4>
                      <select style={{width: '100%', padding: '10px', border: '1px solid #ddd', fontSize: '0.85rem', background: 'white'}}
                        onChange={e => { if(e.target.value) window.location.href = e.target.value; }}>
                        <option value="">Select Month</option>
                        <option value="/blogs">May 2026</option>
                        <option value="/blogs">April 2026</option>
                        <option value="/blogs">March 2026</option>
                        <option value="/blogs">February 2026</option>
                        <option value="/blogs">January 2026</option>
                        <option value="/blogs">December 2025</option>
                      </select>
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
