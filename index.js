const pup = require('puppeteer');

async function ScrapeClasses(url) {
  const browser = await pup.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '/html/body/form/div[3]/div[3]/div/div[2]/div[2]/div/div[2]/table[1]/tbody/tr[1]/td[2]'
  );
  const txt = await el.getProperty('textContent');
  const rawText = await txt.jsonValue();

  console.log(txt._remoteObject.value);
  browser.close();
}

ScrapeClasses(
  'https://csudh.smartcatalogiq.com/en/2020-2021/Catalog/Copy-of-Computer-Science/Bachelor-of-Science-in-Computer-Science'
);
