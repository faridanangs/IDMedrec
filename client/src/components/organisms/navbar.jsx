"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`px-3 sm:px-6 lg:px-10 xl:px-20 2xl:px-48 flex justify-between items-center duration-300 fixed w-full top-0 z-40 ${
          isTop ? "py-4" : "bg-white/80 py-3 backdrop-blur-lg shadow-sm"
        }`}
      >
        <Link href="/">
          <Image
            src="/images/logo-real.png"
            width={158}
            height={100}
            alt="logo"
            className="w-[128px] xl:w-[158px]"
          />
        </Link>
        <ul className="hidden md:flex text-sm xl:text-base">
          <li className="mr-7 xl:mr-10">
            <Link href="#home">Home</Link>
          </li>
          <li className="mr-7 xl:mr-10">
            <Link href="#advantages">Advantages</Link>
          </li>
          <li className="mr-7 xl:mr-10">
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#aboutus">About Us</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <Button variant="outline" asChild className=" mr-4">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="md:hidden w-max h-max">
              <Image src="/icons/menu.svg" alt="menu" width={28} height={28} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#home">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="#advantages">Advantages</Link>
              </li>
              <li className="mb-2">
                <Link href="#features">Features</Link>
              </li>
              <li className="mb-4">
                <Link href="#aboutus">About Us</Link>
              </li>
              <li className="mb-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/auth/login">Login</Link>
                </Button>
              </li>
              <li>
                <Button asChild className="w-full">
                  <Link href="/auth/register">Register</Link>
                </Button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </nav>
    </>
  );
}
