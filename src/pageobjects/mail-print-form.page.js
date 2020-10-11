import Page from './Page';

class MailPrintForm extends Page  {
  /**
  * define elements
  */
  get printOnDropdown()   { return $('#printmediadroplist-1038-inputEl'); }
  get serialNumberInput() { return $('#sdc-mainpanel-nsserialtextfield-inputEl'); }
  get mailFromZipInput() { return $('#unauthMailFromZip-1048-inputEl'); }
  get mailToCountryDropdown() { return $('#combo-1087-inputEl'); }

  /**
   * define or overwrite page methods
   */

  selectDropdownOption (element, opt) {
    switch(element) {
      case "Print On":
        this.printOnDropdown.clearValue();
        this.printOnDropdown.selectByVisibleText(opt);
        browser.pause(3000);
        break;
      case "Mail To Country":
        this.mailToCountryDropdown.clearValue();
        this.mailToCountryDropdown.selectByVisibleText(opt);
        browser.pause(3000);
        break;
      default:
        return;
    }
  }

  enterText(element, input) {
    switch(element) {
      case "Serial Number":
        this.serialNumberInput.clearValue();
        this.serialNumberInput.setValue(input);
        browser.pause(3000);
        break;
      case "Mail From ZIP":
        this.mailFromZipInput.clearValue();
        this.mailFromZipInput.setValue(input);
        browser.pause(3000);
        break;
      default:
        return;
    }
  }
}

export default new MailPrintForm();