import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
