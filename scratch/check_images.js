import fs from 'fs';
import path from 'path';

const dir = "C:/Users/jong1/.gemini/antigravity/scratch/logistics-website/src/assets/partners";

fs.readdirSync(dir).forEach(file => {
  const filePath = path.join(dir, file);
  const ext = path.extname(file).toLowerCase();
  
  if (ext === '.png') {
    try {
      const buffer = fs.readFileSync(filePath);
      // PNG Signature check: 89 50 4E 47 0D 0A 1A 0A
      if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
        // IHDR chunk starts at byte 12. Width is at 16-19, Height is at 20-23
        const width = buffer.readInt32BE(16);
        const height = buffer.readInt32BE(20);
        console.log(`PNG: ${file} - ${width}x${height} (${Math.round(buffer.length / 1024)} KB)`);
      } else {
        console.log(`PNG: ${file} - Invalid PNG signature`);
      }
    } catch (e) {
      console.log(`PNG: ${file} - Error reading: ${e.message}`);
    }
  } else if (ext === '.svg') {
    const content = fs.readFileSync(filePath, 'utf8');
    // Simple check for viewBox or width/height in SVG
    const viewBox = content.match(/viewBox=["']([^"']+)["']/);
    const width = content.match(/width=["']([^"']+)["']/);
    const height = content.match(/height=["']([^"']+)["']/);
    console.log(`SVG: ${file} - viewBox: ${viewBox ? viewBox[1] : 'N/A'}, w/h: ${width ? width[1] : 'N/A'}x${height ? height[1] : 'N/A'} (${Math.round(content.length / 102.4) / 10} KB)`);
  }
});
