Assignment
Develop and deploy the following services in a k8s cluster:

1. Deploy a database (any database) using stateful sets.
   a. The db should only be accessible from inside the cluster and not outside
   the cluster.
   b. Number of pods running should be 1.
   c. Data should be persisted, so the pod goes down data should not be lost.
   d. Use ConfigMaps and Secrets to store any configurations like db
   user/pass, connection strings etc.
2. Deploy an API service which with 3 pods using replica sets.
   a. The APIs will be accessible from outside the cluster.
   b. The API will retrieve records from the above database.
   c. Use headless clusterIP service for connectivity with the database.
   d. Number of pods running should be 3.
   e. Use ConfigMaps and Secrets to store any configurations like db
   user/pass, connection strings etc.
3. Implement Horizontal Pod Autoscaler on the API service and show it in action.
   a. To show it running, you can increase the load on any one pod to show
   increase in number of pods by HPA (or any other way you like)
4. General rules:
   a. Use any language of your choice.
   b. K8s cluster can be deployed anywhere you like.
   c. Direct Pod IPs should not be used for communication. Use k8s services
   for communication.
   d. Any config values should be passed using K8s ConfigMaps.
   e. Any secret info like password etc should be passed using K8s secrets.
   What to show in final recording:
5. Overall setup of the system.
6. Show all objects deployed and running.
7. Everything is correctly deployed for database.
8. Everything is correctly deployed for API service.
9. Run API and retrieve records from db.
10. Show rolling update for API service pods.
11. Show that deleting db pods doesn’t delete data from db.
12. Show Horizontal Pod Autoscaler in action.
    Deliverables
13. Source Code for the project. Provide repository URL only, don’t upload whole
    source code.
    • Make sure it includes all Kubernetes YAML files used in the assignment.
    • Dockerfile should be present as well.
    • Repository can be GitHub or Gitlab. DO NOT use your project source
    code.
14. Also include a README.md file in code which has:
    • Link for the code repository.
    • Docker hub URL for docker images.
    • URL for Service API tier to view the records from backend tier.
    • Link for screen recording video showing everything mentioned above
