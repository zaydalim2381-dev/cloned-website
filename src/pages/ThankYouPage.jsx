import { Link } from 'react-router-dom';

export default function ThankYouPage({ title, message }) {
  return (
      <main id="main" className="site-main">
        <div id="main-content" className="pt-100 pb-100">
          <div className="row g-0">
            <div className="col-10 offset-1 col-lg-6 offset-lg-3 text-center">
              <h1 className="fs45 playfair mb-20">{title}</h1>
              <p className="fs25" style={{marginBottom:'30px'}}>{message}</p>
              <Link to="/" className="btn btn-solid">Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
