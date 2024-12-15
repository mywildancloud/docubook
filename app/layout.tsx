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
  title: `${meta.title}`, // Default title
  icons: {
    icon: meta.favicon,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: `${meta.baseURL}/og-image.jpg`,
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
  image?: string;
}): Metadata {
  return {
    ...defaultMetadata,
    title: title ? `${title} | ${meta.title}` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      images: image || defaultMetadata.openGraph?.images,
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