const expect = require('chai').expect;

module.exports = function () {

    this.When(/^I select View for employee '(.*)' from payments$/, function (employee) {
        return helpers.loadPage(page.payroll.url)
        .then( () => {
                return page.payments.selectView(employee)
        })
      });
};