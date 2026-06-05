export default function PageHero({ title, subtitle, bgImage, mobileBgImage }) {
  return (
    <header className="position-relative d-flex" style={{ minHeight: '60vh', color: 'white' }}>
      <div className="over row g-0 w-100 my-auto">
        <div className="col-10 offset-1" style={{ paddingTop: '80px' }}>
          {subtitle && <h2 className="subtitle mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>{subtitle}</h2>}
          <h1 className="fs100" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '800px' }}>
            {title}
          </h1>
        </div>
      </div>
      <picture className="bg-img">
        {mobileBgImage && <source media="(max-width: 991px)" srcSet={mobileBgImage} />}
        <img src={bgImage} alt={title} className="cover-fit" />
      </picture>
      <div className="bg-img" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', zIndex: 1 }} />
    </header>
  );
}
