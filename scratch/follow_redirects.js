import https from 'https';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  },
  rejectUnauthorized: false
};

https.get("https://naturalway.co.kr", options, (res) => {
  console.log("naturalway.co.kr -> Status:", res.statusCode, "Location:", res.headers.location);
});

https.get("https://www.naturalway.co.kr", options, (res) => {
  console.log("www.naturalway.co.kr -> Status:", res.statusCode, "Location:", res.headers.location);
});
