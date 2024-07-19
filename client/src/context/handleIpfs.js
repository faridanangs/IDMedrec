import axios from 'axios';

export const saveToIpfs = async (data) => {
    try {
        const pinataResponse = await axios.post(
            process.env.PinataPinJson,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.PinataApiKey}`,
                },
            }
        );

        const ipfsUri = `${process.env.PinataIpfsUrl}/${pinataResponse.data.IpfsHash}`

        return ipfsUri;
    } catch (error) {
        throw error;
    }
}