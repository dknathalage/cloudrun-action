FROM golang:1.23-alpine

WORKDIR /app

COPY ./ ./

# print the file that are in directory we are copying
RUN pwd
RUN ls -la

RUN go mod download

RUN go build -o /bin/app ./cmd/main.go

ENTRYPOINT ["app"]