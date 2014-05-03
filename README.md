# RESPONSIFY All the Things!

This is the full slideshow presentation for my "RESPONSIFY All the Things!" talk first given at WordCamp Baltimore in September, 2013 and again at WordCamp Miami in May, 2014.

You can view the slides by going to [http://taupecat.github.io/responsify](http://taupecat.github.io/responsify).

You can also run the demos by firing up the included Vagrant box in the /demo/ directory:

1. On the command line, go into the /demo/ directory.
2. Run the command `vagrant up` (this requires that [vagrant](http://vagrantup.com) be installed on your system).

Once you've successfully started the vagrant box, you can access it through your web browser at [http://192.168.33.11/](http://192.168.33.11/).


The demos themselves are written using [Sass](http://sass-lang.com) and [Compass](http://compass-style.org/) and use [Gulp.js](http://gulpjs.com/) to compile into CSS.

1. If you haven't already, install gulp on your system: `sudo npm install -g gulp`.
2. In the /demo/ directory, install gulp locally: `npm install gulp --save-dev`.
3. Then install the required gulp modules: `npm install gulp-util gulp-compass gulp-watch gulp-notify gulp-autoprefixer --save-dev`.

After that, you should be able to run `gulp watch`, and the changes you make to the Sass will compile to CSS automatically.

This slideshow is based on [reveal.js](http://lab.hakim.se/reveal-js/) by Hakim El Hattab. You can fork it on Github at [https://github.com/hakimel/reveal.js](https://github.com/hakimel/reveal.js).