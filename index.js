import puppeteer from 'puppeteer';

(async () => {
    console.log("opening firefox")
    const browser = await puppeteer.launch({args: ['--no-sandbox'], product: "firefox", dumpio: true});
    console.log("I'm ok")
    await browser.close();
  })();
  
  