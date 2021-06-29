module.exports = {
  '@tags': ['index'],
  'Demo Ruten Index Page': browser => {
      browser
      .url('https://www6.vghtpe.gov.tw/reg/c19vaccLine.do')
      .waitForElementVisible('body')
      .setValue('input[name=linename]', '')
      .setValue('input[name=lineid]', '')
      .setValue('input[name=phone]', '')
      .execute(function () {
        document.querySelectorAll("input[value=any]")[0].checked = true
      }, [])
      .click('input[type=button]')
      .pause(100)
      .saveScreenshot('screenshots/index.png')
  }
}