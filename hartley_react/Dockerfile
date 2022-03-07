
# pull official base image
# FROM node:17.4.0-alpine
# # set working directory
# WORKDIR /react

# # add `/react/node_modules/.bin` to $PATH
# ENV PATH /hartley_react/node_modules/.bin:$PATH
# # install react dependencies
# COPY package.json ./

# RUN yarn install --silent

# # add app
# COPY . ./
# # start app
# EXPOSE 3000
# CMD ["yarn", "start"]

FROM node:17.4.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
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