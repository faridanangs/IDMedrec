"use client";
import AboutPatient from "@/components/molecules/about_patient";
import { DataTable } from "@/components/ui/data-table";
import { getPatientRecordFromIPFS } from "@/context/action";
import { sessionAuth } from "@/context/auth.server";
import { getMedicalRecords } from "@/context/contract";
import { PatientColumns2 } from "@/lib/data-table-columns";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function DashboardPatient() {
  const [medicalRecordDatas, setMedicalRecordDatas] = useState([]);
  const [patient, setPatient] = useState();

  const handleSessions = async () => {
    const { user } = await sessionAuth();
    setPatient(user);
  };

  const handleSubmit = async (id, wallet) => {
    const bigId = BigInt(Number(id));

    try {
      const responses = await getMedicalRecords(wallet, bigId);
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

  useEffect(() => {
    handleSessions();
  }, []);

  useEffect(() => {
    if (patient) {
      handleSubmit(patient.id, patient.wallet_address);
    }
  }, [patient]);

  return (
    <div>
      <h1 className="font-semibold text-3xl mb-6">Dashboard Patient</h1>
      <AboutPatient patient={patient} />
      <h1 className="font-semibold text-2xl mt-10">Patient medical record</h1>
      <DataTable columns={PatientColumns2} data={medicalRecordDatas} />
    </div>
  );
}
