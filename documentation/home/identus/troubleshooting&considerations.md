# Troubleshooting & Considerations

## Docker Logging Management Considerations
When setting up a long-running environment using Docker Compose, it’s important to consider several factors to avoid issues such as excessive log file sizes leading to out-of-memory errors.

### Configuring Docker Compose for Effective Log Management
To ensure your Docker containers run smoothly and avoid problems related to excessive log file growth, configure log rotation in your docker-compose.yml file. This will help manage log file sizes and prevent out-of-memory errors caused by uncontrolled log growth.

### Log Rotation Example

Here’s a example in the mediator how to set up log rotation in your Docker Compose configuration:

1. Open your docker-compose.yml file.
2. Add or update the logging configuration under your service definition. For example:

```yaml
version: '3.8'

services:
  identus-mediator:
    image: ghcr.io/input-output-hk/atala-prism-mediator:0.14.2
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"
```

- `driver`: Specifies the logging driver to use. The json-file driver is the default and supports log rotation options.
- `max-size`: Sets the maximum size of the log file before it gets rotated. In the example above, the log file will be rotated when it reaches 10 MB.
- `max-file`: Determines the number of rotated log files to keep. In this example, up to 3 log files will be kept before old files are deleted.

```shell
docker-compose up -d
```

3. Save the changes to your `docker-compose.yml` file and **Restart** your Docker containers to apply the new logging configuration.

### Configuring Docker Daemon for Effective Log Management

We should consider configuring the logging Options in the **Docker Daemon**. For a global logging configuration applicable to all Docker containers. We can modify the Docker daemon settings. This approach ensures consistent log management across all containers.

1. Edit the Docker daemon configuration file (usually located at /etc/docker/daemon.json). If the file doesn’t exist, you can create it.
2. Add or update the logging options in the `daemon.json` file:

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```
3. Restart the Docker daemon to apply the new settings:

```shell
sudo systemctl restart docker
```

#### Docker logging drivers

For more information see https://docs.docker.com/engine/logging/configure/#supported-logging-drivers
