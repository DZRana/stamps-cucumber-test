import { When } from "cucumber";

import goToWebsite from "../support/action/goToWebsite";
import setInput from "../support/action/setInput";

When(/^I go to "([^"]*)?"$/, goToWebsite);

When(
    /^I set (Print On|Serial Number|Mail From ZIP|Mail To Country|Weight lbs) to "([^"]*)?"( and oz to "([^"]*)?")*$/,
    setInput
);
