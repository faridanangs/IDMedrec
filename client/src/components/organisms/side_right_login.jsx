"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { getPatient } from "@/contex/contract";
import { toast } from "react-toastify";
import { formatEthErrorMsg } from "@/contex/errorHandler";
import { ethers } from "ethers";
import axios from "axios";

export default function SideRightLogin() {

  console.log(process.env.WalletAddress,"wllt")

  const [address, setAddress] = useState();
  const [id, setId] = useState();
  // 710586553653989
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bigId = ethers.toBigInt(id);
    const response = await getPatient(address, bigId);
    
    console.log(response.uri, "ress");
    if (response.id === 0) {
      toast.error("User not found");
    } else {
      const ipfsResponse = await fetch(response.uri);

      if (!ipfsResponse.ok){
        toast.error(ipfsResponse.statusText);
      }

      const data = await ipfsResponse.json()
      console.log(data, "ipfs");
    }
  };

  return (
    <aside
      className={cn(
        "w-full lg:w-[50%] min-h-screen",
        "px-8 sm:px-20 lg:px-10 xl:px-28 py-10"
      )}
    >
      <Button variant="secondary" className="block ml-auto w-max" asChild>
        <Link href="/auth/register">Register</Link>
      </Button>
      <form className="mt-32" onSubmit={handleSubmit}>
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={cn("w-full", "grid items-center gap-1.5")}>
          <Label htmlFor="id">ID</Label>
          <Input
            required
            type="number"
            id="id"
            placeholder="type your id here"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <Button className="mt-10 w-full" type="submit">
          Login
        </Button>
      </form>
    </aside>
  );
}
