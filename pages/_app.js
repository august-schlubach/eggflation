import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add Google Analytics script to the head dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-K5HGPSCE4R";
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-K5HGPSCE4R");
    };
  }, []);

  return <Component {...pageProps} />;
}
