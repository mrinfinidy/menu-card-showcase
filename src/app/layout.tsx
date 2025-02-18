import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Menu Card",
  description: "Menu card of my restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
