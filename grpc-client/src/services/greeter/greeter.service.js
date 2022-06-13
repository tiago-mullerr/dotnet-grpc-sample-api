import { GreeterClient } from './greet_grpc_web_pb.js';
const { HelloRequest, HelloReply } = require('./greet_pb.js');

var client = new GreeterClient('http://localhost:5280');

var request = new HelloRequest();
request.setName('World');

const sayHello = () => {
    client.SayHello(request, {}, (err, response) => {
        console.log(response.getMessage());
    });
}

export { sayHello };