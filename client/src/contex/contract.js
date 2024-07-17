import { ethers } from "ethers";
import { createRegisterPdf } from "@/lib/utils";
import { abi } from "./context";
import { formatEthErrorMsg } from "./errorHandler";
import { toast } from "react-toastify";

export const addPatient = async (patientAddress, patientUri, patientId) => {
    try {

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const tx = await contract.addPatient(patientAddress, patientUri, patientId);
        await tx.wait();
        toast.success("creating account successfully")
        return true;
    } catch (error) {
        return toast.error(formatEthErrorMsg(error));
    }
};

export const addDoctor = async (doctorAddress, doctorUri, doctorId) => {
    try {

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const tx = await contract.addDoctor(doctorAddress, doctorUri, doctorId);
        await tx.wait();
        toast.success("creating account successfully")
        return true;
    } catch (error) {
        return toast.error(formatEthErrorMsg(error));
    }
};

export const getPatient = async (patientAddress, patientId) => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const response = await contract.getPatient(patientAddress, patientId);
        return {
            address: response[0],
            uri: response[1],
            id: Number(response[2])
        }
    } catch (error) {
        toast.error(formatEthErrorMsg(error));
        return;
    }
}
