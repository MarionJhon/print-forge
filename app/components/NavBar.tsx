"use client";
import PrintForgeLogoIcon from "@/public/printforge-logo-icon.svg";
import NavLink from "./NavLink";
import Image from "next/image";
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
            <Image
              width={200}
              height={200}
              className="hidden md:block"
              src={PrintForgeLogo.src}
              alt="Desktop logo"
            />
            <Image
              width={40}
              height={40}
              className="block md:hidden"
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
          <NavLink href="/about" isActive={pathName === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
