# gruzauth

The authentication package for gruzservices. Use this package in the frontend to make a popup window that authenticates the user and makes a request to your backend server.

## How it works

You add your backend server and socket connection id to the backend server to the authenticationPopup function. This popup will authenticate the user and send a request to that backend server with the user info and the socket id so you can instantly send the information to the user via the socket id.

## Getting started

First add the package to the frontend

```
npm install --save gruzauth
```

or

```
yarn add gruzauth
```

then use the function like this:

```
const request = authenticationPopup("post server", "socket id");
```

request will return an object telling you if an error occured. If an error occures, there will also be an error message explaining what went wrong. If an error doesnt occur, run the window open command.

```
if (request.open) {
    request.open();
}
```
