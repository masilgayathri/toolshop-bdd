# Jenkins with the Docker command line added,
# so Jenkins can build and run our test image.
FROM jenkins/jenkins:lts-jdk21

# root is needed to talk to Docker Desktop (fine for local practice only)
USER root
RUN apt-get update && apt-get install -y docker.io && rm -rf /var/lib/apt/lists/*
