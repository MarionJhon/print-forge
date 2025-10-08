import PrintForgeLogoIcon from "@/public/printforge-logo-icon.svg";
import Link from "next/link";
import PrintForgeLogo from "@/public/printforge-logo.svg";
export default function NavBar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative">
            <img
              className="w-[200px] h-auto hidden md:block"
              src={PrintForgeLogo.src}
              alt="Desktop logo"
            />
            <img
              className="w-[40px] h-auto block md:hidden"
              src={PrintForgeLogoIcon.src}
              alt="Mobile logo"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="transition duration-100 hover:text-[#F77429] border-[#F77429] hover:border-b-1">
            <Link href="/3d-models">3D MODELS</Link>
          </li>
          <li className="transition duration-100 hover:text-[#F77429] border-[#F77429] hover:border-b-1">
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
