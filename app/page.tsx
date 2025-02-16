import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { TerminalSquareIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { getMetadata } from "@/app/layout";
import { NpxTerminal } from "@/components/terminal";

export const metadata = getMetadata({
  title: "Home",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:py-40 py-8">
      <Link
        href="/changelog"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        <div className="z-10 flex min-h-10 items-center justify-center max-[800px]:mt-10">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-black/5 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-accent dark:border-white/5 dark:bg-transparent dark:hover:bg-accent",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-100 hover:duration-300 hover:dark:text-neutral-200">
              <span>🚀 Introducing DocuBook v.1.4.2</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      </Link>
      <h1 className="text-2xl font-bold mb-4 sm:text-6xl">
        Create interactive nested documentations using MDX
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        An open-source Software Mintlify / Gitbook / Read the Docs / Docusaurus alternative. Free forever with no feature limitations.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className:
              "px-6 bg-accent text-white hover:bg-primary dark:bg-accent dark:hover:bg-primary",
            size: "lg",
          })}
        >
          Get Started
        </Link>
        <Link
          href="/playground"
          className={buttonVariants({
            variant: "secondary",
            className:
              "px-6 bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
            size: "lg",
          })}
        >
          Playground
        </Link>
      </div>
      <div className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-10 mb-12 font-code text-base font-medium">
        <TerminalSquareIcon className="w-5 h-5 mr-1 mt-0.5" />
        {"npx @docubook/create@latest"}
      </div>
      <NpxTerminal/>
    </div>
  );
}
