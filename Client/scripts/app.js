import {getMedicines} from "../http/medicineAPI.js";
import {makeContent, makeData} from "./AdditionalFunctions.js";


const main = async () => {

    const result = makeData(await getMedicines());

    makeContent(document.getElementById("special"), result.Special);
    makeContent(document.getElementById("catalog"), result.Medicines);

}


$(document).ready(async () => {
    await main();
});

