import { createRegisterPdf } from "@/lib/utils";
import axios from "axios";
import { ethers } from "ethers";
import { addDoctor, addPatient, createMedicalRecord } from "./contract";
import { formatEthErrorMsg } from "./errorHandler";
import { saveToIpfs } from "./handleIpfs";
import { getDisplayName } from "@/lib/medical_record_field";
import { toast } from "react-toastify";

export const addPatientAction = async (data, router) => {
    try {
        // Create a wallet account for the patient
        const wallet = ethers.Wallet.createRandom();
        const walletAddress = wallet.address;

        // Create a random Id for the user
        const id = Number(Math.random().toString().split(".")[1]);

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        const name = data.first_name + " " + data.last_name


        const dataPatient = {
            name: name,
            username: data.username,
            email: data.email,
            wallet_address: walletAddress,
            user_role: "patient",
            id: id,
            created_at: createdAt
        };


        // // save patient data to ipfs
        const ipfsUri = await saveToIpfs(dataPatient);
        const patientId = BigInt(Number(id));


        const tx = await addPatient(walletAddress, ipfsUri, patientId);

        if (tx) {
            await createRegisterPdf(
                dataPatient,
                wallet,
                ipfsUri
            )
            toast.success("Patient created successfully");
            router.push("/auth/login");
        }
    } catch (error) {
        return;
    }
};

export const addDoctorAction = async (dataDoctor) => {
    try {
        // Create a wallet account for the doctor
        const wallet = ethers.Wallet.createRandom();
        const walletAddress = wallet.address;

        // Create a random Id for the docotr
        const id = Number(Math.random().toString().split(".")[1]);
        const doctorId = BigInt(Number(id))

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // add some data in doctor
        dataDoctor.created_at = createdAt;
        dataDoctor.id = id;
        dataDoctor.wallet_address = walletAddress;
        dataDoctor.user_role = "doctor";

        // save docotr data to ipfs
        const ipfsUri = await saveToIpfs(dataDoctor);

        const tx = await addDoctor(walletAddress, ipfsUri, doctorId);

        if (tx) {
            await createRegisterPdf(
                dataDoctor,
                wallet,
                ipfsUri
            )
            toast.success("Doctor created successfully");
        }

    } catch (error) {
        return;
    }
}

export const addMedicalRecordAction = async (dataPatient, patientAddress, id, doctorAddress, docId) => {
    try {
        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // add some data in doctor
        dataPatient.created_at = createdAt;

        // save docotr data to ipfs
        const ipfsUri = await saveToIpfs(dataPatient);

        const patientId = BigInt(Number(id));
        const doctorId = BigInt(Number(docId));

        await createMedicalRecord(patientAddress, ipfsUri, patientId, doctorAddress, doctorId);
    } catch (error) {
        return;
    }
}

export const getPatientRecordFromIPFS = async (datas) => {
    try {
        const allData = await Promise.all(
            datas.map(async (value) => {
                const resp = await fetch(value.uri);
                if (!resp.ok) {
                    toast.error("Failed to fetch data from server");
                    return null;
                } else {
                    return await resp.json();
                }
            })
        );


        return allData;
    } catch (e) {
        toast.error("Failed to fetch data from server");
        return;
    }
}

export const getUserInfoFromIPFS = async (uri) => {
    try {
        const resp = await fetch(uri);
        if (!resp.ok) {
            toast.error("Failed fetch data from server");
            return;
        } else {
            return await resp.json();
        }
    } catch (error) {
        toast.error("Failed fetch data from server");
        return;
    }
}