export default function Hero() {
  return (
    <header id="hero" className="position-relative d-flex over watermark watermark-br">
      <div className="over row g-0 w-100 my-auto animate fadeIn">
        <div className="col-10 offset-1 col-lg-8 col-xxl-6 pt-100 pt-lg-60">
          <div className="">
            <h2 className="subtitle mb-0">Meet your</h2>
            <div className="inset-content">
              <h1 className="fs100">Elite Cosmetic Expert & Plastic Surgeon in Dubai</h1>
              <h3 className="subtitle mb-0">Dr. Adnan Tahir</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img width="520" height="810" src="https://adnan-tahir.com/wp-content/uploads/2023/10/home-banner-mob.jpg" className="d-lg-none cover-fit" alt="Cosmetic surgeon in Dubai" />
        <img width="1440" height="810" src="https://adnan-tahir.com/wp-content/uploads/2023/10/home-banner.jpg" className="d-none d-lg-block cover-fit" alt="Cosmetic Surgeon In Dubai" />
      </div>
    </header>
  );
}