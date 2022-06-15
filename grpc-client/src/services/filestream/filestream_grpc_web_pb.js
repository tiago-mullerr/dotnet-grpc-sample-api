/**
 * @fileoverview gRPC-Web generated client stub for filestream
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.filestream = require('./filestream_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.filestream.FilestreamClient =
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
proto.filestream.FilestreamPromiseClient =
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
 *   !proto.filestream.EmptyRequest,
 *   !proto.filestream.StreamResponse>}
 */
const methodDescriptor_Filestream_StreamFile = new grpc.web.MethodDescriptor(
  '/filestream.Filestream/StreamFile',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.filestream.EmptyRequest,
  proto.filestream.StreamResponse,
  /**
   * @param {!proto.filestream.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filestream.StreamResponse.deserializeBinary
);


/**
 * @param {!proto.filestream.EmptyRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.filestream.StreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.filestream.FilestreamClient.prototype.streamFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/filestream.Filestream/StreamFile',
      request,
      metadata || {},
      methodDescriptor_Filestream_StreamFile);
};


/**
 * @param {!proto.filestream.EmptyRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.filestream.StreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.filestream.FilestreamPromiseClient.prototype.streamFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/filestream.Filestream/StreamFile',
      request,
      metadata || {},
      methodDescriptor_Filestream_StreamFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.filestream.LimitedRequest,
 *   !proto.filestream.StreamResponse>}
 */
const methodDescriptor_Filestream_StreamLimitedFile = new grpc.web.MethodDescriptor(
  '/filestream.Filestream/StreamLimitedFile',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.filestream.LimitedRequest,
  proto.filestream.StreamResponse,
  /**
   * @param {!proto.filestream.LimitedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filestream.StreamResponse.deserializeBinary
);


/**
 * @param {!proto.filestream.LimitedRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.filestream.StreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.filestream.FilestreamClient.prototype.streamLimitedFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/filestream.Filestream/StreamLimitedFile',
      request,
      metadata || {},
      methodDescriptor_Filestream_StreamLimitedFile);
};


/**
 * @param {!proto.filestream.LimitedRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.filestream.StreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.filestream.FilestreamPromiseClient.prototype.streamLimitedFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/filestream.Filestream/StreamLimitedFile',
      request,
      metadata || {},
      methodDescriptor_Filestream_StreamLimitedFile);
};


module.exports = proto.filestream;

