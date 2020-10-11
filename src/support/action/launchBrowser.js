/**
 * Open the given browser
 * @param  {String}   driver   WebDriver to run tests
 */
export default (driver) => {
  /**
   * The URL to navigate to
   * @type {String}
   */
  
  const url = (driver === 'chrome') ? "https://google.com" : browser.options.baseUrl;
  browser.url(url);
};
