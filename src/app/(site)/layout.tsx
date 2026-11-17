import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative mx-auto min-h-screen max-w-[min(100vw-1.25rem,78rem)] px-5 pb-32 pt-10 font-sans sm:px-10 sm:pb-36 sm:pt-14">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar />
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
}
