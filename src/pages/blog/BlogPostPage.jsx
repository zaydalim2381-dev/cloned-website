import { useParams, Link } from 'react-router-dom';
import { getPost } from '../../data/blogPosts';
import { getBlogContent } from '../../data/blogContent';
import GoogleReviews from '../../components/GoogleReviews';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const suffix = day > 3 ? 'th' : ['st', 'nd', 'rd'][day - 1] || 'th';
  const month = d.toLocaleString('en-GB', { month: 'long' });
  return `${day}${suffix} ${month} ${d.getFullYear()}`;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  const content = getBlogContent(slug);

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

  const catSlug = post.category.toLowerCase().replace(/\s+/g, '-');
  const url = window.location.href;
  const shareText = encodeURIComponent(post.title);

  const sections = content?.sections || [
    {
      heading: null,
      paragraphs: [
        `This article explores ${post.title.toLowerCase()} and provides insights from Dr. Adnan Tahir, a UK-trained plastic surgeon practicing at CosmeSurge Hospital in Dubai.`,
        'Dr. Adnan Tahir is one of the best plastic surgeons in Dubai, passionate about delivering quality outcomes in aesthetics. He believes in doing the minimum to achieve the desired outcome that is natural-looking and proportionate.',
        `For a personalized consultation regarding ${post.category.toLowerCase()}, contact Dr. Adnan Tahir's clinic to discuss your options.`,
      ],
    },
  ];

  return (
    <main id="main" className="site-main">
      <header className="page-header header-top-padding position-relative">
        <div className="watermark watermark-tl watermark-grey">
          <div className="over row g-0">
            <div className="col-12 col-lg-5 offset-lg-1">
              <header className="pt-lg-60">
                <div className="row g-0">
                  <div className="col-10 offset-1 col-lg-12 offset-lg-0 animate fadeIn">
                    <div className="section-inner-lg">
                      <nav className="categories pb-2">
                        <ul className="nav">
                          <li><Link to={`/category/${catSlug}`} className="category no-underline underline-hover">{post.category}</Link></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="section-inner-lg ps-lg-0">
                      <h1 className="fs75">{post.title}</h1>
                      <p className="category mb-0">{formatDate(post.date)}</p>
                    </div>
                  </div>
                  <div className="col-11 offset-1 pt-20 d-lg-none animate fadeIn">
                    <img width="640" height="640" src={post.img} className="w-100" alt={post.title} loading="lazy" />
                  </div>
                  {sections[0] && (
                    <div className="section-inner-lg col-10 offset-1 col-lg-12 offset-lg-0 pt-20 pt-lg-40">
                      <div className="text-content animate fadeIn">
                        <p>{sections[0].paragraphs[0]}</p>
                      </div>
                    </div>
                  )}
                </div>
              </header>
            </div>
            <div className="col-5 d-none d-lg-block animate fadeIn">
              <img width="640" height="640" src={post.img} className="w-100" alt={post.title} loading="lazy" />
            </div>
          </div>
        </div>
      </header>

      <div id="main-content" className="pt-lg-60 watermark watermark-bl watermark-grey pb-60 pb-lg-120">
        <div className="watermark watermark-tr watermark-grey">
          <div className="over row g-0 pb-40 pb-lg-60">
            {sections.map((section, i) => (
              <div key={i} className="col-10 offset-1 col-lg-8 offset-lg-2 pt-60 pt-lg-100">
                {section.heading && (
                  <header className="animate fadeIn">
                    <h2 className="fs75">{section.heading}</h2>
                  </header>
                )}
                <div className={`section-inner-lg text-content${i === 0 ? ' first-up' : ''} animate fadeIn`}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="col-10 offset-1 col-lg-8 offset-lg-2 pt-60 pt-lg-100">
              <header className="animate fadeIn">
                <h2 className="fs75">Book a Consultation</h2>
              </header>
              <div className="section-inner-lg text-content animate fadeIn">
                <p>Call: <a href="tel:+971505674770" className="no-underline">+971 50 567 4770</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="over row g-0 pb-lg-120">
          <div className="col-8 offset-1 offset-lg-2 d-lg-flex">
            <div className="section-inner-lg w-100 mt-auto">
              <div className="sharing d-lg-inline-block animate fadeIn">
                <h3 className="subtitle">Share blog post</h3>
                <ul className="social-dots list-inline mb-0 justify-content-center d-inline-block">
                  <li className="list-inline-item mb-0">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} className="btn-colour" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href={`https://twitter.com/intent/tweet?text=${shareText} - ${encodeURIComponent(url)}`} className="btn-colour" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}&t=${shareText}`} className="btn-colour" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href={`mailto:?subject=${shareText}&body=${encodeURIComponent(url)}`} className="btn-colour" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-wrap pt-60 pt-lg-60 animate fadeIn">
                <Link to="/blogs/" className="btn btn-solid">Return to blogs</Link>
              </div>
            </div>
          </div>
          <div className="col-2 col-lg-1 d-flex position-relative animate fadeIn">
            <div className="scroll-btn-wrap">
              <button data-target="#content" className="btn btn-solid smooth-scroll"><i className="fa-regular fa-arrow-left"></i> Back to top</button>
            </div>
          </div>
        </div>
      </div>

      <GoogleReviews />
    </main>
  );
}
