import { Inter } from "next/font/google"
import "./globals.css"
import { ContextProvider } from "@/context/provider"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IDMedrec",
  description: "Next-Gen Medical Records: Blockchain Secured and Smart Contract Driven",
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ContextProvider>
          <ToastContainer closeOnClick={true} />
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </ContextProvider>
      </body>
    </html>
  )
}
