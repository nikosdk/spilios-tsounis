import urllib.request
import re
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

urls = [
    "https://spilios-tsounis.com/memories/",
    "https://spilios-tsounis.com/odyssey/",
    "https://spilios-tsounis.com/miscellaneous/",
    "https://spilios-tsounis.com/geometric-cubism/"
]

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        content = response.read().decode('utf-8')
        matches = re.findall(r'<div class="elementor-text-editor elementor-clearfix">(.*?)</div>', content, re.DOTALL)
        print(f"--- {url} ---")
        for match in matches:
            text = match.strip()
            if text and not '<div class="foogallery' in text:
                print(text)
    except Exception as e:
        print(e)
