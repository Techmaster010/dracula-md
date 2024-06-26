/** 
 *  Created By Mindset_player and Kim
 *  CopyRight 2024 UCHIHA CLAN
 *  My Github : https://github.com/Madmkisii
 *  My Instagram : https://instagram.com/saske_kim
 *  My Youtube : https://youtube.com/@saske_kim
*/

import axios from "axios";

export default function quote(text, ppurl, nickname) {
    return new Promise(async (resolve, reject) => {
        const json = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 512,
            height: 768,
            scale: 2,
            messages: [
                {
                    entities: [],
                    avatar: true,
                    from: {
                        id: 1,
                        name: nickname,
                        photo: {
                            url: ppurl
                        }
                    },
                    text: text,
                    replyMessage: {}
                }
            ]
        };
        console.log(JSON.stringify(json, null, 2));
        try {
            const res = await axios.post("https://bot.lyo.su/quote/generate", JSON.stringify(json, null, 2), {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    });
}
