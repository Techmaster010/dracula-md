/** 
 *  Created By Mindset_player and  Kim
 *  CopyRight 2024 UCHIHA CLAN
 *  My Github : https://github.com/Madmkisii
 *  My Instagram : https://instagram.com/saske_kim
 *  My Youtube : https://youtube.com/@saske_kim
*/

import "dotenv/config.js";
import { fileURLToPath } from "url";
import { watchFile, unwatchFile } from "fs";

export default {
    skizo: process.env.API_KEY_SKIZO || ""
}

let fileP = fileURLToPath(import.meta.url);
watchFile(fileP, () => {
    unwatchFile(fileP);
    console.log(`Successfully To Update File ${fileP}`)
})
