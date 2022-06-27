# Setting up Vite, React and Express

I create a root folder with a package.json to use concurrently. With this I can do multiple commands in differents folders at the same time
Second foLder the backend server with Express server

Add the following to client/vite.config.js
Here /api/v1 is mapped to <http://localhost:3000/> which is where the server resides

```js
server: {
    proxy: {
      "/api/v1": "http://localhost:5000/",
    },
  },

```

The react app uses /api/v1 as base url and the server base endpoint url is /api/v1

Using /api/v1 as base url is arbitrary. Notice however that it appears in 3 places : client/vite.config.js , on the client side source files and on the server side source files
