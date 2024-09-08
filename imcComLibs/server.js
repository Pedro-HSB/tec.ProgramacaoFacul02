const app = require('./app');

app.set('port', 5000);

const server = app.listen(app.get('port'), () =>{
    console.log('tudo ok, porta do servidor é ' + server.address().port);
})