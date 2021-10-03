import { putItems } from "./helper";
import { dbRequest } from ".";
import { processAniData } from "@/SceneController/helper/processAniData";

export const initAniDB = async aniData => {
    const processed = await processAniData(aniData);
    await putItems(processed, "animation");

    console.log("Animation DB Initialized");
};

/**
 * @param {string} name
 * @return {Promise<Array>}
 */
export const searchAniByName = name =>
    dbRequest({
        type: "search",
        store: "animation",
        index: "fullName",
        value: name,
    });

export const getAniByUser = id =>
    dbRequest({
        type: "getAllByIndex",
        store: "animation",
        index: "User",
        value: id,
    });
