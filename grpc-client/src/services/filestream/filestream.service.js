import { LimitedRequest, EmptyRequest, StreamResponse } from './filestream_pb';
import { FilestreamClient } from './filestream_grpc_web_pb';

var client = new FilestreamClient('http://localhost:8080');

const streamLines = (numberOfLines) => {
    if (numberOfLines === null) {
        var request = new EmptyRequest();
        let call = client.streamFile(request, {}, (e, response) => { });

        call.on('data', (response) => {
            console.log(response.array[0]);
        });

        call.on('end', (response) => {
            console.log('All lines have been streamed');
        });
    }
}

export { streamLines };