import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-6 lg:px-10 xl:px-20 2xl:px-48">
      <div className="pt-12 pb-16 flex justify-between flex-wrap">
        <div className="md:mb-0 mb-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={100}
            className="mb-5"
          />
          <p className="w-[260px]">
            Innovative Solutions for Protecting and Managing Medical Records
            with Unparalleled Security and Efficiency
          </p>
        </div>
        <div>
          <p className="text-lg font-medium mb-4">Feature</p>
          <p className="opacity-90 mb-2">Blockchain</p>
          <p className="opacity-90 mb-2">IPFS</p>
          <p className="opacity-90">Medical Record</p>
        </div>
        <div>
          <p className="text-lg font-medium mb-4">Help</p>
          <p className="opacity-90 mb-2">Customer Service</p>
          <p className="opacity-90 mb-2">Contact</p>
          <p className="opacity-90">Ask & Question</p>
        </div>
        <div>
          <p className="text-lg font-medium mb-4">Legal</p>
          <p className="opacity-90 mb-2">Privacy Policy</p>
          <p className="opacity-90">Terms of Use</p>
        </div>
      </div>
      <p className="text-center py-4 opacity-80 text-sm">
        © 2024 Copyright IDMedrec Inc.
      </p>
    </footer>
  )
}
