var gulp = require("gulp"),
      uglify = require("gulp-uglify"),
      server = require("gulp-live-server"),
      browserify = require("gulp-browserify"),
      rename = require("gulp-rename");

gulp.task('default', ['browserify', 'watch', 'serve']);

//observa os arquivos .js
// se houver alteração ele executa o browserify
gulp.task('watch', function(){
  gulp.watch('app/**/*.js', ['browserify']);
});

//cria um servidor estático
gulp.task('serve', function(){
  var serve = server.static('./public', 8000);
  serve.start();

  // atualiza automaticamente a tela se houver alterações
  // nos arquivos .js e .html da pasta public
  gulp.watch('public/js/**/*.js', function(file){
    server.notify.apply(serve,[file]);
  });
  gulp.watch('public/**/*.html', function(file){
    server.notify.apply(serve, [file]);
  });
});

gulp.task('browserify', function(){
  return gulp.src(['app/app.js'])
              .pipe(browserify())
              //.pipe(uglify()) //minimifa os arquivos
              .pipe(rename("main.js"))
              .pipe(gulp.dest('public/js/'));
});
