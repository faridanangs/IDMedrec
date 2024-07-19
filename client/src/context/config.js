'use client';
import "@rainbow-me/rainbowkit/styles.css"

import { RainbowKitProvider, darkTheme, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { mainnet, localhost, polygon } from "wagmi/chains"
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { defineChain } from "viem";

export const amoy = /*#__PURE__*/ defineChain({
  id: 80002,
  name: 'Amoy',
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
  projectId: "ce6ac5e8ab546d26a66333c40be4c701"
}
)

export const queryClient = new QueryClient();

export const config = createConfig({
  connectors,
  chains: [mainnet, polygon, localhost, amoy],
  ssr: true,
  transports: {
    [polygon.id]: http(),
    [localhost.id]: http("http://127.0.0.1:7545"),
    [mainnet.id]: http(),
    [amoy.id]: http("https://polygon-amoy-bor-rpc.publicnode.com"),
  }
})
