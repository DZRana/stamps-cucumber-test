import { Given } from 'cucumber';

import launchBrowser from '../support/action/launchBrowser';

Given(
  /^I launch "([^"]*)?" browser$/,
  launchBrowser
);