const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch();

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the Google Form URL
    const formUrl = 'YOUR_FORM_URL_HERE';
    await page.goto(formUrl);

    // Define the responses
    const responses = [
        // Format your responses here
        // For example: "Yes", "No", "Yes", ...
    ];

    // Loop to submit 25 responses
    for (const response of responses) {
        // Fill the name of the respondent
        await page.type('input[name="entry.YOUR_NAME_FIELD_ID"]', 'Random Name');

        // Fill the surveyor's name
        await page.type('input[name="entry.YOUR_SURVEYOR_FIELD_ID"]', 'Firos K');

        // Select the appropriate response
        await page.click(`label[data-value="${response}"]`);

        // Click the submit button
        await page.click('button[type="submit"]');

        // Wait for 10 minutes before the next submission
        await page.waitForTimeout(10 * 60 * 1000);
    }

    // Close the browser
    await browser.close();
})();
