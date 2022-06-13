const grpc = {};
grpc.web = require('../../../node_modules/grpc-web/index');

const proto = {};
proto.greet = require('./greet_pb.js');

class GreeterClient {
  constructor(hostname, credentials, options) {
    if (!options)
      options = {};
    options.format = 'text';
    this.client_ = new grpc.web.GrpcWebClientBase(options);
    this.hostname_ = hostname;
  }

  SayHello(request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
  };

  SayHelloUnary(request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
  };
};

class GreeterPromiseClient {
  constructor(hostname, credentials, options) {
    if (!options)
      options = {};
    options.format = 'text';
    this.client_ = new grpc.web.GrpcWebClientBase(options);
    this.hostname_ = hostname;
  }
};

const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/greet.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.greet.HelloRequest,
  proto.greet.HelloReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);

export { GreeterClient, GreeterPromiseClient, methodDescriptor_Greeter_SayHello };

