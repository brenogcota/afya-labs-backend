import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassRepository from '../repositories/ClassRepository';

export default class ClassController {
    public async index(req: Request, res: Response, next: NextFunction){
        const repository = getCustomRepository(ClassRepository);
        res.status(200).json(await repository.find());
    }

    public async store(req: Request, res: Response, next: NextFunction){
        try {
            const repository = getCustomRepository(ClassRepository);
            const res = await repository.save(req.body);
            return res.status(201).json(res);
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