day1-create-cluster:
	kind create cluster --config day1/kind/cluster.yaml

day1-run-nginx:
	kubectl run nginx --image nginx --port 80

day2-get-pods:
	kubectl get pods

day2-describe-nginx:
	kubectl describe pod nginx

day2-attach-nginx:
	kubectl attach nginx

day2-exec-nginx:
	kubectl exec -it nginx -- /bin/bash

day2-create-yaml:
	kubectl run girus --image alpine --dry-run=client -o yaml > day2/pod.yaml

day2-create-pod:
	kubectl apply -f day2/pod.yaml

day3-create-deployment:
	kubectl apply -f day3/deployment.yaml

day3-get-deployments:
	kubectl get deployments

day3-get-replicasets:
	kubectl get replicasets

day3-get-pods:
	kubectl get pods

day3-describe-deployment:
	kubectl describe deployment nginx

day3-delete-deployment:
	kubectl delete -f day3/deployment.yaml

day3-create-deployment2:
	kubectl create namespace giropops --dry-run=client -o yaml > day3/namespace.yaml
	kubectl apply -f day3/namespace.yaml
	kubectl apply -f day3/deployment2.yaml 

day4-create-replicasets:
	kubectl apply -f day4/replicaset.yaml

day4-get-replicasets:
	kubectl get replicasets

day4-create-deamonset:
	kubectl apply -f day4/deamonset.yaml

day4-get-deamonset:
	kubectl get deamonset

day4-desafio:
	kubectl apply -f day4/desafio.yaml

day6-create-storageclass:
	kubectl apply -f day6/storageclass.yaml

day6-create-pv:
	kubectl apply -f day6/persistent-volume.yaml

day7-create-statefulset:
	kubectl apply -f day7/statefullset-nginx.yaml

day7-create-services-example:
	kubectl apply -f day7/services-example.yaml

day7-dever-de-casa:
	kubectl apply -f day7/dever-de-casa.yaml

day8-create-secret:
	kubectl apply -f day8/secret.yaml

day10-create-deployment:
	kubectl apply -f day10/nginx-configmap.yaml
	kubectl apply -f day10/nginx-deployment.yaml
	kubectl apply -f day10/nginx-service.yaml
	kubectl apply -f day10/nginx-servicemonitor.yaml
	kubectl apply -f day10/prometheus-rule.yaml
