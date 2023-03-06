

class Time{
   checkTime(){
    return cy.get(' .oxd-main-menu-item').contains('Time').click().url().should('include','/time/viewEmployeeTimesheet')
   }
   timeSheet(){
    return cy.get('.oxd-topbar-body-nav-tab-item').contains('Timesheet').click()
   }
   myTimesheet(){
    return cy.get('.oxd-topbar-body-nav-tab-link').contains('My Timesheets').click()
   }
   employeeTimesheet(){
    return cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').contains('Employee Timesheets').click()
   }
   attendance(){
    return cy.get('.oxd-topbar-body-nav-tab-item').contains('Attendance ').click()
   }
   myRecord(){
    return cy.get('.oxd-topbar-body-nav-tab-link').contains('My Records').click()
   }
   punchInout(){
    return cy.get('.oxd-dropdown-menu > :nth-child(2)').contains('Punch In/Out').click()
   }
   employeeRecord(){
    return cy.get('.oxd-topbar-body-nav-tab-link').contains('Employee Records').click()
   }
   configuration(){
    return cy.get('.oxd-topbar-body-nav-tab-link').contains('Configuration').click()
   }
   report(){
      return cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').contains('Reports').click()
   }
   projectReports(){
      return cy.get('.oxd-topbar-body-nav-tab-link').contains('Project Reports').click()
   }
   employeereport(){
      return cy.get('.oxd-topbar-body-nav-tab-link').contains('Employee Reports').click()
   }
   attendanceSummary(){
      return cy.get('.oxd-topbar-body-nav-tab-link').contains('Attendance Summary').click()
   }
   projectInfo(){
      return cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').contains('Project Info').click()
   }
   customer(){
      return cy.get('.oxd-topbar-body-nav-tab-link').contains('Customers').click()
   }
   project(){
      return cy.get('.oxd-topbar-body-nav-tab-link').contains('Projects').click()
   }
   

}
export default Time