# Reactjs E-Commerce

A E-commerce website built using ReactJS.

Checkout the preview of the website [here.](https://reactjsecommerce.netlify.app)

## Technologies used

- ReactJS

- [Strip API](https://stripe.com/docs/api)

- [Commerce.js API](https://commercejs.com/docs/api/#introduction)

- Docker

## Initializing the project

You need to have Docker Engine installed on your machine.
You can check by running the following command:

```
$ docker -v
Docker version 20.10.7, build f0df350
```

Then run the following commands to set up your docker container.

```
docker build -t ecommerce:1.0 .
docker run -p 3000:3000 ecommerce
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
