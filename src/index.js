const express = require('express');
const app = express();
const path = require('path');

//configurando el servidor
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//rutas
app.use(require('./routes/index'));

//archivos estaticos

//escuchando al servidor 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));    
});