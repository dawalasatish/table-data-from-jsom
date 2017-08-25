var gulp = require('gulp');
var browserSync = require('browser-sync').create();


// Static Server + watching html/js/css files
gulp.task('serve', function() {

   browserSync.init({
       server: "./"
   });


   
});



gulp.task('default', ['serve']);