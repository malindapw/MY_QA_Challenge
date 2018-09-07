module.exports = {
    elements: {
        payslipForm: by.name('payslipForm'),
        employeeName: by.css('form h4'),
        annualIncome: by.xpath('//td[contains(text(), "Annual Income")]/following-sibling::td'),
        super: by.xpath('//td[contains(text(), "Super")]/following-sibling::td'),
        pay: by.xpath('//td[(text()="Pay")]/following-sibling::td')
    },

    /**
     * Provide the amount with commas as thousands separator
     * @param number amount to be converted
     * @return number amount after thousand separator
     */
    addCommaAsThousand: function (amount) {
        return (amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).trim();
    }
};