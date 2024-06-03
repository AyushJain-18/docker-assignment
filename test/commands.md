command to build and push docker image.
docker build -t jainayush18/docker-assignment:3.0.0 .
docker push jainayush18/docker-assignment:3.0.0

cd ../manifests
kubectl apply -f mongo/mongo-configmap.yaml
kubectl apply -f mongo/mongo-secret.yaml
kubectl apply -f mongo/mongo-statefulset.yaml
kubectl apply -f mongo/mongo-service.yaml

kubectl apply -f api/api-configmap.yaml
kubectl apply -f api/api-secret.yaml
kubectl apply -f api/api-deployment.yaml
kubectl apply -f api/api-service.yaml
kubectl apply -f api/api-hpa.yaml

commands to display all pod and services.
kubectl get pods
kubectl get services
kubectl get statefulsets
kubectl get deployments
kubectl get hpa

minikube service node-api-service

kubectl run -i --tty load-generator --image=busybox /bin/sh

# In the shell

while true; do wget -q -O- http://<your-service-ip>; done

kubectl get hpa node-api-hpa --watch

kubectl delete -f mongo/
kubectl delete -f api/

commands to show DB is successfully displayed.

kubectl get statefulsets
kubectl get pods
kubectl logs mongo-0

kubectl get svc <database-service-name>
kubectl get networkpolicies
telnet <database-cluster-ip> <database-port>

minikube dashboard
