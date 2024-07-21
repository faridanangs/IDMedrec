import { ethers } from "ethers";
import { abi } from "./context";
import { formatEthErrorMsg } from "./errorHandler";
import { toast } from "react-toastify";

// get patient
export const addPatient = async (patientAddress, patientUri, patientId) => {
    let contract;
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const tx = await contract.addPatient(patientAddress, patientUri, patientId);
        await tx.wait();
        return tx
    } catch (e) {
        if (e.data && contract) {
            const decodedError = contract.interface.parseError(e.data);
            toast.error(decodedError?.args[0]);
            throw decodedError?.args[0]
        }
        formatEthErrorMsg(e);
    }
};


export const addDoctor = async (doctorAddress, doctorUri, doctorId) => {
    let contract;
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const tx = await contract.addDoctor(doctorAddress, doctorUri, doctorId);
        await tx.wait();
        return tx;
    } catch (e) {
        if (e.data && contract) {
            const decodedError = contract.interface.parseError(e.data);
            toast.error(decodedError?.args[0]);
            throw decodedError?.args[0]
        }
        formatEthErrorMsg(e);
    }
};

// Create medical record
export const createMedicalRecord = async (patientAddress, ipfsUri, patientId, doctorAddress, doctorId) => {
    let contract;
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const tx = await contract.createMedicalRecord(patientAddress, ipfsUri, patientId, doctorAddress, doctorId);
        await tx.wait();
        toast.success("Medical record created successfully");

    } catch (e) {
        if (e.data && contract) {
            const decodedError = contract.interface.parseError(e.data);
            toast.error(decodedError?.args[0]);
            throw decodedError?.args[0]
        } else {
            formatEthErrorMsg(e);
        }
    }
};


// get Patient information
export const getPatient = async (patientAddress, patientId) => {
    let contract;
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const response = await contract.getPatient(patientAddress, patientId);

        return {
            address: response[0],
            uri: response[1],
            id: Number(response[2])
        }
    } catch (e) {
        formatEthErrorMsg(e)
    }
}

// get Doctor information
export const getDoctor = async (doctorAddress, doctorId) => {
    let contract;
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const response = await contract.getDoctor(doctorAddress, doctorId);

        return {
            address: response[0],
            uri: response[1],
            id: Number(response[2])
        }
    } catch (e) {
        formatEthErrorMsg(e)
    }
}

// get Doctor information
export const getOwner = async () => {
    let contract;
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const response = await contract.getOwner();
        return response
    } catch (e) {
        formatEthErrorMsg(e)
    }
}

// get medical record information
export const getMedicalRecords = async (patientAddress, patientId) => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const responses = await contract.getMedicalRecords(patientAddress, patientId);

        const response = responses.map((e) => {
            return {
                id: Number(e[1]),
                uri: e[0]
            }
        })
        return response;

    } catch (e) {
        formatEthErrorMsg(e);
    }
}
