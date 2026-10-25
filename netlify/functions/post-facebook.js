const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const data = JSON.parse(event.body);
        const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
        const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

        if (!PAGE_ID || !ACCESS_TOKEN) {
            return { statusCode: 500, body: JSON.stringify({ error: 'Facebook credentials are not configured.' }) };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Ready to post to Facebook!' })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
