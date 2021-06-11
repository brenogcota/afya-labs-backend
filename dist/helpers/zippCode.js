"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpClient_1 = __importDefault(require("../services/httpClient"));
class ZippCodeClient {
    async get(code) {
        const http = new httpClient_1.default();
        const data = await http.request({
            url: `https://viacep.com.br/ws/${code}/json/`,
            method: 'get'
        });
        if (data.body.cep)
            return data.body;
        throw new Error('Invalid zipp code, please try again');
    }
}
exports.default = ZippCodeClient;
