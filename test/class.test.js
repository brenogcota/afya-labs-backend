"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
let data;
beforeEach(() => {
    data = [{}];
});
test('Should return a empty object', async () => {
    const response = await supertest_1.default(app_1.default)
        .post('/api')
        .send(data);
    expect(response.body).toMatchObject({});
});
