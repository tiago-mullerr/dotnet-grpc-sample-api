# Dockerfile
# To run the Envoy Proxy: docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.22.0
FROM envoyproxy/envoy:v1.14.3
COPY ./envoy.yaml /etc/envoy/envoy.yaml
EXPOSE 5000
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml