import urllib.request
import urllib.parse
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

covers = [
    ("https://spilios-tsounis.com/wp-content/uploads/2021/04/Ποσειδώνας-2004.jpg", "cover_painting.jpg"),
    ("https://spilios-tsounis.com/wp-content/uploads/2021/04/Γυναίκα-Θηρίο-scaled.jpg", "cover_sculpture.jpg"),
    ("https://spilios-tsounis.com/wp-content/uploads/2021/04/Κυμματοθραύστης-1991.jpg", "cover_poetry.jpg")
]

for url, filename in covers:
    parsed = urllib.parse.urlparse(url)
    encoded_path = urllib.parse.quote(parsed.path)
    encoded_url = urllib.parse.urlunparse(
        (parsed.scheme, parsed.netloc, encoded_path, parsed.params, parsed.query, parsed.fragment)
    )
    
    img_filepath = os.path.join('public/images', filename)
    if not os.path.exists(img_filepath):
        try:
            urllib.request.urlretrieve(encoded_url, img_filepath)
            print(f"Downloaded {filename}")
        except Exception as e:
            print(f"Failed to download {encoded_url}: {e}")

