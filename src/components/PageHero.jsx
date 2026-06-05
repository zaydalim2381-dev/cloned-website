export default function PageHero({ title, subtitle, bgImage, mobileBgImage }) {
  const mobImg = mobileBgImage || bgImage;
  return (
    <header id="hero" className="position-relative d-flex watermark watermark-br">
      <div className="over row g-0 w-100 my-auto">
        <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
          <div>
            {subtitle && <h2 className="subtitle mb-0">{subtitle}</h2>}
            <h1 className="fs100">{title}</h1>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img width="520" height="400" src={mobImg} className="d-lg-none cover-fit" alt={title} />
        <img width="1440" height="480" src={bgImage} className="d-none d-lg-block cover-fit" alt={title} />
      </div>
    </header>
  );
}
