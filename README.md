This is my NodeJs Backend setup with Express and MongoDB, inspired by https://github.com/hagopj13/node-express-boilerplate

# Use

```
git clone https://github.com/Nie-Mand/Express-Boilerplate.git
cd Express-Boilerplate
npm i
npm run dev
```

# Tools

## Create A Route Called myRoute for the path **/my-route**

```
npm run generate route myRoute /my-route
```

> This will create a route file, and a controller, then adds the route to express. If the backslache is not provided, it'll be added automatically so **npm run generate route myRoute my-route** is also valid

## Create A MongoDB Model Called myModel

```
npm run generate model myModel
```

> This will create a model file, and a service

# Todos

- prettier, nodemon
- add Passport Support
- Add ESlint
- Add Testing
- Add Swagger Documentation
- Add Socket Support
- Add Upload Support
- Add SMTP Support
- Containerization
