let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

/*
* Test the /POST route
*/

describe('/POST prevented when an employee already received payment', () => {
    it('it should not POST the payment becasue the employee already exists', (done) => {
        let payment = {
            _id:2,
            annualSalary:81900,
            firstName:"John",
            grossIncome:6825,
            incomeTax:1521,
            isNew:true,
            lastName:"Snow",
            netIncome:5304,
            pay:4690,
            payPeriod:"2018-05-30T01:00:00.000Z",
            payPeriodFormatted:"30 May 2018",
            payPeriodMonth:"Month of May",
            super:614,
            superRate:9
        }
      chai.request(server)
          .post('/api/payment')
          .send(payment)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done(); 
          });    
    });
});

describe('/POST prevented when invalid data provided', () => {
    it('it should not POST the payment because the required field is missing', (done) => {
        let payment = {
            _id:3,
            annualSalary:120000,
            firstName:null,
            grossIncome:10000,
            incomeTax:2696,
            isNew:true,
            lastName:"white",
            netIncome:7304,
            pay:4690,
            payPeriod:"2018-05-30T01:00:00.000Z",
            payPeriodFormatted:"30 May 2018",
            payPeriodMonth:"Month of May",
            super:200,
            superRate:2
        }
      chai.request(server)
          .post('/api/payment')
          .send(payment)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done(); 
          });    
    });
});
