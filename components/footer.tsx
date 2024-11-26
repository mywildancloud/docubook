import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { TriangleIcon, CoffeeIcon } from "lucide-react";
import { Settings } from "@/setting";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <FooterLogo />
          <p className="text-center">
            Written by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href={Settings.authorUrl}
              target="_blank"
            >
              {Settings.author}
            </Link>
            . Crafted with love using{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href={Settings.github}
              target="_blank"
            >
              DocuBook
            </Link>
            .
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
  return (
    <>
      <Link
        href="https://vercel.com/import/project?template=https://github.com/mywildancloud/docubook"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm"})}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://trakteer.id/wildan.nrs/tip?quantity=5"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <CoffeeIcon className="h-4 w-4 mr-2 text-primary" />
        Sponsor
      </Link>
    </>
  );
}

export function FooterLogo() {
  return (
    <Link href="/" className="items-center gap-2.5 sm:flex hidden">
      <Image src="/images/docu.svg" alt="docu" width="24" height="24" />
    </Link>
  );
}