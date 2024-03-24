docker-login:
	docker login

create-network:
	docker network create giropops-senhas || true

redis-run: create-network redis-remove
	docker run -d --network giropops-senhas --name=giropops-senhas-redis -p 6379:6379 -P redis:7.2.4-alpine3.19

redis-remove:
	docker container rm -f giropops-senhas-redis

giropops-senhas-build:
	docker build -t giropops-senhas:latest --build-arg REDIS_HOST=giropops-senhas-redis .

giropops-senhas-run: create-network giropops-senhas-remove
	docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:80 -P giropops-senhas:latest

giropops-senhas-tag:
	docker tag giropops-senhas:latest lucasbaccan/linuxtips-giropops-senhas:1.0

giropops-senhas-remove:
	docker container rm -f giropops-senhas

giropops-senhas-push: giropops-senhas-tag
	docker push lucasbaccan/linuxtips-giropops-senhas:1.0

run-dev: redis-run giropops-senhas-build giropops-senhas-run

run-prod: redis-run giropops-senhas-remove
	docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:80 lucasbaccan/linuxtips-giropops-senhas:1.0