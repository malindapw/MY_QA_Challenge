module.exports = {
    elements: {
        paymentsList: by.css('div.payment-list.well')
    },

    /**
     * Provides the ability to open the payslip from payments
     * @param string payslip name
     */
    selectView: function (payslipName) {
        var emp = '//*[@class="payment-list well"]/DIV/DIV[text()="'+payslipName+'"]/following::DIV[3]/input[@class="btn btn-primary"]'
        driver.wait(until.elementsLocated(this.elements.paymentsList), 10000);
        driver.findElement(By.xpath(emp)).click();
    }
};
