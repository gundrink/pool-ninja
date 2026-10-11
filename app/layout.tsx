import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppKitProvider } from "@/lib/appkit";
import "./globals.css";

const ui = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-ui",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

const display = localFont({
  src: "./fonts/syne-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-display",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const metadata: Metadata = {
  title: "Pool Ninja",
  description: "Four devnet stablecoins. One reserve. Pool Ninja.",
  icons: { icon: "/poolninja.png", apple: "/poolninja.png" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ui.variable} ${display.variable}`} suppressHydrationWarning>
        <AppKitProvider>{children}</AppKitProvider>
      </body>
    </html>
  );
}
