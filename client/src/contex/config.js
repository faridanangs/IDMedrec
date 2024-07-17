'use client';
import "@rainbow-me/rainbowkit/styles.css"

import { RainbowKitProvider, darkTheme, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { mainnet, localhost, polygonAmoy, polygon, polygonZkEvm } from "wagmi/chains"
import { bitgetWallet, metaMaskWallet, rainbowWallet } from "@rainbow-me/rainbowkit/wallets";


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
  chains: [polygonZkEvm, polygon, localhost],
  ssr: true,
  transports: {
    [polygon.id]: http(),
    [localhost.id]: http("http://127.0.0.1:7545"),
    [polygonZkEvm.id]: http(),
  }
})