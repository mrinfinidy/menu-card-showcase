import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";

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
          <Box bg={"orangeBg"} pb="10">
            <Navbar />
            {children}
          </Box>
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
