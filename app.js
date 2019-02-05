var port = process.env.PORT || 3000,
    express = require('express'),
    app = express();

    app.get('/greet', function(req, res){
        res.send('Hello world, Greetings!!! Welcome to Node Project')
      })
      
      app.listen(port, function(){
        console.log('Server listening on ', port);
      })

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
