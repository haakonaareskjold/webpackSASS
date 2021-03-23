let mix = require('laravel-mix')

mix.js('src/app.js', 'dist')
   .sass('src/sass/styles.scss', 'assets')
   .copy('src/index.html', 'dist')
   .setPublicPath('dist');