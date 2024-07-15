import Image from "next/image"

export default function AdvantageCards() {
  return (
    <div className="flex justify-between items-center flex-wrap px-6 lg:px-10 2xl:px-48">
      <div className="w-full lg:w-[410px] text-white hover:text-[#FF5757] flex items-center bg-[#FF5757] hover:bg-white px-6 py-8 rounded-2xl hover:scale-95 duration-300">
        <Image
          src="/icons/lock.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-white rounded-full p-2 mr-5"
        />
        <div>
          <p className="font-semibold text-xl mb-2">
            High Data Security and Privacy
          </p>
          <p className="text-sm">
            Blockchain technology ensures high security and privacy for medical
            records, boosting user confidence.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[410px] text-[#FF5757] hover:text-white flex items-center bg-white hover:bg-[#FF5757] px-6 py-8 rounded-2xl hover:scale-95 duration-300 xl:mt-0 mt-5">
        <Image
          src="/icons/money.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[#FF5757] rounded-full p-2 mr-5"
        />
        <div>
          <p className="font-semibold text-xl mb-2">
            Reducing Transaction Fees with Polygon (Layer 2)
          </p>
          <p className="text-sm">
            Polygon reduces Ethereum transaction costs, making high-volume
            applications like medical records more affordable.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[410px] text-white hover:text-[#FF5757] flex items-center bg-[#FF5757] hover:bg-white px-6 py-8 rounded-2xl hover:scale-95 duration-300 xl:mt-0 mt-5">
        <Image
          src="/icons/timbangan.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-white rounded-full p-2 mr-5"
        />
        <div>
          <p className="font-semibold text-xl mb-2">
            Better Interoperability and Scalability
          </p>
          <p className="text-sm">
            Integrating Polygon improves medical record app speed, scalability,
            responsiveness, and interoperability.
          </p>
        </div>
      </div>
    </div>
  )
}
