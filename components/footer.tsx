import Link from "next/link";
import { buttonVariants } from "./ui/button";
import docuConfig from "@/docu.json"; // Import JSON

export function Footer() {
  const { footer } = docuConfig; // Extract footer from JSON

  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            {footer.text.replace("{year}", new Date().getFullYear().toString())}{" "}
            {footer.links.map((link, index) => (
              <Link
                key={index}
                className={`px-1 ${
                  link.underline ? "underline underline-offset-2" : ""
                }`}
                href={link.url}
                target="_blank"
              >
                {link.text}
              </Link>
            ))}
          </p>
        </div>

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
            className={buttonVariants({ variant: "outline", size: "sm"})}
          >
            <Icon className="h-4 w-4 mr-2 text-primary" />
            {button.text}
          </Link>
        );
      })}
    </>
  );
}
