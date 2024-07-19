import { toast } from "react-toastify";

export function formatEthErrorMsg(error) {
    if (error?.message.includes("execution reverted")) {
        toast.error("Transaction reverted. Please check your input data or contract constraints.");
    } else if (error?.message.includes("Internal JSON-RPC error")) {
        toast.error("Internal JSON-RPC error occurred. Please try again later.");
    } else if (error?.message.includes("User denied transaction signature")) {
        toast.error("Transaction was denied by the user.");
    } else if (error?.message.includes("network does not support ENS")) {
        toast.error("The network does not support ENS.");
    } else if (error?.message.includes("insufficient funds")) {
        toast.error("Insufficient funds for transaction. Please check your balance.");
    } else if (error?.message.includes("gas required exceeds allowance")) {
        toast.error("Gas limit too low. Please increase the gas limit.");
    } else if (error?.message.includes("nonce too low")) {
        toast.error("Nonce too low. Please try resending the transaction.");
    } else if (error?.message.includes("replacement transaction underpriced")) {
        toast.error("Replacement transaction is underpriced. Please increase the gas price.");
    } else if (error?.message.includes("missing revert data")) {
        toast.error("Transaction failed. Invalid input or contract constraints not met. Please check your data.");
    } else {
        toast.error(error?.message || "An unknown error occurred.");
    }
}
