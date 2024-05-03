import grpc
from concurrent import futures
from deepface import DeepFace
import deepface_pb2_grpc as pb2_grpc
import deepface_pb2 as pb2
   


class FaceServiceServicer(pb2_grpc.FaceServiceServicer):
    def FindSimilarFaces(self, request, context):
        image_path = request.image_path
        db_path = request.db_path

        try:
            print(image_path, db_path)
            result = DeepFace.verify(img1_path=image_path, img2_path=db_path, model_name="GhostFaceNet")
            print(result["verified"])
            if(result['verified']):
                print(result)
                return pb2.FindSimilarResponse(file_path=db_path)
        except Exception as e:
            print(e)
            return pb2.FindSimilarResponse(file_path="")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pb2_grpc.add_FaceServiceServicer_to_server(FaceServiceServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
