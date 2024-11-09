FROM golang:1.23-alpine

WORKDIR /app

COPY ./ ./

RUN go mod download

RUN go build -o /bin/app ./cmd/cloudrun-deploy/cloudrun-deploy.go

ENTRYPOINT ["app"]