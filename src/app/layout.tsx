import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Consultoria Azul - Descontos de até 98%",
  description:
    "Descontos de até 98%. Fique hoje mesmo no Azul. Verifique as ofertas disponíveis para você e consulte sua situação.",
  icons: {
    icon: "/img/icons8-verificado-96.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${dmSans.variable} bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}