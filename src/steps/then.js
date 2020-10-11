import checkInURLPath from "../support/check/checkInURLPath";
import checkEqualsText from "../support/check/checkEqualsText";
import setInput from "../support/action/setInput";

const { Then } = require("cucumber");

Then(/^I expect URL to contain "([^"]*)?"$/, checkInURLPath);

Then(/^I expect that (Weight lbs) is "([^"]*)?"$/, checkEqualsText);

Then(/^I set (service) to "([^"]*)?"()*$/, setInput);
