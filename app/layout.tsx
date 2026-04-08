import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const siteUrl = "https://nolimitcity.uk.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nolimit City Slots — Demo & Discover Best Online Casino Games",
  description:
    "Looking for the best Nolimit City online slots? Discover high RTP games, new Nolimit City releases, and exclusive casino bonuses for UK players.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nolimit City Slots — Demo & Discover Best Online Casino Games",
    description:
      "Looking for the best Nolimit City online slots? Discover high RTP games, new Nolimit City releases, and exclusive casino bonuses for UK players.",
    siteName: "Nolimit City",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nolimit City Slots — Demo & Discover Best Online Casino Games",
    description:
      "Looking for the best Nolimit City online slots? Discover high RTP games, new Nolimit City releases, and exclusive casino bonuses for UK players.",
  },
  verification: {
    google: "RlUsY_5_pXpxNbzL0plo8-Vfru5Q3dasedM0acllji8",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
