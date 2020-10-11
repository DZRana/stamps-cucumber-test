import mailPrintForm from "../../pageobjects/mail-print-form.page";

/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (element, input, oz) => {
    if (mailPrintForm.banner.waitForDisplayed({ timeout: 10000 })) {
        switch (element) {
            case "Print On":
            case "Mail To Country":
                mailPrintForm.selectDropdownOption(element, input);
                break;
            case "Serial Number":
            case "Mail From ZIP":
                mailPrintForm.enterText(element, input);
                break;
            case "Weight lbs":
                mailPrintForm.enterText(element, input, oz);
            case "service":
                mailPrintForm.selectDropdownOption(element, input);
            default:
                return;
        }
    }
};
