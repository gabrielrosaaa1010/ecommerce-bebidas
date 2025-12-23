import { Geist, Geist_Mono, Inter, Roboto, Open_Sans, Source_Code_Pro } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro"
});
