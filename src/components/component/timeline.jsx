import React, { useEffect, useRef, useState } from "react";

export default function AnimatedPath() {
  const pathRef = useRef(null);
  const activeDotRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [checkpoints, setCheckpoints] = useState([]);

  const checkpointPercents = [0, 0.2, 0.4, 0.6, 0.8, 1];

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    const dots = checkpointPercents.map((p) => path.getPointAtLength(p * length));
    setCheckpoints(dots);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !pathRef.current ||
        !activeDotRef.current ||
        !scrollContainerRef.current
      )
        return;

      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const scrollProgress = Math.min(scrollTop / maxScroll, 1);

      const path = pathRef.current;
      const length = path.getTotalLength();
      const point = path.getPointAtLength(scrollProgress * length);

      activeDotRef.current.setAttribute("cx", point.x);
      activeDotRef.current.setAttribute("cy", point.y);
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-screen overflow-y-scroll bg-white"
    >
      <div className="h-[3000px] relative">
        <svg
          width="707"
          height="296"
          viewBox="0 0 707 296"
          className="sticky top-10 left-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M7 163H135C149.359 163 161 151.359 161 137V27C161 12.6406 172.641 1 187 1H240C254.359 1 266 12.6406 266 27V163V269C266 283.359 277.641 295 292 295H358C372.359 295 384 283.359 384 269V77C384 62.6406 395.641 51 410 51H472C486.359 51 498 62.6406 498 77V212C498 226.359 509.641 238 524 238H571C585.359 238 597 226.359 597 212V189C597 174.641 608.641 163 623 163H700"
            stroke="#3700FF"
            strokeWidth="2"
          />

          {checkpoints.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="5" fill="green" />
          ))}

          <circle ref={activeDotRef} r="7" fill="red" />
        </svg>
      </div>
    </div>
  );
}
