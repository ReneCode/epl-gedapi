var assert = require('assert');

var server = require('../server');
var superagent = require('superagent');

var gedStorage = require('../api/gedStorage');

var PORT = 3010;
var URL_ROOT = 'http://localhost:' + PORT + '/api/ged';

describe('REST ged', function() {
    var app;

    before(function(done) {
        app = server().listen(PORT, function() {
            done();
        });
    });

    after(function(done) {
        app.close(function() {
            done();
        })
    })

    describe('basics', function() {
        it ('can be called', function(done) {
            superagent.get(URL_ROOT, function(err, res) {
                assert.ifError(err);
                done();
            })
        })
    })

    describe('get', function() {
        it ('valid data', function(done) {
            gedStorage.add({x:34, y:34});
            superagent.get(URL_ROOT)
            .end(function(err, res) {
                assert.ifError(err);
                assert(res.body.length == gedStorage.getAll().length);
                done();
            });
        });
    })

    describe('post', function() {
        it ('valid data', function(done) {
            var line = { x:234, y:234 };
            superagent.post(URL_ROOT)
            .send(line)
            .end(function(err, res) {
                assert.ifError(err);
                assert.deepEqual(res.body, line);
                done();
            })
        })
    })

    describe('delete', function() {
        it ('delete all', function(done) {
            gedStorage.add({x:41, y:42});
            assert(gedStorage.getAll().length > 0);
            superagent.delete(URL_ROOT)
            .end(function(err, res) {
                assert.equal(gedStorage.getAll().length, 0);
                done();
            });

        })
    })

})