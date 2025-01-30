import { PropsWithChildren } from "react";

export default function PlaygroundLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}