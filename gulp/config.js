var publicAssets  = "./public/assets";
var sourceFiles   = "./gulp/assets";

module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    notify: false,
    port: process.env.PORT || 3000,
    server: {
      baseDir: "./"
    }
  },
  sass: {
    src: sourceFiles + "/stylesheets/**/*.scss",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: true,
      imagePath: '/assets/images'
    }
  }
}
