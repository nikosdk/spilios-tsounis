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
    # (url, tag, subTag, category)
    ("https://spilios-tsounis.com/portrait/", "Λυρικά", "Πορτραίτα", "painting"),
    ("https://spilios-tsounis.com/cosmic-landscapes/", "Λυρικά", "Συμπαντικά Τοπία", "painting"),
    ("https://spilios-tsounis.com/compositions/", "Λυρικά", "Συνθέσεις", "painting"),
    ("https://spilios-tsounis.com/untitled/", "Λυρικά", "Άτιτλα", "painting"),
    ("https://spilios-tsounis.com/geometric-cubism/", "Γεωμετρικός Κυβισμός", None, "painting"),
    ("https://spilios-tsounis.com/memories/", "Μεικτή Τεχνική", "Μνήμες – Μάνες του κόσμου", "painting"),
    ("https://spilios-tsounis.com/odyssey/", "Μεικτή Τεχνική", "Οδύσσεια", "painting"),
    ("https://spilios-tsounis.com/miscellaneous/", "Μεικτή Τεχνική", "Διάφορα", "painting"),
    ("https://spilios-tsounis.com/sculpture/", "Γλυπτική", None, "sculpture")
]

def fetch_and_process(url, tag, subTag, category, start_idx):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        content = response.read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return start_idx
        
    # Match <a href="..." data-caption-title="...">
    matches = re.finditer(r'<a href="([^"]*)"[^>]*data-caption-title="([^"]*)"', content)
    
    idx = start_idx
    count = 0
    for match in matches:
        img_url = match.group(1)
        title = match.group(2)
        
        parsed = urllib.parse.urlparse(img_url)
        encoded_path = urllib.parse.quote(parsed.path)
        encoded_url = urllib.parse.urlunparse(
            (parsed.scheme, parsed.netloc, encoded_path, parsed.params, parsed.query, parsed.fragment)
        )

        filename = f"{category}_{idx}.jpg"
        img_filepath = os.path.join('public/images', filename)
        
        if not os.path.exists(img_filepath):
            try:
                urllib.request.urlretrieve(encoded_url, img_filepath)
            except Exception as e:
                print(f"Failed to download {encoded_url}: {e}")
                continue
                
        obj = {
            'id': idx + 1,
            'title': title,
            'tag': tag,
            'category': category,
            'image': f"/images/{filename}",
            'year': "2000"
        }
        if subTag:
            obj['subTag'] = subTag
            
        items.append(obj)
        idx += 1
        count += 1
    print(f"Fetched {count} {category} images from {url}")
    return idx

current_painting_idx = 0
current_sculpture_idx = 0
for url, tag, subTag, category in urls_and_tags:
    if category == "painting":
        current_painting_idx = fetch_and_process(url, tag, subTag, category, current_painting_idx)
    else:
        current_sculpture_idx = fetch_and_process(url, tag, subTag, category, current_sculpture_idx)

with open('public/gallery.json', 'w') as f:
    json.dump(items, f, indent=2, ensure_ascii=False)

print(f"Total images downloaded: {len(items)}")

