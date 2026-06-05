export default function Intro() {
  return (
    <section className="intro over row g-0 position-relative pb-30 pb-lg-0">
      <div className="over col-10 offset-1 col-lg-8 py-lg-100">
        <header className="animate fadeIn">
          <h2 className="subtitle">UK board-certified cosmetic surgeon in Dubai</h2>
          <h2 className="fs200" style={{marginBottom: 0, lineHeight: 1}}>
            Beauty <span className="d-block inset-content">made better</span>
          </h2>
        </header>
        <div className="row g-0 animate fadeIn">
          <div className="col-12 col-lg-8">
            <div className="inset-content text-content" style={{padding: '20px 0'}}>
              <p>
                Dr Adnan is one of the{' '}
                <a href="/best-plastic-surgeon-in-dubai/">best plastic surgeons in Dubai</a>{' '}
                and passionate about delivering quality outcomes in aesthetics. He is a UK-trained
                plastic surgeon and is registered with the UK General Medical Council as a Plastic
                Surgeon. He is well known as a celebrity cosmetic surgeon in Dubai and believes in
                doing the minimum to achieve the desired outcome that is natural-looking and
                proportionate. Meet Dr. Adnan at Cosmesurge Hospital in Dubai.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-wrap col-10 offset-2 col-lg-5 offset-lg-0 pt-20 pt-lg-0 animate fadeIn">
        <img
          width="720" height="810"
          src="https://adnan-tahir.com/wp-content/uploads/2023/10/home-intro-720x810.jpg"
          alt="Beauty made better"
          className="cover-fit"
        />
      </div>
    </section>
  );
}
