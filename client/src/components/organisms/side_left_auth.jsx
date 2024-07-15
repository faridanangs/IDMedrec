import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SideLeftAuth() {
  return (
    <aside
      className={cn(
        "w-[50%] min-h-screen",
        "hidden lg:flex flex-col justify-between",
        "bg-[url('/images/bg_auth.png')] bg-cover",
        "p-7"
      )}
    >
      <Image src={"/images/logo.png"} width={175} height={90} alt="logo" />
      <p
        className={cn(
          "text-white lg:text-4xl xl:text-5xl font-extrabold leading-tight",
          "2xl:w-[620px] mb-8"
        )}
      >
        Health is the greatest gift, contentment the greatest wealth,
        faithfulness the best relationship.
      </p>
    </aside>
  )
}
