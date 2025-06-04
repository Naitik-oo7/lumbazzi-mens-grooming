import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const layers = [
  "/mountain1.png",
  "/mountain2.png",
  "/mountain3.png",
  // Add more layers if needed
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".layer");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-blue-900">
      {layers.map((src, i) => (
        <div
          key={i}
          className={`layer fixed top-0 left-0 w-full h-screen bg-cover bg-center`}
          style={{
            backgroundImage: `url(${src})`,
            zIndex: 10 + i * 10,
          }}
        />
      ))}
    </div>
  );
}
