// validate credentials
const createError = require('http-errors');
module.exports = {
    validateCredentials: async (req, res, next) => {
        try {
            const apiKey = req.headers['x-api-key'];
            if (!apiKey) {
                return res.status(401).json({ message: 'API Key missing in headers' });
            }
            // Example: Validate against your known API key or from DB
            const VALID_API_KEY = '656BJBH*JH75*90480343U8789Y9887YYH98Y'; // or fetch from env/database
            if (apiKey !== VALID_API_KEY) {
                return res.status(403).json({ message: 'Invalid API Key' });
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            return next();
        } catch (error) {
            return next(error);
        }
    }
}