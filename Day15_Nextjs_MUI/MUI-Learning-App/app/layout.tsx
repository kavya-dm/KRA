import { ReactNode } from "react";
import ThemeRegistry from "../components/ThemeRegistry";
import "./globals.css";

// Root layout that wraps the entire app with MUI theme support
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
