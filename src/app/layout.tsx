import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
