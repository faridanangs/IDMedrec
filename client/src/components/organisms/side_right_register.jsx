"use client";
import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addPatient } from "@/contex/contract";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SideRightRegister() {
  const [date, setDate] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPatient(firstName, lastName, username, email, date);
    } catch (error) {
      console.log(error, "error creating patient");
    }
  };

  return (
    <aside
      className={cn(
        "w-full lg:w-[50%] min-h-screen",
        "px-8 sm:px-20 lg:px-10 xl:px-28 py-10"
      )}
    >
      <>
        <div className="flex justify-end gap-4">
          <ConnectButton />
          <Button variant="secondary" className="block w-max" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
        <form className="mt-32" onSubmit={onSubmit}>
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
                type="text"
                id="first_name"
                placeholder="type your first name here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={cn("w-full", "items-center grid gap-1.5")}>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                type="text"
                id="last_name"
                placeholder="type your last name here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className={cn("w-full mb-4", "grid items-center gap-1.5")}>
            <Label htmlFor="email">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="type your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={cn("w-full mb-4", "grid items-center gap-1.5")}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="type your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={cn("w-full", "grid items-center gap-1.5")}>
            <Label>Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button className="mt-10 w-full" type="submit">
            Register
          </Button>
        </form>
      </>
    </aside>
  );
}
