import CookieModal from "../components/CookieModal";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  verification: {
    google: "asdasd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} w-screen overflow-x-hidden`}>
        {children}
        <CookieModal />
      </body>
    </html>
  );
}
