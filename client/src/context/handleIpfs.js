import axios from 'axios';

export const saveToIpfs = async (data) => {
    try {
        const pinataResponse = await axios.post(
            process.env.PINATA_JSON_IPFS_URL,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.PINATA_API_KEY}`,
                },
            }
        );

        const ipfsUri = `${process.env.PINATA_IPFS_URL}/${pinataResponse.data.IpfsHash}`

        return ipfsUri;
    } catch (error) {
        throw error;
    }
}