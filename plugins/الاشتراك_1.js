import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const harley = 'https://envs.sh/I_W.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'HARLEY' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> 𝐵𝛩𝑇_𝑀𝐴𝑁𝐷𝛩
> 〔 الاشتراك المجاني┊ ˼‏ 🚀˹ ↶〕
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
            *ماندو بــ🤖ــوت*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 💵﹞
> •┊˹👾˼┊- رقم وهمي
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹👾˼┊- اشتراك سرفر عام
> •┊˹👾˼┊- شغال 7/24
> •┊˹👾˼┊- البوت تحت التطوير
╝───────────────¤
*ملحوظة : الاشتراك المجاني ثلاث ايام فقط 🚀*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
𝐵𝛩𝑇_𝑀𝐴𝑁𝐷𝛩
*⋅ ───━ •﹝👑﹞• ━─── ⋅*`,
                        subtitle: "HARLEY"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+201144987551","merchant_url":"https://api.whatsapp.com/send?phone=+201144987551"}'
                            },
                            {
                               name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+201144987551","merchant_url":"https://api.whatsapp.com/send?phone=+201144987551"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029VarJdJO7dmeZS5ZKft1U","merchant_url":"https://whatsapp.com/channel/0029VarJdJO7dmeZS5ZKft1U"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['مجاني', 'ش1', 'اشتراك_مجاني', 'بلالمجان'];

export default handler;
