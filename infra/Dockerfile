FROM nginx:1.25.5
COPY ./infra/website/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./infra/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
