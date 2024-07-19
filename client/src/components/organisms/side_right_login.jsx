"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { ConnectButton } from "./connect_button";
import { getUserInfoFromIPFS } from "@/context/action";
import { getDoctor, getPatient } from "@/context/contract";
import { toast } from "react-toastify";
import { logIn, sessionAuth } from "@/context/auth.server";
import { auth } from "../../../auth";

export default function SideRightLogin() {
  const formRef = useRef();
  const [role, setRole] = useState("patient");

  const han = async()=> {
    const session = await sessionAuth();
    console.log(session, "session");
  }

  useEffect(()=> {
    han();
  },[])

  // 6566815518310789
  // 0xFbE0cbCB8fef5055A9A5049cB8FC90AE1a278FB4

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const walletAddress = formData.get("wallet_address");
    const id = formData.get("id");
    const bigId = BigInt(id);

    let data;
    if (role === "patient" && id && walletAddress) {
      const response = await getPatient(walletAddress, bigId);
      if (response.id !== 0) {
        const resp = await getUserInfoFromIPFS(response.uri);
        data = resp;
      } else {
        toast.info("Patient not found");
        return;
      }
    } else {
      const response = await getDoctor(walletAddress, bigId);
      if (response.id !== 0) {
        const resp = await getUserInfoFromIPFS(response.uri);
        data = resp;
      } else {
        toast.info("Doctor not found");
        return;
      }
    }

    try {
      await logIn(data);
    } catch (error) {
      console.log(error, "error");
    }
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
        <div className="grid w-full items-center gap-1.5 mt-4">
          <Label>User Role</Label>
          <RadioGroup defaultValue="patient" className="flex mt-1">
            <div className={cn("flex items-center", "space-x-2 mr-2")}>
              <RadioGroupItem
                value="patient"
                id="patient"
                name="patient"
                onClick={(e) => setRole(e.target.value)}
              />
              <Label htmlFor="patient">Patient</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="doctor"
                id="doctor"
                name="doctor"
                onClick={(e) => setRole(e.target.value)}
              />
              <Label htmlFor="doctor">Doctor</Label>
            </div>
          </RadioGroup>
        </div>
        <Button className="mt-10 w-full" type="submit">
          Login
        </Button>
      </form>
    </aside>
  );
}
