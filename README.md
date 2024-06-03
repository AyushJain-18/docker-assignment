Code repository :- https://github.com/AyushJain-18/docker-assignment
Docker image url :- https://hub.docker.com/r/jainayush18/docker-assignment
Servive api url :- used minikube and hence have only local url, which can be generate using command minikube
screen recording :- https://drive.google.com/file/d/1kz94L9pzFhu9BESIXXNdXdY0v5NAiu7Q/view?usp=sharing

Backend folder contains a express server with mongodb.
K8s conatins all the required yaml files

commands

1. to start minikube using docker.

# minikube start --driver=docker --memory=2048 --cpus=2

2. Run pods, services, config, secret.

cd k8s

# kubectl apply -f mongo/mongo-configmap.yaml

# kubectl apply -f mongo/mongo-secret.yaml

# kubectl apply -f mongo/mongo-statefulset.yaml

# kubectl apply -f mongo/mongo-service.yaml

# kubectl apply -f api/api-configmap.yaml

# kubectl apply -f api/api-secret.yaml

# kubectl apply -f api/api-deployment.yaml

# kubectl apply -f api/api-service.yaml

# kubectl apply -f api/api-hpa.yaml

3. commands to display all pod and services.

   # kubectl get pods

   # kubectl get services

   # kubectl get statefulsets

   # kubectl get deployments

   # kubectl get hpa

# kubectl logs

Assignment point 1: Deploy a stateful set database with one pod accessible only inside the cluster, with persistent storage, and use ConfigMaps and Secrets for configurations.

1. Check StatefulSet and Pods:

# kubectl get statefulset mongo

2. Check Persistent Volume:

# kubectl get pvc -l app=mongo

3. More details for Persistent Volume Claim

# kubectl describe pvc mongo-storage-mongo-0

Assignment point 2: Deploy an API service with 3 pods using ReplicaSets, accessible from outside the cluster, retrieving records from the database via a headless ClusterIP service, with configurations stored in ConfigMaps and Secrets

# kubectl get deployment node-api // 3 replica set

# kubectl get pods

# kubectl logs <api-pod-name> // check logs for mongodb connectivity

# kubectl exec -it <api-pod-name> -- env // check environment variables

# minikube service node-api-service // to access oustide cluster

3. To showcase rolling update change the image name in deployement file from version 2 to 3.
   in api-deployment.yaml and then

# kubectl apply -f api/api-deployment.yaml

# kubectl get pods

# kubectl describe deployment node-api

# minikube service node-api-service

# kubectl scale deployment node-api --replicas=3

4. deleting pod presist the data.

   # kubectl delete pods mongo-0

   # kubectl get pods

   # show persisted data

   # minikube service node-api-service

5. 3.Demonstrate the Horizontal Pod Autoscaler in action by increasing load on a single pod, showcasing the HPA's scaling response.

# run artificals calls

# kubectl get pods

# kubectl get hpa

Zip file link :- https://drive.google.com/file/d/1FCMRIDbpxBydpTInxVL0nAgChmKbHzrD/view
screen recording :- https://drive.google.com/file/d/11fgNlE50lBOulyAIG_207DoC7vIrTtng/view
