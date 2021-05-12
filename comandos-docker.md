- Para buildar a imagem
  `docker build -t moacir/dockernode .`

- Para rodar um container com a imagem criada
  `docker run -p 3000:3000 moacir/dockernode`

- Para entrar dentro do container com o Docker-Compose
  `docker-compose run -w /home/app meulindoapp /bin/bash`

- Para subir o container sem travar o terminal:
  `docker-compose up -d`
