import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TabTitleHandler from "@/components/TabTitleHandler";
import Script from 'next/script';
import Logo from "@/assets/Images/Logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- METADATA STAYS HERE ---
export const metadata: Metadata = {
  metadataBase: new URL("https://grillshack.co.uk"),
  title: "Grill Shack West Drayton | Smash Burgers, Donner & Grill",
  description: "Smash Burgers, Donner Meat & Grill Platters - Freshly Prepared Whilst You Wait. Bringing bold flavors to West Drayton.",
  keywords: [
    "Grill Shack", "West Drayton", "Smash Burgers", "Donner Meat", "Grill Platters", "Halal", "Wings", "Milkshakes", "Burgers", "Fresh Food", "Takeaway", "Delivery"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Grill Shack West Drayton | Smash Burgers, Donner & Grill",
    description: "Smash Burgers, Donner Meat & Grill Platters - Freshly Prepared Whilst You Wait. Bringing bold flavors to West Drayton.",
    url: "https://grillshack.co.uk/",
    siteName: "Grill Shack West Drayton",
    images: [
      {
        url: Logo.src,
        width: 400,
        height: 400,
        alt: "Grill Shack Logo"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://grillshack.co.uk/",
    title: "Grill Shack West Drayton | Smash Burgers, Donner & Grill",
    description: "Smash Burgers, Donner Meat & Grill Platters - Freshly Prepared Whilst You Wait. Bringing bold flavors to West Drayton.",
    images: [Logo.src]
  }
};
// --- END METADATA ---


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = 'G-E7K6Z23GXM';


  return (
    <html lang="en" className="dark">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabTitleHandler />

        {children}


        {gaMeasurementId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${gaMeasurementId}');
                 `
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}