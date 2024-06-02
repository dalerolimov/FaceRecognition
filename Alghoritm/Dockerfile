FROM python:3.12

# Create app directory
WORKDIR /app

RUN pip install deepface grpcio protobuf tensorrt


# Bundle app source
COPY . /app

EXPOSE 5051
CMD [ "python", "server.py" ]