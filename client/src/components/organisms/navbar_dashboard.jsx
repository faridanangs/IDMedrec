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
import { logout } from "@/context/auth.server";

export default function NavbarDashboard() {
  const pathName = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center justify-between",
        "px-5 lg:px-10 2xl:px-16 py-[14px]",
        "shadow",
        "bg-white sticky top-0 z-40",
        "max-w-7xl mx-auto w-full"
      )}
    >
      <aside className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo-real.png"
            width={125}
            height={60}
            alt="logo"
            className="w-auto h-auto sm:mr-12"
          />
        </Link>
      </aside>
      <div className="gap-8 items-center hidden sm:flex">
        <Link
          href={`${pathName}?chat=true`}
          className="shadow-xl px-2 py-1 rounded-md hover:scale-105 duration-150 transition-all"
        >
          Chat Room
        </Link>
        <ConnectButton />
        <LogoutButton />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="sm:hidden w-max h-max">
            <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 sm:hidden">
          <ul className="text-sm">
            <li>
              <div className="sm:hidden my-2">
                <div className="my-2">
                  <ConnectButton />
                </div>
                <LogoutButton />
              </div>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  );
}

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
    window.location.href = "/auth/login";
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Logout
    </Button>
  );
};
