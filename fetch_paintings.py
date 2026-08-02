import re
import urllib.request
import urllib.parse
import os
import json
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

os.makedirs('public/images', exist_ok=True)

items = []

urls_and_tags = [
    ("https://spilios-tsounis.com/lyric/", "Λυρικά"),
    ("https://spilios-tsounis.com/geometric-cubism/", "Γεωμετρικός Κυβισμός"),
    ("https://spilios-tsounis.com/mixed-technique/", "Μεικτή Τεχνική")
]

def fetch_and_process(url, tag, start_idx):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        content = response.read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return start_idx
        
    matches = re.finditer(r'<img[^>]*title="([^"]*)"[^>]*data-src-fg="([^"]*)"', content)
    
    idx = start_idx
    for match in matches:
        title = match.group(1)
        img_url = match.group(2)
        
        parsed = urllib.parse.urlparse(img_url)
        encoded_path = urllib.parse.quote(parsed.path)
        encoded_url = urllib.parse.urlunparse(
            (parsed.scheme, parsed.netloc, encoded_path, parsed.params, parsed.query, parsed.fragment)
        )

        filename = f"painting_{idx}.jpg"
        img_filepath = os.path.join('public/images', filename)
        
        if not os.path.exists(img_filepath):
            try:
                urllib.request.urlretrieve(encoded_url, img_filepath)
            except Exception as e:
                print(f"Failed to download {encoded_url}: {e}")
                continue
                
        items.append({
            'id': idx + 1,
            'title': title,
            'tag': tag,
            'category': 'painting',
            'image': f"/images/{filename}",
            'year': "2000"
        })
        idx += 1
    return idx

current_idx = 3 # we already have 0, 1, 2 but they were the category covers. let's just overwrite them or start from 0
current_idx = 0
items = [] # reset items
for url, tag in urls_and_tags:
    current_idx = fetch_and_process(url, tag, current_idx)

# Let's read sculptures from the existing JSON so we don't lose them
try:
    with open('public/gallery.json', 'r') as f:
        old_items = json.load(f)
        sculptures = [i for i in old_items if i.get('category') == 'sculpture']
except:
    sculptures = []

all_items = items + sculptures

with open('public/gallery.json', 'w') as f:
    json.dump(all_items, f, indent=2, ensure_ascii=False)

print(f"Downloaded {len(items)} paintings.")

