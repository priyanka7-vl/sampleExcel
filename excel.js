const Excel = require('exceljs');
const webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
.init()
.url('https://accounts.salesmate.io/login.html#')
       
        let workbook = new Excel.Workbook(); 
        workbook.xlsx.readFile('/home/ad.rapidops.com/priyanka.vlr/Documents/ExcelData/salesmateCredentials.xlsx')
        .then(function() {
        let worksheet = workbook.getWorksheet("Sheet1");
        let loginName = worksheet.getCell('A1').value;
        let loginPassword = worksheet.getCell('B1').value;
        console.log(loginName);
        console.log(loginPassword);
        let email = $("//input[@id='email']");
        email.setValue(loginName);
        let password = $("//input[@id='password']");
        password.setValue(loginPassword);
        let submit = $("//button[@id='login_btn']");
        submit.click();
    })
