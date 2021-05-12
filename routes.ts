import express, { Request, Response } from 'express'

const routes = express.Router()

routes.post('/showuser', (request: Request, response: Response) => {
  return response.status(200).send('ola')
})

export {routes}
