const request = require('request'); // lets us go to the url
const cheerio = require('cheerio'); // lets us parse the html

//

module.exports = (_url) => {
  return new Promise((resolve, reject) => {
    // we need a promise because gathering all of the catalog's data takes some time
    try {
      request(_url, (error, respoce, html) => {
        if (!error && respoce.statusCode == 200) {
          const $ = cheerio.load(html); // creates a selector
          const body = $('.programTables table'); // finds the div that holds all of the tables in the catalog

          let courseList = []; // inits an array that will soon hold objects of courses

          body.each((i, table) => {
            const tableRow = $(table).children('tbody').children('tr');
            tableRow.each((i, row) => {
              courseList.push({
                // creates a course object and pushes it in the array
                name: $(row).find('.sc-coursenumber').text(),
                number: $(row).find('.sc-coursetitle').text(),
                credits: $(row).find('.credits').text(),
              });
            });
          });
          resolve(courseList);
        } else {
          reject(e);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};
