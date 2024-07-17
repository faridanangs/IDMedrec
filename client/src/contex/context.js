'use client'


import { createContext } from "react";
import contractAbi from "../../../blockchain/artifacts/contracts/IdMedrec.sol/IDMedRec.json";
// contract ABI
export const abi = contractAbi.abi;

const stateContext = createContext();
export const StateContextProvider = ({children})=> {
    const [address, setAddress] = useState(null)
    const [loading, setLoading] = useState(false);
}