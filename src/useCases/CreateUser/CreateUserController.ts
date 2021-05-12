import { Request, Response } from "express";
import {CreateUserUseCase} from './CreateUserUseCase'

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, password} = request.body

    try {

      await this.createUserUseCase.execute({name, email, password})
      return response.status(201).json({
        message: "E-mail enviado com sucesso!"
      })

    } catch (error) {

      return response.status(500).json(error.message)
    }
  }
}
