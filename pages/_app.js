import "../styles/global.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/worker.js").then(
        (registration) => {
          console.log(
            "Service Worker registration completed with scope: ",
            registration.scope
          );
        },
        (err) => {
          console.log("Service Worker registration failed", err);
        }
      );
    }
  }, []);
  return <Component {...pageProps} />;
}
