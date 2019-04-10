'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM USERS', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res);
};

exports.findUsers = function(req, res) {
    var id = req.params.id;

    connection.query('SELECT * FROM USERS WHERE ID = ?', [ id ], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.createUsers = function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var address = req.body.address;
    var phone = req.body.phone;
    var created_at = req.body.created_at;

    connection.query('INSERT INTO USERS(NAME, EMAIL, PASSWORD, ADDRESS, PHONE, CREATED_AT) VALUES(?, ?, ?, ?, ?, NOW())', [ name, email, password, address, phone, created_at ], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menambahkan user!", res);
        }
    });
};

exports.updateUsers = function(req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var address = req.body.address;
    var phone = req.body.phone;
    var updated_at = req.body.updated_at;

    connection.query('UPDATE USERS SET NAME = ?, EMAIL = ?, PASSWORD = ?, ADDRESS = ?, PHONE = ?, UPDATED_AT = NOW() WHERE ID = ?', [ name, email, password, address, phone, id ], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil merubah user!", res);
        }
    });
};

exports.deleteUsers = function(req, res) {
    var id = req.params.id;

    connection.query('DELETE FROM USERS WHERE ID = ?', [ id ], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menghapus user!", res);
        }
    });
};