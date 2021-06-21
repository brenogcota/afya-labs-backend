"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zippCode_1 = __importDefault(require("../helpers/zippCode"));
const httpClient_1 = __importDefault(require("../services/httpClient"));
const apiRouter = express_1.Router();
apiRouter.get('/zippcode/:code', async (req, res) => {
    try {
        const zippCode = new zippCode_1.default();
        const data = await zippCode.get(req.params.code);
        return res.status(200).json(data);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
});
apiRouter.get('/', async (req, res) => {
    const http = new httpClient_1.default();
    const response = await http.request({
        url: 'https://api.chucknorris.io/jokes/random',
        method: 'get'
    });
    res.json(response);
});
exports.default = apiRouter;
