FROM node:latest AS apinode

WORKDIR /home/app

CMD bash -c "yarn && yarn start"
