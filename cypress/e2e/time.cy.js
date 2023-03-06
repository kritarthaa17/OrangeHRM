
import Admin from "./pageObject/adminPO";
import Time from "./pageObject/timePo";

describe ('Time',() => { 
    let admin= new Admin()
    let time= new Time()


    it('should successfully login', () => {
        admin.visit();
        admin.enterUsername();
        admin.enterPassword();
        admin.clickLoginButton();
        admin.verifyUrl();
        admin.header();

        //time.clicktime()

        time.checkTime()

    })
    it('should display employee timesheet', () => {
        admin.visit()
        admin.enterUsername();
        admin.enterPassword();
        admin.clickLoginButton();
        admin.verifyUrl();
        admin.header();

        time.checkTime();

        time.timeSheet();

        time.myTimesheet();
        time.timeSheet();

        time.employeeTimesheet();


    })
    it('should display attendence', () => {
        admin.visit()
        admin.enterUsername();
        admin.enterPassword();
        admin.clickLoginButton();
        admin.verifyUrl();
        admin.header();

        time.checkTime();

        time.attendance();

        time.myRecord();

        time.attendance();  

        time.punchInout();

        time.attendance();

        time.employeeRecord();

        time.attendance();

        time.configuration();
 
    })
    it('should display report', () => {
        admin.visit()
        admin.enterUsername();
        admin.enterPassword();
        admin.clickLoginButton();
        admin.verifyUrl();
        admin.header();

        time.checkTime();

        time.report();
        time.projectReports();
        time.report();
        time.employeereport();
        time.report();
        time.attendanceSummary();

    })
    it.only('should display report', () => {
        admin.visit()
        admin.enterUsername();
        admin.enterPassword();
        admin.clickLoginButton();
        admin.verifyUrl();
        admin.header();

        time.checkTime();

        time.projectInfo();
        time.customer();
        time.projectInfo();
        time.project();
        


    })
    
})
