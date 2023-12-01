const axios = require("axios");
const cheerio = require("cheerio");

const url = process.argv[2];
const selector = process.argv[3]

axios(url).then((response) => {
    const html_data = response.data;
    const $ = cheerio.load(html_data);
    const res = $(selector);
    console.log($(res).text())
});






