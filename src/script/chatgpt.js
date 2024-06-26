/** 
 *  Created By Mindset_player and Kim
 *  CopyRight 2024 UCHIHA CLAN
 *  My Github : https://github.com/Madmkisii
 *  My Instagram : https://instagram.com/saske_kim
 *  My Youtube : https://youtube.com/@saske_kim
*/

import d from "d-scrape";
const gpt = new d.ai.GPT()

export async function GPT4(prompt) {
    const messages = [
        { role: "assistant", content: `Dracula_md simple software application that is programmed to do various tasks. thanks to my owners Mindset_player and Kim` },
        { role: "user", content: prompt }
    ];
    let res = await gpt.fetchData(messages)
    return res
}
