const path = require("path");

const { config } = require("./wdio.conf.js");

config.services = ['selenium-standalone'];
config.capabilities = [
    {
        browserName: "chrome",
        "goog:chromeOptions": {
            args: [
                "--disable-infobars",
                "--window-size=1280,800",
                "--no-sandbox",
                "--disable-gpu",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
            ],
        },
    },
];

config.path = "/";

if (process.env.CI) {
    config.outputDir = path.join(__dirname, "logs");
}

exports.config = config;
