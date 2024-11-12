FROM golang:1.23-alpine

WORKDIR /app

COPY ../../ ./

# print the current directory and the files in it
RUN pwd
RUN ls -la

RUN go mod download

RUN go build -o /bin/app ./cmd/main.go

ENTRYPOINT ["app"]