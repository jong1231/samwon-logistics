import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const destDir = "C:/Users/samwon17_1/.gemini/antigravity/scratch/samwon-logistics/src/assets/partners";

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 21개 업체의 초고화질 로고 다운로드 후보 URL 매핑
const partners = {
  ssg: [
    "https://asset.brandfetch.io/id8yL_Z0a9/ids0-1bV2T.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Emart_Logo.svg"
  ],
  homeplus: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Homeplus_Digital_Company_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Homeplus_logo.svg"
  ],
  glovis: [
    "https://upload.wikimedia.org/wikipedia/commons/2/2d/Hyundai_Glovis_logo.svg"
  ],
  hyundai_dept: [
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Hyundai_Department_Store_Group_CI.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ad/Hyundai_Department_Store_Logo.svg"
  ],
  greenfood: [
    "https://www.hyundaigreenfood.com/common/img/header/logo.png"
  ],
  haitai: [
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Haitai_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/57/Haitai_logo.svg"
  ],
  hanexpress: [
    "http://www.hanex.co.kr/img/common/logo.png",
    "http://www.hanex.co.kr/images/common/logo.png"
  ],
  dongwon: [
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dongwon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Dongwon_Group_logo.svg"
  ],
  nonghyup: [
    "https://upload.wikimedia.org/wikipedia/commons/6/64/NACF_%28NongHyup%29_Logo_with_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nonghyup_logo.svg"
  ],
  yonsei: [
    "https://www.yonseimilk.co.kr/milk/images/main/logo.png"
  ],
  geoyoung: [
    "https://www.geoyoung.com/images/logo.png",
    "https://www.geoyoung.com/img/common/logo.png"
  ],
  taeeun: [
    "http://www.telogis.co.kr/img/common/logo.png",
    "http://www.telogis.co.kr/images/logo.png"
  ],
  naturalway: [
    "https://naturalway.co.kr/images/common/logo.png",
    "https://naturalway.co.kr/img/common/logo.png"
  ],
  cretec: [
    "https://www.cretec.kr/images/layout/logo.png",
    "https://www.cretec.co.kr/images/layout/logo.png"
  ],
  lotte_logis: [
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Lotte_Global_Logis_logo.svg"
  ],
  yuhan_kimberly: [
    "https://www.yuhan-kimberly.co.kr/common/img/header/logo.png",
    "https://www.yuhan-kimberly.co.kr/images/logo.png"
  ],
  yuhan: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Yuhan_Logo_%28ENG%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Yuhan_Logo.svg"
  ],
  msfood: [
    "http://msfs.co.kr/images/common/logo.png",
    "http://www.msfs.co.kr/images/common/logo.png"
  ],
  kctc: [
    "http://www.kctc.co.kr/images/logo.png",
    "http://www.kctc.co.kr/img/logo.png"
  ],
  bluepharm: [
    "https://www.bluepharm.co.kr/images/logo.png",
    "http://www.bluepharm.co.kr/images/logo.png"
  ],
  coway: [
    "https://upload.wikimedia.org/wikipedia/commons/8/85/%EC%BD%94%EC%9B%A8%EC%9D%B4_%EB%A1%9C%EA%B3%A0.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Coway_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/22/Coway_logo.svg"
  ]
};

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https');
    const client = isHttps ? https : http;
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      port: parsedUrl.port || (isHttps ? 443 : 80),
      headers: {
        'User-Agent': userAgent,
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': parsedUrl.origin
      },
      timeout: 10000
    };
    if (isHttps) {
      options.agent = httpsAgent;
    }
    
    client.get(options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        download(redirectUrl, destPath).then(resolve).catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: status code ${res.statusCode}`));
        return;
      }
      
      const contentType = res.headers['content-type'] || '';
      if (contentType.includes('text/html') || contentType.includes('application/json')) {
        reject(new Error(`Invalid content type ${contentType}`));
        return;
      }
      
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const results = {};
  for (const [key, urls] of Object.entries(partners)) {
    console.log(`\nProcessing partner: ${key}`);
    let success = false;
    for (const url of urls) {
      const ext = url.split('.').pop().split('?')[0]; // svg or png
      const filename = `${key}.${ext}`;
      const destPath = path.join(destDir, filename);
      const tempPath = destPath + ".tmp";
      
      console.log(`  Trying to download: ${url} -> ${filename}`);
      try {
        await download(url, tempPath);
        // 다운로드 성공 시에만 실제 목적지 파일명으로 교체 (원래 백업 보존)
        if (fs.existsSync(destPath)) {
          fs.unlinkSync(destPath);
        }
        fs.renameSync(tempPath, destPath);
        console.log(`  SUCCESS: saved as ${filename}`);
        results[key] = filename;
        success = true;
        break; // 성공시 루프 중단
      } catch (e) {
        console.log(`  FAILED: ${e.message}`);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
      await delay(500);
    }
    
    if (!success) {
      console.log(`  WARNING: All URLs failed for ${key}. Checking if backup file exists...`);
      // 다운로드 실패 시 기존 파일명 및 확장자 체크
      const possibleExtensions = ['png', 'svg', 'gif'];
      let foundBackup = false;
      for (const ext of possibleExtensions) {
        const backupFile = path.join(destDir, `${key}.${ext}`);
        if (fs.existsSync(backupFile)) {
          console.log(`  BACKUP FOUND: keeping existing file ${key}.${ext}`);
          results[key] = `${key}.${ext}`;
          foundBackup = true;
          break;
        }
      }
      if (!foundBackup) {
        // 현대그린푸드는 기존 백업이 없을 때 현대백화점 CI를 공통 공유하므로 hyundai_dept.png를 복사해 활용
        if (key === 'greenfood') {
          const deptFilePng = path.join(destDir, 'hyundai_dept.png');
          const greenFilePng = path.join(destDir, 'greenfood.png');
          if (fs.existsSync(deptFilePng)) {
            fs.copyFileSync(deptFilePng, greenFilePng);
            console.log(`  ALIAS APPLIED: Copied hyundai_dept.png to greenfood.png`);
            results[key] = 'greenfood.png';
            foundBackup = true;
          }
        }
        if (!foundBackup) {
          results[key] = null;
        }
      }
    }
    await delay(1000);
  }
  
  console.log("\n--- Download Summary ---");
  console.log(JSON.stringify(results, null, 2));
}

run();
