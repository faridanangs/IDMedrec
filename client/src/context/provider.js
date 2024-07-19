'use client'
import { QueryClientProvider } from "@tanstack/react-query"
import { useAccount, WagmiProvider } from "wagmi"
import { config, queryClient } from "./config"
import { ToastContainer } from "react-toastify"
import { NextUIProvider } from "@nextui-org/react"

export const ContextProvider = ({ children }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}