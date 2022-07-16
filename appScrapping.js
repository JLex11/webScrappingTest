const urlToScrape = 'https://careers.arrivia.com/travel-job-listings/';
const { chromium } = require('playwright'); // import chromium of playwright

async function getOffers(url) { 
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const offersElements = await page.$$eval('.job-element', (offers) => {
    return offers.map(job => {

      let pattern = /[(),'"]/;

      let offerUrl = job.getAttribute('onclick');
      offerUrl = offerUrl.split(pattern);
      offerUrl = offerUrl.filter((link) => link.includes('https')).join('');

      const title = job.querySelector('.job-title').innerText;
      const link = offerUrl;
      const location = job.querySelector('.job-location').innerText;
      return { title, link, location };
    });
  });
  /* console.log({offers}); offers = {title, link, location} */
  await browser.close();
  return offersElements;
}

let offers = getOffers(urlToScrape);
module.exports = offers.then(offers => offers);
