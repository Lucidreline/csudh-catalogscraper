const request = require('request');
const cheerio = require('cheerio');

request('https://whatsmygrade.org', (e, res, html) => {
  if (!e && res.statusCode == 200) {
    console.log(html);
  } else {
    console.log(e);
  }
});
