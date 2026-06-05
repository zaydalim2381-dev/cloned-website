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
      <header id="hero" className="position-relative d-flex watermark watermark-br">
        <div className="over row g-0 w-100 my-auto">
          <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
            <div>
              <h2 className="subtitle mb-0">Blog</h2>
              <div className="inset-content">
                <h1 className="fs45">{post.title}</h1>
              </div>
              <p className="pt-10" style={{fontSize:'0.85rem', color:'#999'}}>{post.date}</p>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img width="520" height="400" src={post.img} className="d-lg-none cover-fit" alt={post.title} />
          <img width="1440" height="480" src={post.img} className="d-none d-lg-block cover-fit" alt={post.title} />
        </div>
      </header>

      <div id="main-content" className="grad-white-to-grey pt-60 pb-60">
        <div className="row g-0">
          <div className="col-10 offset-1">
            <div className="row g-0">
              <article className="col-12 col-lg-8">
                <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="no-underline" style={{fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#666'}}>
                  {post.category}
                </Link>
                <div className="text-content pt-20">
                  <p>This article explores {post.title.toLowerCase()} and provides insights from Dr. Adnan Tahir, a UK-trained plastic surgeon practicing at CosmeSurge Hospital in Dubai.</p>
                  <p>Dr. Adnan Tahir is one of the best plastic surgeons in Dubai, passionate about delivering quality outcomes in aesthetics. He believes in doing the minimum to achieve the desired outcome that is natural-looking and proportionate.</p>
                  <p>For a personalized consultation regarding {post.category.toLowerCase()}, contact Dr. Adnan Tahir's clinic to discuss your options.</p>
                </div>

                <div className="pt-40" style={{padding:'30px', background:'#f5f0eb'}}>
                  <h3 style={{fontFamily:'playfair-display, serif', fontSize:'1.3rem', marginBottom:'10px'}}>Book a Consultation</h3>
                  <p>Call: <a href="tel:+971505674770" className="no-underline">+971 50 567 4770</a></p>
                </div>

                {related.length > 0 && (
                  <div className="pt-50">
                    <h2 className="subtitle mb-0" style={{marginBottom:'20px'}}>Related Posts</h2>
                    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))', gap:'20px'}}>
                      {related.map(p => (
                        <Link key={p.slug} to={`/blog/${p.slug}`} style={{textDecoration:'none', color:'#1a1a1a'}}>
                          <img src={p.img} alt={p.title} style={{width:'100%', height:'180px', objectFit:'cover'}} />
                          <h3 style={{fontSize:'1rem', fontFamily:'playfair-display, serif', marginTop:'8px'}}>{p.title}</h3>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              <div className="col-12 col-lg-3 offset-lg-1">
                <aside className="blog-sidebar" style={{paddingTop:'50px'}}>
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
