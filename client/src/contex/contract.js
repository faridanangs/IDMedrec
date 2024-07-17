import { ethers } from "ethers";
import { createRegisterPdf } from "@/lib/utils";
import { abi } from "./context";

export const addPatient = async (firstName, lastName, username, email, dateOfBirth) => {
    try {
        // Create a wallet account for the user
        const wallet = ethers.Wallet.createRandom();
        const walletAddress = wallet.address;

        // Create a random Id for the user
        const id = Number(Math.random().toString().split(".")[1]);

        // Create a date for account creation
        const createdAt = new Date().toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });

        // Change dateOfBirth to formatted date, month, year
        let dob = new Date(dateOfBirth);
        const formattedDateOfBirth = `${dob.getDate()} ${dob.toLocaleString('default', { month: 'short' })} ${dob.getFullYear()}`;

        const patientData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            dateOfBirth: formattedDateOfBirth,
            walletAddress: walletAddress,
            id: id,
            createdAt: createdAt
        };

        // Simpan data ke IPFS dan dapatkan URI-nya
        // const pinataResponse = await axios.post(
        //   "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        //   patientData,
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${process.env.PinataApiKey}`,
        //     },
        //   }
        // );

        const ipfsUri = "https://api.pinata.cloud/1213"; // ganti dengan URI yang benar setelah menyimpan ke IPFS



        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(process.env.ContractAddress, abi, signer);

        const tx = await contract.addPatient(walletAddress, ipfsUri, id);
        console.log(tx, "before");
        await tx.wait();
        console.log(tx, "after");

        const pdfUrl = await createRegisterPdf(
            firstName,
            lastName,
            username,
            email,
            formattedDateOfBirth,
            id,
            wallet,
            createdAt,
            patientData
        );
        console.log(pdfUrl);
    } catch (error) {
        console.error("Error in addPatient:", error);
    }
};
