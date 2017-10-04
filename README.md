# thecontract.io
The website for The Contract

### Dev

```sh
yarn install
yarn build
yarn http-server dist

```

### Prod

```sh
docker build -t thecontract .
docker run -p 4000:8080 thecontract
```
