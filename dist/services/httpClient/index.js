"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AxiosHttpClient {
    async request(data) {
        let axiosResponse;
        try {
            axiosResponse = await axios_1.default.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: data.headers
            });
        }
        catch (error) {
            axiosResponse = error.response;
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data
        };
    }
}
exports.default = AxiosHttpClient;
