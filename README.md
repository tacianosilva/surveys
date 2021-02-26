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
```