# Sample project comparing the streaming of a CSV file using a Rest API vs gRPC API


# To run this sample
## Make sure you have Docker, dotnet CLI (or Visual Studio) and Node installed

# 1. Envoy Proxy
## Run the following command on the dotnet-grpc-sample-api/grpc-client/src folder: 
### docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.22.0

# 2. gRPC Client
## Run the following commands on the dotnet-grpc-sample-api/grpc-client folder to run the app:
### npm install
### npm start

# 3. gRPC Server
## Run the following commands on the dotnet-grpc-sample-api/GrpcSample/GrpcGreeter folder or the project on visual studio:
### dotnet restore
### dotnet run