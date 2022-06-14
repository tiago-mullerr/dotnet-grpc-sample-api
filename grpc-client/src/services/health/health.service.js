import { HealthClient } from "./health_grpc_web_pb";
import { EmptyRequest } from "./health_pb";

var client = new HealthClient('http://localhost:8080');

var request = new EmptyRequest();

const isAlive = () => {
    client.isAlive(request, {}, (e, response) => {
        e && console.log(e);
        alert(response.getMessage());
    })
}

export { isAlive };