const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.tsx') {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if it already has alternates: { canonical: ... }
  if (content.includes('canonical:')) {
    console.log(`Skipping ${filePath} - already has canonical`);
    return;
  }
  
  // Find export const metadata
  const metadataRegex = /export const metadata: Metadata = {([\s\S]*?)};/;
  const match = content.match(metadataRegex);
  
  if (match) {
    // Calculate the canonical path
    // e.g., app/about/page.tsx -> /about
    // app/page.tsx -> /
    let routePath = filePath.replace(/^app/, '').replace(/\/page\.tsx$/, '');
    if (routePath === '') routePath = '/';
    
    const canonicalUrl = `https://www.metazynx.com${routePath}`;
    
    // Insert alternates: { canonical: '...' } before the closing brace of metadata
    const innerContent = match[1];
    
    // Check if it ends with a comma
    const hasTrailingComma = innerContent.trim().endsWith(',');
    
    const newInnerContent = innerContent + (hasTrailingComma ? '' : ',\n') + `  alternates: {\n    canonical: '${canonicalUrl}',\n  },\n`;
    
    const newMetadata = `export const metadata: Metadata = {${newInnerContent}};`;
    
    content = content.replace(metadataRegex, newMetadata);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath} with canonical: ${canonicalUrl}`);
  } else {
    console.log(`No metadata found in ${filePath}`);
  }
}

processDirectory('app');
