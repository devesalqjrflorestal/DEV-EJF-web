import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ESALQ Júnior Florestal | Consultoria e Soluções Florestais",
  description: "A ESALQ Júnior Florestal é uma empresa júnior focada na excelência em consultoria florestal, manejo e soluções ambientais sustentáveis.",
  icons: {
    icon: "/logo.svg",
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow pt-[76px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
