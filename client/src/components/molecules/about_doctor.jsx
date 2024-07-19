"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { abi } from "@/context/context";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useReadContract } from "wagmi";

export default function AboutDoctor() {
  // const { data, error, isLoading } = useReadContract({
  //   address: process.env.ContractAddress,
  //   abi: abi,
  //   functionName: "getPatient",
  //   args: ["0x7aA2aDfc1FA60f8a4a9B898963DA9A558Ad2C4aA", 8262889489630232n],
  // });

  // console.log(error?.message);

  // useEffect(() => {
  //   if (data) {
  //     console.log(data, "data doctor");
  //   }
  // }, [data]);

  return (
    <Card className="md:w-[580px]">
      <CardHeader>
        <CardTitle className="text-xl">About Doctor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-y-3 grid-cols-2">
          <p className="font-semibold">Full Name</p>
          <p>Arie Akbarull</p>
          <p className="font-semibold">Email</p>
          <p>arie@gmail.com</p>
          <p className="font-semibold">Gender</p>
          <p>Male</p>
          <p className="font-semibold">Date of Birth</p>
          <p>20 Januari 2005</p>
          <p className="font-semibold">Address</p>
          <p>Jl Brainrot kecamatan rizz kab sigma provinsi fanum tax</p>
        </div>
      </CardContent>
    </Card>
  );
}
