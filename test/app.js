const assert = require('assert');
const httpMocks = require('node-mocks-http');
const printerRouter = require('../src/routes/printers');

var request = require('supertest');
const app = require('../src/app.js')

// var server = supertest.agent('http://localhost:3002');

describe('GET /users', function() {
    it('responds with json', function(done) {
        return request(app)
            .get('/printers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                return response;

            }).then(response => {
                console.log('res ', response)
            });
    });
});

