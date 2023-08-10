const puppeteer = require('puppeteer');

async () => {
    console.log("hello");
    // Launch a new browser instance
    const browser = await puppeteer.launch();

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the Google Form URL
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd9H5187qU8RxyOB745fh3a7XF56BNvAo7w-sxKlakLgXbCkA/viewform?usp=sf_link';
    await page.goto(formUrl);

    // After navigating to the page
await page.waitForSelector('input[jsname="YPqjbf"]');
await page.type('input[jsname="YPqjbf"]', 'firos@example.com');

await page.waitForSelector('span[class="NPEfkd RveJvd snByac"]');
await page.click('span[class="NPEfkd RveJvd snByac"]');


    // Close the browser
    await browser.close();
};
