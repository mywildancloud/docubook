import { getMetadata } from "@/app/layout";

export const metadata = getMetadata({
  title: "Hire Me",
  description: "Hire me for your project or business. Contact me for a free quote.",
});

export default function EmbeddedHTML() {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <iframe
          src="/hire-me.html"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
        />
      </div>
    );
}