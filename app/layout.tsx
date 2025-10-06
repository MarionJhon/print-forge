import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-montserrat-alternates"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              <img
                className="w-[200px] h-auto hidden md:block"
                src="/printforge-logo.svg"
                alt="Desktop logo"
              />
              <img
                className="w-[40px] h-auto block md:hidden"
                src="/printforge-logo-icon.svg"
                alt="Mobile logo"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <li className="transition duration-100 hover:text-[#F77429] border-[#F77429] hover:border-b-1">
                <a href="">3D MODELS</a>
              </li>
              <li className="transition duration-100 hover:text-[#F77429] border-[#F77429] hover:border-b-1">
                <a href="/about">ABOUT</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
