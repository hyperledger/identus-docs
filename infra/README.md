# Atala PRISM V2 Website

This has the necessary stuff to prepare the website for deployment.

## Building website

To build the website follow the next steps:

```shell
# Generate API docs
yarn docusaurus gen-api-docs all
# Build Docusaurus website
yarn build website
```

## Building docker image

1. Copy prebuilt `website` to this directory (`infra`) so that docker can find it
2. Build the docker image: `docker build -t prism-documentation-portal .`
3. Run the container: `docker run -p 8000:80 -it prism-documentation-portal`
4. Go to [localhost:8000](http://localhost:8000) to find the website

## CI/CD

Docker image is built each time new changes are merged to `main` branch of the repository.

## Misc

The docs are protected by http basic authentication, `demo:iohk4ever`, if you ever need to update this password:
- Run `htpasswd -n demo` to define the new password (install `apache2-utils` if the command wasn't found).
- Paste the output line to [htpasswd](nginx/htpasswd).
