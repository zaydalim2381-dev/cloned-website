import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../../data/blogPosts';
import GoogleReviews from '../../components/GoogleReviews';

const POSTS_PER_PAGE = 10;

export default function BlogIndex() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const currentPosts = blogPosts.slice(0, page * POSTS_PER_PAGE);

  return (
    <main id="main" className="site-main">
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <h2 className="subtitle mb-0">Blog</h2>
              <div className="inset-content">
                <h1 className="fs100">Blog Posts</h1>
              </div>
              <div className="text-content">
                <p>In these blogs learn all the important and helpful tips here by Dr Adnan Tahir on Plastic surgery and other surgeries related to breast, face and body.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="400" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-FAQs-1.jpg" className="d-lg-none cover-fit" alt="Blog Posts" />
          <img width="1440" height="480" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-FAQs.jpg" className="d-none d-lg-block cover-fit" alt="Blog Posts" />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60">
        <div className="row g-0">
          <div className="col-10 offset-1">
            <div className="row g-0">
              <div className="col-12 col-lg-8">
                {currentPosts.map(post => (
                  <article key={post.slug} style={{marginBottom:'50px'}}>
                    <Link to={`/blog/${post.slug}`}>
                      <img src={post.img} alt={post.title} style={{width:'100%', height:'280px', objectFit:'cover'}} />
                    </Link>
                    <div style={{paddingTop:'15px'}}>
                      <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="no-underline" style={{fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#666'}}>
                        {post.category}
                      </Link>
                      <h3 style={{fontSize:'1.4rem', fontFamily:'playfair-display, serif', marginTop:'5px'}}>
                        <Link to={`/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                      </h3>
                      <p style={{fontSize:'0.85rem', color:'#999'}}>{post.date}</p>
                      <Link to={`/blog/${post.slug}`} className="btn btn-solid" style={{marginTop:'15px'}}>Read more</Link>
                    </div>
                  </article>
                ))}
                {page < totalPages && (
                  <div className="text-center pt-30 pb-60">
                    <button onClick={() => setPage(p => p + 1)} className="btn btn-solid">Load More Posts</button>
                  </div>
                )}
              </div>

              <div className="col-12 col-lg-3 offset-lg-1">
                <aside className="blog-sidebar">
                  <div style={{marginBottom:'30px'}}>
                    <h4 style={{fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'15px'}}>Search</h4>
                    <form role="search" onSubmit={e => e.preventDefault()} style={{display:'flex', border:'1px solid #ddd'}}>
                      <input type="text" placeholder="Search..." style={{flex:1, padding:'10px', border:'none', fontSize:'0.85rem'}} />
                      <button type="submit" style={{padding:'10px 15px', border:'none', background:'#1a1a1a', color:'white', cursor:'pointer'}}>Search</button>
                    </form>
                  </div>

                  <div style={{marginBottom:'30px'}}>
                    <h4 style={{fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'15px'}}>Categories</h4>
                    <ul style={{listStyle:'none', padding:0, margin:0}}>
                      {categories.map(cat => (
                        <li key={cat} style={{marginBottom:'8px'}}>
                          <Link to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} style={{fontSize:'0.9rem', color:'#555'}}>
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{marginBottom:'30px'}}>
                    <h4 style={{fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'15px'}}>Archives</h4>
                    <select style={{width:'100%', padding:'10px', border:'1px solid #ddd', fontSize:'0.85rem', background:'white'}} onChange={e => { if(e.target.value) window.location.href = e.target.value; }}>
                      <option value="">Select Month</option>
                      <option value="/blogs">May 2026</option>
                      <option value="/blogs">April 2026</option>
                      <option value="/blogs">March 2026</option>
                      <option value="/blogs">February 2026</option>
                      <option value="/blogs">January 2026</option>
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
