//don't forget to add to .gitignore "memes" folder
// doesn't wwork:
//also doesn't work
// import fs from 'fs';
// import got from 'got';
// import jsdom from 'jsdom';
// const { JSDOM } = jsdom;
// const memegenLink = 'https://memegen-link-examples-upleveled.netlify.app/';
// const htmlContent = got(memegenLink)
//   .then((response) => {
//     const dom = new JSDOM(response.body);
//     console.log(dom.window.document.querySelector('a', 'img').textContent);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const { JSDOM } = jsdom;
// const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes';
// got(vgmUrl)
//   .then((response) => {
//     const dom = new JSDOM(response.body);
//     console.log(dom.window.document.querySelector('a').textContent);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// 'use strict';
// import cheerio from 'cheerio';
// import fs from 'fs';
// import request from 'request';
// const url = 'https://memegen-link-examples-upleveled.netlify.app/';
// //'http://www.html.it/autore/gabroman/';
// const getPage = (cb) => {
//   request(
//     url,
//     {
//       timeout: 3000,
//     },
//     (error, response, body) => {
//       if (!error) {
//         cb(body);
//       }
//     },
//   );
// };
// const savePage = (data) => {
//   let contents = "'use strict';" + '\n\n';
//   contents += 'const HTMLItArticles = ';
//   contents += JSON.stringify(data) + ';\n\n';
//   contents += 'module.exports = HTMLItArticles;';
//   fs.writeFileSync(__dirname + '/articles.js', contents);
// };
// const parsePage = (data) => {
//   const $ = cheerio.load(data);
//   let output = [];
//   $('.author-article').each((i, elem) => {
//     let $a = $(elem).find('a', 'img');
//     let datum = {
//       title: $a.text(),
//       url: $a.attr('href'),
//     };
//     output.push(datum);
//   });
//   return output;
// };
// getPage((html) => {
//   let data = parsePage(html);
//   savePage(data);
// });

//not working
// fetch(url)
//   .then(function (response) {
//     response.text();
//   })
//   .then(function (html) {
//     console.log(html);
//   })
//   .catch(function (error) {
//     console.warn('Something went wrong.', err);
//   });
//import cheerio from 'cheerio'; do i need it?
//import got from 'got';
import jsdom from 'jsdom';
import fetch from 'node-fetch';

// import request from 'request';

//fetching html in a string format to htmlContent
const { JSDOM } = jsdom;
const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const response = await fetch(url);
const htmlContent = await response.text();
//console.log(htmlContent);

//FILTER src from img and getting an array of strings
const links = htmlContent
  .split(' ')
  .filter((w) => w.includes('https://') && !w.includes('href='))
  //.shift('src="')
  //.slice('src="', '"\n')
  //.slice(5, -1)
  .join(' ');
//console.log(links);

//split links to strings
const arrOfStrLinks = links.toString().split(' ');
//console.log(arrOfStrLinks);

//slice the first ten
const tenLinksArr = arrOfStrLinks.slice(0, 10);
console.log(tenLinksArr);
//loop them in order to cut the src=" (first 5 chars) and " in the end of strings
tenLinksArr.forEach((str, i) => (tenLinksArr[i] = str.slice(5)));

//??? tenLinksArr.forEach((str, i) => (tenLinksArr[i] = str.split('src="', '300')));

//tenLinksArr.forEach((str, i) => (tenLinksArr[i] = str.slice(5)));
//tenLinksArr.forEach((str, i) => (tenLinksArr[i] = str.split('300')[0]));
//console.log(tenLinksArr);
