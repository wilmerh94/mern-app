# Setting up Vite, React and Express

I create a root folder with a package.json to use concurrently. With this I can do multiple commands in differents folders at the same time
Second foLder the backend server with Express server

Add the following to client/vite.config.js
Here /api/use is mapped to <http://localhost:3000/> which is where the server resides, **Make sure when you're using vite with express and node the port for vite app has to be different than the one on the server side(backends)**

```js
 server: {
  port: '4000',
  proxy: {
   '/api/users/': {
    target: `http://localhost:3000`,
    changeOrigin: true,
   },
  },
 },

```

The react app uses /api/user as base url and the server base endpoint url is /api/user

<<<<<<< HEAD
Using /api/user as base url is arbitrary. Notice however that it appears in 3 places : client/vite.config.js , on the client side source files and on the server side source files
=======
Using /api/v1 as base url is arbitrary. Notice however that it appears in 3 places : client/vite.config.js , on the client side source files and on the server side source files

>>>>>>> e468fac7bc9c9fa69fe6dd75d485b395f6143c72
