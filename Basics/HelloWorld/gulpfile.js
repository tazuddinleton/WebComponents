var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var del = require('del');




gulp.task('loader', function(){
    return gulp.src('node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('adapter', function(){
    return gulp.src('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function(){
    return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('ts', function(){
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
    return del('dist');
});

gulp.task('default', gulp.series('loader', 'adapter', 'html', 'ts'));




// var inject = require('gulp-inject');
// var webserver = require('gulp-webserver');
// var htmlClean = require('gulp-htmlclean');
// var cssClean = require('gulp-clean-css');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');




// var paths = {
//     src: 'src/**/**/*',
//     srcHtml: 'src/app/**/*.html',
//     srcCss: 'src/app/**/*.css',
//     srcTs: 'src/app/**/*.ts',

//     tmp: 'tmp/app',
//     tmpIndex: 'tmp/app/index.html',
//     tmpCSS: 'tmp/app/**/*.css',
//     tmpJS: 'tmp/app/**/*.js',

//     dist: 'dist/app',
//     distIndex: 'dist/app/index.html',
//     distCSS: 'dist/app/**/*.css',
//     distJS: 'dist/app/**/*.js'
// }

// gulp.task('html', function(){
//     gulp.src(paths.srcHtml).pipe(gulp.dest(paths.tmp));
// });

// gulp.task('css', function(){
//     gulp.src(paths.srcCss).pipe(gulp.dest(paths.tmp));
// });

// gulp.task('ts', function(){
//     tsProject.src()
//     .pipe(tsProject())
//     .js.pipe(gulp.dest(paths.tmp));    
// });

// gulp.task('copy', ['html', 'css']);

// gulp.task('inject', ['copy'], function(){
//     var css = gulp.src(paths.tmpCSS);
//     var js = gulp.src(paths.tmpJS);
//     return gulp.src(paths.tmpIndex)
//         .pipe(inject(css, {relative: true}))
//         .pipe(inject(js, {relative, ture}))
//         .pipe(gulp.dest(paths.tmp));
// });

// gulp.task('serve', ['inject'], function(){
//     return gulp.src(paths.tmp)
//     .pipe(webserver({
//         port: 3000,
//         livereload: true
//     }));
// });

// gulp.task('watch', ['serve'], function(){
//     return gulp.watch(paths.src, ['inject']);
// });

// gulp.task('html:dist', function(){
//     return gulp.src(paths.srcHtml)
//     .pipe(htmlClean())
//     .pipe(gulp.dest(paths.dist));
// });

// gulp.task('css:dist', function(){   
//     return gulp.src(paths.srcCss)
//     .pipe(cssClean())
//     .pipe(gulp.dest(paths.dist));
// });

// gulp.task('js:dist', function(){
//     return tsProject.src()
//     .pipe(tsProject())    
//     .js
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest(paths.dist));
// });


// gulp.task('copy:dist', ['html:dist', 'css:dist', 'js:dist']);
// gulp.task('inject:dist', ['copy:dist'], function(){
//     var css = gulp.src(paths.distCSS);
//     var js = gulp.src(paths.distJS);
//     return gulp.src(paths.distIndex)
//         .pipe(inject(css, { relative: true }))
//         .pipe(inject(js, { relative: true }))
//         .pipe(gulp.dest(paths.dist));
// });

// gulp.task('clean', function(){
//     del(paths.tmp, paths.dist);
// });

// gulp.task('build', ['inject:dist']);

// gulp.task('default', ['watch']);

