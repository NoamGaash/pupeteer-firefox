import puppeteer from 'puppeteer';

(async () => {
    console.log("opening firefox")
    const browser = await puppeteer.launch({product: "firefox"});
    console.log("I'm ok")
    await browser.close();
  })();
  
  