import { toast } from "react-toastify";

export function formatEthErrorMsg(error) {
    if (error?.message.includes("execution reverted")) {
        toast.error("Transaction reverted. Please check your input data or contract constraints.");
        throw new Error("Transaction reverted")
    } else if (error?.message.includes("Internal JSON-RPC error")) {
        toast.info("Internal JSON-RPC error occurred. Please try again later.");
        throw new Error("Internal JSON-RPC error ")
    } else if (error?.message.includes("User denied transaction signature")) {
        toast.error("Transaction was denied by the user.");
        throw new Error("User denied transaction signature")
    } else if (error?.message.includes("network does not support ENS")) {
        toast.info("The network does not support ENS.");
        throw new Error("The network does not support ENS")
    } else if (error?.message.includes("insufficient funds")) {
        toast.info("Insufficient funds for transaction. Please check your balance.");
        throw new Error("Insufficient funds for transaction.")
    } else if (error?.message.includes("gas required exceeds allowance")) {
        toast.error("Gas limit too low. Please increase the gas limit.");
        throw new Error("Gas limit too low. Please increase the gas limit")
    } else if (error?.message.includes("nonce too low")) {
        toast.error("Nonce too low. Please try resending the transaction.");
        throw new Error("Nonce too low. Please try resending the transaction")
    } else if (error?.message.includes("replacement transaction underpriced")) {
        toast.error("Replacement transaction is underpriced. Please increase the gas price.");
        throw new Error("Replacement transaction is underpriced")
    } else if (error?.message.includes("missing revert data")) {
        toast.error("Transaction failed. Invalid input or contract constraints not met. Please check your data.");
        throw new Error("Transaction failed.")
    } else if (error?.message.includes("User rejected the request")) {
        toast.info("Network switching is cancelled")
        throw new Error("Network switching is cancelled")
    } else if (error?.message.includes('invalid EIP-1193 provider (argument="ethereum", value=null, code=INVALID_ARGUMENT, version=6.13.1)')) {
        toast.info("Install Metamask");
        throw new Error("Install Metamask")
    } else if (error?.message.includes('could not decode result data (value="0x", info={ "method": "getPatient", "signature": "getPatient(address,uint256)" }, code=BAD_DATA, version=6.13.1)')) {
        toast.info("Switch networks");
        throw new Error("switch networks")
    } else if (error?.message.includes('bad address checksum')) {
        toast.info("The Ethereum address you entered is not valid. Please make sure you enter a correct address with the proper checksum format (EIP-55)");
        throw new Error("The Ethereum address you entered is not valid. Please make sure you enter a correct address with the proper checksum format (EIP-55)")
    } else if (error?.message.includes('user rejected action')) {
        toast.info('User rejected action (action="requestAccess", reason="rejected")');
    } else if (error?.message.includes('could not coalesce error')) {
        toast.info('Failed to connect to wallet. Please check if your wallet is open and try again.');
    } else {
        toast.error(error?.message || "An unknown error occurred.");
    }
}