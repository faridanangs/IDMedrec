"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addPatientAction } from "@/contex/action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { ConnectButton } from "./connect_button";
import { formatEthErrorMsg } from "@/contex/errorHandler";

export default function SideRightRegister() {
  const formRef = useRef(null);
  const router = useRouter();
  const [isPending, setisPending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      setisPending(true);
      await addPatientAction(data, router);
      setisPending(false);
    } catch (error) {
      formatEthErrorMsg(error);
    }
  };

  return (
    <>
      {isPending && (
        <div className="fixed  w-full min-h-screen z-40">
          <div className="absolute z-40 right-0 top-0 bottom-0 left-0 backdrop-blur-sm lg:backdrop-blur-md" />
          <div className="w-full h-full z-50 absolute flex items-center justify-center">
            <div className="flex items-end gap-3">
              <div role="status" className="inline">
                <svg
                  aria-hidden="true"
                  className="inline w-10 h-10 text-gray-400 animate-spin dark:text-gray-600 fill-gray-800 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold">Creating account . . .</p>
            </div>
          </div>
        </div>
      )}
      <aside
        className={cn(
          "w-full lg:w-[50%] min-h-screen",
          "px-8 sm:px-20 lg:px-10 xl:px-28 py-10"
        )}
      >
        <div className="flex justify-end gap-4">
          <div className="gap-8 items-center hidden sm:flex">
            <ConnectButton />
            <Button
              variant="secondary"
              className="block w-20 text-center"
              asChild
            >
              <Link href="/auth/login">Login</Link>
            </Button>
          </div>
        </div>
        <form className="mt-32" onSubmit={onSubmit} ref={formRef}>
          <p
            className={cn(
              "text-center text-2xl text-[#0F172A] font-semibold",
              "mb-2"
            )}
          >
            Create an account
          </p>
          <p className={cn("text-center text-sm text-[#475569]", "mb-12")}>
            Fill in this form to create your account
          </p>
          <div className="sm:flex mb-4">
            <div
              className={cn(
                "w-full sm:mb-0 mb-4 sm:mr-4",
                "items-center grid gap-1.5"
              )}
            >
              <Label htmlFor="first_name">First Name</Label>
              <Input
                name="first_name"
                required
                type="text"
                id="first_name"
                placeholder="type your first name here"
              />
            </div>
            <div className={cn("w-full", "items-center grid gap-1.5")}>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                name="last_name"
                required
                type="text"
                id="last_name"
                placeholder="type your last name here"
              />
            </div>
          </div>
          <div className={cn("w-full mb-4", "grid items-center gap-1.5")}>
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              required
              type="text"
              id="username"
              placeholder="type your username here"
            />
          </div>
          <div className={cn("w-full mb-4", "grid items-center gap-1.5")}>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              required
              type="email"
              id="email"
              placeholder="type your email here"
            />
          </div>
          <Button className="mt-10 w-full" type="submit">
            Register
          </Button>
        </form>
      </aside>
    </>
  );
}
