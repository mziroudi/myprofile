import { SiteCursor, SiteFooter, SiteNav } from "@/components/site/site-chrome";
import { HomeEffects } from "../home-effects";
import "../home.css";

// Journal pages share the home page's nav, colours and contact footer.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="v3">
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter label="Contact" />
      <SiteCursor />
      <HomeEffects />
    </div>
  );
}
