import GridPattern from "@/components/magicui/grid-pattern";
import Navbar from "@/components/organisms/navbar";
import Particles from "@/components/magicui/particles";
import Image from "next/image";
import Footer from "@/components/organisms/footer";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import AdvantageCards from "@/components/molecules/advantage_cards";
import aboutUS from "@/../../public/images/about_us_img.png";

export default function Home() {
  return (
    <div>
      <div className="relative pt-16" id="home">
        <GridPattern width={70} height={70} x={-1} y={-1} />
        <Navbar />
        <div className="px-6 lg:px-10 xl:px-20 2xl:px-48 py-6 flex flex-col lg:flex-row justify-between items-center w-full mb-28">
          <aside className="pb-10 pt-20 lg:pb-0 lg:pt-0">
            <div
              className={cn(
                "w-max group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5 overflow-hidden"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:dark:text-neutral-400">
                <span>Manage your medical record here ✨</span>
              </AnimatedShinyText>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-[#0F172A] font-bold md:w-[650px] lg:w-[500px] xl:w-[650px] mb-3">
              Next-Gen Medical Records: Blockchain Secured and Smart Contract
              Driven
            </p>
            <p className="text-[#0F172A] sm:w-[450px] mb-7">
              Innovative Solutions for Protecting and Managing Medical Records
              with Unparalleled Security and Efficiency
            </p>
            <Link href="#" className="block w-max">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                  whitepaper
                </span>
              </ShimmerButton>
            </Link>
          </aside>
          <aside>
            <Image
              src="/images/doctor.png"
              width={540}
              height={500}
              alt="doctor"
              className="w-[350px] lg:w-[450px] 2xl:w-[540px]"
            />
          </aside>
        </div>
      </div>
      <div className="text-center mb-16 px-6 md:px-0">
        <p className="font-semibold text-[28px] mb-5">
          What is <span className="text-[#FF5757]">IDMedrec?</span>
        </p>
        <p className="mx-auto md:w-[740px] md:text-lg text-[#475569]">
          IDMedrec is a web-based system that functions to manage medical
          records at hospitals or health centers. This system was created with
          modern technology, namely blockchain. This technology can store
          medical record data very safely, this is because the data will be
          stored via a smart contract.
        </p>
      </div>
      <div
        className="bg-[#0F172A] advantages_clip pt-40 pb-60 mb-14"
        id="advantages"
      >
        <p className="font-semibold text-[28px] mb-4 text-white text-center">
          Our Platform <span className="text-[#FF5757]">Advantages</span>
        </p>
        <p className="text-white text-center sm:w-[400px] mx-auto mb-20 sm:px-0 px-4">
          IDMedrec is the first medical record system to utilize blockchain
          technology to store data
        </p>
        <AdvantageCards />
      </div>
      <div className="relative overflow-hidden mb-44" id="features">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={170}
          ease={80}
          size={1.2}
          color="#000000"
          refresh
        />
        <p className="font-semibold text-[28px] mb-4 text-[#0F172A] text-center">
          Our Platform <span className="text-[#FF5757]">Features</span>
        </p>
        <p className="text-[#475569] text-center sm:px-0 px-4 sm:w-[400px] mx-auto mb-36">
          We offer various modern features that can help you manage medical
          records
        </p>
        <div className="flex items-center lg:items-start justify-center lg:flex-row flex-col mb-32">
          <Image
            src="/images/search-blockchain.png"
            alt="search-blockchain"
            className="lg:mr-20 xl:mr-36 w-[200px] sm:w-[300px] lg:w-[420px]"
            width={420}
            height={300}
          />
          <div className="mt-10 sm:px-0 px-6">
            <p className="font-semibold text-3xl sm:w-[450px] text-[#0F172A] mb-4">
              Patient Medical Record Search on the{" "}
              <span className="text-[#FF5757]">Blockchain Network</span>
            </p>
            <p className="text-lg text-[#475569] sm:w-[410px]">
              Users can securely search patient records on the blockchain,
              achieving quick, accurate access and improved health information
              management.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-row flex-col-reverse">
          <div className="sm:px-0 px-6">
            <p className="font-semibold text-3xl sm:w-[450px] text-[#0F172A] mb-4">
              Creation and Storage of Medical Records on{" "}
              <span className="text-[#FF5757]">IPFS and Blockchain</span>
            </p>
            <p className="text-lg text-[#475569] sm:w-[410px]">
              Users can create and store medical records on IPFS, with hashes
              secured on the blockchain for data integrity.
            </p>
          </div>
          <Image
            src="/images/rantai_blockchain.png"
            alt="search-blockchain"
            className="lg:ml-20 xl:ml-36 w-[200px] sm:w-[300px] lg:w-[420px] lg:mb-0 mb-5"
            width={420}
            height={300}
          />
        </div>
      </div>
      <div className="mb-36 px-6" id="aboutus">
        <p className="font-semibold text-[28px] mb-4 text-[#0F172A] text-center">
          About <span className="text-[#FF5757]">Us</span>
        </p>
        <p className="text-[#475569] text-center sm:px-0 px-6 sm:w-[530px] mx-auto mb-16">
          IDMedRec is a blockchain-based medical record platform on the Polygon
          network. We aim to facilitate secure, transparent, and efficient
          management and access to healthcare data.
        </p>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12 lg:justify-center">
          <Image
            src={aboutUS}
            alt="about us img"
            className="w-[250px] sm:w-[300px] lg:w-[420px]"
            width={420}
            height={300}
          />
          <div className="lg:text-start">
            <p className="font-semibold text-[22px] text-[#0F172A]">
              Our <span className="text-[#FF5757]">Goal</span>
            </p>
            <p className="text-[#475569] sm:px-0 px-6 sm:w-[530px] mx-auto mb-8">
              Our goal is to empower individuals by giving them full control
              over their medical records. We ensure that health information is
              securely stored and accessed only with appropriate permissions.
            </p>
            <p className="font-semibold text-[22px] text-[#0F172A]">
              Our <span className="text-[#FF5757]">Vision</span>
            </p>
            <p className="text-[#475569] sm:px-0 px-6 sm:w-[530px] mx-auto mb-8">
              Our vision is to create a future where everyone can easily access
              their medical records wherever they are, enhancing the
              effectiveness of healthcare services. We chose Polygon for its
              high scalability, low transaction costs, and strong security,
              ensuring our platform can operate efficiently.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
