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
    # (url, tag, subTag)
    # Λυρικά subcategories
    ("https://spilios-tsounis.com/portrait/", "Λυρικά", "Πορτραίτα"),
    ("https://spilios-tsounis.com/cosmic-landscapes/", "Λυρικά", "Συμπαντικά Τοπία"),
    ("https://spilios-tsounis.com/compositions/", "Λυρικά", "Συνθέσεις"),
    ("https://spilios-tsounis.com/untitled/", "Λυρικά", "Άτιτλα"),
    # Γεωμετρικός Κυβισμός
    ("https://spilios-tsounis.com/geometric-cubism/", "Γεωμετρικός Κυβισμός", None),
    # Μεικτή τεχνική subcategories
    ("https://spilios-tsounis.com/memories/", "Μεικτή Τεχνική", "Μνήμες – Μάνες του κόσμου"),
    ("https://spilios-tsounis.com/odyssey/", "Μεικτή Τεχνική", "Οδύσσεια"),
    ("https://spilios-tsounis.com/miscellaneous/", "Μεικτή Τεχνική", "Διάφορα")
]

def fetch_and_process(url, tag, subTag, start_idx):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        content = response.read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return start_idx
        
    matches = re.finditer(r'<img[^>]*title="([^"]*)"[^>]*data-src-fg="([^"]*)"', content)
    
    idx = start_idx
    count = 0
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
                
        painting_obj = {
            'id': idx + 1,
            'title': title,
            'tag': tag,
            'category': 'painting',
            'image': f"/images/{filename}",
            'year': "2000"
        }
        if subTag:
            painting_obj['subTag'] = subTag
            
        items.append(painting_obj)
        idx += 1
        count += 1
    print(f"Fetched {count} images from {url}")
    return idx

current_idx = 0
for url, tag, subTag in urls_and_tags:
    current_idx = fetch_and_process(url, tag, subTag, current_idx)

try:
    with open('public/gallery.json', 'r') as f:
        old_items = json.load(f)
        sculptures = [i for i in old_items if i.get('category') == 'sculpture']
except:
    sculptures = []

all_items = items + sculptures

with open('public/gallery.json', 'w') as f:
    json.dump(all_items, f, indent=2, ensure_ascii=False)

print(f"Total paintings downloaded: {len(items)}")
