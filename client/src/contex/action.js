'use client'
import { createRegisterPdf } from "@/lib/utils";
import axios from "axios";
import { ethers } from "ethers";

export const addPatientAction = async (firstName, lastName, username, email, dateOfBirth) => {

    

    // const pinataResponse = await axios.post(
    //     "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    //     patientData,
    //     {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${process.env.PinataApiKey}`,
    //         },
    //     }
    // );

    const ipfsUri =  "https://api.pinata.cloud/1213"

    return {ipfsUri, id, formattedDateOfBirth, wallet, createdAt, patientData}
};
