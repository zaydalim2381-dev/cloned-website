import { useParams, Link } from 'react-router-dom';
import { blogPosts, categories } from '../../data/blogPosts';
import GoogleReviews from '../../components/GoogleReviews';

export default function BlogCategoryPage() {
  const { categorySlug } = useParams();
  const categoryName = categorySlug ? categorySlug.replace(/-/g, ' ') : '';
  const filtered = blogPosts.filter(
    p => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  return (
    <main id="main" className="site-main">
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <Link to="/blogs" className="no-underline" style={{fontSize:'0.9rem', color:'#666', display:'inline-block', marginBottom:'15px'}}>&larr; Back to all posts</Link>
              <h2 className="subtitle mb-0" style={{textTransform:'capitalize'}}>{categoryName}</h2>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="400" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-FAQs-1.jpg" className="d-lg-none cover-fit" alt={categoryName} />
          <img width="1440" height="480" src="https://adnan-tahir.com/wp-content/uploads/2024/01/AT-FAQs.jpg" className="d-none d-lg-block cover-fit" alt={categoryName} />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60">
        <div className="row g-0">
          <div className="col-10 offset-1">
            <div className="row g-0">
              <div className="col-12 col-lg-8">
                {filtered.length === 0 ? (
                  <p>No posts found in this category.</p>
                ) : (
                  filtered.map(post => (
                    <article key={post.slug} style={{marginBottom:'50px'}}>
                      <Link to={`/blog/${post.slug}`}>
                        <img src={post.img} alt={post.title} style={{width:'100%', height:'280px', objectFit:'cover'}} />
                      </Link>
                      <div style={{paddingTop:'15px'}}>
                        <span className="no-underline" style={{fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#666'}}>
                          {post.category}
                        </span>
                        <h3 style={{fontSize:'1.4rem', fontFamily:'playfair-display, serif', marginTop:'5px'}}>
                          <Link to={`/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                        </h3>
                        <p style={{fontSize:'0.85rem', color:'#999'}}>{post.date}</p>
                        <Link to={`/blog/${post.slug}`} className="btn btn-solid" style={{marginTop:'15px'}}>Read more</Link>
                      </div>
                    </article>
                  ))
                )}
              </div>

              <div className="col-12 col-lg-3 offset-lg-1">
                <aside className="blog-sidebar">
                  <div style={{marginBottom:'30px'}}>
                    <h4 style={{fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'15px'}}>Categories</h4>
                    <ul style={{listStyle:'none', padding:0, margin:0}}>
                      {categories.map(c => (
                        <li key={c} style={{marginBottom:'8px'}}>
                          <Link to={`/category/${c.toLowerCase().replace(/\s+/g, '-')}`} style={{fontSize:'0.9rem', color:'#555'}}>
                            {c}
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
