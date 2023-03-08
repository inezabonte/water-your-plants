import "../styles/global.css";
import { useEffect } from "react";
import { registerServiceWorker } from "../lib/subscribe";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    registerServiceWorker();
  }, []);
  return <Component {...pageProps} />;
}
