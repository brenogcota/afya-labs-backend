"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app_1 = __importDefault(require("./app"));
require("reflect-metadata");
require("./database");
//const PORT: string|number = process.env.PORT || 3333;
app_1.default.use(express_1.default.json());
app_1.default.use(routes_1.router);
app_1.default.listen(3333, () => {
    console.log("Running on port 3333...");
});
function existsClient(existsClient) {
    throw new Error('Function not implemented.');
}
