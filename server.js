var express = require('express'),
    config = require('./server/configure'),
    app = express(),
    mongoose = require('mongoose');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect('mongodb://admin:nPDy8OodkJ9K@db2.daocloudinternal.io:60232/temp_db');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

