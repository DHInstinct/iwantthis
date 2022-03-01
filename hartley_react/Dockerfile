FROM node
WORKDIR /hartley_react
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]


# FROM node:latest
# WORKDIR /hartley_react/
# COPY hartley_react/package.json .
# RUN npm install
# COPY . ./
# EXPOSE 3000
# CMD [ "npm", "start" ] 


# FROM node:14.9
# WORKDIR 
# ADD package.json .
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD [ "npm", "start" ]