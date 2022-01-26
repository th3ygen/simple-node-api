const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('responds with Salam world!', (done) => {
        request(app).get('/').expect('Salam world!', done);
    })
});