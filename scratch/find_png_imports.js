import fs from 'fs';
import path from 'path';

const srcDir = "C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/src";
const terms = ["cretec.png", "homeplus.png", "dongwon.png"];

function searchDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      searchDir(filePath);
    } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css'))) {
      const content = fs.readFileSync(filePath, 'utf8');
      terms.forEach(term => {
        if (content.includes(term)) {
          console.log(`Found "${term}" in: ${filePath}`);
        }
      });
    }
  });
}

searchDir(srcDir);
