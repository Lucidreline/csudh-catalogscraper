const fetch = require('node-fetch'); // lets us go to the url
const cheerio = require('cheerio'); // lets us parse the html

const express = require('express');
const app = express();

var cors = require('cors')

app.get('/', cors(), async (req, res) =>
  res.json({ courses: await grabCourses(req.query.url) })
);

const PORT = 8050;
app.listen(PORT, () => console.log(`Live at ${PORT}`));

grabCourses = _url => {
  return new Promise(async (resolve, reject) => {
    // we need a promise because gathering all of the catalog's data takes some time
    try {
      let res = await fetch(_url, {
        mode: 'no-cors',
      });

      const $ = cheerio.load(await res.text()); // creates a selector for the page HTML
      const body = $('.programTables table'); // finds the div that holds all of the tables in the catalog

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
      resolve(courseList);
    } catch (err) {
      reject(err);
    }
  });
};
