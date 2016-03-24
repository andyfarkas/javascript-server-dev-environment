import supertest from 'supertest';

describe('GET /profile', () => {
  it('should return a profile', (done) => {
    supertest('http://localhost:3000')
      .get('/profile')
      .expect('Content-type', /json/)
      .expect(200, done);
  });
});