import { createRegisterPdf } from "@/lib/utils";
import axios from "axios";
import { ethers } from "ethers";
import { addDoctor, addPatient, createMedicalRecord } from "./contract";
import { formatEthErrorMsg } from "./errorHandler";
import { saveToIpfs } from "./handleIpfs";
import { getDisplayName } from "@/lib/medical_record_field";
import { toast } from "react-toastify";
import { auth, signIn } from "../../auth";
import { abi } from "./context";

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
        const patientId = BigInt(id)


        await addPatient(walletAddress, ipfsUri, patientId);

        await createRegisterPdf(
            dataPatient,
            wallet,
            ipfsUri
        )

        router.push("/auth/login");
    } catch (error) {
        formatEthErrorMsg(error);
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
        const doctorId = BigInt(id)

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // add some data in doctor
        dataDoctor.created_at = createdAt;
        dataDoctor.id = id;
        dataDoctor.wallet_address = walletAddress;
        dataDoctor.user_role = "doctor";

        // save docotr data to ipfs


        const ipfsUri = await saveToIpfs(dataDoctor);

        await addDoctor(walletAddress, ipfsUri, doctorId);

        await createRegisterPdf(
            dataDoctor,
            wallet,
            ipfsUri
        );
    } catch (error) {
        formatEthErrorMsg(error);
        return;
    }
}

export const addMedicalRecordAction = async (dataPatient, patientAddress, id, doctorAddress) => {
    try {
        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // add some data in doctor
        dataPatient.created_at = createdAt;

        // save docotr data to ipfs
        const ipfsUri = await saveToIpfs(dataPatient);
        // const ipfsUri = `${process.env.PinataIpfsUrl}/vghvgh1vc2fg3c1tf23c1fc21c2f1c2fd`

        const patientId = BigInt(id);
        const doctorId = BigInt(6566815518310789);

        await createMedicalRecord(patientAddress, ipfsUri, patientId, doctorAddress, doctorId);

    } catch (error) {
        formatEthErrorMsg(error);
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

        const processedData = allData
            .filter((data) => data !== null)
            .map((data) =>
                Object.entries(data).map(([field, information]) => ({
                    field: getDisplayName(field),
                    information,
                }))
            );
        return processedData.flat();
    } catch (e) {
        toast.error("Failed to fetch data from server");
    }
}

export const getUserInfoFromIPFS = async (uri) => {
    try {
        const resp = await fetch(uri);
        if (!resp.ok) {
            toast.error("Failed to fetch data from server");
            return null;
        } else {
            return await resp.json();
        }
    } catch (error) {
        console.log(error);
        toast.error("Failed to fetch data from server");
        return;
    }
}