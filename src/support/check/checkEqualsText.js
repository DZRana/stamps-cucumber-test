import mailPrintForm from "../../pageobjects/mail-print-form.page";

/**
 * Check if the given element's text is the same as the given text
 * @param  {String}   element   Given field element 
 * @param  {String}   expectedText   The text to validate against
 */
export default (element, expectedText) => {
    switch (element) {
        case "Weight lbs":
            expect(mailPrintForm.weightLbsInput.getValue()).toBe(expectedText);
        default:
            return;
    }
};
