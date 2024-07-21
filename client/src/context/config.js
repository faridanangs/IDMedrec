'use client';
import "@rainbow-me/rainbowkit/styles.css"

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import { polygon } from "wagmi/chains"
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { defineChain } from "viem";

export const amoy = /*#__PURE__*/ defineChain({
  id: 80002,
  name: 'Polygon Amoy',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://polygon-amoy-bor-rpc.publicnode.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Kklink',
      url: 'https://www.oklink.com/amoy',
    },

  },
})


const connectors = connectorsForWallets(
  [
    {
      groupName: "Recomended",
      wallets: [metaMaskWallet]
    }
  ], {
  appName: "IDMEDREC",
  projectId: process.env.PROJECT_ID
}
)

export const queryClient = new QueryClient();

export const config = createConfig({
  connectors,
  chains: [ polygon, amoy],
  ssr: true,
  transports: {
    [polygon.id]: http(),
    [amoy.id]: http("https://polygon-amoy-bor-rpc.publicnode.com"),
  }
})
