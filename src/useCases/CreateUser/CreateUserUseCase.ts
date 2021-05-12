import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from '../CreateUser/CreateUserDTO'

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists){
      throw new Error("Usuário já existe!")
    }

    const user = new User(data.email, data.name, data.password)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Moacir Andretti',
        email: 'moacir.andretti@gmail.com'
      },
      subject: 'Email legal de teste',
      body: '<h1>Olá Usuário</h1>'
    })

  }
}
