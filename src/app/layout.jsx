import { Montserrat, Fraunces, Cormorant_Infant } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GuestsProvider } from "@/components/guests-context";
import { LanguageProvider } from "@/components/language-context";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-secondary",
});

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-tertiary",
  weight: ["300", "400", "500", "600", "700"],
  display: "block",
});

export const metadata = {
  title: "Mariana & Lincon",
  description: "Our wedding website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body
        className={[
          montserrat.variable,
          fraunces.variable,
          cormorant.variable,
        ].join(" ")}
      >
        <LanguageProvider>
          <GuestsProvider>{children}</GuestsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
