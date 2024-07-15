"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SideRightLogin() {
  return (
    <aside className={cn(
      "w-full lg:w-[50%] min-h-screen",
      "px-8 sm:px-20 lg:px-10 xl:px-28 py-10"
    )}>
      <Button variant="secondary" className="block ml-auto w-max" asChild>
        <Link href="/auth/register">Register</Link>
      </Button>
      <form className="mt-32">
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
          <Input type="text" id="wallet_address" placeholder="type your wallet address here" />
        </div>
        <div className={cn("w-full", "grid items-center gap-1.5")}>
          <Label htmlFor="id">Id</Label>
          <Input type="number" id="id" placeholder="type your id here" />
        </div>
        <Button className="mt-10 w-full">Login</Button>
      </form>
    </aside>
  )
}
