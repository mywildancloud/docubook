import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/ui/terminal";

  export function NpxTerminal() {
    return (
      <Terminal>
        <TypingAnimation className="text-left pl-6 dark:text-blue-300 text-blue-600">&gt; npx @docubook/create@latest</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-muted-foreground text-left pl-6">
          <span>Need to install the following packages:</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-muted-foreground text-left pl-6">
          <span>@docubook/create@1.4.0</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-muted-foreground text-left pl-6">
          <span>Ok to proceed? (y)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="dark:text-blue-300 text-blue-600 text-left pl-6">
          <span>✔ ? Enter a name for your project directory: (docubook)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-muted-foreground text-left pl-6">
          <span>Creating a new Docubook project in /path/your/docubook from the starter branch...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-muted-foreground text-left pl-6">
          <span>✔ Docubook project successfully created in /path/your/docubook!</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-foreground text-left pl-6">
          <span>Next Step</span>
          <span className="pl-2 dark:text-blue-300 text-blue-600">1. Navigate to your project directory: cd docubook</span>
          <span className="pl-2 dark:text-blue-300 text-blue-600">2. Install dependencies: npm install</span>
          <span className="pl-2 dark:text-blue-300 text-blue-600">3. Start the development server: npm run dev</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground text-left pl-6">
            Open the apps via browser http://localhost:3000.
        </TypingAnimation>
      </Terminal>
    );
  }
