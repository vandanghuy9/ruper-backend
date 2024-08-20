mongo:
	docker build -t mongo --file mongo.Dockerfile .
	docker build -t ruper-backend --file ruper.Dockerfile .