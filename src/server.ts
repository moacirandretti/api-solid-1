
import express = require('express');
import { router  } from './routes'

const app = express()

app.use(express.json())

// As rotas devem sempre ficar abaixo do "express.json()".
app.use(router)

app.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Servidor rodando a todo vapor na porta 3000!!!!')
})
