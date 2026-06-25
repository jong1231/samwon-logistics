import https from 'https';
import fs from 'fs';
import path from 'path';

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const destDir = "C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/src/assets/partners";

const options = {
  headers: {
    'User-Agent': userAgent,
    'Referer': "https://www.cretec.kr/kor/main/main.jsp"
  },
  rejectUnauthorized: false
};

function download(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      console.log(`URL: ${url} -> Status: ${res.statusCode}`);
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
    await download("https://www.cretec.kr/kor/images/common/logo.gif", "cretec.gif");
  } catch (e) {
    console.error("Failed logo.gif:", e.message);
  }
  
  try {
    await download("https://www.cretec.kr/kor/images/common/bt_udtlogo.png", "cretec_udt.png");
  } catch (e) {
    console.error("Failed bt_udtlogo.png:", e.message);
  }
}

run();
