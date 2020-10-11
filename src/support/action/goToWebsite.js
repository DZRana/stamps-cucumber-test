/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (page) => {
  /**
   * The URL to navigate to
   * @type {String}
   */
  const url =  page;
  browser.url(url);
};
