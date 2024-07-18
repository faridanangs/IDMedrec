"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useRef, useState } from "react";
import { getPatient } from "@/contex/contract";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { ConnectButton } from "./connect_button";

export default function SideRightLogin() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const walletAddress = formData.get("wallet_address");
    const id = formData.get("id");
    const bigId = ethers.toBigInt(id);

    const response = await getPatient(walletAddress, bigId);

    if (response?.id === 0) {
      toast.info("User not found");
    }

    console.log(response, "response");
  };

  return (
    <aside
      className={cn(
        "w-full lg:w-[50%] min-h-screen",
        "px-8 sm:px-20 lg:px-10 xl:px-28 py-10"
      )}
    >
      <div className="items-center flex justify-end gap-12">
        <ConnectButton />
        <Button variant="secondary" className="block w-20 text-center" asChild>
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>

      <form className="mt-32" onSubmit={handleSubmit} ref={formRef}>
        <p
          className={cn(
            "text-center text-2xl text-[#0F172A] font-semibold",
            "mb-2"
          )}
        >
          Continue to log in
        </p>
        <p className={cn("text-center text-sm text-[#475569]", "mb-12")}>
          Fill out this form to log in to your account
        </p>
        <div className={cn("w-full mb-4", "grid items-center gap-1.5")}>
          <Label htmlFor="wallet_address">Wallet Address</Label>
          <Input
            required
            type="text"
            id="wallet_address"
            placeholder="type your wallet address here"
            name="wallet_address"
          />
        </div>
        <div className={cn("w-full", "grid items-center gap-1.5")}>
          <Label htmlFor="id">ID</Label>
          <Input
            required
            type="number"
            id="id"
            placeholder="type your id here"
            name="id"
          />
        </div>
        <Button className="mt-10 w-full" type="submit">
          Login
        </Button>
      </form>
    </aside>
  );
}
