import { LimitedRequest } from './filestream_pb';
import { FilestreamClient } from './filestream_grpc_web_pb';

var client = new FilestreamClient('http://localhost:8080');

const streamLines = (numberOfLines, callback) => {
    var request = new LimitedRequest();
    request.setNumberoflines(`${numberOfLines}`);
    let call = client.streamLimitedFile(request, {}, (e, response) => { });

    call.on('data', (response) => {
        callback(response.array[0]);
    });

    call.on('end', (response) => {
        console.log('All lines have been streamed');
    });
}

const getFileContents = (numberOfLines) => {
    return fetch(`http://localhost:8080/api/filestream/file-contents/${numberOfLines}`);
}

export { streamLines, getFileContents };