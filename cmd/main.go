package main

import (
	"github.com/caarlos0/env"
)

type CloudRunService struct {
	Name    string `env:"SERVICE,required"`
	Region  string `env:"REGION,required"`
	Project string `env:"PROJECT,required"`
}

func main() {
	var cfg CloudRunService
	err := env.Parse(&cfg)
	if err != nil {
		panic(err)
	}
}
