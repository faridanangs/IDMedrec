import { createRegisterPdf } from "@/lib/utils";
import axios from "axios";
import { ethers } from "ethers";
import { addDoctor, addPatient } from "./contract";
import { formatEthErrorMsg } from "./errorHandler";
import { toast } from "react-toastify";
import { abi } from "./context";

export const addPatientAction = async (firstName, lastName, username, email, dateOfBirth) => {
    try {
        // Create a wallet account for the patient
        const wallet = ethers.Wallet.createRandom();
        const walletAddress = wallet.address;

        // Create a random Id for the user
        const id = Number(Math.random().toString().split(".")[1]);

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        const name = firstName + " " + lastName

        const patientData = {
            name: name,
            username: username,
            email: email,
            wallet_address: walletAddress,
            user_role: "patient",
            id: id,
            created_at: createdAt
        };


        // save patient data to ipfs
        const pinataResponse = await axios.post(
            process.env.PinataPinJson,
            patientData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.PinataApiKey}`,
                },
            }
        );

        const ipfsUri = `${process.env.PinataIpfsUrl}/${pinataResponse.data.IpfsHash}`

        const patientId = ethers.toBigInt(id)
        const isSuccess = await addPatient(walletAddress, ipfsUri, patientId)

        if (isSuccess) {
            await createRegisterPdf(
                patientData,
                wallet,
                ipfsUri
            );
        }

    } catch (error) {
        toast.error(formatEthErrorMsg(error))
        return;
    }
};

export const addDoctorAction = async (dataDoctor, writeContractAsync) => {
    try {
        // Create a wallet account for the doctor
        const wallet = ethers.Wallet.createRandom();
        const walletAddress = wallet.address;

        // Create a random Id for the docotr
        const id = Number(Math.random().toString().split(".")[1]);

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // add some data in doctor
        dataDoctor.created_at = createdAt;
        dataDoctor.id = id;
        dataDoctor.wallet_address = walletAddress;
        dataDoctor.user_role = "doctor";

        // save docotr data to ipfs
        const pinataResponse = await axios.post(
            process.env.PinataPinJson,
            dataDoctor,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.PinataApiKey}`,
                },
            }
        );

        const ipfsUri = `${process.env.PinataIpfsUrl}/${pinataResponse.data.IpfsHash}`
        // const ipfsUri = `${process.env.PinataIpfsUrl}/vghvgh1vc2fg3c1tf23c1fc21c2f1c2fd`

        const doctorId = ethers.toBigInt(id)
        console.log(ipfsUri, "ipfs")

        await writeContractAsync({
            address: process.env.ContractAddress,
            abi: abi,
            functionName: "addDoctor",
            args: [walletAddress, ipfsUri, doctorId],
        });

        await createRegisterPdf(
            dataDoctor,
            wallet,
            ipfsUri
        );

    } catch (error) {
        return toast.error(formatEthErrorMsg(error));
    }
}


export const addMedicalRecord = async (dataPatient, patientAddress, patientId) => {

}