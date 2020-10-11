/* TODO:
  - switch case exceptions
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
        return $(
            "//*[@id='boundlist-1328-listEl']//li[contains(text(),'Stamps')]"
        );
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
        return $(
            "//*[@id='boundlist-1330-listEl']//li[contains(text(),'Canada')]"
        );
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

    /**
     * define or overwrite page methods
     */

    selectDropdownOption(element, opt) {
        switch (element) {
            case "Print On":
                this.printOnDropdown.click();
                switch (opt) {
                    case "Stamps":
                        this.printOnDropdownStamps.click();
                        break;
                    default:
                        return;
                }
                break;
            case "Mail To Country":
                this.mailToCountryDropdown.click();
                switch (opt) {
                    case "Canada":
                        this.mailToCountryDropdownCanada.click();
                        break;
                    default:
                        return;
                }
                break;
            case "service":
                this.serviceDropdown.click();
                switch (opt) {
                    case "Letter":
                        this.serviceDropdownLetter.click();
                        break;
                    default:
                        return;
                }
                break;
            default:
                return;
        }
    }

    enterText(element, input, oz) {
        switch (element) {
            case "Serial Number":
                this.serialNumberInput.clearValue();
                this.serialNumberInput.setValue(input);
                break;
            case "Mail From ZIP":
                this.mailFromZipInput.clearValue();
                this.mailFromZipInput.setValue(input);
                break;
            case "Weight lbs":
                this.weightLbsInput.clearValue();
                this.weightLbsInput.setValue(input);
                this.weightOzInput.clearValue();
                this.weightOzInput.setValue(oz);
                break;
            default:
                return;
        }
    }
}

export default new MailPrintForm();
