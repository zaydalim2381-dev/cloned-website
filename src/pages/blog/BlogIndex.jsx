import { Link, useParams } from 'react-router-dom';
import { blogPosts, categories } from '../../data/blogPosts';
import GoogleReviews from '../../components/GoogleReviews';

const POSTS_PER_PAGE = 9;

export default function BlogIndex() {
  const { pageNum } = useParams();
  const currentPage = parseInt(pageNum, 10) || 1;
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
      pageNumbers.push('...');
    }
  }

  return (
    <main id="main" className="site-main">
      <div className="page-header header-top-padding position-relative">
        <div className="watermark watermark-tl watermark-grey">
          <div className="over row g-0">
            <div className="over col-10 offset-1 col-lg-5">
              <header className="pt-lg-60">
                <div className="row g-0">
                  <div className="col-12 animate fadeIn">
                    <h1 className="fs100">Blog Posts</h1>
                  </div>
                  <div className="col-12 col-lg-8 col-xxl-6 section-inner-lg">
                    <div className="text-content animate fadeIn">
                      <p>In these blogs learn all the important and helpful tips here by Dr Adnan Tahir on Plastic surgery and other surgeries related to breast, face and body.</p>
                    </div>
                  </div>
                </div>
              </header>
              <div className="over pt-20 pt-lg-40 animate fadeIn">
                <div id="filter" className="row g-0 section-inner-lg pe-lg-0">
                  <aside className="col-12 col-lg-4 section-inner-lg ps-lg-0 widget widget_search">
                    <form role="search" onSubmit={e => e.preventDefault()}>
                      <label className="sr-only" htmlFor="s">Search</label>
                      <div className="input-group">
                        <input className="field form-control btm-border" id="s" type="text" placeholder="Search" />
                        <span className="input-group-append ps-2">
                          <button className="submit btn" type="submit"><i className="fa-light fa-magnifying-glass"></i><span className="sr-only">Search</span></button>
                        </span>
                      </div>
                    </form>
                  </aside>
                  <aside className="col-12 col-lg-4 section-inner-lg ps-lg-0 widget widget_categories">
                    <h3 className="widget-title sr-only">Categories</h3>
                    <select className="postform" onChange={e => { if (e.target.value) window.location.href = e.target.value; }} defaultValue="">
                      <option value="" disabled>Category</option>
                      {categories.map(cat => (
                        <option key={cat} className="level-0" value={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}>{cat}</option>
                      ))}
                    </select>
                  </aside>
                  <aside className="col-12 col-lg-4 section-inner-lg ps-lg-0 widget widget_archive">
                    <h3 className="widget-title sr-only">Archives</h3>
                    <select onChange={e => { if (e.target.value) window.location.href = e.target.value; }} defaultValue="">
                      <option value="" disabled>Select Month</option>
                      <option value="/blogs">May 2026</option>
                      <option value="/blogs">April 2026</option>
                      <option value="/blogs">March 2026</option>
                      <option value="/blogs">February 2026</option>
                      <option value="/blogs">January 2026</option>
                    </select>
                  </aside>
                </div>
              </div>
            </div>
            <div className="over col-12 col-lg-5">
              <div id="featured" className="pt-30 pt-lg-0 pb-lg-40 position-relative row g-0">
                {currentPage === 1 && blogPosts.length > 0 && (
                  <>
                    <div className="col-10 offset-2 col-lg-12 offset-lg-0">
                      <Link to={`/blog/${blogPosts[0].slug}`} className="d-block animate fadeIn">
                        <img width="500" height="675" src={blogPosts[0].img} className="" alt={blogPosts[0].title} />
                      </Link>
                    </div>
                    <div className="featured-meta col-10 offset-1 col-lg-12 offset-lg-0 bg-grey section-inner pt-20 pb-30 pt-lg-40 pb-lg-60 animate fadeIn">
                      <nav className="categories">
                        <ul className="nav p-0 mb-2">
                          <li><Link to={`/category/${blogPosts[0].category.toLowerCase().replace(/\s+/g, '-')}`} className="category no-underline underline-hover">{blogPosts[0].category}</Link></li>
                        </ul>
                      </nav>
                      <h3 className="fs45 mb-0"><Link to={`/blog/${blogPosts[0].slug}`}>{blogPosts[0].title}</Link></h3>
                      <div className="btn-wrap pt-30 pt-lg-60">
                        <Link to={`/blog/${blogPosts[0].slug}`} className="btn btn-solid">Read more</Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="main-content" className="watermark watermark-bl watermark-grey">
        <div className="post-list-outer row g-0 watermark watermark-tr watermark-grey pt-50 pt-lg-120">
          <div className="over col-10 offset-1 row g-0">
            {currentPosts.slice(currentPage === 1 ? 1 : 0).map(post => (
              <div key={post.slug} className="col-12 col-lg-4 px-lg-3 pb-50 animate fadeIn">
                <div className="pb-20">
                  <Link to={`/blog/${post.slug}`}>
                    <img width="640" height="640" src={post.img} className="" alt={post.title} loading="lazy" />
                  </Link>
                </div>
                <header>
                  <nav className="categories pb-2">
                    <ul className="nav">
                      <li className="fs25 uppercase ls50">
                        <Link to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="no-underline hover-underline">{post.category}</Link>
                      </li>
                    </ul>
                  </nav>
                  <h3 className="fs35">
                    <Link to={`/blog/${post.slug}`} className="no-underline hover-underline">{post.title}</Link>
                  </h3>
                </header>
                <div className="btn-wrap pt-20 pt-lg-3">
                  <Link to={`/blog/${post.slug}`} className="btn btn-solid">Read more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-40 pt-lg-60 pb-lg-100 animate fadeIn">
          <nav aria-labelledby="posts-nav-label">
            <h2 id="posts-nav-label" className="screen-reader-text">Posts navigation</h2>
            <ul className="pagination justify-content-center">
              {currentPage > 1 && (
                <li className="page-item fs25 ls50">
                  <Link className="page-link" to={currentPage === 2 ? '/blogs' : `/blogs/page/${currentPage - 1}`}>
                    <i className="fa-light fa-arrow-left"><span className="sr-only">Previous</span></i>
                  </Link>
                </li>
              )}
              {pageNumbers.map((num, idx) => (
                <li key={idx} className={`page-item fs25 ls50${num === currentPage ? ' active' : ''}`}>
                  {num === '...' ? (
                    <span className="page-link dots">&hellip;</span>
                  ) : num === currentPage ? (
                    <span aria-current="page" className="page-link current">{num}</span>
                  ) : (
                    <Link className="page-link" to={num === 1 ? '/blogs' : `/blogs/page/${num}`}>{num}</Link>
                  )}
                </li>
              ))}
              {currentPage < totalPages && (
                <li className="page-item fs25 ls50">
                  <Link className="next page-link" to={`/blogs/page/${currentPage + 1}`}>
                    <i className="fa-light fa-arrow-right"><span className="sr-only">Next</span></i>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <GoogleReviews />
    </main>
  );
}
