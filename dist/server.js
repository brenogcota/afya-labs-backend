"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("reflect-metadata");
require("./database");
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
=======
const PORT = process.env.PORT || 3333;
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
app_1.default.listen(PORT, () => {
    console.log('🏃 Running Server');
});
