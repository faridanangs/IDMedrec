"use client";
import NumberCard from "@/components/molecules/number_card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import AddDoctorBtnModal from "@/components/molecules/add_doctor_btn_modal";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";
import {
  getDoctor,
  getDoctorAmount,
  getPatient,
  getPatientAmount,
} from "@/context/contract";
import { getUserInfoFromIPFS } from "@/context/action";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Asking from "@/components/molecules/chat_room";

export default function DashboardAdmin() {
  const formRef = useRef(null);
  const [role, setRole] = useState("doctor");
  const [user, setUser] = useState();
  const [doctorAmount, setDoctorAmount] = useState(0);
  const [patientAmount, setPatientAmount] = useState(0);
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handleGetAmountFromContract = async () => {
    const doctorCount = await getDoctorAmount();
    setDoctorAmount(doctorCount);
    const patientCount = await getPatientAmount();
    setPatientAmount(patientCount);
  };

  useEffect(() => {
    handleGetAmountFromContract();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const walletAddress = formData.get("wallet_address");
    const id = formData.get("id");
    const bigId = BigInt(Number(id));

    try {
      if (role === "patient" && id && walletAddress) {
        const response = await getPatient(walletAddress, bigId);
        if (response?.id !== 0 && response !== undefined) {
          const resp = await getUserInfoFromIPFS(response?.uri);
          setUser(resp);
        } else {
          setUser();
          toast.info("Patient not found");
          return;
        }
      } else if (role === "doctor" && id && walletAddress) {
        const response = await getDoctor(walletAddress, bigId);
        if (response?.id !== 0 && response !== undefined) {
          const resp = await getUserInfoFromIPFS(response?.uri);
          setUser(resp);
        } else {
          setUser();
          toast.info("Doctor not found");
          return;
        }
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div className=" max-w-7xl mx-auto w-full">
      {searchParams.get("chat") ? (
        <>
          <Link href={pathName} className="mb-4 inline-block">
            <Image src="/icons/arrow.png" width={25} height={25} alt="arrow" />
          </Link>
          <Asking />
        </>
      ) : (
        <>
          <h1 className="font-semibold text-3xl mb-6">Dashboard Admin</h1>
          <div className={cn("flex flex-col md:flex-row", "mb-12")}>
            <div className="mb-4 md:mb-0 md:mr-8">
              <NumberCard title="doctors" amount={doctorAmount} />
            </div>
            <NumberCard title="patients" amount={patientAmount} />
          </div>
          <Tabs defaultValue="search" className="w-full relative">
            <AddDoctorBtnModal />
            <TabsContent value="search">
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="flex">
                  <Input
                    name="wallet_address"
                    type="text"
                    className="md:w-[385px] mr-2"
                    placeholder="enter the address user"
                  />
                  <Input
                    name="id"
                    type="number"
                    className="w-[100px] sm:w-[150px] mr-4"
                    placeholder="id"
                  />
                  <Button type="submit">Search</Button>
                </div>
                <div className="grid w-full items-center gap-1.5 mt-4">
                  <RadioGroup defaultValue="doctor" className="flex mt-1">
                    <div className={cn("flex items-center", "space-x-2 mr-2")}>
                      <RadioGroupItem
                        value="patient"
                        id="patient"
                        name="patient"
                        onClick={(e) => setRole(e.target.value)}
                      />
                      <Label htmlFor="patient">Patient</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="doctor"
                        id="doctor"
                        name="doctor"
                        onClick={(e) => setRole(e.target.value)}
                      />
                      <Label htmlFor="doctor">Doctor</Label>
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-36">
            <h1 className="mb-4 text-2xl font-bold">User Information</h1>
            <Card className="md:w-full">
              {user ? (
                <>
                  <CardHeader>
                    <CardTitle className="text-md md:text-2xl">
                      About {user.user_role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <div className="grid-cols-3 grid gap-2">
                      <p className="font-semibold col-span-1 text-sm md:text-lg">
                        Full Name
                      </p>
                      <p className="md:text-[17px] col-span-2">{user?.name}</p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        Username
                      </p>
                      <p>@{user?.username}</p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        Email
                      </p>
                      <p className="md:text-[17px] col-span-2">{user?.email}</p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        User Role
                      </p>
                      <p className="md:text-[17px] col-span-2">
                        {user?.user_role}
                      </p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        ID
                      </p>
                      <p className="md:text-[17px] col-span-2">{user?.id}</p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        Office Address
                      </p>
                      <p className="md:text-[17px] col-span-2">
                        {user?.office_address}
                      </p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        Specialty
                      </p>
                      <p className="md:text-[17px] col-span-2">
                        {user?.specialty}
                      </p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        Wallet Address
                      </p>
                      <p>
                        {user?.wallet_address?.slice(0, 10)}....
                        {user?.wallet_address?.slice(-10)}
                      </p>
                    </div>
                    <div className="grid-cols-3 grid">
                      <p className="font-semibold col-span-1  text-sm md:text-lg">
                        Created At
                      </p>
                      <p className="md:text-[17px] col-span-2">
                        {user?.created_at}
                      </p>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="w-full h-[20rem] flex items-center justify-center">
                  <h1>Search user informations</h1>
                </div>
              )}
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
