import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto mb-5 flex max-h-[4.5rem] justify-center px-3 sm:mb-7">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent" />
      <Dock
        className={cn(
          "pointer-events-auto !rounded-none border border-border bg-card/95 px-1 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl",
          "dark:bg-card/90 dark:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.5)]"
        )}
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 !rounded-none text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="font-mono text-[10px] uppercase tracking-[0.18em]">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-8 bg-border" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 !rounded-none text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-8 bg-border" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent side="top" className="font-mono text-[10px] uppercase tracking-[0.18em]">
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
