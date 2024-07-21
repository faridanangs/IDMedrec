"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sessionAuth } from "@/context/auth.server";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function AboutDoctor({doctor}) {


  return (
    <Card className="md:w-[580px]">
      {doctor ? (
        <>
          <CardHeader>
            <CardTitle className="text-xl">About Doctor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-y-3 grid-cols-2">
              <p className="font-semibold">Full Name</p>
              <p>{doctor?.name}</p>
              <p className="font-semibold">Username</p>
              <p>@{doctor?.username}</p>
              <p className="font-semibold">Email</p>
              <p>{doctor?.email}</p>
              <p className="font-semibold">ID</p>
              <p>{doctor?.id}</p>
              <p className="font-semibold">Office Address</p>
              <p>{doctor?.office_address}</p>
              <p className="font-semibold">Specialty</p>
              <p>{doctor?.specialty}</p>
              <p className="font-semibold">Wallet Address</p>
              <p>
                {doctor?.wallet_address.slice(0, 5)}....
                {doctor?.wallet_address.slice(-5)}
              </p>
              <p className="font-semibold">Created At</p>
              <p>{doctor?.created_at}</p>
            </div>
          </CardContent>
        </>
      ) : (
        <div className="w-full h-[20rem] flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </Card>
  );
}
