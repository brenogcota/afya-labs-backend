import AxiosHttpClient from '../services/httpClient';

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

export default class ZippCodeClient {
    async get(code: string): Promise<Response | undefined> {
        const http = new AxiosHttpClient();
        const data = await http.request({
            url: `https://viacep.com.br/ws/${code}/json/`,
            method: 'get'
        })

        if(data.body.cep) return data.body;
        throw new Error('Invalid zipp code, please try again');
    }
}