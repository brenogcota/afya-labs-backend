import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassRepository from '../repositories/ClassRepository';

// import ZippCodeClient from '../helpers/zippCode';
// import AxiosHttpClient from '../services/httpClient';

export default class ClassController {

    public async index(req: Request, res: Response, next: NextFunction){
        // const http = new AxiosHttpClient();

        // const response = await http.request({
        //                     url: 'https://api.chucknorris.io/jokes/random',
        //                     method: 'get'
        //                 })

        // res.json(response);

        // try {
        //     const zippCode = new ZippCodeClient();
        //     const data = await zippCode.get('39640000');
        //     return res.status(200).json(data);
        // } catch (error) {
        //     return res.status(400).json({ message: error.message });
        // }

        const repository = getCustomRepository(ClassRepository);
        res.status(200).json(await repository.find());
    }

    public async store(req: Request, res: Response, next: NextFunction){
        try {
            const repository = getCustomRepository(ClassRepository);
            const data = await repository.save(req.body);
            return res.status(201).json(data);
        } catch (err) {
            const error = new Error('an error occurred');
            return next(error);
        }
    }

    public async show(req: Request, res: Response, next: NextFunction){
        const name = req.params.name;

        try {
            const repository = getCustomRepository(ClassRepository);
            const data = await repository.findByName(name);
            if (!data) {
                const error = new Error('an error occurred');
                return next(error.message);
            }

            return res.status(200).json(data);

        } catch(err) {
            const error = new Error('an error occurred: '+ err);
            return next(error.message);
        }
    }
}