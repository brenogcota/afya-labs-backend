"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
require("reflect-metadata");
require("./database");
var PORT = process.env.PORT || 5000;
app_1.default.listen(PORT, function () {
    console.log('🏃 Running Server');
});
