import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import docuConfig from "@/docu.json"; // Import JSON
import "@/styles/globals.css";

const { meta } = docuConfig; // Extract metadata from JSON

// Default Metadata
const defaultMetadata: Metadata = {
  metadataBase: new URL(meta.baseURL),
  description: meta.description,
  title: meta.title,
  icons: {
    icon: meta.favicon,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: `${meta.baseURL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: String(meta.title),
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Dynamic Metadata Getter
export function getMetadata({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string; // Tambahkan parameter untuk og:image
}): Metadata {
  return {
    ...defaultMetadata,
    title: title ? `${title}` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: String(title || defaultMetadata.openGraph?.title), // Pastikan hanya string
            },
          ]
        : defaultMetadata.openGraph?.images,
      locale: defaultMetadata.openGraph?.locale || "en_US",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
