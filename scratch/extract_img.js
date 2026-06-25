import fs from 'fs';

const html = fs.readFileSync("C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/scratch/cretec_main.html", 'utf8');

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const matches = [];

while ((match = imgRegex.exec(html)) !== null) {
  matches.push(match[1]);
}

console.log("Found images:");
matches.forEach(img => {
  if (img.toLowerCase().includes('logo') || img.toLowerCase().includes('ci') || img.toLowerCase().includes('bi')) {
    console.log(`- ${img}`);
  }
});
