let mix = require('laravel-mix')

mix.sass('src/sass/styles.scss', 'assets')
   .copy('src/index.html', 'dist')
   .setPublicPath('dist');