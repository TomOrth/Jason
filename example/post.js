var unirest = require('unirest');

unirest.post('http://localhost:3000/user')
       .header('Accept', 'application/json')
       .send({'entity': '{"name": "tom"}'})
       .end(function (res) {
           console.log(res.body);
       });

unirest.post('http://localhost:3000/users')
       .header('Accept', 'application/json')
       .send({'entity': '[{"name": "tom" },{"name": "mike"}]'})
       .end(function (res) {
           console.log(res.body);
       });
