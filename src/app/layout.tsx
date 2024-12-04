import type { Metadata } from "next";
import { ThemeProvider } from "@/theming/ThemeProvider";

import './../styles/styles.scss'

export const metadata: Metadata = {
  title: "NextJS TailwindCSS Multi-Theme Provider",
  description: "NextJS TailwindCSS Multi-theme provider",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
