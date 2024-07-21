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
import { logout, sessionAuth } from "@/context/auth.server";
import { useEffect, useState } from "react";

export default function NavbarDashboard() {
  const pathname = usePathname();

  const [user, setUser] = useState();

  const handleSessions = async () => {
    const { user } = await sessionAuth();
    setUser(user);
  };

  useEffect(() => {
    handleSessions();
  }, []);

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
      </aside>
      <div className="gap-8 items-center hidden sm:flex">
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
