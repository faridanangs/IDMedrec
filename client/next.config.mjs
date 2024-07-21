/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PinataApiKey: process.env.PINATA_API_KEY,
        ContractAddress: process.env.CONTRACT_ADDRESS,
        WalletAddress: process.env.WALLET_ADDRESS,
        PinataPinJson: process.env.PINATA_JSON_IPFS_URL,
        PinataIpfsUrl: process.env.PINATA_IPFS_URL,
        SecretKeyAuth: process.env.SECRET_KEY_NEXT_AUTH,
        AUTH_SECRET: process.env.AUTH_SECRET,
        ADMIN_ID: process.env.ADMIN_ID
    }
};

export default nextConfig;
