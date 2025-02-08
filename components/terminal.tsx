import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/ui/terminal";

  export function NpxTerminal() {
    return (
      <Terminal>
        <TypingAnimation className="text-left pl-6">&gt; npx create_docu</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500 text-left pl-6">
          <span>Need to install the following packages:</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500 text-left pl-6">
          <span>create_docu@1.3.6</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500 text-left pl-6">
          <span>Ok to proceed? (y)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500 text-left pl-6">
          <span>✔ ? Enter a name for your project directory: (docubook)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500 text-left pl-6">
          <span>Creating a new Docubook project in /path/your/docubook from the main branch...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500 text-left pl-6">
          <span>✔ Docubook project successfully created in /path/your/docubook!</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500 text-left pl-6">
          <span>Next Step</span>
          <span className="pl-2">1. Navigate to your project directory: cd docubook</span>
          <span className="pl-2">2. Install dependencies: npm install</span>
          <span className="pl-2">3. Start the development server: npm run dev</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground text-left pl-6">
            Open the apps via browser http://localhost:3000
        </TypingAnimation>
      </Terminal>
    );
  }
