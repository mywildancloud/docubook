import Link from "next/link";
import { buttonVariants } from "./ui/button";
import docuConfig from "@/docu.json"; // Import JSON

export function Footer() {
  const { footer } = docuConfig; // Extract footer from JSON

  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        {/* Footer Text */}
        <div className="flex items-center gap-3">
          <p className="text-center">
            Copyright © {new Date().getFullYear()} {footer.copyright} - Crafted with love using{" "}
            <Link
              href="https://www.docubook.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              DocuBook
            </Link>
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  const { footer } = docuConfig; // Extract footer from JSON

  return (
    <>
      {footer.buttons.map((button, index) => {
        const Icon = require("lucide-react")[button.iconName]; // Dynamically load icon
        return (
          <Link
            key={index}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <Icon className="h-4 w-4 mr-2 text-primary" />
            {button.text}
          </Link>
        );
      })}
    </>
  );
}
