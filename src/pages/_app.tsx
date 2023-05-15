import "@newcodedevelopment/ui/dist/style.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "../styles/index.css";

const font = localFont({
  src: [
    {
      path: "../../public/font/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-family",
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${font.variable} font-sans bg-light-500 min-h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}
