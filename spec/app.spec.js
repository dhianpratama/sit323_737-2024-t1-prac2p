import request from 'supertest'
import app from '../src/app.js'
import jasmineReporters from 'jasmine-reporters'

jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
  verbosity: 3,
  color: true,
  showStack: true
}))

describe('App', () => {
  it('should load the page successfully', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((error) => (error) ? done.fail(error) : done())
  })

  it('should return 404 for unknown path', (done) => {
    request(app)
      .get('/something')
      .expect(404)
      .end((error) => (error) ? done.fail(error) : done())
  })
})
