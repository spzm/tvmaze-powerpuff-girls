FROM nginx:1.13-alpine

COPY config/nginx /etc/nginx
COPY build /usr/share/nginx/www/

EXPOSE 80
