/* TODO:
  - switch case exceptions
  - if el exists
  - descriptions
  - cut down
  - driver
*/
import Page from "./Page";

class MailPrintForm extends Page {
    /**
     * define elements
     */
    get printOnDropdown() {
        return $("#printmediadroplist-1038-inputEl");
    }
    get printOnDropdownStamps() {
        return $("//*[@id='boundlist-1328-listEl']//li[text()='Stamps']");
    }
    get serialNumberInput() {
        return $("#sdc-mainpanel-nsserialtextfield-inputEl");
    }
    get mailFromZipInput() {
        return $("#unauthMailFromZip-1048-inputEl");
    }
    get mailToCountryDropdown() {
        return $("#combo-1063-bodyEl");
    }
    get mailToCountryDropdownCanada() {
        return $("//*[@id='boundlist-1330-listEl']//li[text()='Canada']");
    }
    get weightLbsInput() {
        return $("#numberfield-1167-inputEl");
    }
    get weightOzInput() {
        return $("#numberfield-1169-inputEl");
    }
    get serviceDropdown() {
        return $("#sdc-mainpanel-servicedroplist-inputEl");
    }
    get serviceDropdownLetter() {
        return $("#sdc-servicedroplist-fciletter");
    }
    get banner() {
        return $("#marketingbanner-1011-body");
    }

    /**
     * define or overwrite page methods
     */

    selectDropdownOption(element, opt) {
        switch (element) {
            case "Print On":
                if (this.printOnDropdown.isClickable()) {
                    this.printOnDropdown.click();
                    switch (opt) {
                        case "Stamps":
                            if (this.printOnDropdownStamps.isClickable()) {
                                this.printOnDropdownStamps.click();
                                break;
                            } else break;
                        default:
                            return;
                    }
                } else break;
            case "Mail To Country":
                if (this.mailToCountryDropdown.isClickable()) {
                    this.mailToCountryDropdown.click();
                    switch (opt) {
                        case "Canada":
                            if (
                                this.mailToCountryDropdownCanada.isClickable()
                            ) {
                                this.mailToCountryDropdownCanada.click();
                                break;
                            } else break;
                        default:
                            return;
                    }
                } else break;
            case "service":
                if (this.serviceDropdown.isClickable()) {
                    this.serviceDropdown.click();
                    switch (opt) {
                        case "Letter":
                            if (this.serviceDropdownLetter.isClickable()) {
                                this.serviceDropdownLetter.click();
                                browser.pause(3000);
                                break;
                            } else break;
                        default:
                            return;
                    }
                } else break;
            default:
                return;
        }
    }

    enterText(element, input, oz) {
        switch (element) {
            case "Serial Number":
                if (this.serialNumberInput.isDisplayed()) {
                    this.serialNumberInput.clearValue();
                    this.serialNumberInput.setValue(input);
                    break;
                } else break;
            case "Mail From ZIP":
                if (this.mailFromZipInput.isDisplayed()) {
                    this.mailFromZipInput.clearValue();
                    this.mailFromZipInput.setValue(input);
                    break;
                } else break;
            case "Weight lbs":
                if (
                    this.weightLbsInput.isDisplayed() &&
                    this.weightOzInput.isDisplayed()
                ) {
                    this.weightLbsInput.clearValue();
                    this.weightLbsInput.setValue(input);
                    browser.pause(1000);
                    this.weightOzInput.clearValue();
                    this.weightOzInput.setValue(oz);
                    browser.pause(1000);
                    break;
                } else break;
            default:
                return;
        }
    }
}

export default new MailPrintForm();
