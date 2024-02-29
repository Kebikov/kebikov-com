## 1 - Build проекта.

## 2 - Создать папку для opengraf и добавить в build
- Создать папку graph в build/static/opengraph\
- Добавить в нее изображение для opengraf разметки, в итоге должна получится ссылка вида https://kebikov.com/static/opengraph/kebikov.jpg

## 3 - Добавить в build файл .htaccess
```
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

Redirect 301 /svadebnye-fotografii/ https://kebikov.com/weddings-all
Redirect 301 /wedding-slideshow/ https://kebikov.com/slideshow
Redirect 301 /stati/ https://kebikov.com/articles
Redirect 301 /obomne/ https://kebikov.com/about-me
Redirect 301 /otziviklientov/ https://kebikov.com/reviews
Redirect 301 /stati/ https://kebikov.com/articles
Redirect 301 /paketiuslug/ https://kebikov.com/price-packages
Redirect 301 /kontakt/ https://kebikov.com/contacts

Redirect 301 /15-variantov-krasivogo-svadebnogo-finala/ https://kebikov.com/articles/beautiful-wedding-finale
Redirect 301 /8-originalnyx-sposobov-brosit-buket-nevesty/ https://kebikov.com/articles/bouquet-roll
Redirect 301 /c-chego-nachat-podgotovku-k-svadbe/ https://kebikov.com/articles/preparations-wedding
Redirect 301 /7-sovetov-dlya-nevest-ot-fotografa/ https://kebikov.com/articles/from-the-photographer
Redirect 301 /perfect-wedding-photo-session/ https://kebikov.com/articles/perfect-wedding-photo-session
Redirect 301 /aksessuary-dlya-svadebnoj-fotosessii/ https://kebikov.com/articles/accessories
```

## 4 - Сделать парсинг сайта.

- Сделать парсинг для получения html для пререндера.
- Добавить на сайт полученый код.
