# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production
ENV PUBLIC_URL https://svc.linxdatacenter.com/forms/induction-training/
ENV REACT_APP_BACKEND_URL https://svc.linxdatacenter.com/api/v1/induction-training/
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]