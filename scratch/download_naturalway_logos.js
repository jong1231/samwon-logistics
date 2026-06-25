import https from 'https';
import fs from 'fs';
import path from 'path';

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const destDir = "C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/scratch";

const options = {
  headers: {
    'User-Agent': userAgent,
    'Referer': "https://www.naturalway.co.kr/kr/index.php"
  },
  rejectUnauthorized: false
};

function download(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
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
  try {
    await download("https://www.naturalway.co.kr/images/common/logo.png", "naturalway_logo.png");
  } catch (e) {
    console.error("Failed logo.png:", e.message);
  }
  
  try {
    await download("https://www.naturalway.co.kr/images/common/logo_on.png", "naturalway_logo_on.png");
  } catch (e) {
    console.error("Failed logo_on.png:", e.message);
  }
}

run();
