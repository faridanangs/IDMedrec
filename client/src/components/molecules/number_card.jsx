import Image from "next/image"
import { cn } from "@/lib/utils"

export default function NumberCard({title, amount}) {
  return (
    <div
      className={cn(
        "w-full md:w-[320px] duration-300",
        "bg-white",
        "border shadow-md hover:shadow rounded-xl",
        "py-7 px-6",
        "flex justify-between items-start"
      )}
    >
      <div>
        <p className="font-medium mb-2">Number of {title}</p>
        <p className="font-bold text-2xl">{amount}</p>
      </div>
      <Image
        src="/icons/users.svg"
        width={22}
        height={22}
        alt="users"
       />
    </div>
  )
}
