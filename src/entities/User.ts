import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id: string;

  public name: string
  public email: string
  public password: string

  constructor(name: string, email: string, password: string, id?: string) {
    // Podemos inicializar os métodos dessa forma também:
    // this.name = name
    // this.email = email
    // this.password = password

    // Forma menos legível porém mais simples de inicializar os métodos
    Object.assign(this, { name, email, password})
    if (!id){
      this.id = uuidv4()
    }

  }
}
