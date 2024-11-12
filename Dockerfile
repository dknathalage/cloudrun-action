FROM golang:1.23-alpine

ARG GO_MAIN_PATH

WORKDIR /app

COPY ./ ./

RUN go mod download

RUN go build -o /bin/app $GO_MAIN_PATH

ENTRYPOINT ["app"]