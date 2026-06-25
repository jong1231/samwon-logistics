import https from 'https';

const titles = [
  "File:Homeplus logo.svg",
  "File:Dongwon logo.svg",
  "File:Emart Logo.svg",
  "File:E-mart logo.svg",
  "File:Lotte Global Logis logo.svg",
  "File:Yuhan Kimberly logo.svg",
  "File:Yuhan-Kimberly logo.svg"
];

const userAgent = "SamwonLogisticsWebsite/1.0 (info@3won.kr) Node.js/18.0";

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function test() {
  for (const title of titles) {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
    try {
      const responseText = await httpGet(apiUrl);
      const data = JSON.parse(responseText);
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId === '-1' || !pages[pageId].imageinfo) {
        console.log(`❌ ${title}: Not Found`);
      } else {
        console.log(`✅ ${title}: ${pages[pageId].imageinfo[0].url}`);
      }
    } catch (e) {
      console.log(`❌ ${title}: Error ${e.message}`);
    }
  }
}

test();
