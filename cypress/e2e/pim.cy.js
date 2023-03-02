import Recruitment from './pageObject/recruitmentPO'
import PIM from './pageObject/pimPO'


describe('Recruitment', () => {
  let recruitment = new Recruitment()
  let pim = new PIM()

  it('should successfully login', () => {
   recruitment.siteVisit(); 
   recruitment.enterUsername();
   recruitment.enterPassword();
   recruitment.clickLoginButton();
   recruitment.verifyDashboardUrl();
   recruitment.verifyHeading();
   pim.clickPIM();
  });
});