import { ModeToggle } from "@/components/theme-toggle";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import docuConfig from "@/docu.json"; // Import JSON

export function Navbar() {
  const { navbar, social } = docuConfig; // Extract navbar and social from JSON

  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0 gap-2">
              {social.map((item) => {
                const Icon = require("lucide-react")[item.iconName]; // Dynamically load icon
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    className={buttonVariants({ variant: "ghost", size: "icon" })}
                  >
                    <Icon className="h-[1.1rem] w-[1.1rem]" />
                  </Link>
                );
              })}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  const { navbar } = docuConfig; // Extract navbar from JSON

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image src={navbar.logo.src} alt={navbar.logo.alt} width="24" height="24" />
      <h2 className="text-md font-bold font-code">{navbar.title}</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  const { navbar } = docuConfig; // Extract navbar from JSON

  return (
    <>
      {navbar.links.map((item) => {
        const isExternal = item.href.startsWith("http");

        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {item.title}
            {isExternal && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
