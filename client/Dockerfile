FROM node:18 as build

WORKDIR /app
COPY frontend/package*.json ./frontend/
COPY frontend ./frontend/
RUN cd frontend && npm install && npm run build


FROM nginx:alpine
COPY --from=build /app/frontend/dist /usr/share/nginx/html

EXPOSE 5174
CMD ["nginx", "-g", "daemon off;"]
