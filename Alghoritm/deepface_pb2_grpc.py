# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import deepface_pb2 as deepface__pb2


class FaceServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.FindSimilarFaces = channel.unary_unary(
                '/deepface.FaceService/FindSimilarFaces',
                request_serializer=deepface__pb2.FindSimilarRequest.SerializeToString,
                response_deserializer=deepface__pb2.FindSimilarResponse.FromString,
                )


class FaceServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def FindSimilarFaces(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_FaceServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'FindSimilarFaces': grpc.unary_unary_rpc_method_handler(
                    servicer.FindSimilarFaces,
                    request_deserializer=deepface__pb2.FindSimilarRequest.FromString,
                    response_serializer=deepface__pb2.FindSimilarResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'deepface.FaceService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class FaceService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def FindSimilarFaces(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/deepface.FaceService/FindSimilarFaces',
            deepface__pb2.FindSimilarRequest.SerializeToString,
            deepface__pb2.FindSimilarResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
