import { useRef } from 'react';
import useCarousel from '../hooks/useCarousel';

export default function Carousel({
  children,
  slidesToShow = 1,
  autoplay = true,
  interval = 4000,
  loop = true,
  showDots = false,
  showArrows = true,
  className = '',
  style,
  responsive,
}) {
  const items = Array.isArray(children) ? children : [children];
  const totalSlides = items.length;
  const { index, slidesToShow: effective, next, prev, goTo, isFirst, isLast, pause, resume } = useCarousel({
    totalSlides,
    slidesToShow,
    loop,
    autoplay,
    interval,
    responsive,
  });

  const visibleItems = items.slice(index, index + effective);

  return (
    <div
      className={className}
      style={style}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="row g-0" style={{ alignItems: 'center' }}>
        {showArrows && (
          <div className="col-1 d-flex">
            <button
              className={`slick-arrow slick-prev ${isFirst && !loop ? 'slick-disabled' : ''}`}
              onClick={prev}
              aria-label="Previous"
              disabled={isFirst && !loop}
            >
              Previous
            </button>
          </div>
        )}
        <div className={showArrows ? 'col-10' : 'col-12'}>
          <div style={{
            display: 'flex', gap: '20px', overflow: 'hidden',
            padding: '20px 0'
          }}>
            {visibleItems.map((item, i) => (
              <div key={i} style={{
                flex: `0 0 ${100 / effective}%`,
                padding: '0 10px',
                minWidth: 0,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {showArrows && (
          <div className="col-1 d-flex">
            <button
              className={`slick-arrow slick-next ${isLast && !loop ? 'slick-disabled' : ''}`}
              onClick={next}
              aria-label="Next"
              disabled={isLast && !loop}
            >
              Next
            </button>
          </div>
        )}
      </div>
      {showDots && totalSlides > effective && (
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '10px',
          paddingTop: '20px'
        }}>
          {Array.from({ length: Math.ceil(totalSlides / effective) }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i * effective)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', border: 'none',
                background: index >= i * effective && index < (i + 1) * effective ? '#1a1a1a' : '#ccc',
                cursor: 'pointer', transition: 'background 0.3s'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
