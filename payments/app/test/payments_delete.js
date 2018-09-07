let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

/*
* Test the /DELETE route
*/

describe('/DELETE payment', () => {
    before( (done) => {
        let payment = {
            _id:4,
            annualSalary:60000,
            firstName:"Eric1",
            grossIncome:5000,
            incomeTax:921,
            isNew:true,
            lastName:"Lim1",
            netIncome:4079,
            pay:3829,
            payPeriod:"2018-05-30T01:00:00.000Z",
            payPeriodFormatted:"30 May 2018",
            payPeriodMonth:"Month of May",
            super:250,
            superRate:5
        }

    chai.request(server)
        .post('/api/payment')
        .send(payment)
        .end(done())
    })

    it('it should DELETE the payment by the given id', (done) => {
          chai.request(server)
          .delete('/api/payment/4')
          .end((err, res) => {
              res.should.have.status(200);
              done();
          });
    });

    it('DELETED payment cannot find', (done) => {
        chai.request(server)
        .get('/api/payment/4')
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
  });
});