"use client"
import PrintForgeLogoIcon from "@/public/printforge-logo-icon.svg";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PrintForgeLogo from "@/public/printforge-logo.svg";
export default function NavBar() {
  const pathName = usePathname();
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
        <ul className="flex items-center gap-1.5">
          <NavLink
            href="/3d-models"
            isActive={pathName.startsWith("/3d-models")}
          >
            3d Models
          </NavLink>
          <NavLink
            href="/about"
            isActive={pathName === "/about"}
          >
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
