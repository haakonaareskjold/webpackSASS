let mix = require('laravel-mix')

mix.sass('src/sass/styles.scss', 'assets')
   .setPublicPath('public');