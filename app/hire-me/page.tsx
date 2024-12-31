import { getMetadata } from "@/app/layout";

export const metadata = getMetadata({
  title: "Hire Me",
  description: "Hire me to start a documentation project with DocuBook",
});

export default function EmbeddedHTML() {
    return (
      <div className="w-full py-0 dark:bg-transparent mx-auto min-h-svh">
        <iframe
          src="/hire-me.html"
          width="100%"
          height="1000"
        />
      </div>
    );
}