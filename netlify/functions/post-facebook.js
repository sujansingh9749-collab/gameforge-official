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
    "🐯 𝓣𝓲𝓰𝓮𝓻 𝓚𝔦𝓷𝓰 🐯",
    "⚡ 𝓡𝓪𝓲𝓭𝓮𝓻 ⚡",
    "🌠 𝓖𝓪𝓵𝓪𝓁𝔂 𝓧 🌠",
    "🗡️ 𝓑𝓵𝓪𝓭𝓮 𝓡𝓾𝓷𝓷𝓮𝓻 🗡️",
    "💥 𝔅𝔬𝔪𝔟𝔞𝓻𝔡𝔦𝔢𝔯 💥",
    "🛡️ 𝔖𝔥𝔦𝔢𝔩𝔡 𝔚𝔞𝔩𝔩 🛡️",
    "✨ 𝓢𝓽𝓪𝓻𝓵𝓲𝓰𝓱𝓽 𝔛 ✨",
    "💫 𝓒𝓸𝓼𝓶𝓲𝓬 𝓡𝓪𝔂 💫",
    "⚡ 𝓕𝓵𝓪𝓼𝓱 𝓧 ⚡",
    "🔥 𝓝𝓲𝓰𝓱𝓽𝓶𝓪𝓻𝓮 🔥",
    "⚔️ 𝔙𝔞𝔫𝔤𝔲𝔞𝔯𝔡 ⚔️",
    "🦅 𝔈𝔞𝔤𝔩𝔢 𝔈𝔶𝔢 🦅",
    "💀 𝔖𝔲𝔭𝔯𝔢𝔪𝔢 𝔖𝔨𝔲𝔩𝔩 💀",
    "⚡ 𝕋𝕙𝕦𝕟𝕕𝕖𝕣𝕓𝕠𝕝𝕥 ⚡",
    "🛡️ 𝔗𝔦𝔱𝔞𝔫 🛡️",
    "🔥 ℭ𝔥𝔞𝔬𝔰 🔥",
    "🌟 𝔈𝔠𝔩𝔦𝔭𝔰𝔢 🌟",
    "🎯 𝔅𝔲𝔩𝔩𝔢𝔱 𝔓𝔯𝔬𝔬𝔣 🎯",
    "👑 𝔖𝔲𝔩𝔱𝔞𝔫 👑",
    "⚡ 𝔙𝔢𝔫𝔬𝔪 ⚡",
    "🌪️ ℭ𝔶𝔠𝔲𝔣𝔬𝔫𝔢 𝔛 🌪️",
    "🗡️ 𝔖𝔱𝔯𝔦𝔨𝔢𝔯 🗡️",
    "💎 ℭ𝔯𝔶𝔰𝔱𝔞𝓩 𝔛 💎",
    "🔥 ℌ𝔢ℓℓ𝓯𝔦𝔯𝔢 🔥",
    "⚡ 𝔖𝔭𝔞𝔯𝔨 ⚡",
    "🦅 𝔉𝔞𝔩𝚌𝔬𝫫 𝔛 🦅",
    "💀 𝔇𝔢𝔞𝔱𝔥 𝔖𝔱𝔯𝔬𝔨𝔢 💀",
    "🌟 𝔐𝔶𝔰𝔱𝔦𝔠 𝔛 🌟",
    "👑 𝔏𝔢𝔤𝔢𝔫𝔡𝔞𝔯𝔶 𝔛 👑"
];

const SITE = 'https://gameforge-official.netlify.app';

// প্রতিদিন একটি করে পেজ প্রোমোট হবে; ফেসবুক লিংক কার্ডে og-image দেখাবে
const PAGES = [
    { path: '/free-fire-name-list.html', hook: '📋 ১০০০+ ফ্রি ফায়ার স্টাইলিশ নামের লিস্ট' },
    { path: '/free-fire-stylish-name-bangla.html', hook: '🎯 ফ্রি ফায়ারের জন্য স্টাইলিশ নাম খুঁজছ?' },
    { path: '/pubg-bgmi-stylish-name-bangla.html', hook: '🔫 PUBG / BGMI-র জন্য প্রো নাম ও ক্ল্যান ট্যাগ' },
    { path: '/stylish-name-for-girls-bangla.html', hook: '💕 কিউট ও এসথেটিক নাম খুঁজছ?' },
    { path: '/instagram-bio-symbols-bangla.html', hook: '📸 Instagram বায়োর জন্য এসথেটিক সিম্বল' },
    { path: '/symbol-library.html', hook: '✨ কুল সিম্বল, এক ট্যাপে কপি-পেস্ট' },
    { path: '/bio-generator.html', hook: '📝 স্টাইলিশ বাংলা ও ইংরেজি বায়ো আইডিয়া' },
    { path: '/vip-name-generator.html', hook: '👑 নাম লিখলেই VIP স্টাইল রেডি' },
    { path: '/', hook: '🔥 ৫০০+ স্টাইলিশ নিকনেম জেনারেটর' }
];

const reply = (statusCode, body) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body)
});

exports.handler = async (event) => {
    try {
        const qs = (event && event.queryStringParameters) || {};

        const day = Math.floor(Date.now() / 86400000);
        const nickname = nicknames[day % nicknames.length];
        const page = PAGES[day % PAGES.length];
        const link = SITE + page.path;

        const message =
            `${page.hook}\n\n` +
            `📌 আজকের স্পেশাল নাম:\n${nickname}\n\n` +
            `👇 নিজের নাম দিয়ে ফ্রিতে বানাও (ট্যাপ করলেই কপি):\n${link}\n\n` +
            `#ফ্রিফায়ার #স্টাইলিশনাম #PUBG #BGMI #FreeFireName #GameForge`;

        // টেস্ট: .../post-facebook?dry=1 — কিছু পোস্ট না করে প্রিভিউ দেখায়
        if (qs.dry === '1') {
            return reply(200, { dry: true, link, message });
        }

        // ঐচ্ছিক সুরক্ষা: Netlify-তে CRON_SECRET দিলে URL-এ ?key=... লাগবে
        const secret = process.env.CRON_SECRET;
        if (secret && qs.key !== secret) {
            return reply(401, { ok: false, error: 'Unauthorized' });
        }

        const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
        const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
        const missing = [];
        if (!PAGE_ID) missing.push('FACEBOOK_PAGE_ID');
        if (!ACCESS_TOKEN) missing.push('FACEBOOK_PAGE_ACCESS_TOKEN');
        if (missing.length) {
            console.error('Missing environment variables:', missing.join(', '));
            return reply(500, { ok: false, error: 'Missing environment variables', missing });
        }

        const version = process.env.FACEBOOK_API_VERSION || 'v23.0';
        const fbResponse = await fetch(`https://graph.facebook.com/${version}/${PAGE_ID}/feed`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, link, access_token: ACCESS_TOKEN })
        });
        const result = await fbResponse.json().catch(() => ({}));

        if (!fbResponse.ok || result.error) {
            console.error('Facebook API Error:', JSON.stringify(result.error || { status: fbResponse.status }));
            return reply(502, { ok: false, facebook_error: result.error || { status: fbResponse.status } });
        }

        console.log('Posted to Facebook:', result.id);
        return reply(200, { ok: true, postId: result.id, link });
    } catch (error) {
        console.error('Error:', error.message);
        return reply(500, { ok: false, error: error.message });
    }
};

// শিডিউল: এখানে নয়, cron-job.org থেকে প্রতিদিন একবার
// https://gameforge-official.netlify.app/.netlify/functions/post-facebook?key=YOUR_SECRET
// কল করো (Netlify-তে CRON_SECRET সেট করলে)।
