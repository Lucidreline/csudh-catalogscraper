const request = require('request');
const cheerio = require('cheerio');

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (e, res, html) => {
      if (!e && res.statusCode == 200) {
        const $ = cheerio.load(html);
        const body = $('.programTables table');

        let courseList = [];

        body.each((i, table) => {
          const tableRow = $(table).children('tbody').children('tr');
          tableRow.each((i, row) => {
            courseList.push({
              name: $(row).find('.sc-coursenumber').text(),
              number: $(row).find('.sc-coursetitle').text(),
              credits: $(row).find('.credits').text(),
            });
          });
        });
        //console.log(courseList);
        resolve(courseList);
      } else {
        reject(e);
      }
    });
  });
};
