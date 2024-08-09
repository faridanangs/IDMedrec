"use client";
import AboutDoctor from "@/components/molecules/about_doctor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { PatientColumns2 } from "@/lib/data-table-columns";
import { Button } from "@/components/ui/button";
import MedicalRecordForm from "@/components/molecules/medical_record_form";
import { useEffect, useRef, useState } from "react";
import { sessionAuth } from "@/context/auth.server";
import { getMedicalRecords } from "@/context/contract";
import { getPatientRecordFromIPFS } from "@/context/action";
import { toast } from "react-toastify";
import { usePathname, useSearchParams } from "next/navigation";
import Asking from "@/components/molecules/chat_room";
import Image from "next/image";
import Link from "next/link";

export default function DashboardDoctor() {
  const [medicalRecordDatas, setMedicalRecordDatas] = useState([]);
  const formRef = useRef(null);
  const [doctor, setDoctor] = useState();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handleSessions = async () => {
    const { user } = await sessionAuth();
    setDoctor(user);
  };

  useEffect(() => {
    handleSessions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const walletAddress = formData.get("wallet_address");
    const id = formData.get("id");
    const bigId = BigInt(Number(id));

    try {
      const responses = await getMedicalRecords(walletAddress, bigId);
      if (responses.length !== 0 && responses !== undefined) {
        const resp = await getPatientRecordFromIPFS(responses);
        setMedicalRecordDatas(resp);
      } else {
        toast.info("Patient records not found");
        setMedicalRecordDatas([]);
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
          <h1 className="font-semibold text-3xl mb-6">Dashboard Doctor</h1>
          <Tabs defaultValue="medical_record_form" className="w-full mb-12">
            <TabsList className="px-3 py-6 mb-4">
              <TabsTrigger
                value="medical_record_form"
                className="sm:px-10 py-2"
              >
                Medical Record Form
              </TabsTrigger>
              <TabsTrigger value="about_doctor" className="sm:px-10 py-2">
                About Doctor
              </TabsTrigger>
            </TabsList>
            <TabsContent value="medical_record_form">
              <MedicalRecordForm doctor={doctor} />
            </TabsContent>
            <TabsContent value="about_doctor">
              <AboutDoctor doctor={doctor} />
            </TabsContent>
          </Tabs>
          <h1 className="font-semibold text-2xl mb-4">
            Patient medical record
          </h1>
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
              <Button>Search</Button>
            </div>
          </form>
          <DataTable columns={PatientColumns2} data={medicalRecordDatas} />
        </>
      )}
    </div>
  );
}
