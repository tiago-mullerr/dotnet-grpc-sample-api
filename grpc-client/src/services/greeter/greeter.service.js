import { HelloRequest, HelloReply } from './greet_pb';
import { GreeterClient } from './greet_grpc_web_pb.js';

var client = new GreeterClient('http://localhost:8080');

var request = new HelloRequest();
request.setName('Mozi');

const sayHello = () => {
    client.sayHello(request, {}, (err, response) => {
        err && console.log(err);
        alert(response.getMessage());
    });
}

export { sayHello };