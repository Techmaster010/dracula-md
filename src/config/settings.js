/** 
 *  Created By Mindset_player and Kim
 *  CopyRight 2024 UCHIHA CLAN
 *  My Github : https://github.com/Madmkisii
 *  My Instagram : https://instagram.com/saske_kim
 *  My Youtube : https://youtube.com/@saske_kim
*/

import { fileURLToPath } from "url";
import { watchFile, unwatchFile } from "fs";

export default {
    write_store: false,
    pairing_code: true,
    self: false,
    groupOnly: true,
    packName: "𝐊𝚰𝚳⿻𝐔𝐂𝚮𝚰𝚮𝚫",
    packPublish: "© 𝐔𝐂𝚮𝚰𝚮𝚫 𝐂𝐋𝚫𝚴 2024 GEN 2"
}

let fileP = fileURLToPath(import.meta.url);
watchFile(fileP, () => {
    unwatchFile(fileP);
    console.log(`Successfully To Update File ${fileP}`)
})
