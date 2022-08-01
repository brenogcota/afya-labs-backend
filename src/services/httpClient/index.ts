import axios, { AxiosResponse } from 'axios'
import { HttpRequest, HttpResponse, HttpClient } from './interfaces/httpClient';

export default class AxiosHttpClient implements HttpClient {  
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    const { url, method, body, headers } = data;
 
    try {
      axiosResponse = await axios.request({ url, method, data: body, headers });
    } catch (error) {
      axiosResponse = error.response;
    }
    
    const { status, data } = axiosResponse;
    return {
      statusCode: status,
      body: data,
    }
  }
}
