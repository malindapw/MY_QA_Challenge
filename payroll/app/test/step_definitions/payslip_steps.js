const expect = require('chai').expect;

module.exports = function () {

    this.When(/^I generate a payslip for a new employee with (.*),(.*),(.*),(.*)$/, function (firstName, lastName, annualIncome, superRate) {
        return helpers.loadPage(page.payroll.url)
            .then( () => {
                return page.payroll.enterNewEmployeeDetails(firstName, lastName, annualIncome, superRate)
        })
    });

    this.Then(/^I should see the payslip summary page including (.*),(.*),(.*),(.*)$/, function (payslipName,displayedAnnualIncome,payslipSuper,pay) {          
          return driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then( () => {
                driver.findElement(page.payslip.elements.employeeName).getText()
                .then(t => {
                    expect(t).to.be.eql(payslipName);
                })
            })
            .then( () => {
                driver.findElement(page.payslip.elements.annualIncome).getText()
                    .then(t => {
                        expect(t).to.be.eql(page.payslip.addCommaAsThousand(displayedAnnualIncome));
                })
            })
            .then( () => {
                driver.findElement(page.payslip.elements.super).getText()
                    .then(t => {
                        expect(t).to.be.eql(payslipSuper.trim());
                })
            })
            .then( () => {
                driver.findElement(page.payslip.elements.pay).getText()
                    .then(t => {
                        expect(t).to.be.eql(page.payslip.addCommaAsThousand(pay));
                })
            });
    });
};