FROM nginx:1.23.3
COPY ./infra/website/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./infra/nginx/nginx.conf /etc/nginx/conf.d

# password file for basic authentication
COPY ./infra/nginx/htpasswd /etc/nginx/htpasswd

EXPOSE 80
