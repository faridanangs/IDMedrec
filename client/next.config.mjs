/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PINATA_API_KEY: process.env.PINATA_API_KEY,
        PINATA_JSON_IPFS_URL: process.env.PINATA_JSON_IPFS_URL,
        PINATA_IPFS_URL: process.env.PINATA_IPFS_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
        ADMIN_ID: process.env.ADMIN_ID,
        PROJECT_ID: process.env.PROJECT_ID,
    }
};

export default nextConfig;
