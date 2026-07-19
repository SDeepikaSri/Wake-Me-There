import type { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="
      min-h-screen
      bg-slate-950
      text-white
      pb-20
    ">
      <header className="
        border-b
        border-slate-800
        px-6
        py-4
      ">
        <h1 className="text-xl font-bold">
          📍 Wake Me There
        </h1>
      </header>

      <main className="px-6 py-8">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}

export default AppLayout;