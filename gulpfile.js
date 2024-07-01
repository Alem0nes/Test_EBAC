const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require ('gulp-sourcemaps');
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin');

function comprimeImagem(){
    return gulp.src('./source/photos/*jpeg')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagem'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

gulp.task('sass', compilaSass);
exports.sass = compilaSass;

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify().on('error', sass.logError))
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('./source/styles/main.scss',{ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js',{ignoreInitial:false}, gulp.series(comprimeJavaScript))
    gulp.watch('./source/photos/*jpeg',{ignoreInitial:false}, gulp.series(comprimeImagem))
}