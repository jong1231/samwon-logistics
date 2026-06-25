import https from 'https';
import http from 'http';

const urls = {
  cretec: "https://www.cretec.kr",
  yonsei: "https://www.ysdairy.com",
  geoyoung: "https://www.geoyoung.com",
  taeeun: "http://www.telogis.co.kr",
  msfood: "http://www.msfs.co.kr",
  kctc: "http://www.kctc.co.kr",
  bluepharm: "https://www.bluepharm.co.kr",
  yuhan_kimberly: "https://www.yuhan-kimberly.co.kr"
};

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

function httpGet(url) {
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
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Referer': url
      },
      timeout: 8000
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
        httpGet(redirectUrl).then(resolve).catch(reject);
        return;
      }
      
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ html: data, finalUrl: url }));
    }).on('error', reject);
  });
}

async function run() {
  for (const [name, url] of Object.entries(urls)) {
    console.log(`\nFetching ${name}: ${url}`);
    try {
      const { html, finalUrl } = await httpGet(url);
      
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let match;
      const logoMatches = [];
      let totalCount = 0;
      
      while ((match = imgRegex.exec(html)) !== null) {
        totalCount++;
        const src = match[1];
        if (src.toLowerCase().includes('logo') || src.toLowerCase().includes('ci') || src.toLowerCase().includes('bi')) {
          logoMatches.push(src);
        }
      }
      
      console.log(`  All image matches: ${totalCount}`);
      console.log(`  Logo/CI/BI matches:`);
      logoMatches.slice(0, 10).forEach(logo => {
        let absoluteUrl = logo;
        if (!logo.startsWith('http')) {
          absoluteUrl = new URL(logo, finalUrl).toString();
        }
        console.log(`    - ${logo} -> ${absoluteUrl}`);
      });
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }
}

run();
