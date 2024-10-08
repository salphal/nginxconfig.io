FROM nginx:stable

WORKDIR /usr/share/nginx/html

COPY dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
