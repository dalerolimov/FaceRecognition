import grpc
from concurrent import futures
from deepface import DeepFace
import deepface_pb2_grpc as pb2_grpc
import deepface_pb2 as pb2
import base64
import os
   


class FaceServiceServicer(pb2_grpc.FaceServiceServicer):
    def FindSimilarFaces(self, request, context):
        image_path = request.image_path
        db_path = request.db_path

        try:
            print(image_path, db_path)
            current_dir = os.getcwd()
            img1_path = save_base64_as_file(image_path, os.path.join(current_dir, "image.jpg"))
            img2_path = save_base64_as_file(db_path, os.path.join(current_dir, "db.jpg"))
            result = DeepFace.verify(img1_path=img1_path, img2_path=img2_path, model_name="GhostFaceNet")
            print(result["verified"])
            if(result['verified']):
                print(result)
                return pb2.FindSimilarResponse(file_path=db_path)
        except Exception as e:
            print(e)
            return pb2.FindSimilarResponse(file_path="")
        
def save_base64_as_file(base64_string, filename):
    with open(filename, 'wb') as f:
        f.write(base64.b64decode(base64_string))
        return filename

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pb2_grpc.add_FaceServiceServicer_to_server(FaceServiceServicer(), server)
    server.add_insecure_port('[::]:5051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
