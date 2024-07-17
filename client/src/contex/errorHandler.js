export function formatEthErrorMsg(error) {
    try {

        console.log(error.message, "datadata")
        if (error.data.data.reason) {
            return error.data.data.reason;
        }

        var eFrom = error.message.indexOf("{");
        var eTo = error.message.indexOf("}");
        var eM1 = error.message.indexOf("Error: ");
        var eM4 = error.message.indexOf("Internal JSON-RPC error");

        if (eFrom != -1 && eTo != -1 && eM1 != -1) {
            var eMsgTemplate = JSON.parse(error.message.substr(eFrom, eTo));
            var eMsg = eM4 != -1 ? eMsgTemplate.message : eMsgTemplate.originalError.message;
            if (eM1 != -1) {
                return eMsg.split("Error: ")[1];
            }
        } else {
            return error.message;
        }

    } catch (error) {
        console.log(error, "adata");
        return error
    }
}