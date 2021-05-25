/* eslint-disable no-undef */
import request from 'supertest';

import app from '../src/app';

interface Response {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string
    gia: string,
    ddd: string,
    siafi: string
}

let data: Response;

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
  }
});

test('Should return a valid cep', async () => {
  const response = await request(app)
                                .get('/api/zippcode/39640000');

  expect(response.body).toMatchObject({});
});

test('Should return a error if invalid cep', async () => {
    let invalidCep = '39640-000';
    const response = await request(app)
                                  .get(`/api/zippcode/${invalidCep}`);
  
    expect(response.body).toMatchObject({ message: 'Invalid zipp code, please try again' });
});