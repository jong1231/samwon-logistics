import https from 'https';
import fs from 'fs';
import path from 'path';

const destDir = "C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/src/assets/partners";
const userAgent = "SamwonLogisticsWebsite/1.0 (info@3won.kr) Node.js/18.0";

const svgs = {
  homeplus: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Homeplus_Digital_Company_logo.svg",
  dongwon: "https://upload.wikimedia.org/wikipedia/commons/4/47/Dongwon_logo.svg"
};

function download(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      const destPath = path.join(destDir, filename);
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename} (${fs.statSync(destPath).size} bytes)`);
        resolve(true);
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const [key, url] of Object.entries(svgs)) {
    try {
      await download(url, `${key}.svg`);
    } catch (e) {
      console.error(`Failed to download ${key}:`, e.message);
    }
  }
}

run();
