/**
 * @fileoverview gRPC-Web generated client stub for health
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.health = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.health.HealthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.health.HealthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.health.EmptyRequest,
 *   !proto.health.Reply>}
 */
const methodDescriptor_Health_IsAlive = new grpc.web.MethodDescriptor(
  '/health.Health/IsAlive',
  grpc.web.MethodType.UNARY,
  proto.health.EmptyRequest,
  proto.health.Reply,
  /**
   * @param {!proto.health.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.health.Reply.deserializeBinary
);


/**
 * @param {!proto.health.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.health.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.health.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.health.HealthClient.prototype.isAlive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/health.Health/IsAlive',
      request,
      metadata || {},
      methodDescriptor_Health_IsAlive,
      callback);
};


/**
 * @param {!proto.health.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.health.Reply>}
 *     Promise that resolves to the response
 */
proto.health.HealthPromiseClient.prototype.isAlive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/health.Health/IsAlive',
      request,
      metadata || {},
      methodDescriptor_Health_IsAlive);
};


module.exports = proto.health;

