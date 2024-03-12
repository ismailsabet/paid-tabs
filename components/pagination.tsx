import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface PropTypes {
  setOffset: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ setOffset }: PropTypes) {
  const containerRef = useRef(null);

  useEffect(() => {
    let observerRefValue: any = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOffset((prev) => prev + 20);
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [containerRef, setOffset]);

  return <div ref={containerRef} />;
}
