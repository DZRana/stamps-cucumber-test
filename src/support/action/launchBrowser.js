/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (driver) => {
  /**
   * The URL to navigate to
   * @type {String}
   */
  const url = (driver === 'chrome') ? "https://google.com" : browser.options.baseUrl + page;
  browser.url(url);
};
