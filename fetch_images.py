import re
import urllib.request
import urllib.parse
import os
import json
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

os.makedirs('public/images', exist_ok=True)

items = []

def process_file(filepath, category):
    with open(filepath, 'r') as f:
        content = f.read()
    
    matches = re.finditer(r'<img[^>]*title="([^"]*)"[^>]*data-src-fg="([^"]*)"', content)
    
    for i, match in enumerate(matches):
        title = match.group(1)
        url = match.group(2)
        
        parsed = urllib.parse.urlparse(url)
        encoded_path = urllib.parse.quote(parsed.path)
        encoded_url = urllib.parse.urlunparse(
            (parsed.scheme, parsed.netloc, encoded_path, parsed.params, parsed.query, parsed.fragment)
        )

        filename = f"{category}_{i}.jpg"
        img_filepath = os.path.join('public/images', filename)
        
        if not os.path.exists(img_filepath):
            try:
                urllib.request.urlretrieve(encoded_url, img_filepath)
            except Exception as e:
                print(f"Failed to download {encoded_url}: {e}")
                continue
                
        items.append({
            'id': len(items) + 1,
            'title': title,
            'category': category,
            'image': f"/images/{filename}",
            'year': "2000"
        })

process_file('/Users/nikos/.gemini/antigravity/brain/5d0106c3-fa56-417b-9fc6-6333c382bfe4/.system_generated/steps/84/content.md', 'painting')
process_file('/Users/nikos/.gemini/antigravity/brain/5d0106c3-fa56-417b-9fc6-6333c382bfe4/.system_generated/steps/85/content.md', 'sculpture')

with open('public/gallery.json', 'w') as f:
    json.dump(items, f, indent=2, ensure_ascii=False)

print(f"Downloaded {len(items)} images.")
