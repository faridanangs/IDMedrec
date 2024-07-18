"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ConnectButton } from "./connect_button";

export default function NavbarDashboard() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center justify-between",
        "px-5 lg:px-10 2xl:px-16 py-[14px]",
        "shadow",
        "bg-white sticky top-0 z-40"
      )}
    >
      <aside className="flex items-center">
        <Link href="/dashboard">
          <Image
            src="/images/logo-real.png"
            width={125}
            height={60}
            alt="logo"
            className="w-auto h-auto sm:mr-12"
          />
        </Link>
        <ul
          className={cn("font-medium text-sm text-[#71717A]", "hidden sm:flex")}
        >
          <li
            className={cn(
              "mr-6 ",
              "hover:text-black duration-300",
              `${pathname == "/dashboard" ? "text-black" : ""}`
            )}
          >
            <Link href="/dashboard">Admin</Link>
          </li>
          <li
            className={cn(
              "mr-6 ",
              "hover:text-black duration-300",
              `${pathname == "/dashboard/doctor" ? "text-black" : ""}`
            )}
          >
            <Link href="/dashboard/doctor">Doctor</Link>
          </li>
          <li
            className={cn(
              "hover:text-black duration-300",
              `${pathname == "/dashboard/patient" ? "text-black" : ""}`
            )}
          >
            <Link href="/dashboard/patient">Patient</Link>
          </li>
        </ul>
      </aside>
      <div className="gap-8 items-center hidden sm:flex">
        <ConnectButton />
        <Button variant="destructive">Logout</Button>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="sm:hidden w-max h-max">
            <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 sm:hidden">
          <ul className="text-sm">
            <li className="mb-3">
              <Link href="/dashboard">Admin</Link>
            </li>
            <li className="mb-3">
              <Link href="/dashboard/doctor">Doctor</Link>
            </li>
            <li className="mb-3">
              <Link href="/dashboard/patient">Patient</Link>
            </li>
            <li>
              <div className=" sm:hidden mt-8">
                <ConnectButton />
                <Button variant="destructive" className="w-full mt-1">Logout</Button>
              </div>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
