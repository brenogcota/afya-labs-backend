/* eslint-disable no-undef */
import request from 'supertest';

import app from '../src/app';

let data: Array<Object>;

beforeEach(() => {
  data = [{}]
});

test('Should return a empty object', async () => {
  const response = await request(app)
                                .post('/api')
                                .send(data);

  expect(response.body).toMatchObject({});
});