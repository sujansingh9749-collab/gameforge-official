const fetch = require('node-fetch');

// প্রায় ৫০টি আকর্ষণীয় ও স্টাইলিশ নিকনেমের বিশাল লিস্ট
const nicknames = [
    "🔥 𝔇𝔞𝔯𝔨 𝔏𝔢𝔤𝔢𝔫𝔡 🔥",
    "⚡ 𝕊𝕡𝕖𝕖𝕕𝔽𝕚𝔯𝔢 ⚡",
    "👑 𝓚𝓲𝓷𝓰 𝓞𝓯 𝓖𝓪𝓶𝓮𝓼 👑",
    "💀 𝓟𝓱𝓸𝓮𝓷𝓲𝔁 𝓡𝓲𝓼𝓲𝓷𝓰 💀",
    "🌟 𝓒𝔂𝓫𝓮𝓻 𝓝𝓲𝓷𝓳𝓪 🌟",
    "🎯 𝓢𝓷𝓲𝓹𝓮𝓻 𝓧 🎯",
    "⚡ 𝓥𝓸𝓵𝓽𝓪𝓰𝓮 ⚡",
    "🌪️ 𝓢𝓽𝓸𝓻𝓶𝓫𝓻𝓮𝓪𝓴𝓮𝓻 🌪️",
    "🔥 𝓣𝓱𝓾𝓷𝓭𝓮𝓻 𝓧 𝓩𝓸𝓷𝓮 🔥",
    "💎 𝓓𝓲𝓪𝓶𝓸𝓷𝓭 𝓗𝓪𝓷𝓭𝓼 💎",
    "⚡ 𝔸𝕤𝕤𝕒𝕤𝕤𝕚𝕟 ⚡",
    "🐉 𝐷𝑟𝑎𝑔𝑜𝑛 𝐹𝑖𝑟𝑒 🐉",
    "🎯 𝙷𝚎𝚊𝚍𝚜𝚑𝚘𝚝 𝙺𝚒𝚗𝚐 🎯",
    "⚡ 𝓥𝓲𝓹𝓮𝓻 𝓧 ⚡",
    "🖤 𝔅𝔩𝔞𝔠𝔨 𝔓𝔞𝔫𝔱𝔥𝔢𝔯 🖤",
    "⚔️ 𝚂𝚑𝚊𝚍𝚘𝚠 𝚆𝚊𝚛𝚛𝚒𝚘𝚛 ⚔️",
    "🔥 𝔐𝔬𝔫𝔰𝔱𝔢𝔯 𝔛 🔥",
    "❄️ 𝔉𝔯𝔬𝔰𝔱𝔶 𝔊𝔬𝔡 ❄️",
    "⚡ 𝔓𝔬𝔴𝔢𝔯 𝔖𝔥𝔦𝔣𝔱 ⚡",
    "👑 𝔈𝔪𝔭𝔢𝔯𝔬𝔯 𝔛 👑",
    "🌀 𝓒𝔂𝓬𝓵𝓸𝓷𝓮 🌀",
    "🐯 𝓣𝓲𝓰𝓮𝓻 𝓚𝓲𝓷𝓰 🐯",
    "⚡ 𝓡𝓪𝓲𝓭𝓮𝓻 ⚡",
    "🌠 𝓖𝓪𝓵𝓪𝔁𝔂 𝓧 🌠",
    "🗡️ 𝓑𝓵𝓪𝓭𝓮 𝓡𝓾𝓷𝓷𝓮𝓻 🗡️",
    "💥 𝔅𝔬𝔪𝔟𝔞𝔯𝔡𝔦𝔢𝔯 💥",
    "🛡️ 𝔖𝔥𝔦𝔢𝔩𝔡 𝔚𝔞𝔩𝔩 🛡️",
    "✨ 𝓢𝓽𝓪𝓻𝓵𝓲𝓰𝓱𝓽 𝔛 ✨",
    "💫 𝓒𝓸𝓼𝓶𝓲𝓬 𝓡𝓪𝔂 💫",
    "⚡ 𝓕𝓵𝓪𝓼𝓱 𝓧 ⚡",
    "🔥 𝓝𝓲𝓰𝓱𝓽𝓶𝓪𝓻𝓮 🔥",
    "⚔️ 𝔙𝔞𝔫𝔤𝔲𝔞𝔯𝔡 ⚔️",
    "🦅 𝔈𝔞𝔤𝔩𝔢 𝔈𝔶𝔢 🦅",
    "💀 𝔖𝔲𝔭𝔯𝔢𝔪𝔢 𝔖𝔨𝔲𝔩𝔩 💀",
    "⚡ 𝕋𝕙𝕦𝕟𝕕𝕖𝕣𝕓𝕠𝕝𝕥 ⚡",
    "🛡️ 𝔗𝔦𝔱𝔞𝫞 🛡️",
    "🔥 ℭ𝔥𝔞𝔬𝔰 🔥",
    "🌟 𝔈𝔠𝔩𝔦𝔭𝔰𝔢 🌟",
    "🎯 𝔅𝔲𝔩𝔩𝔢𝔱 𝔓𝔯𝔬𝔬𝔣 🎯",
    "👑 𝔖𝔲𝔩𝔱𝔞𝔫 👑",
    "⚡ 𝔙𝔢𝔫𝔬𝔪 ⚡",
    "🌪️ ℭ𝔶𝔠𝔲𝔩𝔬𝔫𝔢 𝔛 🌪️",
    "🗡️ 𝔖𝔱𝔯𝔦𝔨𝔢𝔯 🗡️",
    "💎 ℭ𝔯𝔶𝔰𝔱𝔞𝔩 𝔛 💎",
    "🔥 ℌ𝔢ℓℓ𝓯𝔦𝔯𝔢 🔥",
    "⚡ 𝔖𝔭𝔞𝔯𝔨 ⚡",
    "🦅 𝔉𝔞𝔩𝔠𝔬𝔫 𝔛 🦅",
    "💀 𝔇𝔢𝔞𝔱𝔥 𝔖𝔱𝔯𝔬𝔨𝔢 💀",
    "🌟 𝔐𝔶𝔰𝔱𝔦𝔠 𝔛 🌟",
    "👑 𝔏𝔢𝔤𝔢𝔫𝔡𝔞𝔯𝔶 𝔛 👑"
];

exports.handler = async (event, context) => {
    try {
        const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
        const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

        if (!PAGE_ID || !ACCESS_TOKEN) {
            console.error("Facebook credentials are not configured.");
            return { statusCode: 500, body: "Credentials missing" };
        }

        const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        const index = daysSinceEpoch % nicknames.length;
        const selectedNickname = nicknames[index];

        const postMessage = `🔥 Make your Free Fire, PUBG or any gaming profile more attractive with today's best stylish nickname! 🎮✨\n\n📌 Today's Special Name:\n${selectedNickname}\n\n👇 Visit our website to generate your favorite name for free:\n🌐 https://gameforge-official.netlify.app\n\n#GameForge #StylishName #FreeFireName #PubgName #GamingCommunity #StylishNickname`;

        const responseUrl = `https://graph.facebook.com/v18.0/${PAGE_ID}/feed`;
        const fbResponse = await fetch(responseUrl, {
            method: 'POST',
            body: JSON.stringify({
                message: postMessage,
                access_token: ACCESS_TOKEN
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await fbResponse.json();

        if (result.error) {
            console.error("Facebook API Error:", result.error);
            return { statusCode: 500, body: JSON.stringify(result.error) };
        }

        console.log("Successfully posted to Facebook:", result);
        return { statusCode: 200, body: JSON.stringify({ success: true, postId: result.id }) };

    } catch (error) {
        console.error("Error:", error.message);
        return { statusCode: 500, body: error.message };
    }
};
