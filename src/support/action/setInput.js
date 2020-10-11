import mailPrintForm from "../../pageobjects/mail-print-form.page";

/**
 * Set the specified field to the given input
 * @param  {String}   field   Given field element to be set
 * @param  {String}   input   The value to set the given field element to
 * @param  {String}   oz   The value to set the "oz" field element to
 */

export default (field, input, oz) => {
    if (mailPrintForm.banner.waitForDisplayed({ timeout: 10000 })) {
        switch (field) {
            case "Print On":
            case "Mail To Country":
                mailPrintForm.selectDropdownOption(field, input);
                break;
            case "Serial Number":
            case "Mail From ZIP":
                mailPrintForm.enterText(field, input);
                break;
            case "Weight lbs":
                mailPrintForm.enterText(field, input, oz);
            case "service":
                mailPrintForm.selectDropdownOption(field, input);
            default:
                return;
        }
    }
};
