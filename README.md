![](https://img.shields.io/badge/BackEnd-Node/TypeScript/TypeORM-green)
![](https://img.shields.io/badge/Security-jsonwebtoken-green)
![](https://img.shields.io/badge/database-postgreSQL-blue)
![](https://img.shields.io/badge/Infra-Heroku-blueviolet)

![](https://afya.gama.academy/wp-content/uploads/2021/04/logo-afya-labs.png) 
![](https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy-p-500.png)

# API iConsultas

## Sobre:

Desafio proposto na [1ª Edição Afya Labs](https://afya.gama.academy), programa de treinamento da [Gama Academy](https://www.gama.academy/) em parceria com [Afya Educacional](https://afya.com.br/), onde desenvolvemos uma API utilizando as tecnologias PostgreSQL, TypeORM e Nodejs para realizar agendamento de consultas.
O sistema foi criado pelo grupo e publicado na plataforma [Herokuapp](https://afya-backend.herokuapp.com/)

#### Integrantes do grupo Gits:

| | | | | | |
|-|-|-|-|-|-|
|<p align="center"><img style="border-radius: 100px" width="100px" src="https://avatars.githubusercontent.com/u/67612672?v=4"  alt="Ailson" /><br />[Ailson Junior][ailsonjr]</p>|<p align="center"><img style="border-radius: 100px" width="100px" src="https://avatars.githubusercontent.com/u/60198926?v=4"  alt="Aldicleiry" /><br />[Aldicleiry Silva][AldySouza]</p>|<p align="center"><img style="border-radius: 100px" width="100px" src="https://avatars.githubusercontent.com/u/79863993?v=4" alt="Aline" width="100px"/><br />[Aline Branco][alinebw]</p>|<p align="center"><img style="border-radius: 100px" width="100px" src="https://avatars.githubusercontent.com/u/29051982?s=400&u=9075f45ce5450c21e5fbab326df6534333be3126&v=4"  alt="Anderson"/><br />[Anderson Praxedes][andersonprax]</p>|<p align="center"><img style="border-radius: 100px" width="100px" src="https://avatars.githubusercontent.com/u/46490801?v=4"  alt="Breno"/><br />[Breno Cota][brenogcota]</p>|<p align="center"><img style="border-radius: 100px" width="100px" src="https://avatars.githubusercontent.com/u/69769953?v=4"  alt="Eduardo" /><br />[Eduardo Silva][EduardoRS78]</p>|

### Tecnologias usadas:
- nodejs
- npm 
- yarn
- axios
- express
- postgreSQL
- typeorm
- typescript
- javascript

## Instalação e inicialização do sistema localmente:
- npm i
- npm run typeorm migration:run
- npm run dev

# Consumo da API:

### Base URL: https://afya-backend.herokuapp.com/

## Create User
### endpoint: ${baseURL}/users
```
// $: http.request({
            url: `${baseURL}/users`,
            method: 'post',
            body: {
                "name": "Breno",
                "username": "breno@afya.com",
                "password": "mysecuritypassword"
            }
        });

// status: 201
// response:
{
  "name": "Breno",
  "username": "breno@afya.com",
  "roles": [
    {
      "id": "7fa4b3b8-d0f4-47aa-b5d9-6d59194b0921",
      "name": "ROLE_USER",
      "description": "user roles",
      "created_at": "2021-06-15T03:10:28.260Z"
    }
  ],
  "id": "9ae88a6d-ca32-4d47-9bff-864daf09ff76",
  "created_at": "2021-06-15T16:25:38.870Z"
}
``` 

## Create Session
### endpoint: ${baseURL}/sessions
```
// $: http.request({
            url: `${baseURL}/sessions`,
            method: 'post',
            body: {
                "username": "breno@afya.com",
                "password": "mysecuritypassword"
            }
        });

// status: 200
// response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJST0x...",
  "user": {
    "id": "7f2da256-fc00-4db5-a804-4029faf905fb",
    "name": "Breno",
    "username": "brenocota4@gmail.com",
    "password": "$2a$08$IZEkpMJBnoVIH0olLCiyy.BcEbHpAnpxWI.NYr6YnZGZIrLx0HZ/.",
    "created_at": "2021-06-15T03:11:43.038Z",
    "roles": [
      {
        "id": "7fa4b3b8-d0f4-47aa-b5d9-6d59194b0921",
        "name": "ROLE_USER",
        "description": "user roles",
        "created_at": "2021-06-15T03:10:28.260Z"
      }
    ]
  }
}
``` 

## Create Address
### endpoint: ${baseURL}/addresses
```
// $: http.request({
            url: `${baseURL}/addresses`,
            method: 'post',
            body: {
                "cep": "3964000", 
                "logradouro": "casa", 
                "numero": "32", 
                "bairro": "centro", 
                "localidade": "Berilo", 
                "uf": "MG",
                "clients": "9d7e3240-3847-4901-8a3d-0879fe28d5dc"
            }
        });

// status: 200
// response:
{
  "cep": "3964000",
  "logradouro": "casa",
  "numero": "32",
  "bairro": "centro",
  "localidade": "Berilo",
  "uf": "MG",
  "clients": [
    {
      "id": "9d7e3240-3847-4901-8a3d-0879fe28d5dc",
      "name": "Breno",
      "cpf": "r2d2c3po",
      "telefone": "2222",
      "celular": "999999",
      "email": "brenocota4@gmail.com",
      "tipo_sanguineo": "A+",
      "created_at": "2021-06-15T03:16:17.399Z"
    }
  ],
  "id": "a8b9fbc3-fad7-4771-bb24-e74b8fd3b5db",
  "created_at": "2021-06-15T17:20:44.819Z"
}
``` 

## Create Specialist
### endpoint: ${baseURL}/specialists
```
// $: http.request({
            url: `${baseURL}/specialists`,
            method: 'post',
            body: {
                "nome": "Breno 2",
                "email": "brenocota@gmail.com",
                "registro": "1155sasn55",
                "celular": "999999",
                "telefone": "2222",
                "users": "7f2da256-fc00-4db5-a804-4029faf905fb"
            }
        });

// status: 200
// response:
{
  "registro": "1155sasn55",
  "nome": "Breno 2",
  "telefone": "2222",
  "celular": "999999",
  "email": "brenocota@gmail.com",
  "users": [
    {
      "id": "7f2da256-fc00-4db5-a804-4029faf905fb",
      "name": "Breno",
      "username": "brenocota4@gmail.com",
      "password": "$2a$08$IZEkpMJBnoVIH0olLCiyy.BcEbHpAnpxWI.NYr6YnZGZIrLx0HZ/.",
      "created_at": "2021-06-15T03:11:43.038Z"
    }
  ],
  "id": "420613e5-d471-4061-aa94-100d5a020a0b",
  "created_at": "2021-06-15T17:22:54.543Z"
}
``` 

## Create Client
### endpoint: ${baseURL}/clients
```
// $: http.request({
            url: `${baseURL}/clients`,
            method: 'post',
            body: {
                "name": "Breno 3",
                "email": "breno@afya.com",
                "cpf": "115555sas1",
                "celular": "999999",
                "telefone": "2222",
                "tipo_sanguineo": "A+",
                "clients": "7fa4b3b8-d0f4-47aa-b5d9-6d59194b0921"
            }
        });

// status: 200
// response:
{
  "name": "Breno 3",
  "email": "breno@afya.com",
  "cpf": "115555sas1",
  "celular": "999999",
  "telefone": "2222",
  "tipo_sanguineo": "A+",
  "users": [
    {
      "id": "7f2da256-fc00-4db5-a804-4029faf905fb",
      "name": "Breno",
      "username": "brenocota4@gmail.com",
      "password": "$2a$08$IZEkpMJBnoVIH0olLCiyy.BcEbHpAnpxWI.NYr6YnZGZIrLx0HZ/.",
      "created_at": "2021-06-15T03:11:43.038Z"
    }
  ],
  "id": "420613e5-d471-4061-aa94-100d5a020a0b",
  "created_at": "2021-06-15T17:22:54.543Z"
}
``` 

## Get address by CEP
### endpoint: ${baseURL}/zippcode/:code
```
// $: curl - i http://localhost:3333/zippcode/39640000

{
  "cep": "39640-000",
  "logradouro": "",
  "complemento": "",
  "bairro": "",
  "localidade": "Berilo",
  "uf": "MG",
  "ibge": "3106507",
  "gia": "",
  "ddd": "33",
  "siafi": "4129"
}
``` 

[ailsonjr]:https://github.com/ailsonjr
[AldySouza]:https://github.com/AldySouza
[alinebw]:https://github.com/alinebw
[andersonprax]:https://github.com/andersonprax
[brenogcota]:https://github.com/brenogcota
[EduardoRS78]:https://github.com/EduardoRS78
