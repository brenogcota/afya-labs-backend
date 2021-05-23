import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassRepository from '../repositories/ClassRepository';

export default class ClassController {
    private readonly repository = getCustomRepository(ClassRepository);

    public async index(req: Request, res: Response, next: NextFunction){
        const repository = this.repository;
        res.status(200).json(await repository.find());
    }

    public async store(req: Request, res: Response, next: NextFunction){
        try {
            const repository = this.repository;
            const res = await repository.save(req.body);
            return res.status(201).json(res);
        } catch (err) {
            const error = new Error('an error occurred');
             return next(error);
        }
    }

    public async show(req: Request, res: Response, next: NextFunction){
        const name = req.params.name;

        const repository = this.repository;
        try {
            const data = await repository.findByName(name);
            if (!data) {
                const error = new Error('an error occurred');
                return next(error);
            }

            return res.status(200).json(data);

        } catch(err) {
            const error = new Error('an error occurred: '+ err);
            return next(error);
        }
    }
}