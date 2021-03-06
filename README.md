# NLW 4 Node.js

```
mkdir api
cd api
yarn init -y
yarn dev
```

## Dependências

```
yarn add express
yarn add @types/express -D

yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D

yarn add uuid
yarn add @types/uuid -D

yarn add nodemailer
yarn add @types/nodemailer -D

yarn add handlebars
yarn add yup
yarn add express-async-errors
```

### Validação

```
yarn add yup
```

## TypeORM

```
yarn add typeorm reflect-metadata
yarn add sqlite3
```

```
yarn typeorm migrations:create -n CreateUsers
yarn typeorm migration:run
yarn typeorm migration:revert

yarn typeorm migrations:create -n CreateSurveys
yarn typeorm migrations:create -n CreateSurveysUsers
```

## Testes com jest

```
yarn add jest @types/jest -D
yarn jest --init
yarn add ts-jest -D
yarn add supertest @types/supertest -D

yarn test -i
```