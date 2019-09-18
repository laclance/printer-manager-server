const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const printersRouter = require('./routes/printers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(indexRouter);
app.use(printersRouter);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // respond with error
    res.status(err.status || 500).send(err.message || 'Unknown Error');
});

module.exports = app;