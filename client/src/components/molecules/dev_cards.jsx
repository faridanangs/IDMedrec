import Image from "next/image"
import Link from "next/link"

export default function DevCards() {
  return (
    <div className="flex items-center justify-center md:flex-row flex-col">
      <div className="bg-[#0F172A] w-max text-white border-4 rounded-xl overflow-hidden border-[#FF5757] text-center mb-10 md:mb-0 md:mr-16">
        <Image
          src="/images/farid.png"
          alt="farid"
          width={300}
          height={200}
          className="border-b-4 border-[#FF5757] mb-4"
        />
        <p className="text-lg font-medium mb-1">Farid AS</p>
        <p className="text-sm mb-4">Back-End & Blockchain Developer</p>
        <div className="flex items-center justify-center mb-5">
          <Link href="https://github.com/faridanangs" target="_blank">
            <Image
              src="/icons/github.svg"
              width={40}
              height={40}
              alt="github"
            />
          </Link>
          <Link href="https://x.com" target="_blank">
            <Image
              src="/icons/twitter.svg"
              width={30}
              height={30}
              alt="twitter"
              className="mx-5"
            />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <Image src="/icons/faceboook.svg" width={40} height={40} alt="fb" />
          </Link>
        </div>
      </div>
      <div className="bg-[#0F172A] w-max text-white border-4 rounded-xl overflow-hidden border-[#FF5757] text-center">
        <Image
          src="/images/elaina.png"
          alt="elaina"
          width={300}
          height={200}
          className="border-b-4 border-[#FF5757] mb-4"
        />
        <p className="text-lg font-medium mb-1">Arie AR</p>
        <p className="text-sm mb-4">Front-End Developer | UI Designer</p>
        <div className="flex items-center justify-center mb-5">
          <Link href="https://github.com/ariear" target="_blank">
            <Image
              src="/icons/github.svg"
              width={40}
              height={40}
              alt="github"
            />
          </Link>
          <Link href="https://x.com" target="_blank">
            <Image
              src="/icons/twitter.svg"
              width={30}
              height={30}
              alt="twitter"
              className="mx-5"
            />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <Image src="/icons/faceboook.svg" width={40} height={40} alt="fb" />
          </Link>
        </div>
      </div>
    </div>
  )
}
