/**
 * Check if the given string is in the URL path
 * @param  {String}   expectedUrlPart The string to check for
 */
export default (expectedUrlPart) => {
  /**
   * The URL of the current browser window
   * @type {String}
   */
  const currentUrl = browser.getUrl();
    expect(currentUrl).toContain(
      expectedUrlPart,
        `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
    );
};
