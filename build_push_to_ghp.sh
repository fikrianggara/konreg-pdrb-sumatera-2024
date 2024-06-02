# build image dari dockerfile
docker build -t konreg-pdrb-2024:latest .
# push image ke github container registry
docker tag konreg-pdrb-2024:latest ghcr.io/fikrianggara/konreg-pdrb-2024:latest
# login ke github container registry
docker login ghcr.io -u fikrianggara
# push image ke github container registry
docker push ghcr.io/fikrianggara/konreg-pdrb-2024:latest