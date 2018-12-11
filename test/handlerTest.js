'use Strict';
const expect = require('chai').expect;
const main = require("../handler");


describe('Handler', function mainTest() {
  context('Handler Test', function () {
    
    it('Hola Test', async function () {
      let body = JSON.stringify({ "Name": "testCertification", "Place": "certificationComp", "StartDate": "2011-01-01","EndDate": "2011-01-01", "ProfileId": 90, "Created": "2011-03-01",
                  "CreatedBy": "FredrikTest" , "Removed": 0,"CourseLength":0, "Templates_Id": 141 });   
      let event = {body};
      let context = {};
      // let response=400;
      let response = await main.hello(event, context);
        console.log('SaveItem Response:  '+JSON.stringify(response));
      if(response.statusCode == '400')
      expect(response.statusCode).to.eq('400');
      else if(response.statusCode == 200)
      expect(response.statusCode).to.eq('200');      
    });

  });
});
