import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const destDir = "C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/src/assets/partners";

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 위키미디어 커먼즈에서 가져올 정확한 파일명 목록
const wikiFiles = {
  ssg: "File:Emart Logo.svg",
  glovis: "File:Hyundai Glovis logo.svg",
  hyundai_dept: "File:Hyundai Department Store Group CI.svg",
  haitai: "File:Haitai logo.svg",
  dongwon: "File:Dongwon Group logo.svg",
  nonghyup: "File:NACF (NongHyup) Logo with wordmark.svg",
  lotte_logis: "File:Lotte Global Logis logo.svg",
  yuhan: "File:Yuhan Logo (ENG).svg",
  coway: "File:Coway logo.svg"
};

// 웹에서 직접 가져올 백업 이미지 URL 매핑 (SVG 또는 고화질 로고)
const directUrls = {
  homeplus: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Homeplus_logo.svg", // 미국 Conn's HomePlus 등과 혼동 방지용 또는 백업
  hanexpress: "http://www.hanex.co.kr/images/common/logo.png",
  yonsei: "https://www.yonseimilk.co.kr/milk/images/main/logo.png",
  geoyoung: "https://www.geoyoung.com/images/logo.png",
  taeeun: "http://www.telogis.co.kr/img/common/logo.png",
  naturalway: "https://naturalway.co.kr/images/common/logo.png",
  cretec: "https://www.cretec.kr/images/layout/logo.png",
  yuhan_kimberly: "https://www.yuhan-kimberly.co.kr/common/img/header/logo.png",
  msfood: "http://msfs.co.kr/images/common/logo.png",
  kctc: "http://www.kctc.co.kr/images/logo.png",
  bluepharm: "https://www.bluepharm.co.kr/images/logo.png"
};

const userAgent = "SamwonLogisticsWebsite/1.0 (info@3won.kr) Node.js/18.0";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https');
    const client = isHttps ? https : http;
    const options = {
      headers: { 'User-Agent': userAgent },
      agent: isHttps ? httpsAgent : undefined,
      timeout: 10000
    };
    client.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        httpGet(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https');
    const client = isHttps ? https : http;
    const options = {
      headers: { 'User-Agent': userAgent },
      agent: isHttps ? httpsAgent : undefined,
      timeout: 15000
    };
    client.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', reject);
  });
}

async function getWikiRawUrl(title) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
  const responseText = await httpGet(apiUrl);
  const data = JSON.parse(responseText);
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  if (pageId === '-1' || !pages[pageId].imageinfo) {
    throw new Error(`File not found: ${title}`);
  }
  return pages[pageId].imageinfo[0].url;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log("Starting high-resolution logo downloading...");

  // 1. 위키미디어 커먼즈 API로부터 다운로드
  for (const [key, title] of Object.entries(wikiFiles)) {
    console.log(`\nFetching ${key} from Wiki Commons...`);
    try {
      const rawUrl = await getWikiRawUrl(title);
      console.log(`  Raw URL: ${rawUrl}`);
      const ext = rawUrl.split('.').pop().toLowerCase();
      const destPath = path.join(destDir, `${key}.${ext}`);
      
      await downloadFile(rawUrl, destPath);
      console.log(`  Downloaded successfully: ${key}.${ext}`);
    } catch (e) {
      console.error(`  Failed to fetch ${key}: ${e.message}`);
    }
    await delay(1500); // 디코스 과부하 방지 1.5초 딜레이
  }

  // 2. 직접 URL 다운로드
  for (const [key, url] of Object.entries(directUrls)) {
    console.log(`\nDownloading ${key} directly...`);
    try {
      const ext = url.split('.').pop().split('?')[0].toLowerCase();
      const destPath = path.join(destDir, `${key}.${ext}`);
      
      await downloadFile(url, destPath);
      console.log(`  Downloaded successfully: ${key}.${ext}`);
    } catch (e) {
      console.error(`  Failed to download ${key}: ${e.message}`);
    }
    await delay(1500);
  }

  console.log("\nAll logo downloads finished.");
}

main();
