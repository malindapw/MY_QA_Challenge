const expect = require('chai').expect;

module.exports = function () {

    this.Given(/^I paid for employee (.*) (.*) with (.*),(.*)$/, function (firstName, lastName, annualIncome, superRate) {
        return helpers.loadPage(page.payroll.url)
        .then( () => {
                return page.payroll.enterNewEmployeeDetails(firstName, lastName, annualIncome, superRate)
        })
        .then( () => {
                return page.payroll.selectPay()
        })
      });
    
};