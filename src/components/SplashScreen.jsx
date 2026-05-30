import { useEffect, useRef } from "react";

const NAME = "TIEGO MATHOBELA";

export default function SplashScreen({ onDone }) {
  const overlayRef = useRef(null);
  const dismissedRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  function dismiss() {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    overlayRef.current?.classList.add("splash--exit");
    setTimeout(() => onDoneRef.current(), 380);
  }

  useEffect(() => {
    const timer = setTimeout(dismiss, 1900);
    window.addEventListener("keydown", dismiss, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", dismiss);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={overlayRef}
      className="splash"
      onClick={dismiss}
      role="presentation"
      aria-hidden="true"
    >
      <div className="splash__inner">
        <h1 className="splash__name" aria-label={NAME}>
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="splash__char"
              style={{ animationDelay: `${i * 45}ms` }}
              aria-hidden="true"
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
        <div className="splash__line" style={{ animationDelay: "750ms" }} />
        <p className="splash__role" style={{ animationDelay: "1000ms" }}>
          Software Developer
        </p>
      </div>
      <span className="splash__skip">Click or press any key to skip</span>
    </div>
  );
}
