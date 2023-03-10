import Axios from 'axios';
import fs from 'fs';
import * as fsExtra from 'fs-extra';
import fetch from 'node-fetch';

// empty imageees folder before downloading new memes
fsExtra.emptyDirSync('memes');

// fetching html to text(string) format to htmlContent
const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const response = await fetch(url);
const htmlContent = await response.text();
fsExtra.emptyDirSync('memes');

// FILTER src from img and getting an array of strings
const links = htmlContent
  .split(' ')
  .filter((w) => w.includes('https://') && !w.includes('href='));
const arrLinks = links.map((x) => x.match(/src="([^"]*)/)[1]);

// slice the first ten
const slicedImgLinks = arrLinks.slice(0, 10);

// async Axios to download the images, return a promise and resolve when download finishes
async function downloadImage(url, filepath) {
  const responseA = await Axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  return new Promise((resolve, reject) => {
    responseA.data
      .pipe(fs.createWriteStream(filepath))
      .on('error', reject)
      .once('close', () => resolve(filepath));
  });
}

// Loop through each image url inside slicedImgSrcsArr and save/download the image inside the memes dir, if index of the last(10th) file is 9, remove the 0 in front, so we don't get 010
slicedImgLinks.forEach((imgUrl, index) =>
  downloadImage(imgUrl, `memes/${index === 9 ? '' : '0'}${index + 1}.jpg`),
);
