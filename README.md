<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

# NEST BLOG API

A simple REST Api for a simple blog. It includes Authentication using Passport and a session based token using JWT.

## Tech Stack

**Client:** -

**Server:** [Nest](https://github.com/nestjs/nest)

## Installation

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

## API Reference

You have to **signup** and then **login** to be able to apply CRUD for post.

#### Sign Up

```http
  POST /api/v1/auth/signup
```

| Parameter  | Type     | Description  |
| :--------- | :------- | :----------- |
| `name`     | `string` | **Required** |
| `email`    | `string` | **Required** |
| `password` | `string` | **Required** |
| `gender`   | `string` | **Required** |

#### Login

```http
  POST /api/v1/auth/login
```

| Parameter  | Type     | Description  |
| :--------- | :------- | :----------- |
| `email`    | `string` | **Required** |
| `password` | `string` | **Required** |

## Environment Variables

To run this project, you will need to add environment variables to your .env file. A sample of this can be found in [.env.sample](./.env.sample)

## Author

- [SuzuMantan](https://github.com/agusthas)

## Reference
- [A beginner’s guide to building web API’s with NestJs, Postgres, and Sequelize fundamentals.](https://victoronwuzor.medium.com/a-beginner-guide-to-building-web-apis-with-nestjs-postgres-and-sequelize-fundamentals-13f7e74642ff)
