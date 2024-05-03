# deepface_client.py

import grpc
import deepface_pb2 as pb2
import deepface_pb2_grpc as pb2_grpc
import os

def run():
    channel = grpc.insecure_channel('localhost:50051')
    stub = pb2_grpc.FaceServiceStub(channel)
    path = "/repos/FaceRecognition/src/FaceRecognition.Alghoritms/rpc/photos"
    dir_list = os.listdir(path) 
    print(dir_list)
    for item in dir_list:
        response = stub.FindSimilarFaces(pb2.FindSimilarRequest(image_path="1.jpg", db_path=f"{path}/{item}"))
        if (response.file_path != ""):
            print(response)

if __name__ == '__main__':
    run()
