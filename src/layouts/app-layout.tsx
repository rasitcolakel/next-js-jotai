import type { ReactNode } from "react";
import { Provider } from "jotai";

type LayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return (
    <Provider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </Provider>
  );
}

export default AppLayout;
