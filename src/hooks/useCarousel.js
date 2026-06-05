import { useState, useCallback, useEffect, useRef } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timer;
    const handle = () => { clearTimeout(timer); timer = setTimeout(() => setWidth(window.innerWidth), 100); };
    window.addEventListener('resize', handle);
    return () => { window.removeEventListener('resize', handle); clearTimeout(timer); };
  }, []);
  return width;
}

export default function useCarousel({ totalSlides, slidesToShow = 1, loop = false, autoplay = false, interval = 4000, responsive }) {
  const winWidth = useWindowWidth();
  const effectiveSlidesToShow = responsive
    ? responsive.reduce((val, r) => winWidth < r.breakpoint ? r.slidesToShow : val, slidesToShow)
    : slidesToShow;
  const maxIndex = Math.max(0, totalSlides - effectiveSlidesToShow);
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => { setIndex(prev => Math.min(prev, maxIndex)); }, [maxIndex]);

  const next = useCallback(() => setIndex(prev => (prev < maxIndex ? prev + 1 : loop ? 0 : prev)), [maxIndex, loop]);
  const prev = useCallback(() => setIndex(prev => (prev > 0 ? prev - 1 : loop ? maxIndex : prev)), [maxIndex, loop]);
  const goTo = useCallback((i) => setIndex(Math.max(0, Math.min(i, maxIndex))), [maxIndex]);
  const pause = useCallback(() => { pausedRef.current = true; }, []);
  const resume = useCallback(() => { pausedRef.current = false; }, []);

  useEffect(() => {
    if (!autoplay || totalSlides <= 1) return;
    const timer = setInterval(() => {
      if (!pausedRef.current) setIndex(prev => (prev < maxIndex ? prev + 1 : loop ? 0 : prev));
    }, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, totalSlides, maxIndex, loop]);

  return { index, slidesToShow: effectiveSlidesToShow, next, prev, goTo, isFirst: index === 0, isLast: index >= maxIndex, pause, resume };
}
