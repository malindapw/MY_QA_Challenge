
Feature: Payroll System Payslips

  I should be able to generate a new payslip for employees
  I should be able to view payslips for exsisting employees

  Scenario Outline: Generate payslip for a new employee
    When I generate a payslip for a new employee with <FirstName>, <LastName>, <AnnualIncome>, <SuperRate>
    Then I should see the payslip summary page including <PayslipName>, <PayslipAnnualIncome>, <PayslipSuper>, <Pay>

    Examples:
      | FirstName | LastName | AnnualIncome | SuperRate| PayslipName | PayslipAnnualIncome | PayslipSuper | Pay      |                                                                                        
      | John      | Snow     |  81900       | 9        | John Snow   | $81900.00           | $614.00      | $4690.00 |

   Scenario Outline: Can view payslip for an existing employee
    Given I paid for employee <FirstName> <LastName> with <AnnualIncome>, <SuperRate> 
    When I select View for employee '<PayslipName>' from payments
    Then I should see the payslip summary page including <PayslipName>, <PayslipAnnualIncome>, <PayslipSuper>, <Pay>

    Examples:
      | FirstName | LastName | AnnualIncome | SuperRate| PayslipName | PayslipAnnualIncome | PayslipSuper | Pay      |                                                                                        
      | Peter     | Card     |  75000       | 5        | Peter Card  | $75000.00           | $313.00      | $4610.00 |
