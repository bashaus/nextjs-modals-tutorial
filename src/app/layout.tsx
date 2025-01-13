import type { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export type RootLayoutProps = Readonly<PropsWithChildren>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
