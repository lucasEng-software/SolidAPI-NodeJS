import { Request, Response } from "express";
import {CreateUserUseCase } from "./CreateUserUseCase"
export class CreateUserController{

    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle( request: Request, response: Response): Promise<Response> {
        const { nome, email, password } = request.body;

        try{
            const retorno = await this.createUserUseCase.execute({
            nome,
            email,
            password,  
            })
            return response.status(201).json(retorno);
        } catch (err) {
            return response.status(400).json({
                message:err.message || 'Erro inesperado'
            })
        }
    }
}