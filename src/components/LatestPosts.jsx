import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function LatestPosts() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="latest-posts" className="py-60 py-lg-120 watermark watermark-grey position-relative">
      <header className="over row g-0 animate fadeIn">
        <div className="col-10 offset-1 col-lg-6">
          <h3 className="subtitle mb-0">Our Recent</h3>
          <h2 className="fs100 inset-content">Blog Posts</h2>
        </div>
        <div className="col-4 d-none d-lg-flex">
          <Link to="/blogs" className="btn btn-solid ms-auto my-auto">View more blog posts</Link>
        </div>
      </header>
      <div className="over row g-0" style={{paddingTop: '40px'}}>
        <div className="d-none d-lg-block col-6 offset-1">
          {posts.slice(0, 2).map((post, i) => (
            <div key={post.slug} className={`post-link row g-0 animate fadeIn${i > 0 ? ' pt-30' : ''}`}>
              <div className="col-6 pe-3 d-flex">
                <div className="w-100 my-auto">
                  <Link to={`/blog/${post.slug}`}>
                    <img src={post.img} alt={post.title} style={{width: '100%', height: 'auto'}} />
                  </Link>
                </div>
              </div>
              <div className="col-6 d-flex">
                <div className="w-100 my-auto">
                  <nav className="categories">
                    <ul className="nav p-0 mb-2">
                      <li>
                        <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="category no-underline">{post.category}</Link>
                      </li>
                    </ul>
                  </nav>
                  <h3 className="fs45 mb-0">
                    <Link to={`/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-10 offset-1 col-lg-4 offset-lg-0 ps-lg-3 animate fadeIn">
          {posts.slice(2, 3).map(post => (
            <div key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <img src={post.img} alt={post.title} style={{width: '100%', height: 'auto'}} />
              </Link>
              <div style={{paddingTop: '15px'}}>
                <nav className="categories">
                  <ul className="nav p-0 mb-2">
                    <li>
                      <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="category no-underline">{post.category}</Link>
                    </li>
                  </ul>
                </nav>
                <h3 className="fs45 mb-0">
                  <Link to={`/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="col-10 offset-1 d-lg-none pt-30 animate fadeIn">
          <Link to="/blogs" className="btn btn-solid">View more blog posts</Link>
        </div>
      </div>
    </section>
  );
}
