// DEV TOOL: To force all preloaders on for testing, set in browser console:
//   window.__FORCE_PRELOADERS__ = true;
// To disable and return to normal, set:
//   window.__FORCE_PRELOADERS__ = false;
import React, { useState } from "react";
import Image from "next/image";

interface MediaPreloaderProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: string | number;
  children?: React.ReactNode;
  onLoaded?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const MediaPreloader: React.FC<MediaPreloaderProps> = ({
  src,
  alt = "",
  type = "image",
  className = "",
  style = {},
  borderRadius = '12px',
  children,
  onLoaded,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
}) => {
  // Allow dev to force all preloaders on
  const [loaded, setLoaded] = useState(false);
  const [forcePreloader, setForcePreloader] = useState(
    typeof window !== "undefined" && window.__FORCE_PRELOADERS__
  );

  // Listen for changes to window.__FORCE_PRELOADERS__
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setForcePreloader(window.__FORCE_PRELOADERS__);
    window.addEventListener("forcepreloaders-toggle", handler);
    return () => window.removeEventListener("forcepreloaders-toggle", handler);
  }, []);

  // Patch window.__FORCE_PRELOADERS__ to dispatch event on change
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    let value = window.__FORCE_PRELOADERS__;
    Object.defineProperty(window, "__FORCE_PRELOADERS__", {
      configurable: true,
      get: () => value,
      set: (v) => {
        value = v;
        window.dispatchEvent(new Event("forcepreloaders-toggle"));
      },
    });
  }, []);
  const [error, setError] = useState(false);

  // Notify parent when loaded
  const handleLoaded = () => {
    if (!loaded) {
      setLoaded(true);
      if (onLoaded) onLoaded();
    }
  };

  // Handle load error
  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  // For cached images, check if already complete using ref
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (forcePreloader) return; // Don't auto-load if forced
    if (type === "video" && videoRef.current) {
      if (videoRef.current.readyState >= 3 && !loaded) {
        setLoaded(true);
        if (onLoaded) onLoaded();
      }
    }
  }, [src, type, onLoaded, loaded, forcePreloader]);

  React.useEffect(() => {
    if (type === "video" && videoRef.current) {
      // Force muted attribute for iOS autoplay
      if (muted) {
        videoRef.current.muted = true;
        videoRef.current.setAttribute("muted", "");
      }
      // Force playsinline attribute for iOS inline playback
      if (playsInline) {
        videoRef.current.setAttribute("playsinline", "");
      }
      // Attempt to play if autoPlay is set
      if (autoPlay) {
        videoRef.current.play().catch((e) => {
          console.warn("Autoplay failed:", e);
        });
      }
    }
  }, [type, muted, playsInline, autoPlay]);

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`} style={{ ...style, borderRadius }}>
      {/* Always render the image/video so load event fires */}
      {type === "image" ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ borderRadius }}
          onLoad={handleLoaded}
          onError={handleError}
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ borderRadius }}
          onLoadedData={handleLoaded}
          onError={handleError}
        >
          {children}
        </video>
      )}
      {/* Overlay spinner only if not loaded, or if forcePreloader is on */}
      {(!loaded || forcePreloader) && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-10" style={{ borderRadius }}>
          {/* Solid grey background */}
          <div className="absolute inset-0 bg-[#c0c0c0] w-full h-full" style={{ borderRadius }} />
          {/* lds-roller loader (styles in globals.css) */}
          <div className="lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPreloader;
