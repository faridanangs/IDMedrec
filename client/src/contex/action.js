import { createRegisterPdf } from "@/lib/utils";
import axios from "axios";
import { ethers } from "ethers";
import { addDoctor, addPatient, createMedicalRecord } from "./contract";
import { formatEthErrorMsg } from "./errorHandler";

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


        const patientData = {
            name: name,
            username: data.username,
            email: data.email,
            wallet_address: walletAddress,
            user_role: "patient",
            id: id,
            created_at: createdAt
        };


        // // save patient data to ipfs
        // const pinataResponse = await axios.post(
        //     process.env.PinataPinJson,
        //     patientData,
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${process.env.PinataApiKey}`,
        //         },
        //     }
        // );

        // const ipfsUri = `${process.env.PinataIpfsUrl}/${pinataResponse.data.IpfsHash}`
        const ipfsUri = `${process.env.PinataIpfsUrl}/vghvgh1vc2fg3c1tf23c1fc21c2f1c2fd`

        const patientId = ethers.toBigInt(id)

        await addPatient(walletAddress, ipfsUri, patientId);

        await createRegisterPdf(
            patientData,
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
        const doctorId = ethers.toBigInt(id)

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // add some data in doctor
        dataDoctor.created_at = createdAt;
        dataDoctor.id = id;
        dataDoctor.wallet_address = walletAddress;
        dataDoctor.user_role = "doctor";

        // save docotr data to ipfs
        // const pinataResponse = await axios.post(
        //     process.env.PinataPinJson,
        //     dataDoctor,
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${process.env.PinataApiKey}`,
        //         },
        //     }
        // );

        // const ipfsUri = `${process.env.PinataIpfsUrl}/${pinataResponse.data.IpfsHash}`
        const ipfsUri = `${process.env.PinataIpfsUrl}/vghvgh1vc2fg3c1tf23c1fc21c2f1c2fd`


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
        // const pinataResponse = await axios.post(
        //     process.env.PinataPinJson,
        //     dataPatient,
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${process.env.PinataApiKey}`,
        //         },
        //     }
        // );

        // const ipfsUri = `${process.env.PinataIpfsUrl}/${pinataResponse.data.IpfsHash}`
        const ipfsUri = `${process.env.PinataIpfsUrl}/vghvgh1vc2fg3c1tf23c1fc21c2f1c2fd`

        const patientId = ethers.toBigInt(id);
        const doctorId = ethers.toBigInt(684364540120924);

        await createMedicalRecord(patientAddress, ipfsUri, patientId, doctorAddress, doctorId);

    } catch (error) {
        formatEthErrorMsg(error);
        return;
    }
}