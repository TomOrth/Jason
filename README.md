# Jason

JSON to ES6 class object converter middleware for express

## Prerequisites

Jason uses the ES6 Reflect api, which requires at least Node.js version 6.4.0

## Installing

```npm install jason-parse```

## Demonstration

So first we define a basic model which requries an empty constructor that takes in parameter ```...args```

```js
class User {
    constructor(...args){}
 
    get name() {
        return this.name;
    }
   
    set name(newName) {
        this.name = newName;
    }
}
module.exports = User;
```
When you POST json to the express server, send it to the parameter ```entity``` so that the middleware can parse it

Now for our express routes that we want to use this middleware on:

```js
const routes = require('express').Router();
const User = require('./User');
const jason = require('../index');

routes.post('/<name>', jason.single(User, 'user'), function(req, res) {
    //req.body.user contains the parse entity from '{"name":"foo"}'
});

routes.post('/<name>', jason.array(User, 'users'), function(req, res) {
    //req.body.users contains an array of the parsed entities '[{"name":"foo"},{"name","bar"}]'
});
```
## Authors
* Tom Orth (atf1999)

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgements
* Spring REST for doing this in their Java web framework and inspiring me to do this for Node.js
