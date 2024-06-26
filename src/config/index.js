/** 
 *  Created By Mindset_player and Kim
 *  CopyRight 2024 UCHIHA CLAN
 *  My Github : https://github.com/Madmkisii
 *  My Instagram : https://instagram.com/saske_kim
 *  My Youtube : https://youtube.com/saske_kim
*/

import { fileURLToPath } from "url";
import { watchFile, unwatchFile } from "fs";

import mess from "./mess.js";
import settings from "./settings.js";
import number from "./number.js"
import api from "./api.js"

export default { mess, settings, number, api }

let fileP = fileURLToPath(import.meta.url);
watchFile(fileP, () => {
    unwatchFile(fileP);
    console.log(`Successfully To Update File ${fileP}`)
})
