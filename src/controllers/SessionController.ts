import { compare } from 'bcryptjs';
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import { sign } from 'jsonwebtoken'


class SessionController {

    async create(request: Request, response: Response) {
        const { username, password } = request.body;

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(
            { username },
            { relations: ["roles"] }
            );

        if(!user){
            return response.status(400).json({error : "User not found!"})
        }

        //criptografando a senha obtida do request.body e comparando com a que tá no banco
        const matchPassword = await compare(password, user.password!);

        if(!matchPassword){
            return response.status(400).json({ error: "Incorrect password or username"})
        }

        const roles = user.roles.map((role) => role.name);

        const token = sign({ roles }, "bfe9fa08d3470aa6bc8ff596f5347b0c", {
            subject: user.id,
            expiresIn: '1d'
        });// params (payload = os dados que desejamos que fiquem armazedos no token, hash = a chave secreta, )

        request.user_id = user.id;
        return response.json({
            token,
            user
        })

    }

}

export default new SessionController;