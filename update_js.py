import json
import re

with open('public/gallery.json', 'r') as f:
    items = json.load(f)

paintings = [item for item in items if item['category'] == 'painting']
sculptures = [item for item in items if item['category'] == 'sculpture']

# Format them nicely
paintings_js = "const paintings = " + json.dumps(paintings, indent=2, ensure_ascii=False) + ";"
sculptures_js = "const sculptures = " + json.dumps(sculptures, indent=2, ensure_ascii=False) + ";"

with open('main.js', 'r') as f:
    js_content = f.read()

# Replace paintings
js_content = re.sub(
    r'const paintings = \[.*?\];',
    paintings_js,
    js_content,
    flags=re.DOTALL
)

# Replace sculptures
js_content = re.sub(
    r'const sculptures = \[.*?\];',
    sculptures_js,
    js_content,
    flags=re.DOTALL
)

# Since we use `item.image` in the JSON, but main.js expects `item.img`, let's just do a string replace in the generated JS or fix main.js.
# Actually, the JSON has `image: '/images/...'`, while main.js expects `img`.
# Let's update main.js to use item.image instead of item.img.
js_content = js_content.replace('item.img', 'item.image')
js_content = js_content.replace('data-img="${item.img}"', 'data-img="${item.image}"')

with open('main.js', 'w') as f:
    f.write(js_content)

print("Updated main.js successfully.")
