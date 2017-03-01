module.exports = function( app, server_detail ) {
    var api = require('./api.js')( app, server_detail );

    app.get('/', function ( req, res, next ){
        res.render('index');
    });

    app.post('/auth/signin', api.login);
}

