"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef, useState } from "react";
import { addDoctorAction } from "@/contex/action";
import { useAccount } from "wagmi";

export default function AddDoctorBtnModal() {
  const formRef = useRef(null);
  const [isPending, setIsPending] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Reset form fields if needed
    formRef.current.reset();

    setIsPending(true);
    await addDoctorAction(data);
    setIsPending(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="md:absolute top-16 right-0" disabled={isPending}>
          Add Doctor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Doctor</DialogTitle>
          <DialogDescription>Add new doctor</DialogDescription>
        </DialogHeader>
        <form ref={formRef} onSubmit={handleForm}>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="specialty">Specialty</Label>
              <Input
                type="text"
                id="specialty"
                name="specialty"
                placeholder="Specialty"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="office_address">Office Address</Label>
              <Textarea
                className="resize-none"
                id="office_address"
                name="office_address"
                placeholder="Office Address"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
