import urllib.request
import re
import ssl

ssl_context = ssl._create_unverified_context()

urls = {
    "cretec": "https://www.cretec.kr",
    "yonsei": "https://www.ysdairy.com",
    "geoyoung": "https://www.geoyoung.com",
    "taeeun": "http://www.telogis.co.kr",
    "msfood": "http://www.msfs.co.kr",
    "kctc": "http://www.kctc.co.kr",
    "bluepharm": "https://www.bluepharm.co.kr",
    "yuhan_kimberly": "https://www.yuhan-kimberly.co.kr"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
}

for name, url in urls.items():
    print(f"\nFetching {name}: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
            # Find logo images
            # Look for tags with id or class containing "logo", or src containing "logo"
            matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html, re.IGNORECASE)
            logo_matches = []
            for img in matches:
                if 'logo' in img.lower() or 'ci' in img.lower() or 'bi' in img.lower():
                    logo_matches.append(img)
            
            print(f"  All image matches: {len(matches)}")
            print(f"  Logo/CI/BI matches:")
            for logo in logo_matches[:10]:
                print(f"    - {logo}")
    except Exception as e:
        print(f"  Error: {e}")
