import goToWebsite from '../support/action/goToWebsite';
import setInput from '../support/action/setInput';

const { When } = require('cucumber');

When(
  /^I go to "([^"]*)?"$/, 
  goToWebsite
);

When(
  /^I set (Print On|Serial Number|Mail From ZIP|Mail To Country|service) to "([^"]*)?"$/, 
  setInput
);