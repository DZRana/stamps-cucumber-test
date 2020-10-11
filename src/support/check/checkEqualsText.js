import mailPrintForm from "../../pageobjects/mail-print-form.page";

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export default (element, expectedText) => {
    switch (element) {
        case "Weight lbs":
            expect(mailPrintForm.weightLbsInput.getValue()).toBe(expectedText);
        default:
            return;
    }
};
