import https from 'https';
import fs from 'fs';

const url = "https://www.naturalway.co.kr/kr/index.php";
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const options = {
  headers: {
    'User-Agent': userAgent,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'Referer': "https://www.naturalway.co.kr"
  },
  rejectUnauthorized: false
};

https.get(url, options, (res) => {
  console.log("Status Code:", res.statusCode);
  
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let match;
    console.log("Found images:");
    while ((match = imgRegex.exec(data)) !== null) {
      const src = match[1];
      if (src.toLowerCase().includes('logo') || src.toLowerCase().includes('ci') || src.toLowerCase().includes('bi')) {
        console.log(`- ${src}`);
      }
    }
  });
}).on('error', (e) => {
  console.error("Error:", e.message);
});
