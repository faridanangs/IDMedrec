import Image from "next/image";

export default function AdvantageCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-4 md:gap-6 max-w-5xl w-full mx-auto">
      <div className="w-full text-white flex b-2 items-center bg-[#FF5757] px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/lock.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-white rounded-full p-2 mr-5 mb-2"
        />
        <div>
          <p className="font-semibold text-xl">
            High Data Security and Privacy
          </p>
          <p className="text-sm">
            Blockchain technology ensures high security and privacy. Data on the
            blockchain is protected by strong cryptography, making it very
            difficult to alter or delete.
          </p>
        </div>
      </div>
      <div className="w-full text-[#FF5757] flex items-center bg-white px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/money.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[#FF5757] rounded-full p-2 mr-5 mb-2"
        />
        <div>
          <p className="font-semibold text-xl mb-2">
            Reducing Transaction Fees with Polygon
          </p>
          <p className="text-sm">
            Polygon reduces Ethereum transaction costs, making high-volume
            applications like medical records more affordable.
          </p>
        </div>
      </div>
      <div className="w-full text-[#FF5757] flex items-center bg-white px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/integration.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[#FF5757] rounded-full p-2 mr-5 mb-2"
        />
        <div>
          <p className="font-semibold text-xl mb-2">Data Integrity</p>
          <p className="text-sm">
            Once data is recorded on the blockchain, it cannot be changed or
            deleted
          </p>
        </div>
      </div>
      <div className="w-full text-white flex items-center bg-[#FF5757] px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
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
      <div className="w-full text-[white] flex items-center bg-[#FF5757] px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/traceability.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[white] rounded-full p-2 mr-5"
        />
        <div>
          <p className="font-semibold text-xl mb-2">Traceability</p>
          <p className="text-sm">
            Every transaction can be traced, ensuring accountability.
          </p>
        </div>
      </div>
      <div className="w-full text-[#FF5757] flex items-center bg-white px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/trust.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[#FF5757] rounded-full p-2 mr-5 mb-2"
        />
        <div>
          <p className="font-semibold text-xl mb-2">Trust</p>
          <p className="text-sm">
            Blockchain provides a trusted environment for data sharing and
            storage.
          </p>
        </div>
      </div>
      <div className="w-full text-[#FF5757] flex items-center bg-white px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/access.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[#FF5757] rounded-full p-2 mr-5 mb-2"
        />
        <div>
          <p className="font-semibold text-xl mb-2">Accessibility</p>
          <p className="text-sm">
            Data can be accessed from anywhere even if you are abroad.
          </p>
        </div>
      </div>
      <div className="w-full text-white flex items-center bg-[#FF5757] px-6 py-8 flex-col gap-2 rounded-2xl hover:scale-95 duration-300 xl:mt-0 lg:flex-row">
        <Image
          src="/icons/access-control.svg"
          alt="lock-icon"
          width={75}
          height={75}
          className="bg-[white] rounded-full p-2 mr-5"
        />
        <div>
          <p className="font-semibold text-xl mb-2">Patient Control</p>
          <p className="text-sm">
            Patients have full control over their medical records.
          </p>
        </div>
      </div>
    </div>
  );
}
