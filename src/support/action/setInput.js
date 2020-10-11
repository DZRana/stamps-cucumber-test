import mailPrintForm from "../../pageobjects/mail-print-form.page"

/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (element, input) => {
  switch(element) {
    case "Print On":
    case "Mail To Country":
      mailPrintForm.selectDropdownOption(element, input);
      break;
    case "Serial Number":
    case "Mail From ZIP":
      mailPrintForm.enterText(element, input);
      break;
    default:
      return;
  }
};
