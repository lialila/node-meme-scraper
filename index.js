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
//import cheerio from 'cheerio';
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
  .filter((w) => w.includes('src="https://') && !w.includes('href='))
  .join(' ');
console.log(links);

//why it's not working?
// const srcs = htmlContent.split('http').pop().split('300');
// console.log(srcs);
