import type { ReactNode } from "react";
import { Provider } from "jotai";
import ExampleLinks from "@/components/AppNavigation";

type LayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return (
    <Provider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ExampleLinks />
        {children}
      </main>
    </Provider>
  );
}

export default AppLayout;
