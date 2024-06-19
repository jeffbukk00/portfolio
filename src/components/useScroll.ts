import { UIEventHandler, useEffect, useRef, useState } from "react";

const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll: UIEventHandler<HTMLDivElement> = (event) => {
    // eslint-disable-next-line
    const e = event.target as any;

    let scrolled = Math.floor(
      (e.scrollTop / (e.scrollHeight - e.offsetHeight)) * 100
    );

    if (scrolled >= 99) scrolled = 100;

    setScrollHeight(scrolled);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.width = scrollHeight.toString() + "%";
    }
  }, [scrollHeight]);

  return { scrollRef, scroll };
};

export default useScroll;
