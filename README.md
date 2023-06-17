# Infodesign FullStack Api Test

Welcome to FullStack api test by Infodesign. This is the documentation of the API developed with Next.js. The API 
provides endpoints to interact with the data and functionalities of the system. The following are the main aspects of the 
API, including the project structure, available routes and resources used resources used.

# Preview

![preview of application](https://raw.githubusercontent.com/silvermachine777/infodesign-full-stack-test/main/src/assets/img/api.png)

## Features

- Modular API
- Database module
- Historical consumption module
- Controllers
- Dtos
- Services
- Config
- Environments

## Main technologies

- [Nestjs](https://nestjs.com/) version 9.1.8.
- Node version v18.14.2
- Conventional commits https://www.conventionalcommits.org/en/v1.0.0/
- Typescript
- POO

## Other technologies

- Mssql for sql server data base conection

## Endpoints

- http://localhost:3000/historicalConsumptions/byTranches
- http://localhost:3000/historicalConsumptions/byClient
- http://localhost:3000/historicalConsumptions/top20WorstSegmentsByClient

## Body Structure 

### byTranches
{
  "initialDate": "2010-01-01",
  "finalDate": "2010-01-02",
  "historyType": "historyByTranches"
}
### byClient
{
  "initialDate": "2010-01-01",
  "finalDate": "2010-01-02",
  "historyType": "historyByClient"
}
### top20
{
  "initialDate": "2010-01-01",
  "finalDate": "2010-01-02",
  "historyType": "top20"
}

## Installation
- Download of the repository
- Execute
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


