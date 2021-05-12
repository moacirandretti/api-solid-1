import { MailtrapMailProvider } from '../../providers/implementations/MailTrapProvider'
import { PostgresUsersRepository } from '../../repositories/PostgresUsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from "./CreateUserController";


const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
