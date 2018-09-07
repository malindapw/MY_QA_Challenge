module.exports = {
    url: 'http://localhost:3000',
    elements: {
        employeeForm: by.name('employeeForm'),
        firstNameInput: by.name('firstName'),
        lastNameInput: by.name('lastName'),
        annualSalaryInput: by.name('annualSalary'),
        superRateInput: by.name('superRate'),
        generatePayslipButton: by.css('button.btn-primary'),
        payButton:by.xpath('//BUTTON[@class="btn btn-primary"][text()="Pay"]')
    },

    /**
     * Provides the ability to enter employee details
     * @param string first name of the employee
     * @param string last name of the employee
     * @param number annual salary of employee
     * @param number super rate
     */ 
    enterNewEmployeeDetails: function (firstName, lastName, annualSalary, superRate) {
        driver.wait(until.elementsLocated(this.elements.employeeForm), 10000)
        driver.findElement(this.elements.firstNameInput).sendKeys(firstName);
        driver.findElement(this.elements.lastNameInput).sendKeys(lastName);
        driver.findElement(this.elements.annualSalaryInput).sendKeys(annualSalary);
        driver.findElement(this.elements.superRateInput).sendKeys(superRate);
        driver.findElement(this.elements.generatePayslipButton).click();
    },

    /**
     * Provides the ability to pay the payment for the month
     */ 
    selectPay: function () {
        driver.findElement(this.elements.payButton).click();
    }
};
