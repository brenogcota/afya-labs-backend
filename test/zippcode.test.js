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
    data = {
        "cep": "39640-000",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "Berilo",
        "uf": "MG",
        "ibge": "3106507",
        "gia": "",
        "ddd": "33",
        "siafi": "4129"
    };
});
test('Should return a valid cep', async () => {
    const response = await supertest_1.default(app_1.default)
        .get('/api/zippcode/39640000');
    expect(response.body).toMatchObject({});
});
test('Should return a error if invalid cep', async () => {
    let invalidCep = '39640-000';
    const response = await supertest_1.default(app_1.default)
        .get(`/api/zippcode/${invalidCep}`);
    expect(response.body).toMatchObject({ message: 'Invalid zipp code, please try again' });
});
