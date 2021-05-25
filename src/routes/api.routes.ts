import { Router, Request, Response, NextFunction } from 'express';
import ZippCodeClient from '../helpers/zippCode';
import AxiosHttpClient from '../services/httpClient';

const apiRouter = Router();

apiRouter.get('/zippcode/:code', async (req: Request, res: Response) => {
        try {
            const zippCode = new ZippCodeClient();
            const data = await zippCode.get(req.params.code);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
});

apiRouter.get('/', async (req: Request, res: Response) => {
    const http = new AxiosHttpClient();
    const response = await http.request({
                        url: 'https://api.chucknorris.io/jokes/random',
                        method: 'get'
                    })

    res.json(response);
});


export default apiRouter;
