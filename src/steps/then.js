import checkInURLPath from '../support/check/checkInURLPath';

const { Then } = require('cucumber');

Then(
  /^I expect URL to contain "([^"]*)?"$/,
  checkInURLPath
);