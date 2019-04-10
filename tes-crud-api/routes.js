'use strict';

module.exports = function(app) {
    var bookStore = require('./controller');

    app.route('/')
        .get(bookStore.index);

    app.route('/users')
        .get(bookStore.users);

    app.route('/users/:id')
        .get(bookStore.findUsers);

    app.route('/users')
        .post(bookStore.createUsers);

    app.route('/users/:id')
        .put(bookStore.updateUsers);

    app.route('/users/:id')
        .delete(bookStore.deleteUsers);
};