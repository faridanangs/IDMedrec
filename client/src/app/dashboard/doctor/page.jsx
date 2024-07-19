"use client";
import AboutDoctor from "@/components/molecules/about_doctor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MedicalRecordForm from "@/components/molecules/medical_record_form";
import { useRef, useState } from "react";
import { getMedicalRecords } from "@/context/contract";
import { toast } from "react-toastify";
import { getDisplayName } from "@/lib/medical_record_field";
import { getPatientRecordFromIPFS } from "@/context/action";
import { useSession } from "next-auth/react";

export default function DashboardDoctor() {
  const [medicalRecordDatas, setMedicalRecordDatas] = useState([]);
  const formRef = useRef(null);

  const {data} = useSession();
  console.log(data, "session")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const walletAddress = formData.get("wallet_address");
    const id = formData.get("id");
    const bigId = BigInt(id);

    const responses = await getMedicalRecords(walletAddress, bigId);
    if (responses?.length != 0) {
      const resp = await getPatientRecordFromIPFS(responses);
      setMedicalRecordDatas(resp);
    } else {
      toast.info("Patient records not found");
      setMedicalRecordDatas([]);
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-3xl mb-4">Dashboard Doctor</h1>
      <Tabs defaultValue="medical_record_form" className="w-full mb-12">
        <TabsList className="px-3 py-6 mb-4">
          <TabsTrigger value="medical_record_form" className="sm:px-10 py-2">
            Medical Record Form
          </TabsTrigger>
          <TabsTrigger value="about_doctor" className="sm:px-10 py-2">
            About Doctor
          </TabsTrigger>
        </TabsList>
        <TabsContent value="medical_record_form">
          <MedicalRecordForm />
        </TabsContent>
        <TabsContent value="about_doctor">
          <AboutDoctor />
        </TabsContent>
      </Tabs>
      <h1 className="font-semibold text-2xl mb-4">Patient medical record</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <Input
            required
            name="wallet_address"
            type="text"
            className="md:w-[385px] mr-2"
            placeholder="enter the address user"
          />
          <Input
            required
            name="id"
            type="number"
            className="w-[100px] sm:w-[150px] mr-4"
            placeholder="id"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <DataTable data={medicalRecordDatas} />
    </div>
  );
}
